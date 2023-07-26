import { getInputs, validateForm } from './helpers/formValidator';

import { emptyFieldErrors } from './messages/formMessages';

const init = (root) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputIds = ['email', 'password'];

    const inputs = getInputs(root, inputIds);

    const errorMessages = {
      emptyFieldErrors,
    };

    const result = validateForm(inputs, errorMessages);

    if (!result) return;
  };

  root.addEventListener('submit', handleSubmit);
};

init(document.querySelector('.login__form'));
