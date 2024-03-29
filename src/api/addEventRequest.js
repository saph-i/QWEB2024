export default (event)=>{
    return fetch(`http://localhost:3001/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: event.title,
            date: event.date,
            bio: event.bio,
            location: event.location,
            color: event.color,
        })
    })
    .then(response=>response.json())
}