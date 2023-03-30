import data, { itemObjType } from "../checkout/data";
import { PricesContainer } from "./styles";

const Prices = () => {
  // If data object is updated this will also automatically update to go with it

  //With more time i could addthe same logic here that exists in the deals component, to check whether a number should have a £ or a p before or after it

  return (
    <PricesContainer>
      <h4>Item: Cost</h4>
      {data.map((item: itemObjType) => {
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
