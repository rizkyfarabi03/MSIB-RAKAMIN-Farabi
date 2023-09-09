  // Menggunakan variabel suhu dan kondisi untuk mendefinisikan kondisi air

  function tentukanKondisiAir(suhu) {
    if (suhu >= 1 && suhu <= 100) {
        return "Cair";
    } else if (suhu >= 101 && suhu <= 500) {
        return "Uap";
    } else if (suhu >= -100 && suhu <= 0) {
        return "Beku";
    } else {
        return "Tidak Terdefinisi";
    }
    }

    // Contoh penggunaan
    var suhuAir = -101;
    var kondisiAir = tentukanKondisiAir(suhuAir);
    console.log(`Air pada suhu ${suhuAir} derajat adalah dalam kondisi ${kondisiAir}.`);
