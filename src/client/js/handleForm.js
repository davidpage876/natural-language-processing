import { postData } from './request.js';

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

    /**
     * Analyse overall polarity based on results returned by API.
     * @param {*} conceptList The sentiment concept list returned by the API.
     * @returns {string} The overall polarity, either:
     * 'very positive', 'positive', 'neutral', 'negative', 'very negative' or 'none'.
     */
    function analysePolarity(conceptList) {

        // Count sentiment scores.
        const counts = {
            positiveStrong: 0,
            positive: 0,
            neutral: 0,
            negative: 0,
            negativeStrong: 0,
        }
        for (const concept of conceptList) {
            switch (concept.score_tag) {
                case 'P+':
                    counts.positiveStrong++; break;
                case 'P':
                    counts.positive++; break;
                case 'NEU':
                    counts.neutral++; break;
                case 'N':
                    counts.negative++; break;
                case 'N+':
                    counts.negativeStrong++; break;
                case 'NONE':
                    break;
            };
        }

        console.log(counts);

        // Find total sentiment score.
        const sum =
            counts.positiveStrong +
            counts.positive +
            counts.neutral +
            counts.negative +
            counts.negativeStrong;
        if (sum === 0) {
            return 'none';
        }

        console.log(sum);

        // Find weighted average of sentiment scores.
        const weightedAverage =
            (counts.positiveStrong * 2 +
             counts.positive * 1 +
             counts.negative * -1 +
             counts.negativeStrong * -2) / sum;

        console.log(weightedAverage);

        console.log(Math.round(weightedAverage));

        switch (Math.round(weightedAverage)) {
            case 2:
                return 'very positive';
            case 1:
                return 'positive';
            case 0:
                return 'neutral';
            case -1:
                return 'negative';
            case -2:
                return 'very negative';
            default:
                return 'none';
        }
    }

    // Display output.
    const resultsSection = document.getElementById('results-section');
    resultsSection.classList.add('has-result');
    const resultsContainer = document.getElementById('results');
    const polarity = analysePolarity(result.sentimented_concept_list).toUpperCase();
    const agreement = result.agreement;
    const subjectivity = result.subjectivity;
    const irony = result.irony;
    const confidence = result.confidence;
    resultsContainer.innerHTML =
    `<p>Overall polarity: ${polarity}</p>
     <p>Agreement: ${agreement}</p>
     <p>Subjectivity: ${subjectivity}</p>
     <p>Irony: ${irony}</p>
     <p>Confidence: ${confidence}%</p>`;
}

export { handleSubmit }