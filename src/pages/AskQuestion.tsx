import { TextField, Box , Button } from "@mui/material";
import Header from "../layout/Header";

const AskQuestion = ()=>{
    return(
        <><Header />
        <h2 className="m-5">Ask Question</h2>
        <Box sx={{margin:'35px'}}>
              <TextField 
              id="outlined-basic" 
              label="Question" 
              placeholder="write your any question...."
              variant="outlined"
              sx={{
                width: '60%',
              }} />
              <Box sx={{margin:'20px'}}>
              <Button variant="contained">Enter</Button>
              </Box>
              </Box>
        </>
    )
}
export default AskQuestion;