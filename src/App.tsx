import { useState } from "react";
import "./App.css";
import Button from "./component/button/Button";
import Alert from "./component/Alert";
import { Like } from "./component/Like";
import Message from "./Message";

function App() {
  const [alertVisiable, setAlertVisiable] = useState(false);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Trung",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Phomai",
    toppings: ["Thit", "Bo"],
  });
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Hammer" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Heo"] });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  console.log("Cart", cart.items);
  return (
    <>
      <div>
        <Message />
      </div>

      <div>
        {alertVisiable && (
          <Alert onClose={() => setAlertVisiable(false)}>My alert</Alert>
        )}
        <Button onClick={() => setAlertVisiable(true)} color="primary">
          My button
        </Button>

        <Like onClick={() => console.log("Click ne")} />
      </div>
      <div>
        <button onClick={handleClick}>Show</button>
      </div>
    </>
  );
}

export default App;
