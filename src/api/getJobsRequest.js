export default () =>{
    return fetch(`http://localhost:3001/jobs`, 
    {
        method: "GET",
        
    })
    .then(response=>response.json())
}