import domElements from "./domElements";
// console.log(`typeof domElements`, Object.values(domElements));

// const map = domElements.reduce((acc: any, dom) => (acc[dom] = dom), {});
const map = domElements.reduce((acc: any, dom) => {
  // console.log(`dom`, dom);
  acc[dom] = dom;
  return acc;
}, {});
// console.log(`map`, map);

type ValueOf<T> = T[keyof T];
type DOMType = ValueOf<typeof map>;

// // https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types
// // export type DOMType = { [K in domElements]: string };
// export type DOMType = { [K in domElements]: string };
// // export type DOMType = { [K in keyof domElements]: domElements[K] };
// export type DOMType = [...domElements];

function printDOMType(domType: DOMType): void {
  console.log(`DOMType`, domType);
}

printDOMType("xxx");
printDOMType("div");
