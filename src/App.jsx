import { useState } from "react"
import "./components/test.css"

const allBrands = [
  { id: 1, brandName: "puma" },
  { id: 2, brandName: "nike" },
  { id: 3, brandName: "adidas" },
  { id: 4, brandName: "gap" },
  { id: 5, brandName: "armani" },
  { id: 6, brandName: "gucci" },
  { id: 7, brandName: "parada" }
];

export default function App() {

  const [selected, setSelected] = useState([]);

  const handleAddBtnClick = (id) => {
    const selectedItem = allBrands.find((item) => item.id === id);
    //check if selectedItem is alredy present or not
    if (!selected.some((item) => item.id === id)) {
      setSelected([...selected, selectedItem]);
    }
  }

  const handleRemoveBtnClick = (id) => {

    setSelected(selected.filter((item) => item.id !== id));

  }

  return (
    <>
      <div>
        <p>Items to add in your cart</p>
        <ul>
          {allBrands.map((item) => <div key={item.id} style={{ margin: "5px" }}>
            <span>{item.brandName}</span>
            <button onClick={() => handleAddBtnClick(item.id)} style={{ marginLeft: "4px" }}>Add to cart</button>
          </div>)}
        </ul>
      </div>

      <div>
        <p>Your Cart</p>
        {selected.map((item) => <div key={item.id}>
          <span>{item.brandName}</span>
          <button onClick={() => handleRemoveBtnClick(item.id)} >Remove from cart</button>
        </div>)}
      </div>
    </>
  )
}