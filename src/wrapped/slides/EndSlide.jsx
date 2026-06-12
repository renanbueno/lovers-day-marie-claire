import { motion } from "framer-motion";
import { RefreshCcw, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * EndSlide - A tela final de encerramento estilo "Carta Romântica".
 * Exibida após a sequência de stories.
 */
export default function EndSlide({ onRestart }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8 text-center bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-md space-y-8"
      >
        {/* Ícone sutil no topo */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <Heart className="h-8 w-8 text-wrapped-red fill-wrapped-red/20" />
        </motion.div>

        {/* Texto da Carta */}
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-bold italic text-wrapped-blush">
            Para o meu amor,
          </h2>
          
          <div className="font-display text-lg leading-relaxed text-white/90 space-y-4">
            <p>
              [INSIRA AQUI SUA CARTA ROMÂNTICA]
            </p>
            <p>
              [EX: Cada momento que passamos juntos, desde as risadas bobas até os 
              dias mais tranquilos, se tornou a parte favorita do meu dia. 
              Obrigado(a) por ser meu porto seguro e por sonhar comigo.]
            </p>
            <p>
              [EX: Que o nosso "Wrapped" nunca termine e que a gente continue 
              escrevendo os próximos capítulos, sempre lado a lado.]
            </p>
          </div>

          <div className="pt-4">
            <p className="font-display text-xl font-semibold text-wrapped-red italic">
              Com todo o meu amor, [SEU NOME]
            </p>
          </div>
        </div>

        {/* Botão de Reiniciar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="pt-10"
        >
          <Button
            variant="ghost"
            onClick={onRestart}
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <RefreshCcw className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
            <span className="font-sans text-sm tracking-widest uppercase">Ver de Novo</span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
