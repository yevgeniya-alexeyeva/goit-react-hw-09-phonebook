import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contacts-operations";
import PropTypes from "prop-types";
import { contactItem, contactItemName } from "./Contact.module.css";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li className={contactItem}>
      <span className={contactItemName}>
        {item.name}: {item.number}
      </span>
      <Button
        type="button"
        onClick={() => dispatch(removeContact(item.id))}
        variant="contained"
        color="secondary"
        size="small"
        endIcon={<DeleteOutlineIcon />}
      >
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Contact;
