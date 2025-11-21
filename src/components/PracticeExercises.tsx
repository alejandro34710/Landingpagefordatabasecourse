import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code, CheckCircle, XCircle, Lightbulb } from "lucide-react";

export function PracticeExercises() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    {
      question: "¿Qué forma normal elimina dependencias transitivas?",
      options: [
        "Primera Forma Normal (1FN)",
        "Segunda Forma Normal (2FN)",
        "Tercera Forma Normal (3FN)",
        "Forma Normal de Boyce-Codd (BCNF)",
      ],
      correct: 2,
      explanation: "La 3FN elimina las dependencias transitivas, asegurando que los atributos no clave dependan solo de la clave primaria.",
    },
    {
      question: "¿Cuál de estas consultas usa correctamente un INNER JOIN?",
      options: [
        "SELECT * FROM A INNER B ON A.id = B.id",
        "SELECT * FROM A JOIN B WHERE A.id = B.id",
        "SELECT * FROM A INNER JOIN B ON A.id = B.id",
        "SELECT * FROM A, B INNER JOIN A.id = B.id",
      ],
      correct: 2,
      explanation: "La sintaxis correcta es INNER JOIN seguido de la condición ON que especifica cómo se relacionan las tablas.",
    },
  ];

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Practica tus Conocimientos
          </h2>
          <p className="text-xl text-slate-400">
            Ejercicios interactivos para reforzar lo aprendido
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="flex items-center justify-between text-white mb-2">
              <span className="text-sm">Pregunta {currentQuestion + 1} de {questions.length}</span>
              <Code className="w-5 h-5" />
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
          </div>

          {/* Question */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl text-white mb-6">{question.question}</h3>

                <div className="space-y-3 mb-6">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => !showFeedback && handleAnswer(index)}
                      disabled={showFeedback}
                      whileHover={!showFeedback ? { scale: 1.02 } : {}}
                      whileTap={!showFeedback ? { scale: 0.98 } : {}}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        showFeedback
                          ? index === question.correct
                            ? "bg-green-500/10 border-green-500"
                            : index === selectedAnswer
                            ? "bg-red-500/10 border-red-500"
                            : "bg-slate-800/50 border-slate-700"
                          : selectedAnswer === index
                          ? "bg-blue-500/10 border-blue-500"
                          : "bg-slate-800/50 border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">{option}</span>
                        {showFeedback && (
                          <>
                            {index === question.correct && (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                            {index === selectedAnswer && index !== question.correct && (
                              <XCircle className="w-5 h-5 text-red-500" />
                            )}
                          </>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Feedback */}
                <AnimatePresence>
                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`p-4 rounded-xl border ${
                        selectedAnswer === question.correct
                          ? "bg-green-500/10 border-green-500/50"
                          : "bg-blue-500/10 border-blue-500/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-white mb-1">
                            {selectedAnswer === question.correct ? "¡Correcto!" : "Explicación:"}
                          </div>
                          <p className="text-slate-300 text-sm">{question.explanation}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 flex justify-end"
              >
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  {currentQuestion < questions.length - 1 ? "Siguiente Pregunta" : "Reiniciar"}
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-slate-400"
        >
          El curso incluye más de 50 ejercicios prácticos y 10 proyectos reales
        </motion.div>
      </div>
    </section>
  );
}
