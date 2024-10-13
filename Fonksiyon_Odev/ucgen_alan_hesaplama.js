//Üçgen alanı hesaplamak için fonksiyon yazalım
function ucgenAlanHesapla(a,h){     //(kenar*yükseklik)/2=üçgenin alanı
    var hesap = (a*h)/2;
    return hesap;
}

//ekrandan üçgenin kenar ve yükseklik değerlerini girmesini istedik
kenar = Number(prompt("Üçgenin kenar uzunluğunu giriniz:"));
yukseklik = Number(prompt("Üçgenin yüksekliğini giriniz:"));

//fonksiyonu çağırıp ekrana yazıyoruz
alert("Üçgenin Alanı: " + ucgenAlanHesapla(kenar,yukseklik)+ " birim");