export function sum (...numbers: number[]): number {
    let result = 0;
    numbers.forEach(n => result += n);
    return result;
}