import { connect } from 'react-redux';
import { toInt } from 'csssr-school-utils';
import { DiscountForm } from '../../components';

const mapStateToProps = ({ discount }) => ({
  discount,
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target: { value } }) =>
    dispatch({
      type: 'UPDATE_DISCOUNT',
      payload: toInt(value),
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscountForm);
