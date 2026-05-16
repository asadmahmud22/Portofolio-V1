import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ finishLoading }) {
  const [showText, setShowText] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    // Show main text after 0.5s
    const textTimer = setTimeout(() => setShowText(true), 500);

    // Show subtext after 1.5s
    const subtextTimer = setTimeout(() => setShowSubtext(true), 1500);

    // Finish loading after 3.5s
    const finishTimer = setTimeout(() => finishLoading(), 3500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(subtextTimer);
      clearTimeout(finishTimer);
    };
  }, [finishLoading]);

  // Animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const glowVariants = {
    glow: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.3)",
        "0 0 40px rgba(59, 130, 246, 0.5)",
        "0 0 20px rgba(59, 130, 246, 0.3)",
      ],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const text = "Welcome to my website";
  const words = text.split(" ");

  return (
    <motion.div
      className="fullscreen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background floating circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content box */}
      <motion.div
        className="relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 text-center z-10"
        variants={glowVariants}
        animate="glow"
      >
        {/* Title */}
        <div className="mb-6">
          {showText && (
            <div className="flex flex-wrap justify-center gap-2">
              {words.map((word, wi) => (
                <div key={wi} className="flex">
                  {word.split("").map((letter, li) => (
                    <motion.span
                      key={`${wi}-${li}`}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: wi * 0.1 + li * 0.05 }}
                      className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  {wi < words.length - 1 && <span className="mx-1">&nbsp;</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Subtitle */}
        {showSubtext && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="space-y-3"
          >
            <p className="text-gray-600 text-lg md:text-xl font-medium">
              Discover amazing projects and experiences
            </p>

            {/* Loading dots */}
            <motion.div
              className="flex justify-center items-center gap-1"
              variants={floatingVariants}
              animate="float"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Progress bar */}
        <motion.div
          className="mt-8 w-64 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
