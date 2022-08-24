import { TwoNumberSumSort } from './TwoNumberSumSort';

describe('Two Number Sum Problem', () => {
    // [-4,-1,1,3,5,6,8,11] => 10 => [-1,11]

    test("it shoud return [5,8]", () => {
        // given => act
        const numbers: Array<number> = [-4, -1, 1, 3, 5, 6, 8, 11];

        // when => arrange
        const action_trigger_two_number_sum = TwoNumberSumSort(numbers, 13);

        // then => assert
        expect(action_trigger_two_number_sum).toEqual([5, 8]);

    })

    test("it shoud return [-1,11]", () => {
        // given => act
        const numbers: Array<number> = [-4, -1, 1, 3, 5, 6, 8, 11];

        // when => arrange
        const action_trigger_two_number_sum = TwoNumberSumSort(numbers, 10);

        // then => assert
        expect(action_trigger_two_number_sum).toEqual([-1, 11]);

    })

});