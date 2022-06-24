import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import Navbar from "./Navbar/Navbar";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";

Modal.setAppElement("#root");

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  console.log(guns);

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div>
      <Navbar cart={cart} />
      <div className="cart-item-show">
      {
        cart.map((item) => (
        <h3 key={item.id}>
           {item.name}
        </h3>
      ))
      }
     </div>
      <div className="card-container">
        {guns.map((gun) => (
          <Card gun={gun} key={gun.id} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
