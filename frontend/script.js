//Pesquisa CEP

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparFormulario();

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')) {
        document.getElementById('endereco').value = 'CEP não encontrado';  
        } else {
        preencherFormulario(endereco);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto';  
    }

    
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

// Validação CPF

function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);
       
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        
        if (resultado != digitos.charAt(1)) {
            return false;
        }
        return true;
    };
}
document.getElementById('cpf').addEventListener('focusout', validaCPF);

function validacao() {
    let cpf = document.getElementById('cpf').value;

    let resultadoValidacao = validaCPF(cpf);

    if (!resultadoValidacao) {
        document.getElementById('erroCPF').style.display = 'block';
        document.getElementById('erroBlocoCPF').style.border = '.1875rem solid red';
        return false;
    } else {
        document.getElementById('erroCPF').style.display = 'none';
        document.getElementById('erroBlocoCPF').style.border = 'none';
        return true;
    }
}

//Fetch

async function getContent() {
    try {
    const response = await fetch('http://localhost:5000/')
    const data = await response.json()

    show(data)

    } catch (error) {
        console.error(error)
    }
}
getContent()

function show(users) {

    let output = ''

    for( let user of users) {
        output += `<li>${user.name}</li>`
    }

    document.querySelector('main').innerHTML = output
}