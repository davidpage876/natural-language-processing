import { postData } from "../src/client/js/request";

describe("Testing POST requests", () => {
    test("postData() exists", () => {
        expect(postData).toBeDefined();
    })

    // TODO: Use mock fetch to test async code?

});