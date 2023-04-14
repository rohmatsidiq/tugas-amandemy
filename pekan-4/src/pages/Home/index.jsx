import { useState, React, useEffect } from "react";
import { Hero, Nav } from "../../components";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Home() {
  const [products, setProducts] = useState([]);
  const newProducts = products.slice(0, 4);
  const getProducts = async () => {
    try {
      const result = await axios.get(
        "https://api-project.amandemy.co.id/api/products"
      );

      setProducts(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mt-20">
      <Nav />
      <Hero />
      <section className="w-screen max-w-[1200px] p-3 mx-auto mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-sky-500 text-2xl font-bold">Catalog Products</h3>

          <Link
            to={"/products"}
            className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-md hover:shadow-sky-200"
          >
            <BsFillArrowRightCircleFill /> See more
          </Link>
        </div>
        {newProducts.length <= 0 && (
          <div className=" p-10 flex justify-center items-center">
            <h1 className="text-3xl">Please wait...</h1>
          </div>
        )}
        {newProducts.length > 0 && (
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-3">
            {newProducts.map((item, index) => (
              <Link
                to={`/detail/${item.id}`}
                key={index}
                className="bg-white drop-shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:shadow-sky-200"
              >
                <div className="h-64">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image_url}
                    alt="Baju Koko Bahan Linen"
                  />
                </div>
                <div className="p-3">
                  <h5 className="text-lg font-bold">{item.name}</h5>
                  {item.is_diskon ? (
                    <>
                      <p className="line-through">{item.harga_display}</p>
                      <p className="text-red-500 text-xl">
                        {item.harga_diskon_display}
                      </p>
                    </>
                  ) : (
                    <p className="text-xl">{item.harga_display}</p>
                  )}
                  <small className="text-sky-500">Stock: {item.stock}</small>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
