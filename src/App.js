import Header from "./components/header";
import Hero from "./components/hero";
import data from "./components/data";
import { useState } from "react";

function App() {
  const { products } = data;

  const [cartItem, setCartItem] = useState([]);

  const onAdd = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  return (
    <>
      <Header products={products} onAdd={onAdd} cartItem={cartItem} />
      <Hero products={products} onAdd={onAdd} cartItem={cartItem} />
    </>
  );
}

export default App;
