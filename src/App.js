import { useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const ref = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);

    setName("");
    setPrice("");
    ref.current.focus();
  };

  // Nếu viết như này, total sẽ được tính toán lại khi re-render, total chỉ cần thực sự tính toán lại khi nó ds products thay đổi
  // const total = products.reduce((result, prod) => {
  //   console.log("Tính toán lại");
  //   return result + prod;
  // }, 0);

  // Sử dụng memo để tránh thực hiện lại 1 đoạn logic không cần thiết
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Tính toán lại");
      return result + prod.price;
    }, 0);

    return result;
  }, [products]);

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={ref}
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
