import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ContactPhoneOutlinedIcon from "@material-ui/icons/ContactPhoneOutlined";
import useStyles from "../useStyles";
import { info, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";

defaultModules.set(PNotifyMobile, {});

const ContactsForm = () => {
  const [contactData, setContactData] = useState({ name: "", number: "" });

  const getContactData = (e) =>
    setContactData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);

  const saveNewContact = (e) => {
    const { name, number } = contactData;
    e.preventDefault();
    contacts.some((item) => item.name === name)
      ? info({
          text: `${name} is already in contacts`,
          delay: 2000,
        })
      : dispatch(addContact(name, number));

    e.currentTarget.reset();

    setContactData({ name: "", number: "" });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ContactPhoneOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add new contact
        </Typography>
        <form className={classes.form} onSubmit={saveNewContact}>
          <TextField
            onInput={getContactData}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            id="name"
            label="Name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            autoFocus
          />
          <TextField
            onInput={getContactData}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="tel"
            id="number"
            label="Number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Add contact
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactsForm;
