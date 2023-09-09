// Membuat array dengan 100 nilai random antara 1 sampai 50
const array = [];
for (let i = 0; i < 100; i++) {
  array.push(Math.floor(Math.random() * 50) + 1);
}
//  console.log(array)
// Membuat array genap dan array ganjil
const arrayGenap = [];
const arrayGanjil = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        arrayGenap.push(array[i]);
  } else {
    arrayGanjil.push(array[i]);
  }
}

// Menghitung min, max, total, dan rata-rata
const hitungStatistik = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const total = arr.reduce((acc, val) => acc + val, 0);
  const rataRata = total / arr.length;
  return { min, max, total, rataRata };
};

const statistikGenap = hitungStatistik(arrayGenap);
const statistikGanjil = hitungStatistik(arrayGanjil);

// Membandingkan statistik
const perbandingan = {
  min: statistikGenap.min > statistikGanjil.min ? 'Min lebih besar array genap' : 'Min lebih besar array ganjil',
  max: statistikGenap.max > statistikGanjil.max ? 'Max lebih besar array genap' : 'Max lebih besar array ganjil',
  total: statistikGenap.total === statistikGanjil.total ? 'Total memiliki nilai sama antara array genap dan ganjil' : 'Total berbeda antara array genap dan ganjil',
  rataRata: statistikGenap.rataRata > statistikGanjil.rataRata ? 'Rata-rata lebih besar array genap' : 'Rata-rata lebih besar array ganjil',
};

// Output
console.log('Array dengan jumlah index 100:');
console.log(array);
console.log('Array genap dengan jumlah index 50:');
console.log(arrayGenap);
console.log('Array ganjil dengan jumlah index 50:');
console.log(arrayGanjil);
console.log('Statistik array genap:');
console.log(statistikGenap);
console.log('Statistik array ganjil:');
console.log(statistikGanjil);
console.log('Perbandingan:');
console.log(perbandingan);
