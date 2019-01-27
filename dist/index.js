"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var domElements_1 = __importDefault(require("./domElements"));
// console.log(`typeof domElements`, Object.values(domElements));
// const map = domElements.reduce((acc: any, dom) => (acc[dom] = dom), {});
var map = domElements_1.default.reduce(function (acc, dom) {
    // console.log(`dom`, dom);
    acc[dom] = dom;
    return acc;
}, {});
// // https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types
// // export type DOMType = { [K in domElements]: string };
// export type DOMType = { [K in domElements]: string };
// // export type DOMType = { [K in keyof domElements]: domElements[K] };
// export type DOMType = [...domElements];
function printDOMType(domType) {
    console.log("DOMType", domType);
}
printDOMType("xxx");
printDOMType("div");
