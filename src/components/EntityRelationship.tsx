import { useState } from "react";
import { motion } from "motion/react";
import { Square, Circle, Diamond, Eye } from "lucide-react";

export function EntityRelationship() {
  const [showExample, setShowExample] = useState(false);

  return (
    <section id="section-2" className="min-h-screen flex items-center justify-center py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 mb-6">
            Lección 2 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Modelo Entidad-Relación
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            El modelo ER es una técnica de diseño que nos permite representar gráficamente 
            la estructura de una base de datos antes de implementarla.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <div className="w-16 h-16 border-4 border-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Square className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-white text-center mb-3">Entidades</h3>
            <p className="text-slate-400 text-sm text-center mb-4">
              Representan objetos del mundo real que tienen existencia propia
            </p>
            <div className="bg-slate-950 rounded p-3 text-sm text-slate-300">
              <div className="text-blue-400 mb-1">Ejemplos:</div>
              • Estudiante<br/>
              • Curso<br/>
              • Profesor
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Circle className="w-12 h-12 text-green-500 fill-green-500" />
            </div>
            <h3 className="text-white text-center mb-3">Atributos</h3>
            <p className="text-slate-400 text-sm text-center mb-4">
              Características o propiedades de las entidades
            </p>
            <div className="bg-slate-950 rounded p-3 text-sm text-slate-300">
              <div className="text-green-400 mb-1">Para Estudiante:</div>
              • ID (clave)<br/>
              • Nombre<br/>
              • Email
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Diamond className="w-12 h-12 text-purple-500 fill-purple-500" />
            </div>
            <h3 className="text-white text-center mb-3">Relaciones</h3>
            <p className="text-slate-400 text-sm text-center mb-4">
              Asociaciones entre dos o más entidades
            </p>
            <div className="bg-slate-950 rounded p-3 text-sm text-slate-300">
              <div className="text-purple-400 mb-1">Ejemplos:</div>
              • Estudiante inscribe Curso<br/>
              • Profesor dicta Curso
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl text-white">Cardinalidad de Relaciones</h3>
            <button
              onClick={() => setShowExample(!showExample)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg text-purple-300 transition-colors"
            >
              <Eye className="w-4 h-4" />
              {showExample ? "Ocultar" : "Ver"} Ejemplo
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-4">
              <div className="text-white mb-2">Uno a Uno (1:1)</div>
              <p className="text-sm text-slate-400 mb-3">
                Una entidad se relaciona con exactamente una de otra entidad
              </p>
              <div className="text-xs text-slate-500 bg-slate-900 p-2 rounded">
                Persona → Pasaporte
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-700 rounded-lg p-4">
              <div className="text-white mb-2">Uno a Muchos (1:N)</div>
              <p className="text-sm text-slate-400 mb-3">
                Una entidad se relaciona con muchas de otra entidad
              </p>
              <div className="text-xs text-slate-500 bg-slate-900 p-2 rounded">
                Departamento → Empleados
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-700 rounded-lg p-4">
              <div className="text-white mb-2">Muchos a Muchos (N:M)</div>
              <p className="text-sm text-slate-400 mb-3">
                Múltiples entidades se relacionan con múltiples
              </p>
              <div className="text-xs text-slate-500 bg-slate-900 p-2 rounded">
                Estudiantes ↔ Cursos
              </div>
            </div>
          </div>

          {showExample && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-500/30 rounded-xl p-6 overflow-hidden"
            >
              <h4 className="text-white mb-4">Ejemplo: Sistema Universitario</h4>
              <div className="bg-slate-950/50 rounded-lg p-6">
                <svg className="w-full h-64" viewBox="0 0 800 250">
                  {/* Estudiante Entity */}
                  <rect x="50" y="100" width="150" height="80" fill="#1e293b" stroke="#3b82f6" strokeWidth="3" rx="8"/>
                  <text x="125" y="145" textAnchor="middle" fill="#fff" fontSize="16">ESTUDIANTE</text>
                  
                  {/* Curso Entity */}
                  <rect x="600" y="100" width="150" height="80" fill="#1e293b" stroke="#3b82f6" strokeWidth="3" rx="8"/>
                  <text x="675" y="145" textAnchor="middle" fill="#fff" fontSize="16">CURSO</text>
                  
                  {/* Inscribe Relationship */}
                  <polygon points="400,120 450,140 400,160" fill="#9333ea" stroke="#9333ea" strokeWidth="2"/>
                  <text x="425" y="110" textAnchor="middle" fill="#c084fc" fontSize="14">INSCRIBE</text>
                  
                  {/* Connection lines */}
                  <line x1="200" y1="140" x2="400" y2="140" stroke="#64748b" strokeWidth="2"/>
                  <line x1="450" y1="140" x2="600" y2="140" stroke="#64748b" strokeWidth="2"/>
                  
                  {/* Cardinality */}
                  <text x="220" y="130" fill="#94a3b8" fontSize="14">N</text>
                  <text x="580" y="130" fill="#94a3b8" fontSize="14">M</text>
                </svg>
                <p className="text-slate-400 text-sm mt-4 text-center">
                  Un estudiante puede inscribirse en muchos cursos, y un curso puede tener muchos estudiantes (N:M)
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
