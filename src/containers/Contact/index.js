import { connect } from 'react-redux';

import {
  postMessage,
  messageSubmit,
  contactResponse,
  resetFields,
} from 'src/actions/contact';
import Contact from 'src/components/Contact';

const mapStateToProps = (state) => ({
  mail: state.contact.mail,
  username: state.contact.username,
  message: state.contact.message,
  response: state.contact.response,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldRegister: (value, fieldName) => {
    dispatch(postMessage(value, fieldName));
  },
  handleMessage: () => {
    dispatch(messageSubmit());
  },
  contactResponse: (response) => {
    dispatch(contactResponse(response));
  },
  resetFields: () => {
    dispatch(resetFields());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
