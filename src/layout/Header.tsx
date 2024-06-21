import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import AskQuestion from "../pages/AskQuestion";

const Header = ()=>{
    const navigate = useNavigate()
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid d-flex justify-content-between">
                <h3 className="navbar-brand mb-0" style={{ padding: '10px', color: '#4B0082', cursor:'pointer'}}>
                    <strong>Ask it</strong>
                    </h3>
                    <div className="collapse navbar-collapse d-flex justify-content-end">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">See List</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">All Answers</a>
                                        </li>
                                        </ul>
                                        <Button variant="contained" size="medium"
                                        onClick={()=> navigate('/askquestion')}>Ask Question</Button>
                                        </div>
                                        </div>
                                        </nav>
                                        </>
    )
}
export default Header;