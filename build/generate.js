"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var svgdom_1 = require("svgdom");
var svg_js_1 = __importDefault(require("svg.js"));
var fs_1 = __importDefault(require("fs"));
var mac_1 = require("./configs/mac");
var window = (0, svgdom_1.createSVGWindow)();
var SVG = (0, svg_js_1.default)(window);
var document = window.document;
// create svg.js instance
var canvas = new SVG(document.documentElement).size(100, 100);
// use svg.js as normal
canvas.rect(100, 100).fill(mac_1.macConfig.backgroundColor).move(0, 0).radius(10);
fs_1.default.writeFile('test.svg', canvas.svg(), function (e) {
    console.log(e);
});
