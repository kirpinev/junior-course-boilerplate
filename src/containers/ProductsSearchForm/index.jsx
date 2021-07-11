import { connect } from 'react-redux';
import { toInt } from 'csssr-school-utils';
import { ProductsSearchForm } from '../../components';

const mapStateToProps = ({ price: { min, max }, defaultMinPrice, defaultMaxPrice }) => ({
  min,
  max,
  defaultMinPrice,
  defaultMaxPrice,
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target: { name, value } }) => {
    if (name === 'min') {
      return dispatch({
        type: 'UPDATE_MIN',
        payload: toInt(value),
      });
    }

    if (name === 'max') {
      return dispatch({
        type: 'UPDATE_MAX',
        payload: toInt(value),
      });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSearchForm);
