import { connect } from "react-redux";
import AllItems from "../components/AllItems";
import { addItem } from "../actions/mall";

const mapStateToProps = state => {
  return { repository: state.repository };
};

const mapDispatchToProps = dispatch => ({
  addItem: id => dispatch(addItem(id))
});

const ShowAllItems = connect(
  mapStateToProps,mapDispatchToProps
)(AllItems);
export default ShowAllItems;
