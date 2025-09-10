function identify<T>(value: T): T {
    return value;
}

const num = identify<number>(42);
const text = identify<string>('Hello, world!');

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray<number>([1, 2, 3, 4]);
numberArray.push(25);
// numberArray.push("text"); // This will cause a TypeScript error

let stringArray = getArray<string>(['Alice', 'Bob', 'Charlie']);
stringArray.push('David');
// stringArray.push(30); // This will cause a TypeScript error