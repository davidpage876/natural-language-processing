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

});