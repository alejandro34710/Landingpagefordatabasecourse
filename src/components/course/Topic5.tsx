import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Target, Award, Sparkles } from "lucide-react";
import watermarkLogo from "figma:asset/01177cfd8b308cc1d8a93eb486010b7e48a64164.png";

export function Topic5() {
  const [activeStrategy, setActiveStrategy] = useState(0);
  const [hoveredExample, setHoveredExample] = useState<number | null>(null);

  const positioningStrategies = [
    {
      title: "Por Atributo del Producto",
      desc: "Enfocarse en una característica específica superior",
      icon: "⚡",
      examples: [
        { brand: "Volvo", claim: "Seguridad", detail: "\"El auto más seguro del mundo\"" },
        { brand: "FedEx", claim: "Velocidad", detail: "\"When it absolutely, positively has to be there overnight\"" },
        { brand: "Duracell", claim: "Duración", detail: "\"Dura más que cualquier otra pila\"" }
      ]
    },
    {
      title: "Por Precio/Calidad",
      desc: "Posicionarse en un nivel específico de precio-valor",
      icon: "💰",
      examples: [
        { brand: "Rolex", claim: "Ultra-premium", detail: "Lujo exclusivo, precios $10k-$500k+" },
        { brand: "Toyota", claim: "Calidad-precio", detail: "Confiabilidad a precio razonable" },
        { brand: "Walmart", claim: "Precio bajo", detail: "\"Save money. Live better.\"" }
      ]
    },
    {
      title: "Por Uso/Aplicación",
      desc: "Asociar el producto con un uso o momento específico",
      icon: "🎯",
      examples: [
        { brand: "Gatorade", claim: "Bebida deportiva", detail: "\"Es la bebida de los atletas\"" },
        { brand: "Red Bull", claim: "Energía", detail: "\"Te da alas\" - para momentos de energía" },
        { brand: "Campbell's", claim: "Comida reconfortante", detail: "\"M'm! M'm! Good!\" - para cuando estás enfermo" }
      ]
    },
    {
      title: "Por Usuario",
      desc: "Asociarse con un tipo específico de cliente",
      icon: "👤",
      examples: [
        { brand: "Gerber", claim: "Bebés", detail: "\"Start Healthy, Stay Healthy™\"" },
        { brand: "L'Oréal", claim: "Mujeres empoderadas", detail: "\"Porque yo lo valgo\"" },
        { brand: "Harley-Davidson", claim: "Rebeldes", detail: "Estilo de vida, no solo motos" }
      ]
    },
    {
      title: "Contra Competidor",
      desc: "Posicionarse directamente vs otro competidor",
      icon: "⚔️",
      examples: [
        { brand: "Avis", claim: "Somos #2", detail: "\"We try harder\" (vs Hertz #1)" },
        { brand: "7-Up", claim: "The Uncola", detail: "Alternativa a Coca-Cola/Pepsi" },
        { brand: "Mac", claim: "No es PC", detail: "Campaña \"I'm a Mac, I'm a PC\"" }
      ]
    },
    {
      title: "Por Categoría",
      desc: "Crear o definir una nueva categoría",
      icon: "🆕",
      examples: [
        { brand: "Red Bull", claim: "Energy drinks", detail: "Creó la categoría de bebidas energéticas" },
        { brand: "Uber", claim: "Ride-sharing", detail: "No taxi, es \"ride-sharing\"" },
        { brand: "Netflix", claim: "Streaming", detail: "Redefinió entretenimiento en casa" }
      ]
    }
  ];

  const brandExamples = [
    {
      brand: "Apple",
      positioning: "Innovación premium",
      attributes: { quality: 95, price: 90 },
      color: "bg-gray-400",
      description: "Diseño excepcional + ecosistema integrado"
    },
    {
      brand: "Samsung",
      positioning: "Tecnología para todos",
      attributes: { quality: 80, price: 70 },
      color: "bg-blue-400",
      description: "Innovación accesible con variedad de gama"
    },
    {
      brand: "Xiaomi",
      positioning: "Alto valor-precio",
      attributes: { quality: 70, price: 40 },
      color: "bg-orange-400",
      description: "Tecnología flagship a precio competitivo"
    },
    {
      brand: "OnePlus",
      positioning: "Flagship killer",
      attributes: { quality: 85, price: 60 },
      color: "bg-red-400",
      description: "Especificaciones premium sin costo premium"
    }
  ];

  const positioningExamples = [
    {
      company: "Apple iPhone",
      target: "Profesionales y creativos que valoran diseño",
      benefit: "Experiencia premium integrada sin fricciones",
      reason: "Ecosistema cerrado, diseño superior, estatus social",
      statement: "Para profesionales creativos que buscan lo mejor, iPhone es el smartphone que ofrece experiencia premium integrada, porque combina diseño excepcional con un ecosistema sin igual.",
      icon: "📱"
    },
    {
      company: "Volvo",
      target: "Familias que priorizan seguridad",
      benefit: "El auto más seguro del mercado",
      reason: "70+ años de innovación en seguridad, crash tests",
      statement: "Para familias que priorizan seguridad, Volvo es el automóvil que ofrece la máxima protección, porque tiene 70 años de liderazgo en innovaciones de seguridad.",
      icon: "🚗"
    },
    {
      company: "Patagonia",
      target: "Aventureros conscientes del medio ambiente",
      benefit: "Ropa outdoor de alta calidad y sustentable",
      reason: "1% for the Planet, materiales reciclados, reparación",
      statement: "Para aventureros ambientalmente conscientes, Patagonia es la marca outdoor que ofrece calidad superior sustentable, porque dona 1% de ventas y promueve reparar sobre reemplazar.",
      icon: "🏔️"
    }
  ];

  return (
    <section className="py-32 bg-stone-950 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <img 
          src={watermarkLogo} 
          alt="" 
          className="w-[800px] h-auto"
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Target className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Tema 05</div>
              <h2 className="text-amber-50">Posicionamiento de Marca</h2>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h3 className="text-3xl text-white mb-6">¿Qué es el Posicionamiento?</h3>
            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-8">
              <p className="text-stone-300 text-lg leading-relaxed mb-4">
                "<strong>Posicionamiento</strong> es el lugar que ocupa el producto en la mente del consumidor 
                en relación con los productos competidores." - <strong>Al Ries & Jack Trout</strong>
              </p>
              <p className="text-stone-400 mb-4">
                No es lo que haces al producto, sino lo que haces en la mente del prospecto. Es cómo te perciben 
                versus la competencia.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { label: "Volvo", value: "= Seguridad" },
                  { label: "Disney", value: "= Magia familiar" },
                  { label: "FedEx", value: "= Rapidez confiable" }
                ].map((item, i) => (
                  <div key={i} className="bg-stone-900/50 rounded-lg p-4 text-center">
                    <div className="text-primary-400 font-semibold">{item.label}</div>
                    <div className="text-stone-400 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Positioning Examples */}
          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">Ejemplos de Posicionamiento: Smartphones</h3>
            <p className="text-stone-400 mb-6">
              Cómo diferentes marcas se posicionan en el mercado según calidad y precio percibidos.
            </p>

            <div className="bg-stone-800/30 border border-stone-700/50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {brandExamples.map((brand, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredExample(i)}
                    onMouseLeave={() => setHoveredExample(null)}
                    className={`bg-stone-900/50 rounded-xl p-6 border border-stone-700/50 transition-all duration-300 ${
                      hoveredExample === i ? "scale-105 border-primary-500/50 shadow-lg shadow-primary-500/20" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${brand.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-lg">{brand.brand.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{brand.brand}</h4>
                        <p className="text-stone-500 text-xs">{brand.positioning}</p>
                      </div>
                    </div>
                    
                    <p className="text-stone-400 text-sm mb-4">{brand.description}</p>

                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-stone-500">Calidad Percibida</span>
                          <span className="text-xs text-primary-400">{brand.attributes.quality}%</span>
                        </div>
                        <div className="w-full bg-stone-800 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${brand.attributes.quality}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-stone-500">Nivel de Precio</span>
                          <span className="text-xs text-accent-400">{brand.attributes.price}%</span>
                        </div>
                        <div className="w-full bg-stone-800 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${brand.attributes.price}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Positioning Strategies */}
          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">Estrategias de Posicionamiento</h3>
            <p className="text-stone-400 mb-6">
              Existen múltiples formas de posicionar tu marca. 
              <span className="text-primary-400"> Selecciona cada estrategia para ver ejemplos reales:</span>
            </p>

            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {positioningStrategies.map((strategy, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStrategy(i)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                    activeStrategy === i
                      ? "bg-gradient-to-br from-primary-500/20 to-accent-500/20 border-primary-500 scale-105"
                      : "bg-stone-800/30 border-stone-700/50 hover:border-stone-600"
                  }`}
                >
                  <div className="text-3xl mb-2">{strategy.icon}</div>
                  <div className={`font-semibold mb-1 ${activeStrategy === i ? "text-white" : "text-stone-300"}`}>
                    {strategy.title}
                  </div>
                  <div className="text-xs text-stone-500">{strategy.desc}</div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStrategy}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-8"
              >
                <div className="text-center mb-6">
                  <span className="text-5xl">{positioningStrategies[activeStrategy].icon}</span>
                  <h4 className="text-2xl text-white mt-3 mb-2">{positioningStrategies[activeStrategy].title}</h4>
                  <p className="text-stone-400">{positioningStrategies[activeStrategy].desc}</p>
                </div>

                <div className="space-y-4">
                  {positioningStrategies[activeStrategy].examples.map((example, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-stone-900/50 rounded-xl p-6 border border-stone-700/30"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-primary-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-white font-semibold">{example.brand}</h5>
                            <span className="text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded">{example.claim}</span>
                          </div>
                          <p className="text-stone-300 text-sm">{example.detail}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Positioning Statement Builder */}
          <div>
            <h3 className="text-2xl text-white mb-6">Declaración de Posicionamiento</h3>
            <p className="text-stone-300 mb-6">
              Una declaración de posicionamiento sigue esta estructura:
            </p>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 mb-6">
              <div className="bg-stone-900/50 rounded-xl p-6 mb-6 font-mono text-sm text-stone-300 leading-relaxed">
                "Para <span className="text-blue-400">[target]</span> que <span className="text-green-400">[necesidad/oportunidad]</span>, 
                <span className="text-purple-400"> [producto/marca]</span> es <span className="text-orange-400">[categoría]</span> que 
                <span className="text-pink-400"> [beneficio clave]</span>, porque <span className="text-yellow-400">[razón para creer]</span>."
              </div>

              <div className="space-y-6">
                {positioningExamples.map((example, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl">{example.icon}</span>
                      <div className="flex-1">
                        <h5 className="text-white text-lg mb-4">{example.company}</h5>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                            <div className="text-blue-400 text-xs mb-1">Target:</div>
                            <div className="text-stone-300">{example.target}</div>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-3">
                            <div className="text-pink-400 text-xs mb-1">Beneficio:</div>
                            <div className="text-stone-300">{example.benefit}</div>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4">
                          <div className="text-yellow-400 text-xs mb-1">Razón para creer:</div>
                          <div className="text-stone-300 text-sm">{example.reason}</div>
                        </div>

                        <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                          <div className="text-primary-400 text-xs mb-2">Declaración completa:</div>
                          <p className="text-white text-sm italic leading-relaxed">"{example.statement}"</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Principles */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: "🎯", title: "Simple y claro", desc: "Fácil de entender y comunicar" },
                { icon: "💎", title: "Único y diferenciado", desc: "Distinto a la competencia" },
                { icon: "✅", title: "Relevante y creíble", desc: "Importante para el target y sustentable" }
              ].map((principle, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-stone-800/30 border border-stone-700/50 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">{principle.icon}</div>
                  <h5 className="text-white mb-2">{principle.title}</h5>
                  <p className="text-stone-400 text-sm">{principle.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
