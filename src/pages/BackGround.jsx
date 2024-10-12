
import FloatingShapes from "../FloatingShapes/FloatingShapes"


// eslint-disable-next-line react/prop-types
const BackGround = ({children}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
      <FloatingShapes
        color="bg-purple-400"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShapes
        color="bg-purple-400"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShapes
        color="bg-purple-400"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />
      {children}
    </div>
  );
}

export default BackGround