import { React, useEffect, useState } from "react";
import { Nav } from "../../components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BsFillPlusCircleFill, BsFillCartCheckFill } from "react-icons/bs";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const result = await axios.get(
        `https://api-project.amandemy.co.id/api/products/${id}`
      );
      setProduct(result.data.data);
    } catch (error) {
      console.lod(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Nav />

      <section className="w-screen max-w-[1200px] p-3 mx-auto mt-20">
        <div className="p-6 rounded-xl bg-white drop-shadow-md">
          <span className="text-sky-700">
            <Link to={"/"}>Home</Link> /{" "}
          </span>
          <span className="text-sky-700">
            <Link to={"/products"}>Products</Link> /{" "}
          </span>
          <span className="text-sky-500">Detail</span>
          <div className="grid sm:grid-cols-5 gap-5 mt-5">
            <div className="sm:col-span-2">
              <div className="h-96">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={product.image_url}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="text-2xl font-bold">{product.name}</h5>
              <small className="text-gray-400">{product.category}</small>
              {product.is_diskon ? (
                <>
                  <p className="line-through">{product.harga_display}</p>
                  <p className="text-red-500 text-3xl">
                    {product.harga_diskon_display}
                  </p>
                </>
              ) : (
                <p className="text-3xl">{product.harga_display}</p>
              )}
              <small className="text-sky-500">Stock: {product.stock}</small>
              <p className="mt-3">{product.description}</p>
              <div className="flex gap-3 mt-4">
                <button className="flex items-center gap-2 border-solid border border-sky-500 text-sky-500 bg-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-md hover:shadow-sky-200">
                  <BsFillPlusCircleFill />
                  Add To Cart
                </button>
                <button className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-md hover:shadow-sky-200">
                  <BsFillCartCheckFill />
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
