import { motion } from "motion/react";
import { BookOpen, Code2, Target, Users, Award, Rocket } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Contenido Estructurado",
      description: "Curriculum diseñado por expertos siguiendo estándares académicos de ingeniería.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code2,
      title: "Práctica Intensiva",
      description: "Ejercicios SQL en tiempo real, proyectos prácticos y laboratorios interactivos.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Enfoque Profesional",
      description: "Aprende técnicas utilizadas en la industria para optimización y diseño de BD.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Acceso a foros, grupos de estudio y sesiones de mentoría con instructores.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Certificación",
      description: "Obtén un certificado verificable al completar el curso exitosamente.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Rocket,
      title: "Carrera Acelerada",
      description: "Herramientas y conocimientos para destacar en tu carrera como ingeniero.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            ¿Por qué elegir este curso?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Una experiencia de aprendizaje completa diseñada para formar profesionales en bases de datos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all h-full backdrop-blur-sm">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
