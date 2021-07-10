import { connect } from 'react-redux';
import { toInt } from 'csssr-school-utils';
import { DiscountForm } from '../../components';

const mapStateToProps = state => ({
  discount: state.discount,
});

const mapDispatchToProps = dispatch => ({
  onChange: e =>
    dispatch({
      type: 'UPDATE_DISCOUNT',
      payload: toInt(e.target.value),
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscountForm);
