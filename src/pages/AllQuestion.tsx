import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Middle from "../layout/Middle";

const AllQuestion = ()=>{
    const navigate = useNavigate()
    return(
        <><Header />
        <Middle />
        </>
    )
}
export default AllQuestion;