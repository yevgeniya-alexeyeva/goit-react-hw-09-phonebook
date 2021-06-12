import { getEmail } from "../../redux/auth/auth-selectors";
 import {useDispatch, useStore} from 'react-redux'; 
import { logoutUser } from "../../redux/auth/auth-operations";
import Button from "@material-ui/core/Button";
import styles from './UserMenu.module.css';




const UserMenu = () => {
  const dispatch = useDispatch();
  const {getState} = useStore();
  
  return (
    <div className={styles.wrapper}>
      <p className={styles.email}>{`${getEmail(getState())}`}</p>
      <Button
      className={styles.button}
            type="button"
            onClick={()=> dispatch(logoutUser())}
            variant="contained"
            color="primary"
            size="medium"
          >Logout</Button>
    </div>
  );
};


export default UserMenu;
