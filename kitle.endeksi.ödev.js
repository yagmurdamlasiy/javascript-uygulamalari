let kilo=Number(prompt("Kilonuzu giriniz:"));
let boy=Number(prompt("Boyunuzu giriniz:"));
let kitleEndeksi=kilo/(boy*boy);
if(kitleEndeksi<18.5){
    alert("İDEAL KİLO'NUN ALTINDASINIZ");
}
else if(kitleEndeksi>=18.5 && kitleEndeksi<24.9){
    alert("İDEAL KİLO ARALIĞINDASINIZ");
}
else if(kitleEndeksi>=25 && kitleEndeksi<29.9){
    alert("İDEAL KİLO'NUN ÜSTÜNDESİNİZ");
}
else if(kitleEndeksi>=30 && kitleEndeksi<39.9){
    alert("OBEZİTE");
}
else if(kitleEndeksi>=40){
    alert("İDEAL KİLO'NUN ÇOK ÜSTÜNDESİNİZ");
}