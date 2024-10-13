//fonksiyonumuzu tanımlayıp yazalım
function enBuyukSayi(sayilar){
    let enBuyuk = Math.max.apply(null,sayilar);//dizideki en büyük sayıyı bulalım
    return enBuyuk; //en büyük sayıyı geri döndür
}

//boş bir dizi tanımlıyoruz içerisine değerleri kullanıcı atayacak
let sayilar = []; 

//kullanıcıdan birkaçtane sayı girmesini isteyelim ve bunları bir dizide tutalım
for (let i=0; i<3; i++){
    let sayi = Number(prompt("Bir sayı giriniz:"));
    sayilar.push(sayi);//girilen sayıyı diziye ekle
}

//sonucu ekrana yazdıralım
document.write("Girilen sayılar: " + sayilar + "<br>En büyük sayı: " + enBuyukSayi(sayilar));