import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [curQuez, setCurQuez] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[curQuez].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurQuez(curQuez + 1);
  };

  const finishQuiz = () => {
    if (Questions[curQuez].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[curQuez].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[curQuez].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[curQuez].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[curQuez].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[curQuez].optionD}
        </button>
      </div>

      {curQuez == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
