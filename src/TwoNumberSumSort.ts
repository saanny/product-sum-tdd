export function TwoNumberSumSort(arrayItems: Array<any>, targetNumber: number): Array<number> {
    arrayItems.sort((a, b) => a - b)

    let left = 0;
    let right = arrayItems.length - 1;

    while (left < right) {
        const currentSum = arrayItems[left] + arrayItems[right];
        if (currentSum === targetNumber) {
            return [arrayItems[left], arrayItems[right]];
        }
        else if (currentSum < targetNumber) {
            left++
        }
        else if (currentSum > targetNumber) {
            right--;
        }


    }

    return [];
}

export function TwoNumberSumSortArkadiSolutionAndFatima(arrayItems: Array<any>, targetNumber: number): Array<number> {
    arrayItems.sort((a, b) => a - b)

    let left = 0;
    let right = arrayItems.length - 1;
    let result: Array<number> = [];

    while ((arrayItems[left] + arrayItems[right]) !== targetNumber) {

        const currentSum = arrayItems[left] + arrayItems[right];


        if (currentSum < targetNumber) {

            left++

        }

        else if (currentSum > targetNumber) {
            right--;
        }

        result = [arrayItems[left], arrayItems[right]];

    }

    return result;
}
