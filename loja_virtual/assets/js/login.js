var menu_itens = document.getElementById("menu-itens");

menu_itens.style.maxHeight = "0px"; 

function menucelular(){
    if(menu_itens.style.maxHeight == "0px"){
        menu_itens.style.maxHeight = "200px";
    }
    else{
        menu_itens.style.maxHeight = "0px";
    }
} 

let entrarpainel = document.getElementById('entrarpainel');
let cadastrosite = document.getElementById('cadastrosite');
let indicador = document.getElementById('indicador');

function cadastro(){
    cadastrosite.style.transform = "translateX(0px)";
    entrarpainel.style.transform = "translateX(0px)";
    indicador.style.transform = "translateX(100px)";
}
function entrar(){
    cadastrosite.style.transform = "translateX(300px)";
    entrarpainel.style.transform = "translateX(300px)";
    indicador.style.transform = "translateX(0px)";
}