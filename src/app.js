console.log("Merhaba Kodlama.io")
//JS type safe değildir.(tip güvenlği) 

let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)
const euroDun = 11.2
//euroDun = 11 //consta bu şekilde 2. değer verilmez.

console.log(euroDun)

//array: dizi çoğul isimlendirme
//camelCasing: değişken tanımlaması kelimenın ilk harfi küçük sonrakı buyuk.
//PascalCasing: Kelimenın ılk harflerı buyuk.
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
     console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")
console.log(konutKredileri)