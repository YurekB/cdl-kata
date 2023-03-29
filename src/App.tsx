import "./App.css";
import Checkout from "./components/checkout";
import Deals from "./components/deals";
import Prices from "./components/prices";

function App() {
  return (
    <div className="App">
      <Prices />
      <Checkout />
      <Deals />
    </div>
  );
}

export default App;
