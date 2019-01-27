// import domElements from "./domElements";
// console.log(`typeof domElements`, Object.values(domElements));

// // const map = domElements.reduce((acc: any, dom) => (acc[dom] = dom), {});
// const map = domElements.reduce((acc: any, dom) => {
//   // console.log(`dom`, dom);
//   acc[dom] = dom;
//   return acc;
// }, {});
// // console.log(`map`, map);

type ValueOf<T> = T[keyof T];
// type DOMType = ValueOf<typeof map>;

// // https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types
// // export type DOMType = { [K in domElements]: string };
// export type DOMType = { [K in domElements]: string };
// // export type DOMType = { [K in keyof domElements]: domElements[K] };
// export type DOMType = [...domElements];

// // https://stackoverflow.com/a/52174119/4035
// // prettier-ignore
// // function asLiterals<T extends string>(arr: T[]): T[] { return arr; }
// // const s = asLiterals(domElements);
// // type DOMType = { [K in (typeof domElements)[number]]: string };
// prettier-ignore
const  asLiterals = <T extends string>(arr: T[]) => arr;
// // const s = asLiterals(["foo", "rolo", "zoombaz"]);
// // type DOMType = { [K in (typeof s)[number]]: string };

// let map = domElements.reduce((acc: any, dom) => (acc[dom] = dom), {});
// const doms = asLiterals(domElements);
// // type DOMType = { [K in (typeof doms)[number]]: string };
// type DOMType<K extends keyof map> = domElements[K];

// https://stackoverflow.com/a/54071129/4035
// prettier-ignore
// function tuple<T extends string[]>(...o: T) { return o; }
// const arr = tuple("foo", "bar", "loo");
// const arr = asLiterals(domElements);
const domElements = ["xxx", "div", "a", "abc"];
// const arr = asLiterals(["xxx", "div", "a", "abc"]);
const arr = asLiterals(domElements);

// const arr = asLiterals([...Object.values(domElements)]);
// console.log(
//   `[...Object.values(domElements)], typeof arr`,
//   [...Object.values(domElements)],
//   typeof arr
// );
// interface Map {
//   [key: string]: typeof arr;
// }

// // https://basarat.gitbooks.io/typescript/docs/types/literal-types.html
// function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
//   return o.reduce((res, key) => {
//     res[key] = key;
//     return res;
//   }, Object.create(null));
// }

// const map = strEnum(domElements);

// type DOMType = typeof Map;
// type DOMType = typeof arr[number];
// type DOMType = typeof domElements[number];
// const map: typeof map0 = domElements.reduce(
//   (acc, dom) => {
//     acc[dom] = dom;
//     return acc;
//   },
//   {} as { [key: string]: string }
//   );

// const map: {[key: string extends keyof typeof domElements]} = { a: "a", div: "div" };
// const map = { a: "a", div: "div" };
// console.log(`map`, map, Object.entries(map));
// type DOMType = keyof typeof map;

// https://stackoverflow.com/a/54061487/4035
type DOMType = typeof arr[number];

// https://basarat.gitbooks.io/typescript/docs/types/moving-types.html
// const colors = {
//   red: 'red',
//   blue: 'blue'
// }
// type Colors = keyof typeof colors;
// let color: Colors; // same as let color: "red" | "blue"

function printDOMType(domType: DOMType): void {
  console.log(`DOMType`, domType);
}

printDOMType("abcdefg");
printDOMType("xxx");
printDOMType("div");
printDOMType("a");
printDOMType("foo");
