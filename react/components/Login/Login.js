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
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
