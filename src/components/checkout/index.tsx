import { useEffect, useState } from "react";
import data, { itemObjType } from "./data";
import {
  ButtonContainer,
  CheckoutContainer,
  ScanButton,
  TotalAmount,
} from "./styles";

interface itemAmountObj {
  [key: string]: number;
}

const Checkout = () => {
  const [items, setItems] = useState<itemAmountObj>({});

  useEffect(() => {
    //First we map over the data array to get our initial items object
    data.map((item: itemObjType) => {
      setItems({ ...items, [item.sku]: 1 });
      items[item.sku] = 1;
    });
  }, []);

  const [total, setTotal] = useState<any>(0);

  const onClick = (item: string) => {
    //This function increases the selected items count by 1
    setItems({
      ...items,
      [item]: items[item] + 1,
    });

    //This filters the data array to make sure we're working on the correct item object from it
    const itemObj = data.filter(function (obj: itemObjType) {
      return obj.sku === item;
    });

    //First we check if that item object has a deal, If no deal then the value will be null

    if (itemObj[0].deal) {
      //This checks if our item has been scanned enough times to return a whole number when its divided by the deal amount
      const dealAmount = Number.isInteger(items[item] / itemObj[0].deal.amount);

      if (dealAmount) {
        //If we have enough for a deal we find the full price of the item if there was no deal
        const fullPrice = itemObj[0].deal.amount * itemObj[0].price;
        //We also find the discount amount to know how much to take off
        const discount = fullPrice - itemObj[0].deal.for;

        //Then we update the total accordingly
        setTotal(total + itemObj[0].price - discount);
      } else {
        setTotal(total + itemObj[0].price);
      }
    } else {
      setTotal(total + itemObj[0].price);
    }
  };

  //Lines 54 -> 59 turn the total into a string to allow me to use substring on it to add the decimal point into the correct place

  const strNum = total.toString();

  const totalNum =
    strNum.substring(0, strNum.length - 2) +
    "." +
    strNum.substring(strNum.length - 2);

  return (
    <CheckoutContainer>
      <h1>Checkout</h1>
      <h2>Scan item:</h2>
      <ButtonContainer>
        {data.map((op: itemObjType) => {
          return (
            <ScanButton onClick={() => onClick(op.sku)}>{op.sku}</ScanButton>
          );
        })}
      </ButtonContainer>
      <div>
        {data.map((op: itemObjType) => {
          return (
            <p>
              {op.sku}: {items[op.sku] - 1}
            </p>
          );
        })}
      </div>
      <h3>Total:</h3>
      <TotalAmount>
        £ {totalNum.length < 4 ? "0" : ""}
        {totalNum}
      </TotalAmount>
    </CheckoutContainer>
  );
};

export default Checkout;
