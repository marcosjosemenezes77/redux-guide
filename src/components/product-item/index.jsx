import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from "../../redux/cart/actions";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

// Utilities

const ProductItem = ({ product }) => {
  const { currentCart } = useSelector((rootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProductToCart(product));
  }

  console.log({currentCart});

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton onClick={handleProductClick} startIcon={<BsCartPlus />}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
