import { POST_MESSAGE, CONTACT_RESPONSE } from 'src/actions/contact';

const initialState = {
  username: '',
  mail: '',
  message: '',
  response: null,
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case POST_MESSAGE:
      return {
        ...state,
        username: action.name === 'username' ? action.newValue : state.username,
        mail: action.name === 'mail' ? action.newValue : state.mail,
        message: action.name === 'message' ? action.newValue : state.message,
      };
    case CONTACT_RESPONSE:
      return {
        ...state,
        response: action.response,
      };
    default:
      return state;
  }
}

export default contactReducer;
