var x = "";
var m = "";
setTimeout(clear_e, 0);
function clear_e() {
    document.getElementById("ekran_a").innerHTML = "";
    document.getElementById("ekran_b").innerHTML = "";
    document.getElementById("znak").innerHTML = "";
}

function liczba(x) {
    var y = document.getElementById("ekran_a").innerHTML;
    var z = 0;
    for (i = 0; i < y.length; i++) {
        var a = y.substring(i, i + 1);
        if (a == 1 || a == 2 || a == 3 || a == 4 || a == 5 || a == 6 || a == 7 || a == 8 || a == 9 || a == 0) {
            z++;
        }
    }
    if (z < 10) {
        if (y.length == 0 && x == "0") {
            document.getElementById("ekran_a").innerHTML = x;
        }
        else {
            if (y.length == 1 && y == "0") {

            }
            else {
                document.getElementById("ekran_a").innerHTML = y + x;
            }
        }
    }
}
function kropka() {
    var y = document.getElementById("ekran_a").innerHTML;
    if (y != '') {
        var z = 0;
        for (i = 0; i < y.length; i++) {
            if (y.substring(i, i + 1) == ".") {
                z++;
            }
        } if (z == 0) {
            document.getElementById("ekran_a").innerHTML = y + ".";
        }
    }
}
function back() {
    var y = document.getElementById("ekran_a").innerHTML;
    if (y != "") {
        var a = y.length;
        document.getElementById("ekran_a").innerHTML = y.substring(0, a - 1);
    }
}
function znak(m) {
    var y = document.getElementById("ekran_b").innerHTML;
    var c = document.getElementById("znak").innerHTML;
    var v = document.getElementById("ekran_a").innerHTML;
    if (c != "" && y != "" && v != "") {
        wynik(c)
        var t = document.getElementById("ekran_a").innerHTML;
        document.getElementById("ekran_b").innerHTML = t;
        document.getElementById("ekran_a").innerHTML = "";
        document.getElementById("znak").innerHTML = m;
    }
    if (v != "" && y == "" && c == "") {
        document.getElementById("znak").innerHTML = m;
        document.getElementById("ekran_a").innerHTML = "";
        document.getElementById("ekran_b").innerHTML = v;
    }
    if (c != "" && v == "" && y !== "") {
        document.getElementById("znak").innerHTML = m;

    }

}
function wynik() {
    var y = document.getElementById("ekran_b").innerHTML;
    var c = document.getElementById("znak").innerHTML;
    var v = document.getElementById("ekran_a").innerHTML;
    var w;
    if(y!="" && c!="" && v!="") {
        var t=parseFloat(y);
        var u=parseFloat(v);
        if(c=="*"){
            w=t*u;
        }
        if(c=="/"){
            w=t/u;
        }
        if(c=="+"){
            w=t+u;
        }
        if(c=="-"){
            w=t-u;
        }
        document.getElementById("znak").innerHTML = "";
        document.getElementById("ekran_b").innerHTML = "";
        w = w.toString();
        var p=parseInt(0);
        var r=parseInt(w);
        for(j=0;j<w.length;j++) {
            if(w.substring(j,j+1)=="."){
                p++
            }
        }
        if(r>999999999){
            document.getElementById("ekran_a").innerHTML = "za duża liczba";   
            setTimeout(clear_e, 1500);
        }
        else{
            if(w.length<=10+p){
            document.getElementById("ekran_a").innerHTML = w.substring(0,10+p);
            }
            else{
                document.getElementById("ekran_a").innerHTML = w.substring(0,10+p);
            }

        }
    }
}