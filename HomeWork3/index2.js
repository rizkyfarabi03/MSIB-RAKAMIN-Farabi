const platKuning = false; // Ganti dengan true atau false
const isMotor = true; // Ganti dengan true atau false
const cc = 1600; // Ganti dengan nilai CC mobil Anda

let fuelType = "";

if (platKuning || isMotor) {
  fuelType = "BBM subsidi";
} else if (cc < 1500) {
  fuelType = "PERTAMAX";
} else {
  fuelType = "Pertamax Turbo";
}
console.log(`Jenis BBM yang dianjurkan: ${fuelType}`);
