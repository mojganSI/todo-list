import { getInputs, showSuccessMessage, validateForm } from './helpers/formValidator';

import { emptyFieldErrors, inequalityError } from './messages/formMessages';

const init = (root) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputIds = ['password', 'confirm__password'];

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

    showSuccessMessage(
      root,
      'Le mot de passe a été modifié avec succès. Cliquez ici pour vous connecter'
    );
  };

  root.addEventListener('submit', handleSubmit);
};

init(document.querySelector('.update__password__form'));
