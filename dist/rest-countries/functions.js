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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCountries = exports.getCountryByName = exports.getAllCountries = void 0;
const axios_1 = __importDefault(require("axios"));
const REST_API_URL = "https://restcountries.com/v3.1";
const getAllCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${REST_API_URL}/all`;
    const results = yield axios_1.default.get(url);
    const allCountries = results.data;
    return allCountries;
});
exports.getAllCountries = getAllCountries;
const getCountryByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${REST_API_URL}/name/${name}?fullText=true`;
    const results = yield axios_1.default.get(url);
    const country = results.data[0];
    return country;
});
exports.getCountryByName = getCountryByName;
const findCountries = (queries) => { var queries_1, queries_1_1; return __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    const countries = [];
    try {
        for (queries_1 = __asyncValues(queries); queries_1_1 = yield queries_1.next(), !queries_1_1.done;) {
            const query = queries_1_1.value;
            const url = `${REST_API_URL}/name/${query}`;
            const results = yield axios_1.default.get(url);
            const foundCountries = results.data;
            countries.push(...foundCountries);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (queries_1_1 && !queries_1_1.done && (_a = queries_1.return)) yield _a.call(queries_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return countries;
}); };
exports.findCountries = findCountries;
