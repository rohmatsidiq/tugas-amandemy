const fetchData = (isSuccess) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        nama: "barang 1",
        harga: 2000,
      },
      {
        nama: "barang 2",
        harga: 3000,
      },
      {
        nama: "barang 3",
        harga: 4000,
      },
    ];

    console.log("Fetch data sedang dilakukan .....");

    setTimeout(() => {
      if (isSuccess) {
        resolve({ data });
      } else {
        reject("Data Gagal diambil");
      }
    }, 3000);
  });
};

fetchData(true)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
