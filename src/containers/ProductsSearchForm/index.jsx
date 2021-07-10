import { connect } from 'react-redux';
import { toInt } from 'csssr-school-utils';
import { ProductsSearchForm } from '../../components';

const mapStateToProps = state => ({
  min: state.price.min,
  max: state.price.max,
  defaultMinPrice: state.defaultMinPrice,
  defaultMaxPrice: state.defaultMaxPrice,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    if (e.target.name === 'min') {
      return dispatch({
        type: 'UPDATE_MIN',
        payload: toInt(e.target.value),
      });
    }

    if (e.target.name === 'max') {
      return dispatch({
        type: 'UPDATE_MAX',
        payload: toInt(e.target.value),
      });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSearchForm);
