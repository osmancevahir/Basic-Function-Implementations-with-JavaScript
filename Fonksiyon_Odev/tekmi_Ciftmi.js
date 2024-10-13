//fonksiyonumuzu yazıyoruz
function tekmiCiftmi(sayi){
    if(sayi % 2 === 0){
         return " Çift sayıdır";
    }else {
        return " Tek sayıdır";
    }
}

//kullanıcıdan sayı alalım
sayi = Number(prompt("Bir sayı giriniz:"));

//aldığımız sayıyı fonksiyona yazıp çağıralım
alert(sayi + tekmiCiftmi(sayi));