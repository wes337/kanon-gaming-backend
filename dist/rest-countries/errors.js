"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttpError = void 0;
const axios_1 = __importDefault(require("axios"));
const handleHttpError = (error, req, res, next) => {
    if (axios_1.default.isAxiosError(error)) {
        const { status, statusText } = error.response || error.request;
        res.status(status).send(statusText);
    }
    else {
        next(error);
    }
};
exports.handleHttpError = handleHttpError;
