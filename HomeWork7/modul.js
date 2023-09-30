// Modul untuk menghitung luas dan keliling persegi dan persegi panjang

// Fungsi untuk menghitung luas persegi
exports.luasPersegi = (sisi) => {
    return sisi * sisi;
  };
  
  // Fungsi untuk menghitung keliling persegi
  exports.kelilingPersegi = (sisi) => {
    return 4 * sisi;
  };
  
  // Fungsi untuk menghitung luas persegi panjang
  exports.luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar;
  };
  
  // Fungsi untuk menghitung keliling persegi panjang
  exports.kelilingPersegiPanjang = (panjang, lebar) => {
    return 2 * (panjang + lebar);
  };
  