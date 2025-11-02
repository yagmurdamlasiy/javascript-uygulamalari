let gunlukSayfa=25;
let toplamSayfa=0;
let kitapSayfaSayisi=300;
document.writeln("<u>Kitap Okuma İlerlemesi</u><br>");
for(let i=1; toplamSayfa<kitapSayfaSayisi; i++)
{
    toplamSayfa+=gunlukSayfa;
    if(toplamSayfa>kitapSayfaSayisi)
    {
        toplamSayfa=kitapSayfaSayisi;
    }
    document.writeln(i+". gün :"+toplamSayfa+".sayfa<br>");
}

