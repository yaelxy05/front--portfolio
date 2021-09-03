import axios from 'axios';

import { MESSAGE_SUBMIT } from 'src/actions/contact';

const API_URL = 'http://localhost/portfolio/back/public/wp-json/wp/v2/posts/';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case MESSAGE_SUBMIT: {
      const { name, mail, message } = store.getState().contact;
      const newMessage = {
        name,
        mail,
        message,
      };

      axios
        .post(`${API_URL}`, newMessage)
        .then((response) => {
          console.log(response);
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
