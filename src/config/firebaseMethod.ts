import { db } from './firebaseConfig';
import { ref, set, push , onValue , get} from 'firebase/database';

type Question = {
  id: string;
  question: string;
}


export const addQuestion = async (question: string): Promise<string | undefined> => {
  try {
    const newQuestionRef = push(ref(db, 'questions'));
    await set(newQuestionRef, { question });
    return newQuestionRef.key || undefined; 
  } catch (e) {
    console.error("Error adding document: ", e);
    return undefined;
  }
};


export const getQuestions = async (): Promise<Question[]> => {
  const questionsRef = ref(db, 'questions');
  return new Promise((resolve, reject) => {
    onValue(
      questionsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const questions: Question[] = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          resolve(questions);
        } else {
          resolve([]);
        }
      },
      (error) => {
        reject(error);
      }
    );
  });
};


export const getQuestion = async (id: string): Promise<Question | null> => {
  const questionRef = ref(db, `questions/${id}`);
  return new Promise((resolve, reject) => {
    get(questionRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          resolve({ id, ...snapshot.val() });
        } else {
          console.log('No document');
          resolve(null);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
