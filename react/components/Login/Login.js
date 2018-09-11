import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions';
import LoginComponent from './LoginComponent';

// redux boilerplate
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  const boundActions = bindActionCreators(actions, dispatch);
  return {
    login: boundActions.getOAuth,
    signUp: (name, pass) => console.log(name, pass), // TODO hook up signup
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
