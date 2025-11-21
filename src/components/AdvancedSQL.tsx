import { useState } from "react";
import { motion } from "motion/react";
import { GitMerge, Layers, TrendingUp } from "lucide-react";

export function AdvancedSQL() {
  const [activeExample, setActiveExample] = useState(0);

  const advancedConcepts = [
    {
      icon: GitMerge,
      title: "JOINs",
      color: "from-blue-500 to-cyan-500",
      description: "Combinar datos de múltiples tablas basándose en relaciones",
      code: `-- INNER JOIN: Solo registros que coinciden
SELECT e.nombre, c.nombre_curso
FROM estudiantes e
INNER JOIN inscripciones i ON e.id = i.estudiante_id
INNER JOIN cursos c ON i.curso_id = c.id;

-- LEFT JOIN: Todos de la izquierda + coincidencias
SELECT e.nombre, c.nombre_curso
FROM estudiantes e
LEFT JOIN inscripciones i ON e.id = i.estudiante_id
LEFT JOIN cursos c ON i.curso_id = c.id;`,
      visual: "Dos círculos que se intersectan"
    },
    {
      icon: Layers,
      title: "Subconsultas",
      color: "from-purple-500 to-pink-500",
      description: "Consultas anidadas dentro de otras consultas",
      code: `-- Subconsulta en WHERE
SELECT nombre, promedio
FROM estudiantes
WHERE promedio > (
    SELECT AVG(promedio) 
    FROM estudiantes
);

-- Subconsulta en FROM
SELECT dept, AVG(salario) as salario_promedio
FROM (
    SELECT departamento as dept, salario
    FROM empleados
    WHERE activo = 1
) AS empleados_activos
GROUP BY dept;`,
      visual: "Consultas anidadas"
    },
    {
      icon: TrendingUp,
      title: "Window Functions",
      color: "from-orange-500 to-red-500",
      description: "Realizar cálculos sobre un conjunto de filas relacionadas",
      code: `-- ROW_NUMBER: Numerar filas
SELECT 
    nombre,
    departamento,
    salario,
    ROW_NUMBER() OVER (
        PARTITION BY departamento 
        ORDER BY salario DESC
    ) as ranking
FROM empleados;

-- Promedios móviles
SELECT 
    fecha,
    ventas,
    AVG(ventas) OVER (
        ORDER BY fecha 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) as promedio_movil
FROM ventas_diarias;`,
      visual: "Ventanas deslizantes sobre datos"
    }
  ];

  const concept = advancedConcepts[activeExample];

  return (
    <section id="section-8" className="min-h-screen flex items-center justify-center py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 mb-6">
            Lección 8 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            SQL Avanzado
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Domina técnicas avanzadas de SQL para consultas complejas y análisis de datos sofisticados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {advancedConcepts.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveExample(index)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                activeExample === index
                  ? "bg-slate-800 border-blue-500"
                  : "bg-slate-900 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-3`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </button>
          ))}
        </div>

        <motion.div
          key={activeExample}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
        >
          <div className={`bg-gradient-to-r ${concept.color} p-6`}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <concept.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-1">{concept.title}</h3>
                <p className="text-white/80 text-sm">{concept.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="bg-slate-950 border border-slate-700 rounded-xl p-6 mb-6">
              <div className="text-white mb-3">Código SQL</div>
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                <code>{concept.code}</code>
              </pre>
            </div>

            {activeExample === 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-950 border border-slate-700 rounded-xl p-6">
                  <h4 className="text-white mb-4">INNER JOIN</h4>
                  <div className="flex items-center justify-center mb-4">
                    <svg width="200" height="120" viewBox="0 0 200 120">
                      <circle cx="70" cy="60" r="40" fill="#3b82f6" opacity="0.5" />
                      <circle cx="130" cy="60" r="40" fill="#8b5cf6" opacity="0.5" />
                      <text x="100" y="65" textAnchor="middle" fill="#fff" fontSize="12">Solo intersección</text>
                    </svg>
                  </div>
                  <p className="text-slate-400 text-sm">Retorna solo los registros que tienen coincidencias en ambas tablas</p>
                </div>

                <div className="bg-slate-950 border border-slate-700 rounded-xl p-6">
                  <h4 className="text-white mb-4">LEFT JOIN</h4>
                  <div className="flex items-center justify-center mb-4">
                    <svg width="200" height="120" viewBox="0 0 200 120">
                      <circle cx="70" cy="60" r="40" fill="#3b82f6" opacity="0.8" />
                      <circle cx="130" cy="60" r="40" fill="#8b5cf6" opacity="0.3" />
                      <text x="70" y="65" textAnchor="middle" fill="#fff" fontSize="12">Todos</text>
                    </svg>
                  </div>
                  <p className="text-slate-400 text-sm">Retorna todos los registros de la tabla izquierda y las coincidencias de la derecha</p>
                </div>
              </div>
            )}

            {activeExample === 1 && (
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-white mb-3">Tipos de Subconsultas</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-blue-400">Escalar:</div>
                      <div className="text-slate-400 text-sm">Retorna un solo valor</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-purple-400">Fila:</div>
                      <div className="text-slate-400 text-sm">Retorna una sola fila con múltiples columnas</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-pink-400">Tabla:</div>
                      <div className="text-slate-400 text-sm">Retorna múltiples filas y columnas</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeExample === 2 && (
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
                <h4 className="text-white mb-3">Funciones de Ventana Comunes</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "ROW_NUMBER()", desc: "Asigna un número único a cada fila" },
                    { name: "RANK()", desc: "Asigna ranking con empates" },
                    { name: "DENSE_RANK()", desc: "Ranking sin saltos en empates" },
                    { name: "LAG()/LEAD()", desc: "Accede a filas anteriores/siguientes" }
                  ].map((func, idx) => (
                    <div key={idx} className="bg-slate-950 rounded-lg p-3">
                      <div className="text-orange-400 text-sm mb-1 font-mono">{func.name}</div>
                      <div className="text-slate-400 text-xs">{func.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6"
        >
          <h4 className="text-yellow-400 mb-3">💡 Tips de Rendimiento</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✓ Usa EXPLAIN para analizar el plan de ejecución de tus queries</li>
            <li>✓ Evita SELECT * en producción, especifica solo las columnas necesarias</li>
            <li>✓ Los JOINs son generalmente más eficientes que subconsultas correlacionadas</li>
            <li>✓ Usa índices en las columnas que aparecen en JOINs y WHERE</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
