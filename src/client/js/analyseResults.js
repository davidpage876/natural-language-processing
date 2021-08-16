/**
 * Analyse overall polarity based on results returned by MeaningCloud Sentiment Analysis API.
 * @param {*} conceptList The sentiment concept list returned by the Sentiment Analysis API endpoint.
 * @returns {string} The overall polarity, either:
 * 'very positive', 'positive', 'neutral', 'negative', 'very negative' or 'none'.
 */
function analysePolarity(conceptList) {

    if (conceptList == null) {
        throw new Error('analysePolarity() requires a conceptList to analyse');
    }

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

    // Find weighted average of sentiment scores.
    const weightedAverage =
        (counts.positiveStrong * 2 +
            counts.positive * 1 +
            counts.negative * -1 +
            counts.negativeStrong * -2) / sum;

    // Return description based on weighted average.
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

export { analysePolarity }