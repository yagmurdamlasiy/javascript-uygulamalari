let mevsim=prompt("İlkbahar, sonbahar,yaz, kış");
switch(mevsim.toLowerCase())
{
    case"kış":
        alert("kayak yapabilirsiniz");
        break;
    case"yaz":
        alert("denize girebilirsiniz");
        break;
    case"sonbahar":
        alert("yaprak toplayabilirsiniz");
        break;
    case"ilkbahar":
        alert("Doğa yürüyüşü yapabilirsiniz");
        break;
    default:
        alert("Geçersiz mevsim girdiniz");
        break;
}