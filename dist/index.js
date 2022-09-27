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
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const errors_1 = require("./errors");
const functions_1 = require("./functions");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: "*",
}));
app.get("/country/all", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCountries = yield (0, functions_1.getAllCountries)();
        res.send(allCountries);
    }
    catch (error) {
        next(error);
    }
}));
app.get("/country/name/:name", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const country = yield (0, functions_1.getCountryByName)(name);
        res.send(country);
    }
    catch (error) {
        next(error);
    }
}));
app.get("/country/search", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
app.use(errors_1.handleHttpError);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
