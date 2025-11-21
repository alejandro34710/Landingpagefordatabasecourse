import { useState } from "react";
import { motion } from "motion/react";
import { Play, RotateCcw, CheckCircle, XCircle } from "lucide-react";

export function InteractiveSQL() {
  const [query, setQuery] = useState("SELECT * FROM estudiantes WHERE promedio > 8.0;");
  const [isRunning, setIsRunning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const sampleData = [
    { id: 1, nombre: "Ana García", carrera: "Ing. Sistemas", promedio: 9.2 },
    { id: 2, nombre: "Carlos López", carrera: "Ing. Sistemas", promedio: 8.5 },
    { id: 3, nombre: "María Torres", carrera: "Ing. Software", promedio: 8.8 },
  ];

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setShowResult(true);
    }, 1000);
  };

  const handleReset = () => {
    setQuery("SELECT * FROM estudiantes WHERE promedio > 8.0;");
    setShowResult(false);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Editor SQL Interactivo
          </h2>
          <p className="text-xl text-slate-400">
            Practica consultas SQL en tiempo real con nuestro editor integrado
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* SQL Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
          >
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-slate-400 text-sm">query.sql</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="p-2 hover:bg-slate-700 rounded transition-colors"
                  title="Reset"
                >
                  <RotateCcw className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors disabled:opacity-50"
                >
                  <Play className="w-4 h-4" />
                  {isRunning ? "Ejecutando..." : "Ejecutar"}
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-64 bg-slate-950 text-green-400 font-mono text-sm p-4 rounded border border-slate-700 focus:border-blue-500 focus:outline-none resize-none"
                spellCheck={false}
              />
            </div>

            <div className="px-4 pb-4">
              <div className="bg-slate-950 border border-slate-700 rounded p-3 text-sm">
                <div className="text-slate-500 mb-2">Tips:</div>
                <div className="text-slate-400 space-y-1">
                  <div>• Usa WHERE para filtrar resultados</div>
                  <div>• JOIN para combinar tablas</div>
                  <div>• ORDER BY para ordenar datos</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
          >
            <div className="bg-slate-800 px-4 py-3 border-b border-slate-700">
              <span className="text-white">Resultados</span>
            </div>

            <div className="p-4">
              {!showResult ? (
                <div className="h-64 flex items-center justify-center text-slate-500">
                  Ejecuta una consulta para ver los resultados
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-green-400 mb-4">
                    <CheckCircle className="w-5 h-5" />
                    <span>Query ejecutada exitosamente</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="text-left py-2 px-3 text-slate-400">ID</th>
                          <th className="text-left py-2 px-3 text-slate-400">Nombre</th>
                          <th className="text-left py-2 px-3 text-slate-400">Carrera</th>
                          <th className="text-left py-2 px-3 text-slate-400">Promedio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleData.map((row, idx) => (
                          <motion.tr
                            key={row.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="border-b border-slate-800 hover:bg-slate-800/50"
                          >
                            <td className="py-2 px-3 text-slate-300">{row.id}</td>
                            <td className="py-2 px-3 text-slate-300">{row.nombre}</td>
                            <td className="py-2 px-3 text-slate-300">{row.carrera}</td>
                            <td className="py-2 px-3 text-green-400">{row.promedio}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-slate-400 text-sm">
                    {sampleData.length} filas retornadas en 0.032s
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
