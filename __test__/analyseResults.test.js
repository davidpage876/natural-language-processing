import { analysePolarity } from "../src/client/js/analyseResults";

describe("Testing analysis of sentiment analysis API results", () => {

    test("analysePolarity() exists", () => {
        expect(analysePolarity).toBeDefined();
    }),

    test("analysePolarity() without parameter", () => {
        expect(() => analysePolarity()).toThrow();
    })

    test("analysePolarity() with one concept", () => {
        expect(analysePolarity([ { score_tag: 'P+'} ])).toBe('very positive');
        expect(analysePolarity([ { score_tag: 'P'} ])).toBe('positive');
        expect(analysePolarity([ { score_tag: 'NEU'} ])).toBe('neutral');
        expect(analysePolarity([ { score_tag: 'N'} ])).toBe('negative');
        expect(analysePolarity([ { score_tag: 'N+'} ])).toBe('very negative');
        expect(analysePolarity([ { score_tag: 'NONE'} ])).toBe('none');
    })

});