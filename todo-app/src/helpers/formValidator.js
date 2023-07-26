export const getInputs = (form, ids) => {
  const inputs = {};
  ids.forEach((id) => (inputs[id] = form.querySelector(`#${id}`)));
  return inputs;
};

export const showFieldError = (field, errorMessage) => {
  const errorContainer = field.nextElementSibling;
  errorContainer.classList.remove('hidden');
  errorContainer.innerHTML = errorMessage;
};

export const hideFieldError = (field) => {
  const errorContainer = field.nextElementSibling;
  errorContainer.classList.add('hidden');
};

export const showSuccessMessage = (form, message) => {
  const messageContainer = form.querySelector('.valid__feedback');
  messageContainer.classList.remove('hidden');
  messageContainer.innerHTML = message;
};

export const checkEmptyFields = (inputs, emptyFieldErrors) => {
  inputs.forEach((input) => {
    input.value ? hideFieldError(input) : showFieldError(input, emptyFieldErrors[input.id]);
  });
  return inputs.every((input) => input.value !== '');
};

export const checkPasswordsEquality = (password, confirmPassword, inequalityError) => {
  const result = password.value === confirmPassword.value;
  result ? null : showFieldError(confirmPassword, inequalityError);

  return result;
};

export const validateForm = (inputs, errorMessages, options) => {
  
  const result = checkEmptyFields(Object.values(inputs), errorMessages.emptyFieldErrors);
  if (!result) return false;

  if (options?.checkPasswordsEquality) {
    const result = checkPasswordsEquality(
      inputs.password,
      inputs.confirm__password,
      errorMessages.inequalityError
    );
    if (!result) return false;
  }

  return true;
};
