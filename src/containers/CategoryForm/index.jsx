import { connect } from 'react-redux';
import { CategoryForm } from '../../components';

const mapStateToProps = ({ categories, selectedCategories }) => ({
  categories,
  selectedCategories,
});

export default connect(mapStateToProps)(CategoryForm);
