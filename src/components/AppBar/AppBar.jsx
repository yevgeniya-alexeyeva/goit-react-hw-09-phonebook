import { useStore } from "react-redux";
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import Container from "../UI/Container";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const { getState } = useStore();
  const isAuthenticated = getIsAuthenticated(getState());
  console.log("isAuthenticated AppBar", isAuthenticated);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Navigation />
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
