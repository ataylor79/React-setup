import { connect } from 'react-redux';

/*
Import actions and components
 */

/*
map props, if required
 */
const mapStateToProps = (state) => {
  return {}
}

/*
map actions to props
 */
const mapDispatchToProps = dispatch => ({
  onFunc: () => dispatch(func())
});

/*
connect props to component
 */
const containerName = connect(mapStateToProps, mapDispatchToProps)(/*component*/);

export default containerName;
