import React, { useEffect, useState } from 'react';
import { getQuestions } from '../config/firebaseMethod';

const Middle = () => {
  const [questions, setQuestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        const formattedQuestions = data.map((q, index) => ({
          id: q.id,
          question: q.question,
          className: `part-${index + 1}`,
        })).map(q => q.question);

        setQuestions(formattedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="container my-5">
      <div className="main p-4">
        {questions.map((question, index) => (
          <div key={index} className={`m-3 w-75 border rounded border-secondary shadow part-${index + 1}`} style={{ backgroundColor: '#BDD3F7', height: '50px' }}>
            <div className="p-2">{question}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
