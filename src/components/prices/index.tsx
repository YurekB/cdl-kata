import data from "../checkout/data";
import { PricesContainer } from "./styles";

const Prices = () => {
  // If data object is updated this will also automatically update to go with it

  return (
    <PricesContainer>
      <h4>Item: Cost</h4>
      {data.map((item: any) => {
        return (
          <p>
            <span>{item.sku}: </span>
            {item.price}p
          </p>
        );
      })}
    </PricesContainer>
  );
};

export default Prices;
