import { postData } from './request.js';
import { analysePolarity } from './analyseResults.js';

/**
 * Handles the submit event on the input form.
 * Performs an API request with the URL provided by user,
 * then displays the results on the page.
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

    // Analyse result.
    const polarity = analysePolarity(result.sentimented_concept_list);

    // Display output.
    const resultsSection = document.getElementById('results-section');
    resultsSection.classList.add('has-result');
    const resultsContainer = document.getElementById('results');
    const agreement = result.agreement;
    const subjectivity = result.subjectivity;
    const irony = result.irony;
    const confidence = result.confidence;
    resultsContainer.innerHTML =
    `<p>Overall polarity: ${polarity.toUpperCase()}</p>
     <p>Agreement: ${agreement}</p>
     <p>Subjectivity: ${subjectivity}</p>
     <p>Irony: ${irony}</p>
     <p>Confidence: ${confidence}%</p>`;
}

export { handleSubmit }