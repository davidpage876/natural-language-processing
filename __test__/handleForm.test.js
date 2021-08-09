import { handleSubmit } from "../src/client/js/handleForm";

describe("Testing form submission input", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
});