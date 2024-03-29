export default (job)=>{
    return fetch(`http://localhost:3001/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: job.title,
            date: job.date,
            bio: job.bio,
            location: job.location,
            link: job.link,
            color: job.color,
        })
    })
    .then(response=>response.json())
}