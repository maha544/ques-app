import React, { useEffect, useState } from 'react';
import { getQuestions } from '../config/firebaseMethod';
import Header from '../layout/Header';
import Middle from '../layout/Middle';

type Question  = {
  id: string;
  question: string;
}

const AllQuestion = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Question[] = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Middle />
    </>
  );
};

export default AllQuestion;
