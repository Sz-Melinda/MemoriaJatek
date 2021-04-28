
var kepekTomb = ["kep9.jpg", "kep8.jpg", "kep7.jpg", "kep6.jpg", "kep5.jpg", "kep4.jpg", "kep3.jpg", "kep20.jpg", "kep2.jpg", "kep19.jpg",
                 "kep9.jpg", "kep8.jpg", "kep7.jpg", "kep6.jpg", "kep5.jpg", "kep4.jpg", "kep3.jpg", "kep20.jpg", "kep2.jpg", "kep19.jpg"];

var kepekAltTomb = ["lila szörny", "sárga szörny", "lila szörny", "sárga szörny", "lila szörny", "sárga szörny", "lila szörny", "sárga szörny", "lila szörny", "sárga szörny",
                    "lila szörny", "sárga szörny", "lila szörny", "sárga szörny", "lila szörny", "sárga szörny", "lila szörny", "sárga szörny", "lila szörny", "sárga szörny"];


var kattintottKepek = [];

var szamlalo = 0;

/*------------------------------------------------------------------------------------------*/

$(function(){
    
    //console.log("Memória Játék");
    
    for (var i = 0; i < kepekTomb.length; i++) {
        
        //$("article").append('<img src="kepek/' + kepekTomb[i] + '" alt=""/>');
        
        $("article").append('<img/>');
        
        $("article img").eq(i).attr("src", "kepek/hatter.jpg");
        $("article img").eq(i).attr("alt", "szornyhatter");
        $("article img").eq(i).attr("id", i);
        $("article img").click(kattint);
    }
    
    $("article img").click(kattint);
    
});

/*------------------------------------------------------------------------------------------*/

function kattint(){
    
    var id = $(this).attr("id");
    //console.log(id);
    
    $(this).attr("src", "kepek/" + kepekTomb[id]);
    $(this).attr("alt" + kepekAltTomb[id]);
    
    szamlalo += 1;
    //console.log(szamlalo);
    
    kattintottKepek[szamlalo] = id;
    
    if(szamlalo === 2){
        
        // hatter.jpg visszaállítása ha, külömbözőek vannak felfordítva
       //ha egyformák, akkor eltűnnek
       
       if(kepekTomb[kattintottKepek[1]] === kepekTomb[kattintottKepek[2]]){
           
           $("article img").eq(kattintottKepek[1]).attr("src", "");
           $("article img").eq(kattintottKepek[2]).attr("src", "");
           
       }else{

           setTimeout(visszafordit, 1000);
       }
       
    }
}

function visszafordit(){
    
    $("article img").eq(kattintottKepek[1]).attr("src", "kepek/hatter.jpg");
    $("article img").eq(kattintottKepek[2]).attr("src", "kepek/hatter.jpg");
}