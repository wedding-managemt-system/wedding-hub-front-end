import { motion } from 'framer-motion'

const FloatingShapes = ({color,size,top,left,delay}) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${size} opacity-20 blur-2xl`}
      style={{ top, left}}
      animate={{
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: [0, 360],
      }}
        transition={{
            duration: 20,
            ease: "linear",
            loop: Infinity,
            delay,
        }}
        aria-hidden="true"
    ></motion.div>
  );
}

export default FloatingShapes