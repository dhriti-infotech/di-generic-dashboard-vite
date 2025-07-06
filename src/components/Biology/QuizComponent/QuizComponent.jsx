import React, { useEffect, useState } from "react";
import "./QuizComponent.css";

// Example subject-wise question bank
const questionBank = {
  Biology: [
    {
      question: "What is the basic unit of life?",
      options: ["Tissue", "Cell", "Organ", "Organism"],
      answer: "Cell",
    },
    {
      question: "Which of the following is a prokaryotic organism?",
      options: ["Bacteria", "Fungi", "Plant", "Animal"],
      answer: "Bacteria",
    },
    {
      question: "Biology is the study of?",
      options: ["Rocks", "Weather", "Life", "Chemicals"],
      answer: "Life",
    },
    {
      question: "Which level comes after 'cells'?",
      options: ["Atoms", "Tissues", "Organs", "Organisms"],
      answer: "Tissues",
    },
    {
      question: "Which organelle is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
      answer: "Mitochondria",
    },
    {
      question: "DNA stands for?",
      options: [
        "Deoxyribonucleic Acid",
        "Dinucleic Acid",
        "Dioxyribose Acid",
        "Dicarbo Nucleic Acid",
      ],
      answer: "Deoxyribonucleic Acid",
    },
    {
      question: "Mushrooms belong to which kingdom?",
      options: ["Plantae", "Fungi", "Animalia", "Protista"],
      answer: "Fungi",
    },
    {
      question: "Osmosis is the movement of?",
      options: ["Water", "Gases", "Proteins", "Salts"],
      answer: "Water",
    },
    {
      question: "Photosynthesis happens in?",
      options: ["Roots", "Stem", "Flowers", "Leaves"],
      answer: "Leaves",
    },
    {
      question: "Who is the father of biology?",
      options: [
        "Charles Darwin",
        "Gregor Mendel",
        "Aristotle",
        "Alexander Fleming",
      ],
      answer: "Aristotle",
    },
  ],
  Physics: [
    {
      question: "What is the unit of force?",
      options: ["Joule", "Pascal", "Newton", "Watt"],
      answer: "Newton",
    },
    {
      question: "Speed = ?",
      options: ["Mass/Time", "Distance/Time", "Energy/Time", "Force/Area"],
      answer: "Distance/Time",
    },
    // Add more physics questions...
  ],
};

const QuizComponent = ({ subject = "Biology", onBack }) => {
  const TOTAL_TIME = 120; // seconds

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    // Randomize and select 10 questions
    const shuffled = [...questionBank[subject]].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));

    // Timer logic
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [subject]);

  const handleOptionChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = (auto = false) => {
    if (!submitted) {
      setSubmitted(true);
      const score = questions.reduce(
        (acc, q, i) => (answers[i] === q.answer ? acc + 1 : acc),
        0
      );
      const result = {
        subject,
        score,
        total: questions.length,
        timestamp: new Date().toLocaleString(),
      };
      localStorage.setItem(`quiz-${subject}`, JSON.stringify(result));
    }
  };

  const calculateScore = () =>
    questions.reduce((score, q, i) => {
      if (answers[i] === q.answer) score++;
      return score;
    }, 0);

  return (
    <div className="quiz-wrapper">
      <div className="quiz-header">
        <button onClick={onBack} className="back-btn">← Back</button>
        <h2>{subject} Quiz</h2>
        {!submitted && (
          <div className="timer">
            ⏳ Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
          </div>
        )}
      </div>

      {!submitted ? (
        <>
          {questions.map((q, index) => (
            <div key={index} className="quiz-question">
              <p>{index + 1}. {q.question}</p>
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
          <button className="submit-btn" onClick={() => handleSubmit()}>
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
                <strong>{q.question}</strong><br />
                Your answer:{" "}
                <span className={answers[i] === q.answer ? "correct" : "incorrect"}>
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

export default QuizComponent;
