//fonksiyonu oluşturup yazalım
function sayiTopla(sayi1,sayi2){
    topla = sayi1 + sayi2;
    return topla;
}

//ekrandan iki tane sayı alalım ve değişkenlerde tutalım
sayi1 = Number(prompt("Birinci sayıyı giriniz:"));
sayi2 = Number(prompt("İkinci sayıyı giriniz:"));

//aldığımız sayıları fonksiyonu çağırıp toplatalım
alert("Girdiğiniz sayıların toplamı: "+sayiTopla(sayi1,sayi2));