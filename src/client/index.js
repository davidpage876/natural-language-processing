console.log('entry point started');

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
