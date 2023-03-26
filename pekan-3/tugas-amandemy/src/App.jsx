import React from "react";
import Form from "./assets/components/Form";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [products, setProdutcs] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://api-project.amandemy.co.id/api/products"
      );
      setProdutcs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Form getProducts={getProducts} />

      <section className="w-screen max-w-[1080px] p-3 mx-auto">
        <div className="flex justify-between">
          <h3 className="text-sky-500 text-2xl font-bold">Catalog Products</h3>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-3 ">
          {products.map((item, index) => (
            <a
              key={index}
              href=""
              className="bg-white drop-shadow-md rounded-2xl overflow-hidden"
            >
              <div className="h-52">
                <img
                  className="w-full h-full object-cover"
                  src={item.image_url}
                  alt="Baju Koko Bahan Linen"
                />
              </div>
              <div className="p-3">
                <h5 className="text-lg">{item.name}</h5>
                {item.is_diskon ? (
                  <>
                    <p className="line-through">{item.harga_display}</p>
                    <p className="text-red-500">{item.harga_diskon_display}</p>
                  </>
                ) : (
                  <p>{item.harga_display}</p>
                )}
                <small className="text-sky-500">Stock: {item.stock}</small>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
