import styles from "./HomeView.module.css";
import { useSelector } from "react-redux";
import { getIsAuthenticated, getName } from "../../redux/auth/auth-selectors";
import { Link } from "react-router-dom";

const HomeView = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const name = useSelector(getName);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Your Phonebook</h1>
      {isAuthenticated ? (
        <p className={styles.greeting}>Welcome, {name}!</p>
      ) : (
        <p className={styles.greeting}>
          <span>Please, </span>
          <Link to="/login">login</Link>
          <span> to use your personal contacts.</span>
        </p>
      )}
    </div>
  );
};

export default HomeView;
