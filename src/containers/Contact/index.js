import { connect } from 'react-redux';

import { postMessage, messageSubmit } from 'src/actions/contact';
import Contact from 'src/components/Contact';

const mapStateToProps = (state) => ({
  mail: state.contact.mail,
  username: state.contact.username,
  message: state.contact.message,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldRegister: (value, fieldName) => {
    dispatch(postMessage(value, fieldName));
  },
  handleMessage: () => {
    dispatch(messageSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
