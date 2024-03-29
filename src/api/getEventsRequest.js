export default (arg) =>{
    return fetch(`http://localhost:3001/`, 
    {
        method: "GET",
        
    })
    .then(response=>response.json())
}