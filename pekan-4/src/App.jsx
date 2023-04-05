import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CreateProduct,
  Detail,
  EditProduct,
  Home,
  Products,
  Table,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateProduct />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/products" element={<Products />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
}

export default App;
