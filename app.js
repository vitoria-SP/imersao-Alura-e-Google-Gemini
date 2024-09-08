//console.log (dados); //referencia a variavel dados que está guardando as informações 

//função buscar chamada pelo onclick
function buscar(){
    
    let section = document.getElementById("resultados"); //o section está rebendo por id as informações que iram aparecer dentro do html
    let campoPesquiza = document.getElementById("pesquiza").value //o campo pesquiza está recendo por id as informações digitadas no input pesquiza dentro do html por meio de valores  

    //Se o campo pesquiza não receber nada esse if será execultado
    if(!campoPesquiza){
        resultados= "Sem informações. Você não digitou o nome de nenhuma trança! "//mostrar essa mensagem dentro  do html
        return // se esse if for execultado a função vai parar aqui 

    }

    campoPesquiza = campoPesquiza.toLowerCase() //Apesquiza fica minusculo
   
//variaveis sendo declaradas e recendo vazio 
let resultados = "";
let imagem = "";
let titulo = "";
let descricao = "";
let link = "";
let tags = "";



//Vai rodar por esse codigo até que umas das expecficações sejam atendidas 
for (let dado of dados) { //dado recebedno as informações que estam dentro de dados 
    titulo = dado.titulo.toLowerCase() //titulo fica minusculo
    descricao = dado.descricao.toLowerCase() //descrição fica minusculo
    tags = dado.tags.toLowerCase()
   

    //dado inclui as informações que são digitas dentro de campo pesquiza, e precisamos de de dois eu coloco o || para representar o OU
    if (titulo.includes(campoPesquiza) || descricao.includes(campoPesquiza) || tags.includes(campoPesquiza)){
        //resultados vai receber a seguinte forma de representação em html, e como precisa repetir eu coloco o + antes do = que representar o receber
        resultados += `
        <div class="item-resultado ">
            
            <img src="${dado.imagem}" alt="${dado.imagem}" class="imagem-resultado flex-item"">
             <div class="corpo">
                <h2>
                    <a href="#" target="_blank">${titulo}</a>
                </h2>
                <p>${descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais  </a>
            </div>
        </div>`
    
    };

}
//caso resultados receber algo que não está no banco ele vai execultar esse if 
if(!resultados ){
    resultados = "<p>Esse estilo de trança não está no nosso banco </p>"

}

// o section vai receber e colocar no html as informações vindas da variavel resultados 
section.innerHTML = resultados; 

}


