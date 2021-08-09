import { analysePolarity } from "../src/client/js/analyseResults";

describe("Testing analysis of sentiment analysis API results", () => {
    test("Testing the analysePolarity() function", () => {
        expect(analysePolarity).toBeDefined();
    })
});