import axios from 'axios';

import { MESSAGE_SUBMIT, contactResponse } from 'src/actions/contact';

const API_URL =
  'https://apiwp.yaelhue-creation.com/portfolio/backPortfolio/public/wp-json/contact-form-7/v1/contact-forms/5/feedback';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case MESSAGE_SUBMIT: {
      const { username, mail, message } = store.getState().contact;

      const data = new FormData();
      data.set('username', username);
      data.set('mail', mail);
      data.set('message', message);
      console.log(data);
      axios
        .post(`${API_URL}`, data, {
          headers: {
            'Content-type': 'multipart/form-data ',
          },
        })
        .then((response) => {
          store.dispatch(contactResponse(response));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default contactMiddleware;
