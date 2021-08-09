import { postData } from "../src/client/js/request";

describe("Testing POST requests", () => {
    test("Testing the postData() function", () => {
        expect(postData).toBeDefined();
    })
});