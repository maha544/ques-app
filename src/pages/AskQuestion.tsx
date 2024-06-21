import { TextField, Box , Button } from "@mui/material";
import Header from "../layout/Header";
import { useState } from "react";
import { addQuestion } from "../config/firebaseMethod";
import { useNavigate } from "react-router-dom";

const AskQuestion = ()=>{
  const [question , setQuestion] = useState('');
  const navigate = useNavigate();

  const forQuestion = async () => {
    if (question.trim()) {
      await addQuestion(question);
      navigate('/');
    }
  };
    return(
        <><Header />
        <h2 className="m-5">Ask Question</h2>
        <Box sx={{margin:'35px'}}>
              <TextField 
              value={question}
              onChange={(e)=>{setQuestion(e.target.value)}}
              id="outlined-basic" 
              label="Question" 
              placeholder="write your question...."
              variant="outlined"
              sx={{
                width: '60%',
              }} />
              <Box sx={{margin:'20px'}}>
              <Button 
              onClick={forQuestion}
              variant="contained" 
              color="secondary">Enter</Button>
              </Box>
              </Box>
        </>
    )
}
export default AskQuestion;