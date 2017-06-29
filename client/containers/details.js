import { connect } from 'react-redux';
import { addDetails, loadDetails } from '../actions';
import DetailsComp from '../components/details';

const mapStateToProps = (state, props) => {
  return {
    details: state.details
  }
}

const mapDispatchToProps = dispatch => ({
  onAddDetails: detailsObj => dispatch(addDetails(detailsObj)),
  onLoadDetails: id => dispatch(loadDetails(id))
});

const Details = connect(mapStateToProps, mapDispatchToProps)(DetailsComp);

export default Details;
