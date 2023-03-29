import { useState } from "react";
import { CheckoutContainer, ScanButton } from "./styles";

const Checkout = () => {
  const [items, setItems] = useState<any>({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  });

  const onClick = (item: string) => {
    setItems({
      ...items,
      [item]: items[item] + 1,
    });
  };

  return (
    <CheckoutContainer>
      <h1>Checkout</h1>
      <h2>Scan item:</h2>
      <div>
        <ScanButton onClick={() => onClick("A")}>A</ScanButton>
        <ScanButton onClick={() => onClick("B")}>B</ScanButton>
        <ScanButton onClick={() => onClick("C")}>C</ScanButton>
        <ScanButton onClick={() => onClick("D")}>D</ScanButton>
      </div>
      <div>
        <p>A: {items.A}</p>
        <p>B: {items.B}</p>
        <p>C: {items.C}</p>
        <p>D: {items.D}</p>
      </div>
    </CheckoutContainer>
  );
};

export default Checkout;
