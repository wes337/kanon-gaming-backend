"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const functions_1 = require("./functions");
const slotMachineRouter = express_1.default.Router();
slotMachineRouter.get("/spin", (req, res) => {
    const result = (0, functions_1.spin)();
    res.send(result);
});
exports.default = slotMachineRouter;
