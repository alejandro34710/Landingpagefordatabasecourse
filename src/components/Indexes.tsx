import { useState } from "react";
import { motion } from "motion/react";
import { Zap, TrendingUp, AlertTriangle } from "lucide-react";

export function Indexes() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="section-6" className="min-h-screen flex items-center justify-center py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 mb-6">
            Lección 6 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Índices y Optimización
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Los índices son estructuras que mejoran dramáticamente la velocidad de las consultas. 
            Aprende cómo funcionan y cuándo usarlos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl text-white mb-6">¿Qué es un Índice?</h3>
          <p className="text-slate-400 mb-6">
            Un índice es una estructura de datos que mejora la velocidad de recuperación de registros 
            en una tabla a costa de espacio adicional y tiempo de escritura. Es similar al índice de un libro.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h4 className="text-white">Sin Índice (Full Table Scan)</h4>
              </div>
              <div className="space-y-2 mb-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-full h-8 bg-slate-800 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    <span className="text-xs text-slate-500">Fila {i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="text-red-400 text-sm">⏱️ Tiempo: ~800ms (escanea todas las filas)</div>
            </div>

            <div className="bg-slate-950 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-white">Con Índice (Index Seek)</h4>
              </div>
              <div className="space-y-2 mb-4">
                {[0, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-full h-8 bg-green-500/20 rounded border border-green-500/30"></div>
                    <span className="text-xs text-green-400">Fila {i + 1}</span>
                  </div>
                ))}
                <div className="text-center text-slate-500 text-sm py-2">...</div>
              </div>
              <div className="text-green-400 text-sm">⚡ Tiempo: ~8ms (acceso directo)</div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <h4 className="text-white mb-4">Índice Primario</h4>
            <p className="text-slate-400 text-sm mb-4">
              Creado automáticamente en la clave primaria. Único y no permite nulos.
            </p>
            <div className="bg-slate-950 rounded-lg p-3 font-mono text-xs text-green-400">
              PRIMARY KEY (id)
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <h4 className="text-white mb-4">Índice Único</h4>
            <p className="text-slate-400 text-sm mb-4">
              Garantiza que no haya valores duplicados en la columna indexada.
            </p>
            <div className="bg-slate-950 rounded-lg p-3 font-mono text-xs text-blue-400">
              CREATE UNIQUE INDEX<br/>
              ON tabla(email)
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <h4 className="text-white mb-4">Índice Compuesto</h4>
            <p className="text-slate-400 text-sm mb-4">
              Índice sobre múltiples columnas. Útil para queries con varias condiciones.
            </p>
            <div className="bg-slate-950 rounded-lg p-3 font-mono text-xs text-purple-400">
              CREATE INDEX<br/>
              ON tabla(apellido, nombre)
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl text-white">Ejemplo Práctico</h3>
            <button
              onClick={() => setShowComparison(true)}
              className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 rounded-lg text-blue-300 transition-colors text-sm"
            >
              Ver Comparación
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-white mb-3">Crear un Índice</div>
              <div className="bg-slate-950 border border-slate-700 rounded-lg p-4">
                <pre className="text-green-400 font-mono text-sm">
{`-- Índice simple
CREATE INDEX idx_apellido 
ON estudiantes(apellido);

-- Índice compuesto
CREATE INDEX idx_nombre_completo 
ON estudiantes(apellido, nombre);

-- Ver índices de una tabla
SHOW INDEX FROM estudiantes;`}
                </pre>
              </div>
            </div>

            <div>
              <div className="text-white mb-3">Cuándo Usar Índices</div>
              <div className="space-y-3">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <div className="text-green-400 text-sm mb-2">✓ Usar cuando:</div>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Columnas en WHERE frecuente</li>
                    <li>• Columnas en JOIN</li>
                    <li>• Columnas en ORDER BY</li>
                    <li>• Tablas grandes con lecturas frecuentes</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <div className="text-red-400 text-sm mb-2">✗ Evitar cuando:</div>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Tablas pequeñas</li>
                    <li>• Columnas con muchas escrituras</li>
                    <li>• Columnas con baja cardinalidad</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6"
            >
              <h4 className="text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Impacto en el Rendimiento
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-slate-400 text-sm mb-2">Sin índice - 1M registros</div>
                  <div className="bg-slate-950 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">SELECT con WHERE</span>
                      <span className="text-red-400">~2.5s</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-full"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-2">Con índice - 1M registros</div>
                  <div className="bg-slate-950 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">SELECT con WHERE</span>
                      <span className="text-green-400">~0.01s</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[2%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4 text-center">
                ⚡ Mejora de rendimiento: <span className="text-green-400">250x más rápido</span>
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
