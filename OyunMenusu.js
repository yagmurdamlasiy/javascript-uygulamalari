let secim;
let bakiye=1000;
 do{
    secim=prompt(`
    OYUN MENÜSÜ
    ===========
    1- Para yatır
    2- Para çek
    3- Bakiye görüntüle
    4- Çıkış
    ===========
    Seçiniz(1-4):
`);
 switch(secim)  
{
     case "1":
        let yatirilan=Number(prompt("Yatırılacak tutar:"));
        if(yatirilan>0)
        {
             bakiye+=yatirilan;
             alert(yatirilan+" TL yatırıldı . Yeni bakiye: "+bakiye+" TL")
        } 
        break;
        case "2":
            let cekilen=Number(prompt("Çekilecek tutar:"));
            if(cekilen>0 && cekilen<=bakiye)
            {
                 bakiye-=cekilen;
                 alert(cekilen+" TL çekildi . Yeni bakiye: "+bakiye+" TL")
            }
            else{
                alert("Yetersiz bakiye veya geçersiz tutar!")
            }
            break;
        case "3":
            alert("Mevcut bakiyeniz: "+bakiye+" TL");
            break;
        case "4":
            alert("Çıkış yapılıyor...");
            break;
          default:
            alert("Geçersiz seçim!");
 }
}while(secim!="4");