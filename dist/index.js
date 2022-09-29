"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const rest_countries_1 = __importDefault(require("./rest-countries"));
const slot_machine_1 = __importDefault(require("./slot-machine"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use("/country", rest_countries_1.default);
app.use("/slot-machine", slot_machine_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
