//fibonacci için fonksiyon oluşturuyoruz
function fibonacci(n){
    let fibonacciDizisi = [0,1]; //ilk iki sayıyı ekliyoruz

    for(let i = 2; i < n; i++){
        let yeniSayi = fibonacciDizisi[i - 1] + fibonacciDizisi[i - 2];
        fibonacciDizisi.push(yeniSayi); //Yeni fibonacci sayısını diziye ekle
    }

    return fibonacciDizisi;
}


//kullanıcıya kaç terim istediğini soralım
let terimSayisi = Number(prompt("Kaç terimlik fibonacci dizisi istersiniz?"));
let sonuc = fibonacci(terimSayisi);

//ekrana yazalım
document.write("Fibonacci Dizisi: " + sonuc.join(", "));