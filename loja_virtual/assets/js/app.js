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

let produtoImg = document.getElementById('produtoimg');
let produtoMiniatura = document.getElementsByClassName('produtominiatura');


produtoMiniatura[0].onclick = function(){
    produtoImg.src = produtoMiniatura[0].src;
}
produtoMiniatura[1].onclick = function(){
    produtoImg.src = produtoMiniatura[1].src;
}
produtoMiniatura[2].onclick = function(){
    produtoImg.src = produtoMiniatura[2].src;
}
produtoMiniatura[3].onclick = function(){
    produtoImg.src = produtoMiniatura[3].src;
}

