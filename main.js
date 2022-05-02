
function Convert() {
    //variables
    let restBin = []  //resultado de la conversion de un numero decimal
    let expo = 0
    let TempBinario = []
    let numtemp
    let restDeci  //resultado de la conversion de un numero binario

    let tipo = $("input[name='tipo']:checked").val()
    let numero = document.getElementById("number").value

    //Condiciones       
    if (numero !== "") {
        if (tipo == 1) {
            while (numero > 1) {   //numero  = 1
                restBin.push(numero % 2) //[0,1,0,1]  
                numero = Math.floor(numero / 2)
            }
            restBin.push(numero)
            document.getElementById("resultado").innerHTML = parseInt(restBin.reverse().join(''))
            document.getElementById("message").innerHTML = "";
        } else {
            while (numero !== "") {
                numtemp = (numero.slice(-1,) * 2)
                if (numtemp !== 0) {
                    TempBinario.push(Math.pow(numtemp, expo))
                    numero = numero.slice(0, -1)
                    expo++
                } else {
                    numero = numero.slice(0, -1)
                    expo++
                }
            }
            restDeci = TempBinario.reduce(function (a, b) {
                return a + b;
            }, 0);

            document.getElementById("resultado").innerHTML = restDeci
            document.getElementById("message").innerHTML = "";
        }
    } else {
        document.getElementById("message").innerHTML = "ingrese un numero"

    }

}



function solo_num(evt) {
    let tipo = $("input[name='tipo']:checked").val()
    if (window.event) {
        keynum = evt.charCode;
    } else {
        keynum = evt.which;
    }
    if (tipo == 1) {
        if ((keynum > 47 && keynum < 59) || keynum == 8 || keynum == 13) {
            document.getElementById("message").innerHTML = "";
            return true;

        } else {
            document.getElementById("message").innerHTML = "Caracter no valido"
            return false;
        }
    } else {
        if ((keynum > 47 && keynum < 50) || keynum == 8 || keynum == 13) {
            document.getElementById("message").innerHTML = "";
            return true;

        } else {
            document.getElementById("message").innerHTML = "Caracter no valido"
            return false;
        }
    }
}


function limpiar() {
    document.getElementById("number").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("message").innerHTML = "";
}

//https://es.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals/pre-algebra-exponents/v/powers-of-zero