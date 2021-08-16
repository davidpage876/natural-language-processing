console.log('entry point started');

// Dependencies needed for development server.
import "core-js/stable";
import "regenerator-runtime/runtime";

// Scripts.
import { handleSubmit } from './js/handleForm.js';

// Styles.
import './styles/main.scss';

// Listen for form submission events.
document.getElementById('input-form').addEventListener('submit', async (event) => {
    const errorMsg = document.getElementById('error');
    try {
        await handleSubmit(event);
        errorMsg.innerText = '';
    } catch (error) {
        console.log(error);
        errorMsg.innerText = error;
    }
});

// Run service worker in production mode when supported.
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant.
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

