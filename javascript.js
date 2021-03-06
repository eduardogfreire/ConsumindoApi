async function getContent(){
        
    try {
        const response = await fetch('http://localhost:4040/')
        const data = await response.json()

        show(data)

    } catch (error) {
        console.error(error)
    }

}
getContent()

function show(users){
    let output = ''

    for (let user of users){
        output += `<li><ul>Nome : ${user.name}</ul>
                        <ul>Email : ${user.email}</ul>
                        <ul>Endereço : ${user.address.street}</ul>
                        <ul>Número : ${user.address.suite}</ul>
                        <ul>Cidade : ${user.address.city}</ul>
                        <ul>Cep : ${user.address.zipcode}</ul>
                        <ul>Latitude : ${user.address.geo.lat}</ul>
                        <ul>Longitude : ${user.address.geo.lng}</ul>
                        </li>`
        
    }
    document.querySelector('main').innerHTML = output
   
}