import { ProductSum } from './ProductSum';

// [5, 2, [7, -1], 3, [6, [-13, 8], 4]] tobe => 12

describe('Product Sum Problem', () => {
    // given when then 
    // arrang act assert 

    // test('Product Sum', () => {
    //     expect(ProductSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])).toBe(12);
    // });

    test('it shoud return 7', () => {
        // given
        const numbers: any = [5, 2];

        // when
        const action_trigger_product_sum = ProductSum(numbers);

        // then
        expect(action_trigger_product_sum).toBe(7);

    });
    test('it shoud return 19', () => {
        // given
        const numbers: any = [5, 2, [7, -1]];

        // when
        const action_trigger_product_sum = ProductSum(numbers);

        // then
        expect(action_trigger_product_sum).toBe(19);

    });
    test('it shoud return 22', () => {
        // given
        const numbers: any = [5, 2, [7, -1], 3];

        // when
        const action_trigger_product_sum = ProductSum(numbers);

        // then
        expect(action_trigger_product_sum).toBe(22);

    });
    test('it shoud return 12', () => {
        // given
        const numbers: any = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

        // when
        const action_trigger_product_sum = ProductSum(numbers);

        // then
        expect(action_trigger_product_sum).toBe(12);

    });

    test('it shoud return 84', () => {
        // given
        const numbers: any = [5, 2, [7, -1], 3, [6, [-13, 8, [5, -2]], 4]];

        // when
        const action_trigger_product_sum = ProductSum(numbers);

        // then
        expect(action_trigger_product_sum).toBe(84);

    });
});