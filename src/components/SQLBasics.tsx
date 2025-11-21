import { useState } from "react";
import { motion } from "motion/react";
import { Play, Copy, Check } from "lucide-react";

export function SQLBasics() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const sqlCommands = [
    {
      title: "SELECT - Consultar Datos",
      description: "Recupera datos de una o más tablas",
      code: `-- Seleccionar todas las columnas
SELECT * FROM estudiantes;

-- Seleccionar columnas específicas
SELECT nombre, email FROM estudiantes;

-- Con condición WHERE
SELECT * FROM estudiantes 
WHERE promedio > 8.0;`,
      result: [
        { id: 1, nombre: "Ana García", promedio: 9.2 },
        { id: 2, nombre: "Carlos López", promedio: 8.5 }
      ]
    },
    {
      title: "INSERT - Insertar Datos",
      description: "Agrega nuevos registros a una tabla",
      code: `-- Insertar un registro
INSERT INTO estudiantes (nombre, email, promedio)
VALUES ('María Torres', 'maria@email.com', 8.8);

-- Insertar múltiples registros
INSERT INTO estudiantes (nombre, email, promedio)
VALUES 
  ('Juan Pérez', 'juan@email.com', 7.5),
  ('Laura Ruiz', 'laura@email.com', 9.0);`,
      result: [
        { mensaje: "3 registros insertados exitosamente" }
      ]
    },
    {
      title: "UPDATE - Actualizar Datos",
      description: "Modifica registros existentes",
      code: `-- Actualizar un registro específico
UPDATE estudiantes 
SET promedio = 9.5 
WHERE id = 1;

-- Actualizar múltiples campos
UPDATE estudiantes 
SET promedio = 8.0, email = 'nuevo@email.com'
WHERE nombre = 'Juan Pérez';`,
      result: [
        { mensaje: "Registros actualizados: 1" }
      ]
    },
    {
      title: "DELETE - Eliminar Datos",
      description: "Elimina registros de una tabla",
      code: `-- Eliminar un registro específico
DELETE FROM estudiantes 
WHERE id = 5;

-- Eliminar con condición
DELETE FROM estudiantes 
WHERE promedio < 6.0;

-- ⚠️ Cuidado: esto elimina TODOS los registros
DELETE FROM estudiantes;`,
      result: [
        { mensaje: "1 registro eliminado" }
      ]
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlCommands[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="section-3" className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-6">
            Lección 3 de 10
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            SQL Básico: CRUD
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            SQL (Structured Query Language) es el lenguaje estándar para interactuar con bases de datos relacionales. 
            Aprende las operaciones fundamentales: Create, Read, Update, Delete.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-3 mb-6">
          {sqlCommands.map((cmd, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                activeTab === index
                  ? "bg-blue-500/20 border-blue-500"
                  : "bg-slate-900 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="text-white mb-1">{cmd.title.split(' - ')[0]}</div>
              <div className="text-xs text-slate-400">{cmd.title.split(' - ')[1]}</div>
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
        >
          <div className="bg-slate-800 px-6 py-4 border-b border-slate-700">
            <h3 className="text-xl text-white mb-2">{sqlCommands[activeTab].title}</h3>
            <p className="text-slate-400 text-sm">{sqlCommands[activeTab].description}</p>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white">Código SQL</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-sm text-slate-300 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copiado" : "Copiar"}
                </button>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{sqlCommands[activeTab].code}</code>
                </pre>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Play className="w-5 h-5 text-blue-400" />
                <span className="text-white">Resultado de la ejecución</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                {activeTab === 0 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-slate-400">ID</th>
                        <th className="text-left py-2 px-3 text-slate-400">Nombre</th>
                        <th className="text-left py-2 px-3 text-slate-400">Promedio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sqlCommands[activeTab].result.map((row: any, idx) => (
                        <tr key={idx} className="border-b border-slate-800">
                          <td className="py-2 px-3 text-slate-300">{row.id}</td>
                          <td className="py-2 px-3 text-slate-300">{row.nombre}</td>
                          <td className="py-2 px-3 text-green-400">{row.promedio}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-slate-300">
                    {sqlCommands[activeTab].result[0].mensaje}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6"
        >
          <h4 className="text-yellow-400 mb-3">💡 Mejores Prácticas</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✓ Siempre usa WHERE en UPDATE y DELETE para evitar modificar/eliminar todos los registros</li>
            <li>✓ Verifica tus consultas con SELECT antes de ejecutar UPDATE o DELETE</li>
            <li>✓ Usa mayúsculas para palabras clave SQL (SELECT, FROM, WHERE) para mejor legibilidad</li>
            <li>✓ Comenta tu código SQL para explicar consultas complejas</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
