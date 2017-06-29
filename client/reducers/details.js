const Details = (state={}, action) => {
  switch(action.type) {

    case 'LOAD_DETAILS_SUCCESS':
      return action.data

    case 'ADD_DETAILS_SUCCESS':
      const { detail , endDate } = action.data;
      return Object.assign({}, state, { details: { detail, endDate }});

    default:
      return state;
  }

};

export default Details;
