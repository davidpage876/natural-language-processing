import { postData } from './request.js';

/**
 * Handles the submit event on the input form.
 * Performs an NLP request with the URL provided by user.
 * @param {Event} event Submit event data.
 */
function handleSubmit(event) {
    event.preventDefault();

    // Get URL provided by user.
    const url = document.getElementById('url').value;
    console.log(`Form submitted with url: ${url}`);

    // Make NLP request.
    postData('/nlp', { url })
    .then((result) => {

        console.log(result);

        // Display output.

    });
}

export { handleSubmit }