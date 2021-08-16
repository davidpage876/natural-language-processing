import { analysePolarity } from "../src/client/js/analyseResults";

describe("Testing analysis of sentiment analysis API results", () => {

    test("analysePolarity() exists", () => {
        expect(analysePolarity).toBeDefined();
    }),

    test("analysePolarity() without parameter", () => {
        expect(() => analysePolarity()).toThrow();
    }),

    test("analysePolarity() with one concept", () => {
        expect(analysePolarity([ { score_tag: 'P+'} ])).toBe('very positive');
        expect(analysePolarity([ { score_tag: 'P'} ])).toBe('positive');
        expect(analysePolarity([ { score_tag: 'NEU'} ])).toBe('neutral');
        expect(analysePolarity([ { score_tag: 'N'} ])).toBe('negative');
        expect(analysePolarity([ { score_tag: 'N+'} ])).toBe('very negative');
        expect(analysePolarity([ { score_tag: 'NONE'} ])).toBe('none');
    }),

    test("analysePolarity() with two concepts", () => {
        expect(analysePolarity([ { score_tag: 'P+'}, { score_tag: 'N+'} ])).toBe('neutral');
        expect(analysePolarity([ { score_tag: 'P'}, { score_tag: 'N'} ])).toBe('neutral');

        expect(analysePolarity([ { score_tag: 'P+'}, { score_tag: 'N'} ])).toBe('positive');
        expect(analysePolarity([ { score_tag: 'P'}, { score_tag: 'N+'} ])).toBe('negative');

        expect(analysePolarity([ { score_tag: 'P+'}, { score_tag: 'P'} ])).toBe('very positive');
        expect(analysePolarity([ { score_tag: 'N+'}, { score_tag: 'N'} ])).toBe('very negative');

        expect(analysePolarity([ { score_tag: 'P+'}, { score_tag: 'NEU'} ])).toBe('positive');
        expect(analysePolarity([ { score_tag: 'P'}, { score_tag: 'NEU'} ])).toBe('positive');
        expect(analysePolarity([ { score_tag: 'NEU'}, { score_tag: 'NEU'} ])).toBe('neutral');
        expect(analysePolarity([ { score_tag: 'N'}, { score_tag: 'NEU'} ])).toBe('negative');
        expect(analysePolarity([ { score_tag: 'N+'}, { score_tag: 'NEU'} ])).toBe('negative');

        expect(analysePolarity([ { score_tag: 'P+'}, { score_tag: 'NONE'} ])).toBe('very positive');
        expect(analysePolarity([ { score_tag: 'P'}, { score_tag: 'NONE'} ])).toBe('positive');
        expect(analysePolarity([ { score_tag: 'NEU'}, { score_tag: 'NONE'} ])).toBe('neutral');
        expect(analysePolarity([ { score_tag: 'N'}, { score_tag: 'NONE'} ])).toBe('negative');
        expect(analysePolarity([ { score_tag: 'N+'}, { score_tag: 'NONE'} ])).toBe('very negative');
    }),

    test("analysePolarity() with multiple concepts", () => {
        const conceptList = [
            { score_tag: 'P' },
            { score_tag: 'N' },
            { score_tag: 'P+' }
        ];
        expect(analysePolarity(conceptList)).toBe('positive');
    })

});