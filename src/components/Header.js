import { Link, useNavigate } from 'react-router-dom'; 


export default function Header(){

    const linkStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "color 2s ease, font-size .7s ease",
    }
    const navigate = useNavigate();   
    
    const banner = {
        zIndex:"1000",
    }

    return(
        <div style = {banner}>
            <button onClick={()=>navigate("/")} style={linkStyle}>About Us</button>
            <button onClick={()=>navigate("/team")} style={linkStyle}>Team</button>
            <button onClick={()=>navigate("/events")} style={linkStyle}>Events</button>
            <button onClick={()=>navigate("/jobboard")} style={linkStyle}>Job Board</button>
        </div>
    )
}