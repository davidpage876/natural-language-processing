import { postData } from './request.js';

/**
 * Handles the submit event on the input form.
 * Performs an API request with the URL provided by user.
 * @param {Event} event Submit event data.
 */
async function handleSubmit(event) {
    event.preventDefault();

    // Get URL provided by user.
    const url = document.getElementById('url').value;
    console.log(`Form submitted with url: ${url}`);

    // Make API request.
    const result = await postData('/nlp', { url });
    console.log(result);

    // Display output.
}

export { handleSubmit }