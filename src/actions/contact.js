export const POST_MESSAGE = 'POST_MESSAGE';
export const MESSAGE_SUBMIT = 'MESSAGE_SUBMIT';

export const postMessage = (newValue, name) => ({
  type: POST_MESSAGE,
  newValue,
  name,
});

export const messageSubmit = () => ({
  type: MESSAGE_SUBMIT,
});
