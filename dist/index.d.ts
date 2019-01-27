declare type ValueOf<T> = T[keyof T];
declare const asLiterals: <T extends string>(arr: T[]) => T[];
declare const domElements: string[];
declare const arr: string[];
declare function strEnum<T extends string>(o: Array<T>): {
    [K in T]: K;
};
declare const map: {
    a: string;
    div: string;
};
declare type DOMType = keyof typeof map;
declare function printDOMType(domType: DOMType): void;
