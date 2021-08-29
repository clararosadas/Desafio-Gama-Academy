function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
         var digitos = cpf.substring(9);
         var soma = 0
         for (var i = 10; i > 1; i--) {
             soma += numeros.charAt(10 - i) * i
            }
    
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    
        if (resultado != digitos.charAt(0)) {
            return false;
        }
    
        soma = 0;
        numeros = cpf.substring(0, 10);
    
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
    
function validacaoCPF() {
    let cpf = document.getElementById('cpf').value;
    
    let resultadoValidacao = validaCPF(cpf);
    
    if (!resultadoValidacao) {
        return false;
    } else {
        return true;
    }
}
    
document.getElementById('cpf').addEventListener('focusout', validacaoCPF);

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparFormulario();

    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
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

const formulario = () => {
    let form = {
        nome: document.getElementById('nome').value, 
        datanascimento: document.getElementById('datanascimento').value, 
        cargo: document.getElementById('cargo').value,  
        estadocivil: document.getElementById('estadocivil').value, 
        genero: document.getElementById('genero').value, 
        cep: document.getElementById('cep').value, 
        endereco: document.getElementById('endereco').value, 
        numero: document.getElementById('numero').value, 
        complemento: document.getElementById('complemento').value, 
        bairro: document.getElementById('bairro').value, 
        cidade: document.getElementById('cidade').value, 
        uf: document.getElementById('uf').value, 
        celular: document.getElementById('celular').value, 
        alternativo: document.getElementById('alternativo').value, 
        email: document.getElementById('email').value, 
        id: document.getElementById('id').value, 
        cpf: document.getElementById('cpf').value, 
        veiculo: document.getElementById('veiculo').value, 
        habilitacao:document.getElementById('habilitacao').value, 
    };
    console.log(form);
    return form
}

const criar = async (candidato) => {
    try {
        const usuario = fetch('https://jobsnetback.herokuapp.com/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formulario())
        });
        if (usuario.status === 200) {
            alert('Foi')
        }
    } catch (error) {
        alert('Não foi')
    }
}  

function check() {
        let nome = document.getElementById('nome').value;
        let cargo = document.getElementById('cargo').value;
        let datanascimento = document.getElementById('datanascimento').value;
        let cep = document.getElementById('cep').value;
        let endereco = document.getElementById('endereco').value;
        let numero = document.getElementById('numero').value;
        let bairro = document.getElementById('bairro').value;
        let cidade = document.getElementById('cidade').value;
        let uf = document.getElementById('uf').value;
        let celular = document.getElementById('celular').value;
        let email = document.getElementById('email').value.mata;
        let id = document.getElementById('id').value;
    
        if (nome == "" || cargo == "" || datanascimento == "" || cep == "" || endereco == ""
            || numero == "" || bairro == "" || cidade == "" || uf == "" || celular == "" ||
            email == false || id == "" || validacaoCPF() == false) {
            alert('Por favor, preencha todos os campos corretamente.');
        } else {
            criar();
            alert('verificando cadastro...');
        }
    }