/*
let ad = "selim"
let soyad = "kaya"
let sonHali = ad.charAt(0).toUpperCase() + ad.slice(1).toLowerCase() + " " + soyad.charAt(0).toUpperCase() + soyad.slice(1).toLowerCase();
console.log(sonHali)


let cumle = "vangölü türkiyenin en büyük gölüdür"

let uzunluk = cumle.split(" ").length;
console.log(uzunluk)

let mailAdresi = "selimkaya3547@gmail.com"
console.log(mailAdresi.includes("@") && mailAdresi.endsWith(".com"))

let kelime ="hayat yaşamaya değer"
let cevir = kelime.split("").reverse().join("");
console.log(cevir)*/

let kelime ="hayat yaşamaya değer"
let sansür = kelime.replace("yaşamaya","**********");
console.log(sansür)