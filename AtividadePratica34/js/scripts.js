window.onload = function(){
    console.log('Carregando JavaScript...');
    let viagem = []
    localStorage.setItem("viagem", JSON.stringify(viagem));
}

function salvar(event){
    event.preventDefault();
    let codigoviagem = document.getElementById('codigoviagem');
    let nomepacote = document.getElementById('nomepacote');
    let diarias = document.getElementById('diarias');
    let dataida = document.getElementById('dataida');
    let dataretorno = document.getElementById('dataretorno');
    let statuspedido = document.getElementById('statuspedido');
    let statuspagamento = document.getElementById('statuspagamento');

    viagem = { "codigoviagem": codigoviagem.value, "nomepacote": nomepacote.value, "diarias": diarias.value, "dataida": dataida.value, "dataretorno": dataretorno.value, "statuspedido": statuspedido.value, "statuspagamento": statuspagamento.value };

    let viagens = JSON.parse(localStorage.getItem("viagem"));
    viagens.push(viagem);
    localStorage.setItem("viagem", JSON.stringify(viagens));

    carregaTabela();
}

function carregaTabela(){
    let tbody = document.getElementById("corpo-tabela");
    let viagem = JSON.parse(localStorage.getItem("viagem"));
    tbody.innerHTML = "";
    viagem.forEach(v => {
        tbody.innerHTML += "<tr>"
                        +"<td>"+ v["codigoviagem"] +"</td>"
                        +"<td>"+ v["nomepacote"] +"</td>"
                        +"<td>"+ v["diarias"] +"</td>"
                        +"<td>"+ v["dataida"] +"</td>"
                        +"<td>"+ v["dataretorno"] +"</td>"
                        +"<td>"+ v["statuspedido"] +"</td>"
                        +"<td>"+ v["statuspagamento"] +"</td>"                        
                       +"</tr>";
    });    
}