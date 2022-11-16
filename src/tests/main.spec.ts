import { expect, test } from "vitest";

import { add } from "@/index/pathTest";
import { genNumber } from "@/index/genNumber";
import { customSortString } from '@/leetcode/20221113';
describe("main", () => {
    // test("happy path", () => {
    //     expect(add(1, 1)).toBe(2);
    // });
    // test('hello vitest', () => {
    //     expect(genNumber(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    //     // expect(genNumber(2, 20)).toMatchInlineSnapshot(`
    //     //   [
    //     //     2,
    //     //     3,
    //     //     4,
    //     //     5,
    //     //     6,
    //     //     7,
    //     //     8,
    //     //     9,
    //     //     10,
    //     //     11,
    //     //     12,
    //     //     13,
    //     //     14,
    //     //     15,
    //     //     16,
    //     //     17,
    //     //     18,
    //     //     19,
    //     //     20,
    //     //   ]
    //     // `)
    // });
    test('', () => {
        expect(customSortString("kqep", "pekeq")).toEqual("kqeep")
    })
});
