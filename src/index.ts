import domElements from "./domElements";
// console.log(`typeof domElements`, Object.values(domElements));

// // const map = domElements.reduce((acc: any, dom) => (acc[dom] = dom), {});
// const map = domElements.reduce((acc: any, dom) => {
//   // console.log(`dom`, dom);
//   acc[dom] = dom;
//   return acc;
// }, {});
// // console.log(`map`, map);

// type ValueOf<T extends keyof map> = T[keyof T];
// type DOMType = ValueOf<typeof map>;

// // https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types
// // export type DOMType = { [K in domElements]: string };
// export type DOMType = { [K in domElements]: string };
// // export type DOMType = { [K in keyof domElements]: domElements[K] };
// export type DOMType = [...domElements];

// https://stackoverflow.com/a/52174119/4035
// prettier-ignore
// function asLiterals<T extends string>(arr: T[]): T[] { return arr; }
// const s = asLiterals(domElements);
// type DOMType = { [K in (typeof domElements)[number]]: string };
// prettier-ignore
// function asLiterals<T extends string>(arr: T[]): T[] { return arr; }
// const s = asLiterals(["foo", "rolo", "zoombaz"]);
// type DOMType = { [K in (typeof s)[number]]: string };

let doms = domElements.reduce((acc: any, dom) => (acc[dom] = dom), {});
type DOMType = { [K in (typeof doms)[number]]: string };

function printDOMType(domType: DOMType): void {
  console.log(`DOMType`, domType);
}

printDOMType("xxx");
printDOMType("div");
printDOMType("a");
