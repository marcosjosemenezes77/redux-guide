import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import UserActionTypes from "../../redux/user/action-types";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch()

  console.log({currentUser});

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: {
        id: 10,
        name: 'Marcos Menezes',
        email: 'marcosjosemenezes77@gmail.com'
      }
    })
  }

  const handleLogoutClick = () => {
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: null
    });
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser === null ?
        <div onClick={handleLoginClick}>Login</div>
        :
        <div onClick={handleLogoutClick}>Sair</div>
        }
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
