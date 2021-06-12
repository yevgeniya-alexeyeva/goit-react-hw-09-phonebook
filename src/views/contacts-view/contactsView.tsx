import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/contacts-operations";
import ContactsForm from "../../components/ContactsForm";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import Loader from "react-loader-spinner";
import { getIsLoading } from "../../redux/contacts/contacts-selectors";
// import PropTypes from "prop-types";
import { title } from "./contacts-view.module.css";

const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsForm />
      <h2 className={title}>Contacts</h2>
      <Filter />
      {isLoading ? (
        <Loader
          type="ThreeDots"
          color="#fc4445"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : (
        <ContactList />
      )}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   isLoading: getIsLoading(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   getContacts: () => dispatch(getContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default Contacts;
