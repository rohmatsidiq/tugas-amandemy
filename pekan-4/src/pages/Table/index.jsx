import { useState, React, useEffect } from "react";
import { Nav } from "../../components";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MdCreateNewFolder,
  MdEditSquare,
  MdDeleteForever,
} from "react-icons/md";

function Table() {
  const [products, setProducts] = useState([]);
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

  const handleDelete = (id) => {
    try {
      const response = axios.delete(
        `https://api-project.amandemy.co.id/api/products/${id}`
      );
      alert("Berhasil menghapus data");
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Nav />
      {products.length <= 0 && (
        <div className="w-full h-screen flex justify-center items-center">
          <p className="text-center text-3xl">Please wait...</p>
        </div>
      )}
      {products.length > 0 && (
        <div className="mt-20 max-w-[1200px] mx-auto p-5">
          <h1 className="text-center text-3xl font-bold">Table Products</h1>
          <div className="flex justify-end">
            <Link
              to={"/create"}
              className="flex items-center gap-2 bg-sky-500 px-3 py-1 rounded-full text-white hover:scale-105 hover:shadow-md hover:shadow-sky-200"
            >
              <MdCreateNewFolder />
              Create Product
            </Link>
          </div>
          <table className="w-full mt-3 bg-white shadow-lg">
            <thead className="text-center">
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Nama</th>
                <th className="border p-2">Keaktifan Diskon</th>
                <th className="border p-2">Harga</th>
                <th className="border p-2">Harga Diskon</th>
                <th className="border p-2">Gambar</th>
                <th className="border p-2">Kategori</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody className="text-center ">
              {products.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">
                    {item.is_diskon ? "Aktif" : "Tidak Aktif"}
                  </td>
                  <td className="border p-2">{item.harga_display}</td>
                  <td className="border p-2">{item.harga_diskon_display}</td>
                  <td className="border p-2">
                    <div className="w-32 h-32 p-3 rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={item.image_url}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="border p-2">{item.category}</td>
                  <td className="border p-2 text-center">
                    <Link to={`/edit/${item.id}`}>
                      <button className=" bg-yellow-500 text-white p-2 rounded-full hover:scale-105 m-1 hover:shadow-md hover:shadow-yellow-200">
                        <MdEditSquare />
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        return handleDelete(item.id);
                      }}
                      className=" bg-red-500 text-white p-2 rounded-full hover:scale-105 m-1 hover:shadow-md hover:shadow-red-200"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Table;
