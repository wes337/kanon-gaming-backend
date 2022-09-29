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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errors_1 = require("./errors");
const functions_1 = require("./functions");
const countryRouter = express_1.default.Router();
countryRouter.get("/all", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCountries = yield (0, functions_1.getAllCountries)();
        res.send(allCountries);
    }
    catch (error) {
        next(error);
    }
}));
countryRouter.get("/name/:name", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const country = yield (0, functions_1.getCountryByName)(name);
        res.send(country);
    }
    catch (error) {
        next(error);
    }
}));
countryRouter.get("/search", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { q } = req.query;
        if (!q) {
            res.status(400).send();
            return;
        }
        const queries = Array.isArray(q) ? q : [q];
        const results = yield (0, functions_1.findCountries)(queries);
        res.send(results);
    }
    catch (error) {
        next(error);
    }
}));
countryRouter.use(errors_1.handleHttpError);
exports.default = countryRouter;
