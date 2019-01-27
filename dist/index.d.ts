declare type ValueOf<T> = T[keyof T];
declare const asLiterals: <T extends string>(arr: T[]) => T[];
declare const domElements: string[];
declare const arr: string[];
declare let map: {
    [key: string]: string;
};
declare type DOMType = keyof typeof map;
declare function printDOMType(domType: DOMType): void;
