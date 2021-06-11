import { connect } from "react-redux";
import { actions } from "../../redux/contacts/contacts-actions";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

import PropTypes from "prop-types";

const Filter = (props) => {
  const { value, changeFilter } = props;
  return (
    <Container component="main" maxWidth="xs">
      <TextField
        onInput={(e) => changeFilter(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        type="text"
        id="filter"
        label="Find contacts by name or number"
        name="filter"
        value={value}
      />
    </Container>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filter }) => ({ value: filter });

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (value) => dispatch(actions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
