// Menggunakan modul geometri
const geometri = require('./modul');

// Menghitung luas dan keliling persegi
const sisiPersegi = 4;
const luasPersegi = geometri.luasPersegi(sisiPersegi);
const kelilingPersegi = geometri.kelilingPersegi(sisiPersegi);

console.log('Jadi Luas Persegi dan Keliling Persegi dengan sisiPersegi nya 4 adalah:')
console.log(`Luas Persegi adalah: ${luasPersegi}`);
console.log(`Keliling Persegi adalah: ${kelilingPersegi}`);
console.log('=============================================')

// Menghitung luas dan keliling persegi panjang
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 8;
const luasPersegiPanjang = geometri.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = geometri.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);


console.log('Jadi Luas Persegi dan Keliling Persegi Panjang dengan Panjang nya 6 dan lebar nya 8 adalah:')
console.log(`Luas Persegi Panjang adalah: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang adalah: ${kelilingPersegiPanjang}`);
