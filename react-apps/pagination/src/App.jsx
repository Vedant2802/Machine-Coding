import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = 10;
  const ProductContainer = ({ image, title }) => {
    return (
      <div className="product-card">
        <img src={image} alt="" className="product-img"></img>
        <span>{title}</span>
      </div>
    );
  };
  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=500");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);
      setData(data.products);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }
  const totalProducts = data.length;
  const numberOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handleOnClick = (e) => {
    setCurrentPage(e.target.textContent);
    console.log(e.target.textContent);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Pagination</h1>
      <div className="pagination-container">
        {Array.from({ length: numberOfPages }, (_, i) => (
          <span key={i} className="page-number" onClick={handleOnClick}>
            {i}
          </span>
        ))}
      </div>
      <div className="products-container">
        {data.slice(start, end).map((c, index) => (
          <ProductContainer image={c.images[0]} title={c.title} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
