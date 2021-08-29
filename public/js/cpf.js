console.log("Javascript Carregado");

function validaCPF(inputcpf) {
    // console.log(cpf.length);
    if(inputcpf.length != 11) {
        return false;    
     } else {

        var numeros = inputcpf.substring(0, 9);
        var digitos = inputcpf.substring(9);

        var soma = 0;   
            for (var i = 10; i > 1; i--) {
                soma += numeros.charAt(10 - i) * i;
        }
    
        if (resultado != digitos.charAt(0)) { 
            return false;
        }

        soma = 0;
        numeros = inputcpf.substring(0, 10);
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

            if (resultado != digitos.charAt(1)) {
            return false;
        }
                    
        return true;
    }    
}

function validacao() {
    console.log("Iniciando Validação CPF");
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    var inputcpf = document.getElementById("inputcpf").value;
    
    var resultadoValidacao = validaCPF(inputcpf);

    if(resultadoValidacao) {
        document.getElementById("success").style.display = "block";
    }
    else {
        document.getElementById("error").style.display = "block";
    }
}

