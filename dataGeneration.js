let users = ''
async function generateUsers(){
    const req = await fetch('http://www.labmatii.ifc-camboriu.edu.br/oob/backend/data_mining/getJson.php?j=nomesIbge')
    const resp = await req.json()
    
    for (let i = 0; i < 300000; i++) {
        const firstName = Math.floor( Math.random() * ((resp.length - 1) + 1)) 
        const lastName = Math.floor( Math.random() * ((resp.length - 1) + 1))
        x = "INSERT INTO usuario (nome, email, senha, qtdMediaFumada, preco) VALUES ('"+resp[firstName].Nome +" "+ resp[lastName].Nome+"', ' "+resp[firstName].Nome.toLowerCase()+"@gmail.com', '"+parseInt(Math.random()*99999999).toString(16)+"', "+parseInt(Math.random()*30)+", "+parseInt(Math.random()*100)/10+");"
        users+=x
    }
    console.log(users)
}

let users = ''
function saidaCigarro(){
    for (let i = 0; i < 300000; i++) {
        x = "INSERT INTO saidaCigarro (idusuario, dataSaida) VALUES ("+parseInt(Math.random()*300000)+",'"+parseInt(Math.random()*29)+"/"+(parseInt(Math.random()*11)+1)+"/2018');"
        users+=x
    }
    console.log(users) 
}


let users = ''
function entradaCigarro(){
    for (let i = 0; i < 300000; i++) {
        x = "INSERT INTO entradaCigarro (idusuario, dataSaida) VALUES ("+parseInt(Math.random()*300000)+",'"+parseInt(Math.random()*29)+"/"+(parseInt(Math.random()*11)+1)+"/2018');"
        users+=x
    }
    console.log(users) 
}