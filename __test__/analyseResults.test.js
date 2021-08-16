import { analysePolarity } from "../src/client/js/analyseResults";

describe("Testing analysis of sentiment analysis API results", () => {

    test("analysePolarity() exists", () => {
        expect(analysePolarity).toBeDefined();
    }),

    test("analysePolarity() without parameter", () => {
        expect(() => analysePolarity()).toThrow();
    })

});