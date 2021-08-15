console.log('entry point started');

// Dependencies needed for development server.
import "core-js/stable";
import "regenerator-runtime/runtime";

// Scripts.
import { handleSubmit } from './js/handleForm.js';

// Styles.
import './styles/normalize.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/result.scss';

// Listen for form submission event.
document.getElementById('input-form').addEventListener('submit', handleSubmit);

// Run service worker in production mode when supported.
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant.
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

