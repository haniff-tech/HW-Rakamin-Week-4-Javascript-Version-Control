// buat array dengan nilai random (1 sampai 50) sebanyak 100 index -udah
// pecah array tersebut menjadi 2 bagian array ganjil dan genap -udah
// gunakan method push untuk menambah nilai baru pada array -udah
// dari 2 array tadi, cari nilai :
/* 
- Min -udah
- Max -udah
- Rata-rata 
- Total -udah

Kemudian bandingkan kedua array tadi dengan nilai yang didapat, misal :
- Nilai Min lebih besar array ganjil
- Nilai max lebih besar array genap
- rata-rata lebih besar array ganjil
- Total lebih besar array genap
*/

//Var nilai untuk membuat array kosong
let nilai = [];


// Fungsi untuk generate angka random antara 1 - 50 sebanyak 100 kali dan dimasukan ke array menggunakan push
for (let i = 0; i <= 99; i++) {
    let angkaRandom = Math.floor(Math.random() * 50) + 1;
    nilai.push(angkaRandom);
}

// untuk melihat jumlah index dari array nilai
let indexNilai = nilai.length;

// console.log(nilai)
// console.log(`Jumlah Index pada array nilai sebanyak ${indexNilai}`)

// membagi array menjadi 2 bagian, array ganjil dan array genap
let nilai_arrayGenap = [];
let nilai_arrayGanjil = [];


//fungsi untuk memisahkan array dengan index ganjil dan array dengan index genap
for (let i = 0; i < nilai.length; i++) {
    if (i % 2 === 0) {
        nilai_arrayGenap.push(nilai[i]);
    } else {
        nilai_arrayGanjil.push(nilai[i]);
    }
}


// var untuk melihat index array ganjil dan genap
let indexArrayGanjil = nilai_arrayGanjil.length;
let indexArrayGenap = nilai_arrayGenap.length;


console.log(`Jumlah index pada array Ganjil : ${indexArrayGanjil}`)
console.log(`Jumlah index pada array Genap : ${indexArrayGenap}`)

// membuat function untuk mencari nilai Min dari array (bisa genap bisa ganjil)
function nilaiMin(arrayMinselector) {
    let arrayMinValue = Infinity;
    for (let x of arrayMinselector) {
        if (x < arrayMinValue) {
            arrayMinValue = x;
        }
    }
    return arrayMinValue
}

// membuat function untuk mencari nilai Max dari array (bisa genap bisa ganjil)
function nilaiMax(arrayMaxselector) {
    let arrayMaxValue = -Infinity;
    for (let x of arrayMaxselector) {
        if (x > arrayMaxValue) {
            arrayMaxValue = x;
        }
    }
    return arrayMaxValue
}

// membuat function untuk mencari total
function arrayTotal(arrayTotal) {
    let total = 0;
    for (let x of arrayTotal) {
        total += x;
    }
    return total
}

// mencari nilai rata-rata 
function nilaiRatarata(arrayRata2){
    if (arrayRata2.length === 0){
        return 0
    }

    let total = 0
    for (let x of arrayRata2){
        total += x
    }

    return total / arrayRata2.length
}

console.log(`Nilai Min Array Ganjil : ${nilaiMin(nilai_arrayGanjil)}`)
console.log(`Nilai Min Array Genap : ${nilaiMin(nilai_arrayGenap)}`)

console.log(`Nilai Max Array Ganjil : ${nilaiMax(nilai_arrayGanjil)}`)
console.log(`Nilai Max Array Genap : ${nilaiMax(nilai_arrayGenap)}`)

console.log(`Jumlah Total Array Ganjil : ${arrayTotal(nilai_arrayGanjil)}`)
console.log(`Jumlah Total Array Genap : ${arrayTotal(nilai_arrayGenap)}`)

console.log(`Nilai Rata-rata Array Ganjil : ${nilaiRatarata(nilai_arrayGanjil)}`)
console.log(`Nilai Rata-rata Array Genap : ${nilaiRatarata(nilai_arrayGenap)}`)

//console.log(`Array Ganjil : ${nilai_arrayGanjil}`)


// Perbandingan nilai dari array Ganjil dan Genap
// ------------------ Nilai Min array Ganjil
if (nilaiMin(nilai_arrayGanjil) < nilaiMin(nilai_arrayGenap)){
    console.log(`Nilai Min Array Ganjil lebih Kecil dari Nilai Min Array Genap`)
} else if (nilaiMin(nilai_arrayGanjil) > nilaiMin(nilai_arrayGenap)){
    console.log(`Nilai Min Array Ganjil lebih besar dari nilai Min Array Genap`)
} else if (nilaiMin(nilai_arrayGanjil) === nilaiMin(nilai_arrayGenap)){
    console.log(`Nilai Min Array Ganjil sama besar dengan nilai Min Array Genap`)
} 

