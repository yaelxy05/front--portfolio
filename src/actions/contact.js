export const POST_MESSAGE = 'POST_MESSAGE';
export const MESSAGE_SUBMIT = 'MESSAGE_SUBMIT';
export const CONTACT_RESPONSE = 'CONTACT_RESPONSE';

export const postMessage = (newValue, name) => ({
  type: POST_MESSAGE,
  newValue,
  name,
});

export const messageSubmit = () => ({
  type: MESSAGE_SUBMIT,
});

export const contactResponse = (response) => ({
  type: CONTACT_RESPONSE,
  response,
});
