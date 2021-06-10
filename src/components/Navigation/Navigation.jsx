import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useStore } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";


const Navigation = () => {
  const {getState} = useStore();
  const isAuthenticated = getIsAuthenticated(getState());
  
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Main
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

// Navigation.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
// };

// const MSTP = (state) => ({
//   isAuthenticated: isAuthenticated(state),
// });

// export default connect(MSTP)(Navigation);
export default Navigation;
