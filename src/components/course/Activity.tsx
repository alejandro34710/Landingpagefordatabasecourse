import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, XCircle, Award, Trophy, Target, ArrowRight } from "lucide-react";

export function Activity() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "¿Cuál de las 4Ps es la ÚNICA que genera ingresos directos?",
      options: ["Producto", "Precio", "Plaza", "Promoción"],
      correct: 1,
      explanation: "El Precio es el único elemento del marketing mix que genera ingresos. Los otros tres (Producto, Plaza, Promoción) representan costos para la empresa.",
      icon: "💰"
    },
    {
      question: "¿Qué empresa es ejemplo clásico de marketing diferenciado (múltiples segmentos)?",
      options: [
        "Coca-Cola Classic (una bebida para todos)",
        "Marriott (Courtyard, Ritz-Carlton, Residence Inn)",
        "Rolls-Royce (un segmento ultra-premium)",
        "Dollar Shave Club (un nicho específico)"
      ],
      correct: 1,
      explanation: "Marriott usa marketing diferenciado con múltiples marcas para diferentes segmentos: Courtyard para viajeros de negocios, Ritz-Carlton para lujo, Residence Inn para estancias largas, etc.",
      icon: "🏨"
    },
    {
      question: "Según Maslow, ¿qué nivel de necesidad explota la publicidad de BMW?",
      options: ["Fisiológicas", "Seguridad", "Sociales", "Estima"],
      correct: 3,
      explanation: "BMW apela a necesidades de Estima (reconocimiento, estatus, logro). Su slogan 'The Ultimate Driving Machine' busca satisfacer deseos de prestigio y éxito, no necesidades básicas.",
      icon: "🚗"
    },
    {
      question: "En el proceso de decisión de compra, ¿en qué etapa debo usar SEO/SEM?",
      options: [
        "Reconocimiento de necesidad",
        "Búsqueda de información",
        "Evaluación de alternativas",
        "Comportamiento post-compra"
      ],
      correct: 1,
      explanation: "SEO (Search Engine Optimization) y SEM (Search Engine Marketing) son cruciales en la etapa de Búsqueda de Información, cuando el consumidor busca activamente soluciones en Google y otros buscadores.",
      icon: "🔍"
    },
    {
      question: "¿Cuál NO es un requisito para una segmentación efectiva?",
      options: ["Medible", "Accesible", "Homogéneo internamente", "Masivo"],
      correct: 3,
      explanation: "Los requisitos son: Medible, Accesible, Sustancial (grande), Diferenciable y Accionable. 'Masivo' no es requisito - de hecho, los nichos pequeños pueden ser muy rentables si son sustanciales.",
      icon: "🎯"
    },
    {
      question: "Volvo = Seguridad. Este es un ejemplo de posicionamiento por:",
      options: ["Precio/Calidad", "Atributo del producto", "Usuario", "Contra competidor"],
      correct: 1,
      explanation: "Volvo usa posicionamiento por Atributo del Producto, enfocándose en la característica de 'seguridad'. Han construido su identidad completa alrededor de ser 'el auto más seguro'.",
      icon: "🛡️"
    },
    {
      question: "¿Qué investigación es mejor para entender el 'por qué' detrás del comportamiento?",
      options: [
        "Encuesta cuantitativa a 1,000 personas",
        "Grupos focales cualitativos",
        "Análisis de datos de ventas",
        "Experimento A/B testing"
      ],
      correct: 1,
      explanation: "Los grupos focales (investigación cualitativa) permiten explorar motivaciones, emociones y razones profundas. La investigación cuantitativa te dice QUÉ está pasando, la cualitativa te dice POR QUÉ.",
      icon: "💬"
    },
    {
      question: "¿Cuál es la diferencia principal entre datos primarios y secundarios?",
      options: [
        "Primarios son más caros, secundarios más baratos",
        "Primarios son nuevos para tu proyecto, secundarios ya existen",
        "Primarios son cuantitativos, secundarios cualitativos",
        "Todas las anteriores"
      ],
      correct: 1,
      explanation: "La diferencia clave es que datos primarios se recopilan específicamente para tu proyecto actual (encuestas propias), mientras secundarios ya existen (informes de gobierno, estudios publicados). Primarios suelen ser más caros.",
      icon: "📊"
    },
    {
      question: "Apple no compite en precio. ¿Qué estrategia de valor usa?",
      options: [
        "Más por más (premium)",
        "Más por menos (buen valor)",
        "Lo mismo por menos (económico)",
        "Menos por mucho menos (descuento)"
      ],
      correct: 0,
      explanation: "Apple usa estrategia 'Más por Más': ofrece productos de más calidad, más características y más prestigio, justificando precios premium. No compiten en precio, compiten en valor percibido.",
      icon: "📱"
    },
    {
      question: "¿Qué debe hacer una empresa en la etapa de MADUREZ del ciclo de vida del producto?",
      options: [
        "Crear conciencia del producto",
        "Maximizar cuota de mercado",
        "Defender posición y modificar mercado",
        "Descontinuar el producto"
      ],
      correct: 2,
      explanation: "En Madurez, las ventas se estabilizan. La estrategia es defender tu posición de mercado, modificar el producto/mercado para extender el ciclo de vida, y competir agresivamente. Ejemplo: iPhone actual.",
      icon: "📈"
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return; // Prevent changing answer after showing result
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { emoji: "🏆", title: "¡Excelente!", message: "Dominas los conceptos fundamentales de marketing. ¡Felicidades!", color: "text-green-400" };
    if (percentage >= 70) return { emoji: "🎯", title: "¡Muy Bien!", message: "Tienes un buen entendimiento. Repasa los temas que fallaste.", color: "text-blue-400" };
    if (percentage >= 50) return { emoji: "📚", title: "Buen Intento", message: "Hay conceptos por reforzar. Revisa el material nuevamente.", color: "text-yellow-400" };
    return { emoji: "💪", title: "Sigue Practicando", message: "Necesitas estudiar más. ¡No te rindas!", color: "text-orange-400" };
  };

  if (quizCompleted) {
    const result = getScoreMessage();
    return (
      <section id="activity" className="py-32 bg-stone-950">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-6xl shadow-2xl"
            >
              {result.emoji}
            </motion.div>

            <h2 className={`text-4xl mb-4 ${result.color}`}>{result.title}</h2>
            <p className="text-stone-400 text-lg mb-8">{result.message}</p>

            <div className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-8 mb-8">
              <div className="text-6xl font-bold mb-2">
                <span className="gradient-text">{score}</span>
                <span className="text-stone-600"> / {questions.length}</span>
              </div>
              <div className="text-stone-400 mb-6">Respuestas correctas</div>
              
              <div className="w-full bg-stone-900 rounded-full h-4 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / questions.length) * 100}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="bg-gradient-to-r from-primary-500 to-accent-500 h-4 rounded-full"
                />
              </div>
              <div className="text-stone-500 text-sm">{Math.round((score / questions.length) * 100)}% de precisión</div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleReset}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Intentar de Nuevo
              </button>
              <a
                href="#hero"
                className="px-8 py-4 bg-stone-800/50 text-stone-300 rounded-xl font-medium border border-stone-700/50 hover:bg-stone-800 transition-all duration-300"
              >
                Volver al Inicio
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="activity" className="py-32 bg-stone-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Target className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Sección 10</div>
              <h2 className="text-amber-50">Evaluación Interactiva</h2>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-stone-400 text-sm">Pregunta {currentQuestion + 1} de {questions.length}</span>
              <span className="text-primary-400 text-sm font-medium">{Math.round(progress)}% completado</span>
            </div>
            <div className="w-full bg-stone-900 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-8 mb-8"
            >
              <div className="flex items-start gap-4 mb-8">
                <span className="text-5xl">{currentQ.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl text-white leading-relaxed">{currentQ.question}</h3>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, index) => {
                  const isCorrect = index === currentQ.correct;
                  const isSelected = index === selectedAnswer;
                  const showCorrect = showResult && isCorrect;
                  const showWrong = showResult && isSelected && !isCorrect;

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      whileHover={!showResult ? { scale: 1.02, x: 5 } : {}}
                      whileTap={!showResult ? { scale: 0.98 } : {}}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 flex items-center gap-3 ${
                        showCorrect
                          ? "bg-green-500/20 border-green-500 text-white"
                          : showWrong
                          ? "bg-red-500/20 border-red-500 text-white"
                          : isSelected
                          ? "bg-primary-500/20 border-primary-500 text-white"
                          : "bg-stone-900/50 border-stone-700/50 text-stone-300 hover:border-stone-600 hover:bg-stone-900"
                      } ${showResult ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        showCorrect
                          ? "bg-green-500"
                          : showWrong
                          ? "bg-red-500"
                          : isSelected
                          ? "bg-primary-500"
                          : "bg-stone-800"
                      }`}>
                        {showCorrect ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : showWrong ? (
                          <XCircle className="w-5 h-5 text-white" />
                        ) : (
                          <span className="text-white text-sm font-semibold">{String.fromCharCode(65 + index)}</span>
                        )}
                      </div>
                      <span className="flex-1">{option}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={`p-6 rounded-xl ${
                      selectedAnswer === currentQ.correct
                        ? "bg-green-500/10 border border-green-500/30"
                        : "bg-blue-500/10 border border-blue-500/30"
                    }`}>
                      <div className={`text-sm mb-2 font-medium ${
                        selectedAnswer === currentQ.correct ? "text-green-400" : "text-blue-400"
                      }`}>
                        {selectedAnswer === currentQ.correct ? "¡Correcto! ✓" : "Explicación:"}
                      </div>
                      <p className="text-stone-300 leading-relaxed">{currentQ.explanation}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="text-stone-400 text-sm">
              {answeredQuestions.filter(Boolean).length} de {questions.length} respondidas
            </div>
            
            {showResult && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={handleNext}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                {currentQuestion < questions.length - 1 ? "Siguiente Pregunta" : "Ver Resultados"}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
