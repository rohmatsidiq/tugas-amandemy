function bodyMassIndex(berat, tinggi) {
  function kuadrat(tinggi) {
    return tinggi * tinggi;
  }
  return berat / kuadrat(tinggi);
}

const result = bodyMassIndex(80, 1.8);
console.log(result);
