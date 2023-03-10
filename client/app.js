var glosowanie
async function getData(){
    const data = await fetch("http://localhost:3000/select")
    glosowanie = await data.json()
    console.log(glosowanie)
}
getData()

async function glosuj(){
    const PESEL = document.getElementById("inputpesel").value
    const nr_kandydata = document.getElementById("inputnrkandydata").value  
    const data = await fetch(`http://localhost:3000/glosuj/${PESEL}/${nr_kandydata}`)
    getData()
}
