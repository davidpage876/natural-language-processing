import { handleSubmit, validateInput } from "../src/client/js/handleForm";

describe("Testing form submission input", () => {

    test("handleSubmit() exists", () => {
        expect(handleSubmit).toBeDefined();
    })

    // TODO: Use "JSDOM" to mock changes to DOM.

    // TODO: Use mock fetch to test async code?

    test("validateInput() with no parameters", () => {
        expect(validateInput()).toBeFalsy();
    })

    test("validateInput() with invalid input", () => {
        expect(validateInput('htps://test.com')).toBeFalsy();
        expect(validateInput('//test.com')).toBeFalsy();
        expect(validateInput('test.com')).toBeFalsy();
        expect(validateInput('https://test com')).toBeFalsy();
        expect(validateInput('hhttps://test.com')).toBeFalsy();
    })

    test("validateInput() with valid input", () => {
        expect(validateInput('https://test.com')).toBeTruthy();
        expect(validateInput('http://test.com')).toBeTruthy();
        expect(validateInput('http://www.test.com')).toBeTruthy();
    })

});