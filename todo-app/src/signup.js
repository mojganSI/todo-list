import {
  getInputs,
  validateForm,
  showFieldError,
} from './helpers/formValidator';

import { emptyFieldErrors, inequalityError } from './messages/formMessages';

const init = (root) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputIds = ['email', 'password', 'confirm__password'];

    const inputs = getInputs(root, inputIds);

    const errorMessages = {
      emptyFieldErrors,
      inequalityError,
    };

    const options = {
      checkPasswordsEquality: true,
    };

    const result = validateForm(inputs, errorMessages, options);

    if (!result) return;

    // This error comes from the server side
    showFieldError(inputs.email, 'Cette adresse e-mail est déjà utilisée');
  };

  root.addEventListener('submit', handleSubmit);
};

init(document.querySelector('.sign__up__form'));
