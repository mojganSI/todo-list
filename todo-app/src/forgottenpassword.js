import { getInputs, showSuccessMessage, validateForm } from './helpers/formValidator';

import { emptyFieldErrors } from './messages/formMessages';

const init = (root) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputId = ['email'];

    const inputs = getInputs(root, inputId);

    const errorMessages = {
      emptyFieldErrors,
    };

    const result = validateForm(inputs, errorMessages);

    if (!result) return;

    showSuccessMessage(
      root,
      'Si cette adresse e-mail correspond à un compte existant, un mail y a été envoyé'
    );
  };

  root.addEventListener('submit', handleSubmit);
};

init(document.querySelector('.forgotten__password__form'));
