import { Link, useNavigate } from 'react-router-dom'; 


export default function Header(){
    const navigate = useNavigate();    

    return(
        <div>
            <button onClick={()=>navigate("/")}>About Us</button>
            <button onClick={()=>navigate("/team")}>Team</button>
            <button onClick={()=>navigate("/events")}>Events</button>
            <button onClick={()=>navigate("/jobboard")}>Job Board</button>

        </div>
    )
}