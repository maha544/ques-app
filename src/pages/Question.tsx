import React, { useEffect, useState } from 'react';
import { getQuestion } from '../config/firebaseMethod';
import { useParams } from 'react-router-dom';

const Question = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [question, setQuestion] = useState<{ id: string; question: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await getQuestion(id);
        setQuestion(data);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Question Details</h1>
      {question ? <div>{question.question}</div> : <div>Loading...</div>}
    </div>
  );
};

export default Question;
