//pi sabit bir değer olduğundan bu değeri const ile tutuyoruz
const pi=3.14159265359;

//Çemberin alanını hesaplamak için fonksiyonu yazıyoruz
function alanHesapla(r){
    alan = pi*(r*r);
    return alan;
}

//Çemberin çevresini hesaplamak için fonksiyonu yazıyoruz
function cevreHesaplama(r){
    cevre = 2*pi*r;
    return cevre;
}

//Ekrandan çember yarıçapını girmesini istiyoruz
r = Number(prompt("Çemberin yarıçapını(r) giriniz:"));

//Ekrana document.write ile yazdırıyoruz
document.write("Çemberin Alanı: " + alanHesapla(r) + " birimdir<br>" + "Çemberin Çevresi: " + cevreHesaplama(r) + " birimdir");
