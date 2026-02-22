import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, logoutUser } from "../../redux/user/actions";

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
    dispatch(
      loginUser({
        id: 10,
        name: 'Marcos Menezes',
        email: 'marcosjosemenezes77@gmail.com'
      })
    )
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser());
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
