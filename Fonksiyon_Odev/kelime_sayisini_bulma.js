//Kullanıcıdan bir cümle girmesini isteyelim ve bunu bir değişkene atalım
let cumle = prompt("Bir cümle giriniz:");

//Kullanıcıdan aldığımız cümleyi boşluklarına göre ayıralım
let kelimeler = cumle.split(" ").filter(function(kelime){
    return kelime.trim() !== ""; //Boş kelimeleri diziden çıkartalım
});

//Cümledeki kelime sayısını hesaplayalım
function kelimeSayisi(dizi){
    return dizi.length; //Direkt dizinin uzunluğunu döndürüyoruz
}

//Sonucu ekrana yazdıralım
document.write("Girdiğiniz cümle: " + cumle + "<br>Cümledeki kelime sayısı: " + kelimeSayisi(kelimeler) );
