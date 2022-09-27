"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const errors_1 = require("./errors");
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};
describe("handleHttpError", () => {
    const req = {};
    const res = mockResponse();
    const next = jest.fn();
    it("should respond with the correct status and text", () => __awaiter(void 0, void 0, void 0, function* () {
        const error = new axios_1.AxiosError("message", "code", {}, {}, {
            status: 404,
            statusText: "Test status text",
            data: {},
            headers: {},
            config: {},
        });
        yield (0, errors_1.handleHttpError)(error, req, res, next);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith("Test status text");
    }));
    it("should pass other errors to next", () => __awaiter(void 0, void 0, void 0, function* () {
        const error = new Error("Test error");
        yield (0, errors_1.handleHttpError)(error, req, res, next);
        expect(next).toHaveBeenCalledWith(error);
    }));
});
