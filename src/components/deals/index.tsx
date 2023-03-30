import data from "../checkout/data";
import { DealsContainer } from "./styles";

const Deals = () => {
  // If data object is updated this will also automatically update to go with it

  return (
    <DealsContainer>
      <h4>Item: Deal</h4>
      {data.map((item: any) => {
        if (item.deal) {
          const dealPrice = item.deal.for.toString();

          //Here we check if we should have the number display a £ or a p next to it

          const decimalNum =
            dealPrice.substring(0, dealPrice.length - 2) +
            "." +
            dealPrice.substring(dealPrice.length - 2);

          const dealFor =
            dealPrice.length <= 2 ? `${dealPrice}p` : `£${decimalNum}`;

          return (
            <p>
              <span>{item.sku}:</span> {item.deal.amount} for {dealFor}
            </p>
          );
        }
      })}
    </DealsContainer>
  );
};

export default Deals;
