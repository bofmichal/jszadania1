//zadanie 1

function klik1(){
    var nazwa=document.getElementById("zad1").value;
    document.getElementById("wynik1").innerHTML=nazwa;
}
//zadanie2
function klik2(){
    var liczba1=parseFloat(document.getElementById("zad2").value);
    var liczba2=parseFloat(document.getElementById("zad22").value);
    var dodawanie=liczba1+liczba2;
    var odejmowanie=liczba1-liczba2;
    var mnozenie=liczba1*liczba2;
    var dzielenie=liczba1/liczba2;
    var reszta=liczba1%liczba2;
    document.getElementById("dodawanie").innerHTML=dodawanie;
    document.getElementById("odejmowanie").innerHTML=odejmowanie;
    document.getElementById("mnozenie").innerHTML=mnozenie;
    document.getElementById("dzielenie").innerHTML=dzielenie;
    document.getElementById("reszta").innerHTML=reszta;
}
//zadanie2*
function losowanie(){
    var los1=(Math.floor(Math.random()*20)+1);                     
    var los2=(Math.floor(Math.random()*20)+1);                
    var dodawanie=los1+los2;
    var odejmowanie=los1-los2;
    var mnozenie=los1*los2;
    var dzielenie=los1/los2;
    var reszta=los1%los2;
    document.getElementById("out1").innerHTML=los1;
    document.getElementById("out2").innerHTML=los2;
    document.getElementById("dodawaniea").innerHTML=dodawanie;
    document.getElementById("odejmowaniea").innerHTML=odejmowanie;
    document.getElementById("mnozeniea").innerHTML=mnozenie;
    document.getElementById("dzieleniea").innerHTML=dzielenie;
    document.getElementById("resztaa").innerHTML=reszta;
}
//zadanie 3
function rzut(){
    var los=(Math.floor(Math.random()*6)+1);
    document.getElementById("out3").innerHTML=los;
}
//zadanie 3*
function losuj(){
    var od1=parseInt(document.getElementById("pod").value);
    var do2=parseInt(document.getElementById("pdo").value);
    var losuj1=Math.floor(Math.random()*(do2-od1+1))+od1;                  
    document.getElementById("wylosowana").innerHTML=losuj1;
    if(od1>do2){
        alert("druga liczba musi byc widksza");
    }
}
//zadanie4
function cmnacal(){
    var cm=parseFloat(document.getElementById("centy").value);
    var cmnacal=cm/2.54;
    document.getElementById("wynikcal").innerHTML="cm na cal to: "+cmnacal+"cala";
}
function calnacm(){
    var cal=parseFloat(document.getElementById("cale").value);
    var calnacm=cal*2.54;
    document.getElementById("wynikcm").innerHTML="cal na cm to: "+calnacm+"cm";
}
//zadanie 5
var poczatkowa=0;
    
function wplac(){
     var kwota=parseFloat(document.getElementById("kwota").value);   
    poczatkowa +=kwota;
    
    document.getElementById("saldo").innerHTML=poczatkowa;
}
function wyplac(){
     var kwota=parseFloat(document.getElementById("kwota").value);   
    poczatkowa -=kwota;
    
    document.getElementById("saldo").innerHTML=poczatkowa;
    if (poczatkowa<=0){
        document.getElementById("saldo").innerHTML="nie masz już pieniędzy!";
    }
}
