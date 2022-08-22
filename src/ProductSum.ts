export function ProductSum(arrayItems: Array<any>, multiplier = 1): number {
    let sum = 0;
    for (const item of arrayItems) {
        if (typeof item === "object") {
            sum += ProductSum(item, multiplier + 1)
        } else {
            sum += item;
        }

    }
    return sum * multiplier;
}
