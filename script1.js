function ajanlat()
{
var a=(document.getElementById("leves").value);
var b=(document.getElementById("foetel").value);
var c=(document.getElementById("ital").value);
var osszeg=990
var kedvezmeny_ar=0
var kedvezmeny_erteke

//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript innen vettem a függvényt, de megértettem a működését :)
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var kupon=makeid(6)

if (b=="sali"){
    osszeg=osszeg+1890;
}
if (b=="etel"){
    osszeg=osszeg+2490;
}
if (c=="udt"){
    osszeg=osszeg+590;
}
if (c=="lmn"){
    osszeg=osszeg+1290;
}
if (c=="kv"){
    osszeg=osszeg+1290;
}
if (c=="tea"){
    osszeg=osszeg+890;
}

kedvezmeny_erteke=Math.round(osszeg*0.15);
kedvezmeny_ar=osszeg-kedvezmeny_erteke;

alert("A menüajánlata elkészült!\nAz igénybevételéhez csak mutassa be az alábbi kuponkódot a kasszánál: " + kupon + "\nAz ajánlat ára: " + kedvezmeny_ar + "Ft\nA megspórolt pénzösszeg: " + kedvezmeny_erteke + "Ft");

}