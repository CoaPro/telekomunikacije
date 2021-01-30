document.getElementsByClassName("predmeti")[0].style.display = "none"; 
//document.getElementsByClassName("prvaGodina")[0].style.display = "none";

/*
prikaziGodinu()
{
 var a = document.getElementById("izbor_godine");
 var aa = a.options[a.selectedIndex].text;

 if(aa == "Prva")
 {
    document.getElementsByClassName("prvaGodina")[0].style.display = "block"; 
 }

}
*/


//document.getElementById("klik1").onclick = function() {prvaGodina()};

function faksDef()
{
   document.getElementsByClassName("faks")[0].style.display = "none";
}


function prvaGodina()
{
 
 document.getElementsByClassName("faks")[0].style.display = "flex";
 document.getElementsByClassName("faks")[0].style.backgroundColor = "yellowgreen";
 document.getElementById("g_opis").innerHTML = "Prva godina"; 
 document.getElementById("p1").innerHTML = "Matematika 1";
 document.getElementById("p2").innerHTML = "Fizika";
 document.getElementById("p3").innerHTML = "Engleski jezik 1";
 document.getElementById("p4").innerHTML = "Osnovi programiranja";
 document.getElementById("p5").innerHTML = "Matematika 2";
 document.getElementById("p6").innerHTML = "Engleski jezik 2";
 document.getElementById("p7").innerHTML = "Inženjersko crtanje primenom računara"; 
 document.getElementById("p8").innerHTML = "Programiranje"; 
 document.getElementById("p9").innerHTML = ""; 

}


function drugaGodina()
{
   const predmet = document.querySelector(".faks a"); 
   const noviEl = document.createElement("a"); 

   document.getElementsByClassName("faks")[0].style.backgroundColor = "orange"; 
   document.getElementById("g_opis").innerHTML = "Druga godina"; 
   document.getElementById("p1").innerHTML = "Matematika 3";
   document.getElementById("p2").innerHTML = "Elektrotehnika";
   document.getElementById("p3").innerHTML = "Verovatnoća i statistika";
   document.getElementById("p4").innerHTML = "Engleski jezik 3";
   document.getElementById("p5").innerHTML = "Osnovi elektronike";
   document.getElementById("p6").innerHTML = "Baze podataka";
   document.getElementById("p7").innerHTML = "Programski jezici"; 
   document.getElementById("p8").innerHTML = "Upravljanje sistemima"; 
   document.getElementById("p9").innerHTML = "Operaciona istraživanja"; 
   /*
   noviEl.innerHTML = "Operaciona istraživanja"; 
   predmet.appendChild(noviEl); 
   parent.prepend(noviEl);
   */

}