var arr_nom = [];
var arr_monto=[];
function addEntry(){
    if((document.getElementById("nombre").value) !== "" && (document.getElementById("plata")).value !== ""){     /*si no es un string vacio, ejecuta el codigo*/
        arr_nom.push(document.getElementById("nombre").value);
        arr_monto.push(Number(document.getElementById("plata").value));
        console.log(arr_nom,arr_monto);
    }
    else{
        alert("¡No se han completado los campos!");
    }
    strToList();
    total();
};
function restart(){
    globalThis.arr_nom=[];
    globalThis.arr_monto=[];
    console.log(arr_nom,arr_monto);
    document.getElementById("list").innerHTML = "";
    document.getElementById("total").innerText = "";
    document.getElementById("prom").innerText = "";
}

function strToList(){
    var lstr=""          
    for(let i = 0; i < arr_nom.length; i++){
        lstr = lstr + "<li>" + arr_nom[i] +": $"+ arr_monto[i] + "</li>" ;
        document.getElementById("list").innerHTML = lstr; 
    };
}

function total(){
    var total = 0
    for (let i = 0; i < arr_monto.length; i++) {
        var total = total += arr_monto[i];
    };
    var prom = total/arr_nom.length;
    document.getElementById("total").innerText = "El total es: $" + total;
    document.getElementById("prom").innerText = "A cada uno le toca aportar: $" + prom;
}
