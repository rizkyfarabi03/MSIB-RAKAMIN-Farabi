 // Membuat array dengan 100 nilai acak
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 50) + 1);
  }
  
  // Membagi array menjadi array genap dan ganjil
  const arrayGenap = [];
  const arrayGanjil = [];
  
  for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
          arrayGenap.push(array[i]);
    } else {
      arrayGanjil.push(array[i]);
    }
  }
  
  // Fungsi untuk mencari nilai minimum dalam array
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk mencari nilai maksimum dalam array
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total dari array
  function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata dari array
  function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0; // Menghindari pembagian dengan nol
    }
    const total = calculateTotal(arr);
    return total / arr.length;
  }

// Menghitung nilai max, min, total, dan rata-rata dari array randomArray
const minResult = findMin(array);
const maxResult = findMax(array);
const totalResult = calculateTotal(array);
const averageResult = calculateAverage(array);


  
// Output
console.log('Array dengan jumlah index 100:');
console.log(array);
console.log('Array genap dengan jumlah index 50:');
console.log(arrayGenap);
console.log('Array ganjil dengan jumlah index 50:');
console.log(arrayGanjil);
console.log('Statistik array genap:');
console.log(`Min: ${minResult}`);
console.log('Statistik array ganjil:');
console.log(`Max: ${maxResult}`);
console.log("Perbandingan antara Min, Max, Total, dan Rata-rata:");
console.log(`Min lebih besar dari Max: ${minResult > maxResult}`);