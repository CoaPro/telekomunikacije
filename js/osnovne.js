document.getElementsByClassName("predmeti")[0].style.display = "none"; 
document.getElementsByClassName("prvaGodina")[0].style.visibility = "hidden";


prikaziGodinu()
{
 var a = document.getElementById("izbor_godine");
 var aa = a.options[a.selectedIndex].text;

 if(aa == "Prva")
 {
    document.getElementsByClassName("prvaGodina")[0].style.display = "block"; 
 }

}
