import { React, useEffect, useState } from "react";
import { Nav } from "../../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdCancel, MdSave } from "react-icons/md";

function CreateProduct() {
  const navigate = useNavigate();

  const [products, setProdutcs] = useState({
    name: "",
    stock: "",
    harga: "",
    is_diskon: false,
    harga_diskon: "",
    kategori: "",
    image_url: "",
    description: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setProdutcs({ ...products, name: e.target.value });
    } else if (e.target.name === "stock") {
      setProdutcs({ ...products, stock: e.target.value });
    } else if (e.target.name === "harga") {
      setProdutcs({ ...products, harga: e.target.value });
    } else if (e.target.name === "is_diskon") {
      setProdutcs({ ...products, is_diskon: e.target.checked });
    } else if (e.target.name === "harga_diskon") {
      setProdutcs({ ...products, harga_diskon: e.target.value });
    } else if (e.target.name === "kategori") {
      setProdutcs({ ...products, kategori: e.target.value });
    } else if (e.target.name === "image_url") {
      setProdutcs({ ...products, image_url: e.target.value });
    } else if (e.target.name === "description") {
      setProdutcs({ ...products, description: e.target.value });
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "https://api-project.amandemy.co.id/api/products",
        {
          name: products.name,
          harga: products.harga,
          stock: products.stock,
          image_url: products.image_url,
          is_diskon: products.is_diskon,
          harga_diskon: products.harga_diskon,
          category: products.kategori,
          description: products.description,
        }
      );
      setProdutcs({
        name: "",
        stock: "",
        harga: "",
        is_diskon: false,
        harga_diskon: "",
        kategori: "",
        image_url: "",
        description: "",
      });

      navigate("/table");
    } catch (error) {
      alert(error.response.data.info);
    }
  };

  const handleCancel = () => {
    setProdutcs({
      name: "",
      stock: "",
      harga: "",
      is_diskon: false,
      harga_diskon: "",
      kategori: "",
      image_url: "",
      description: "",
    });
    navigate('/table')
  };

  return (
    <div>
      <Nav />
      <section className="w-screen max-w-[1200px] p-3 mx-auto mt-20">
        <div className=" p-6 rounded-2xl bg-white drop-shadow-md">
          <h3 className="font-bold text-2xl text-sky-500 mb-2">
            Created Product
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="md:col-span-3 flex flex-col gap-1">
              <label className="" htmlFor="name">
                Nama Barang
              </label>
              <input
                className="border px-4 py-2 rounded-2xl focus:outline-none focus:border-sky-500"
                type="text"
                id="name"
                name="name"
                placeholder="Masukkan Nama Barang"
                onChange={handleChange}
                value={products.name}
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="" htmlFor="stock">
                Stock Barang
              </label>
              <input
                className="border px-4 py-2 rounded-2xl focus:outline-none focus:border-sky-500"
                type="number"
                id="stock"
                name="stock"
                placeholder="Masukkan Stock Barang"
                onChange={handleChange}
                value={products.stock}
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="" htmlFor="harga">
                Harga Barang
              </label>
              <input
                className="border px-4 py-2 rounded-2xl focus:outline-none focus:border-sky-500"
                type="number"
                id="harga"
                name="harga"
                placeholder="Masukkan Harga Barang"
                onChange={handleChange}
                value={products.harga}
              />
            </div>
            <div className="mb-3 ">
              {products.is_diskon ? (
                <input
                  className="border px-4 py-2 rounded-2xl checked:border-sky-500"
                  type="checkbox"
                  id="is_diskon"
                  name="is_diskon"
                  placeholder="Masukkan Harga Barang"
                  onClick={handleChange}
                  checked
                />
              ) : (
                <input
                  className="border px-4 py-2 rounded-2xl checked:border-sky-500"
                  type="checkbox"
                  id="is_diskon"
                  name="is_diskon"
                  placeholder="Masukkan Harga Barang"
                  onClick={handleChange}
                />
              )}
              <label className="ml-2" htmlFor="is_diskon">
                Status Diskon
              </label>
            </div>
            {products.is_diskon && (
              <div className="md:col-span-2 flex flex-col gap-1">
                <label className="" htmlFor="harga_diskon">
                  Harga Diskon
                </label>
                <input
                  className="border px-4 py-2 rounded-2xl focus:outline-none focus:border-sky-500"
                  type="number"
                  id="harga_diskon"
                  name="harga_diskon"
                  placeholder="Masukkan Harga Diskon"
                  onChange={handleChange}
                  value={products.harga_diskon}
                />
              </div>
            )}
            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="">Kategori</label>
              <select
                className="border px-4 py-2 rounded-2xl focus:outline-none focus:border-sky-500 bg-white"
                id="kategori"
                name="kategori"
                onChange={handleChange}
              >
                <option value="">Pilih Kategori</option>
                <option value="makanan">Makanan</option>
                <option value="minuman">Minuman</option>
                <option value="hiburan">Hiburan</option>
                <option value="kendaraan">Kendaraan</option>
              </select>
            </div>
            <div className="md:col-span-3 flex flex-col gap-1">
              <label className="" htmlFor="image_url">
                Gambar Barang
              </label>
              <input
                className="border px-4 py-2 rounded-2xl focus:outline-none focus:border-sky-500"
                type="text"
                id="image_url"
                name="image_url"
                placeholder="Masukkan URL Gambar"
                onChange={handleChange}
                value={products.image_url}
              />
            </div>
            <div className="md:col-span-5 flex flex-col gap-1">
              <label className="" htmlFor="description">
                Deskripsi
              </label>
              <textarea
                className="border px-4 py-2 rounded-2xl focus:outline-none focus:border-sky-500"
                id="description"
                name="description"
                rows="10"
                placeholder="Masukkan Deskripsi Barang"
                onChange={handleChange}
                value={products.description}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-5">
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 border-solid border border-sky-500 text-sky-500 bg-white px-4 py-2 rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-sky-200"
            >
              <MdCancel />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-sky-200"
            >
              <MdSave />
              Save
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default CreateProduct;