// Nilai Max array Ganjil
if (nilaiMax(nilai_arrayGanjil) < nilaiMax(nilai_arrayGenap)){
    console.log(`Nilai Max Array Ganjil lebih Kecil dari Nilai Max Array Genap`)
} else if (nilaiMax(nilai_arrayGanjil) > nilaiMax(nilai_arrayGenap)){
    console.log(`Nilai Max Array Ganjil lebih besar dari nilai Max Array Genap`)
} else if (nilaiMax(nilai_arrayGanjil) === nilaiMax(nilai_arrayGenap)){
    console.log(`Nilai Max Array Ganjil sama besar dengan nilai Max Array Genap`)
}

// ----------------- Nilai min array Genap
if (nilaiMin(nilai_arrayGenap) < nilaiMin(nilai_arrayGanjil)){
    console.log(`Nilai Min Array Genap lebih Kecil dari Nilai Min Array Ganjil`)
} else if (nilaiMin(nilai_arrayGenap) > nilaiMin(nilai_arrayGanjil)){
    console.log(`Nilai Min Array Genap lebih besar dari nilai Min Array Ganjil`)
} else if (nilaiMin(nilai_arrayGenap) === nilaiMin(nilai_arrayGanjil)){
    console.log(`Nilai Min Array Genap sama besar dengan nilai Min Array Ganjil`)
} 

if (nilaiMax(nilai_arrayGenap) < nilaiMax(nilai_arrayGanjil)){
    console.log(`Nilai Max Array Genap lebih Kecil dari Nilai Max Array Ganjil`)
} else if (nilaiMax(nilai_arrayGenap) > nilaiMax(nilai_arrayGanjil)){
    console.log(`Nilai Max Genap lebih besar dari nilai Max Array Ganjil`)
} else if (nilaiMax(nilai_arrayGenap) === nilaiMax(nilai_arrayGanjil)){
    console.log(`Nilai Max Array Genap sama besar dengan nilai Max Array Ganjil`)
}

//Membandingkan Total antara Array Ganjil dan Genap
if (arrayTotal(nilai_arrayGanjil) < arrayTotal(nilai_arrayGenap)){
    console.log(`Total Array Ganjil lebih kecil dari total Array Genap`)
} else if (arrayTotal(nilai_arrayGanjil) > arrayTotal(nilai_arrayGenap)) {
    console.log(`Total Array Ganjil lebih besar dari total Array Genap`)
} else if (arrayTotal(nilai_arrayGanjil) === arrayTotal(nilai_arrayGenap)) {
    console.log(`Total Array Ganjil sama besar dengan total Array Genap`)
}

if (arrayTotal(nilai_arrayGenap) < arrayTotal(nilai_arrayGanjil)){
    console.log(`Total Array Genap lebih kecil dari total Array Ganjil`)
} else if (arrayTotal(nilai_arrayGenap) > arrayTotal(nilai_arrayGanjil)) {
    console.log(`Total Array Genap lebih besar dari total Array Ganjil`)
} else if (arrayTotal(nilai_arrayGenap) === arrayTotal(nilai_arrayGanjil)) {
    console.log(`Total Array Genap sama besar dengan total Array Ganjil`)
}

//Membandingkan rata-rata antara array Ganjil dan Genap
if (nilaiRatarata(nilai_arrayGanjil) < nilaiRatarata(nilai_arrayGenap)){
    console.log(`Nilai Rata-rata Array Ganjil lebih kecil dari Nilai Rata-rata Array Genap`)
} else if (nilaiRatarata(nilai_arrayGanjil) > nilaiRatarata(nilai_arrayGenap)) {
    console.log(`Nilai Rata-rata Array Ganjil lebih besar dari Nilai Rata-rata Array Genap`)
} else if (arrayTotal(nilai_arrayGanjil) === arrayTotal(nilai_arrayGenap)) {
    console.log(`Nilai Rata-rata Array Ganjil sama besar dengan Nilai Rata-rata Array Genap`)
}

if (nilaiRatarata(nilai_arrayGenap) < nilaiRatarata(nilai_arrayGanjil)){
    console.log(`Nilai Rata-rata Array Genap lebih kecil dari Nilai Rata-rata Array Ganjil`)
} else if (nilaiRatarata(nilai_arrayGenap) > nilaiRatarata(nilai_arrayGanjil)) {
    console.log(`Nilai Rata-rata Array Genap lebih besar dari Nilai Rata-rata Array Ganjil`)
} else if (arrayTotal(nilai_arrayGenap) === arrayTotal(nilai_arrayGanjil)) {
    console.log(`Nilai Rata-rata Array Genap sama besar dengan Nilai Rata-rata Array Ganjil`)
}