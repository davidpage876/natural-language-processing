console.log('entry point started');

// Dependencies needed for development server.
import "core-js/stable";
import "regenerator-runtime/runtime";

// Scripts.
import { handleSubmit } from './js/handleForm.js';

// Styles.
import './styles/main.scss';

// Listen for form submission events.
document.getElementById('input-form').addEventListener('submit', handleSubmit);