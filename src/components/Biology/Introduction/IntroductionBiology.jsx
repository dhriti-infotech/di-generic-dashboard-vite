import React, { useState } from "react";
import "./IntroductionBiology.css";

const questions = [
  {
    question: "1. What is the basic unit of life?",
    options: ["Tissue", "Cell", "Organ", "Organism"],
    answer: "Cell",
  },
  {
    question: "2. Which of the following is a prokaryotic organism?",
    options: ["Bacteria", "Fungi", "Plant", "Animal"],
    answer: "Bacteria",
  },
  {
    question: "3. Biology is the study of?",
    options: ["Rocks", "Weather", "Life", "Chemicals"],
    answer: "Life",
  },
  {
    question: "4. Which level of organization comes after 'cells'?",
    options: ["Atoms", "Tissues", "Organs", "Organisms"],
    answer: "Tissues",
  },
  {
    question: "5. Which organelle is known as the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
    answer: "Mitochondria",
  },
  {
    question: "6. What does DNA stand for?",
    options: [
      "Deoxyribonucleic Acid",
      "Dinucleic Acid",
      "Dioxyribose Acid",
      "Dicarbo Nucleic Acid",
    ],
    answer: "Deoxyribonucleic Acid",
  },
  {
    question: "7. Which kingdom does a mushroom belong to?",
    options: ["Plantae", "Fungi", "Animalia", "Protista"],
    answer: "Fungi",
  },
  {
    question: "8. What is osmosis?",
    options: [
      "Movement of water",
      "Movement of gases",
      "Cell division",
      "Protein synthesis",
    ],
    answer: "Movement of water",
  },
  {
    question: "9. Photosynthesis mainly occurs in?",
    options: ["Roots", "Stem", "Flowers", "Leaves"],
    answer: "Leaves",
  },
  {
    question: "10. Which scientist is known as the father of modern biology?",
    options: [
      "Charles Darwin",
      "Gregor Mendel",
      "Aristotle",
      "Alexander Fleming",
    ],
    answer: "Aristotle",
  },
];

const IntroductionBiologyQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    return questions.reduce((score, q, i) => {
      if (answers[i] === q.answer) score++;
      return score;
    }, 0);
  };

  return (
    <div className="bio-quiz">
      <h2>🧪 Introduction to Biology Quiz</h2>

      {!submitted ? (
        <>
          {questions.map((q, index) => (
            <div key={index} className="quiz-question">
              <p>{q.question}</p>
              <div className="options">
                {q.options.map((opt) => (
                  <label key={opt} className="option-label">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={opt}
                      checked={answers[index] === opt}
                      onChange={() => handleOptionChange(index, opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button className="submit-btn" onClick={handleSubmit}>
            Submit Quiz
          </button>
        </>
      ) : (
        <div className="quiz-result">
          <h3>✅ Quiz Completed!</h3>
          <p>
            You scored <strong>{calculateScore()}</strong> out of{" "}
            <strong>{questions.length}</strong>.
          </p>
          <ul className="review-list">
            {questions.map((q, i) => (
              <li key={i}>
                <strong>{q.question}</strong>
                <br />
                Your answer:{" "}
                <span
                  className={
                    answers[i] === q.answer ? "correct" : "incorrect"
                  }
                >
                  {answers[i] || "Not answered"}
                </span>
                {answers[i] !== q.answer && (
                  <>
                    <br />
                    Correct answer: <span className="correct">{q.answer}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IntroductionBiologyQuiz;
