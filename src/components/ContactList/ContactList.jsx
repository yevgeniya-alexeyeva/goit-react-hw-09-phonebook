import { useSelector } from "react-redux";
import Contact from "../Contact";
import { itemList } from "./ContactList.module.css";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  const contactList = useSelector(getFilteredContacts);

  return (
    <ul className={itemList}>
      {contactList.map((item) => {
        return <Contact item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default ContactList;
