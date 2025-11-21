import { motion } from "motion/react";
import { Table, Box, Zap, Scale } from "lucide-react";

export function NoSQLvsSQL() {
  const comparison = [
    {
      aspect: "Estructura",
      sql: "Tablas con esquema fijo",
      nosql: "Documentos, key-value, grafos...",
      icon: Table
    },
    {
      aspect: "Escalabilidad",
      sql: "Vertical (más recursos al servidor)",
      nosql: "Horizontal (más servidores)",
      icon: Zap
    },
    {
      aspect: "Transacciones",
      sql: "ACID por defecto",
      nosql: "BASE (eventualmente consistente)",
      icon: Scale
    },
    {
      aspect: "Esquema",
      sql: "Rígido, debe definirse antes",
      nosql: "Flexible, puede cambiar",
      icon: Box
    }
  ];

  return (
    <section id="section-9" className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 mb-6">
            Lección 9 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            SQL vs NoSQL
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprende las diferencias fundamentales entre bases de datos relacionales y no relacionales 
            para elegir la mejor opción según tus necesidades.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* SQL Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Table className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl text-white">SQL</h3>
                <p className="text-blue-400">Relacional</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-white mb-2">Características:</div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✓ Estructura de tablas relacionadas</li>
                  <li>✓ Esquema predefinido</li>
                  <li>✓ ACID garantizado</li>
                  <li>✓ Lenguaje SQL estándar</li>
                  <li>✓ Joins complejos</li>
                </ul>
              </div>

              <div className="bg-slate-950/50 rounded-lg p-4">
                <div className="text-blue-400 text-sm mb-2">Ejemplo:</div>
                <pre className="text-green-400 font-mono text-xs">
{`CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100)
);`}
                </pre>
              </div>
            </div>

            <div>
              <div className="text-white mb-2 text-sm">Mejor para:</div>
              <div className="flex flex-wrap gap-2">
                {["Finanzas", "E-commerce", "ERP", "CRM"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* NoSQL Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Box className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl text-white">NoSQL</h3>
                <p className="text-green-400">No Relacional</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-white mb-2">Características:</div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✓ Estructura flexible (documentos, grafos...)</li>
                  <li>✓ Sin esquema fijo</li>
                  <li>✓ BASE (disponibilidad sobre consistencia)</li>
                  <li>✓ APIs específicas por BD</li>
                  <li>✓ Escalabilidad horizontal</li>
                </ul>
              </div>

              <div className="bg-slate-950/50 rounded-lg p-4">
                <div className="text-green-400 text-sm mb-2">Ejemplo (MongoDB):</div>
                <pre className="text-green-400 font-mono text-xs">
{`{
  "_id": "507f1f...",
  "nombre": "Ana García",
  "email": "ana@email.com",
  "cursos": ["DB", "Prog"]
}`}
                </pre>
              </div>
            </div>

            <div>
              <div className="text-white mb-2 text-sm">Mejor para:</div>
              <div className="flex flex-wrap gap-2">
                {["Big Data", "IoT", "Redes Sociales", "Gaming"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
        >
          <div className="bg-slate-800 px-6 py-4 border-b border-slate-700">
            <h3 className="text-xl text-white">Comparación Detallada</h3>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {comparison.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className="w-6 h-6 text-purple-400" />
                    <h4 className="text-white text-lg">{item.aspect}</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                      <div className="text-blue-400 text-sm mb-2">SQL</div>
                      <p className="text-slate-300 text-sm">{item.sql}</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <div className="text-green-400 text-sm mb-2">NoSQL</div>
                      <p className="text-slate-300 text-sm">{item.nosql}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 bg-purple-500/10 border border-purple-500/30 rounded-xl p-6"
        >
          <h4 className="text-purple-400 mb-4">🎯 ¿Cuál elegir?</h4>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-white mb-2">Elige SQL si necesitas:</div>
              <ul className="space-y-1 text-slate-300">
                <li>• Transacciones complejas y ACID</li>
                <li>• Relaciones complejas entre datos</li>
                <li>• Consultas ad-hoc complejas</li>
                <li>• Integridad referencial estricta</li>
              </ul>
            </div>
            <div>
              <div className="text-white mb-2">Elige NoSQL si necesitas:</div>
              <ul className="space-y-1 text-slate-300">
                <li>• Escalabilidad horizontal masiva</li>
                <li>• Esquema flexible que cambia frecuentemente</li>
                <li>• Alto rendimiento de escritura</li>
                <li>• Datos no estructurados o semi-estructurados</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
