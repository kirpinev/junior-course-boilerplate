import { connect } from 'react-redux';
import { CategoryForm } from '../../components';

const mapStateToProps = state => ({
  categories: state.categories,
  selectedCategories: state.selectedCategories,
});

export default connect(mapStateToProps)(CategoryForm);
