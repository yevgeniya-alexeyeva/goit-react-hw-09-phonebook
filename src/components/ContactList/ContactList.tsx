import { useSelector } from "react-redux";
import Contact from "../Contact";
// import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";

const ContactList = ({ onDelete }) => {
  const contactList = useSelector(getFilteredContacts);

  console.log(contactList);
  return (
    <ul className={styles.itemList}>
      {contactList.map((item: {}) => {
        return <Contact item={item} key={item.id} onDelete={onDelete} />;
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   contactList: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

const mapStateToProps = (state) => {
  return {
    contactList: getFilteredContacts(state),
  };
};

export default connect(mapStateToProps)(ContactList);
