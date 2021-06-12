import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contacts-operations";
// import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

interface UserItem {
  item: {
    id: string;
    name: string;
    number: string;
  };
}

const Contact = ({ item }: UserItem) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(removeContact(item.id));
  };

  return (
    <li className={styles.contactItem}>
      <span className={styles.contactItemName}>
        {item.name}: {item.number}
      </span>
      <Button
        type="button"
        onClick={onDelete}
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

// Contact.propTypes = {
//   item: PropTypes.object.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//   onDelete: (contactId) => dispatch(removeContact(contactId)),
// });

// export default connect(null, mapDispatchToProps)(Contact);

export default Contact;
