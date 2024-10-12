import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackGround from "./BackGround";
import { toast } from "react-hot-toast";



const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle paste content
    if (value.length > 1) {
      const pasteCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pasteCode[i] || "";
      }
      setCode(newCode);
      // focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // Auto submit when all fields are filled
  useEffect(() =>{
    if (code.every(digit => digit !== '')) {
      handleSubmit( new Event('submit'));
    }
  },[code]);

  return (
    <BackGround>
      <div className="max-w-md w-full bg-gray-50 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text">
            Verify Your Email
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Enter the 6-digit code sent to your email address
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="6"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-2xl font-bold bg-purple-100 text-purple-800 border-2 border-purple-300 rounded-lg focus:border-purple-400 focus:outline-none text-center"
                />
              ))}
            </div>
            {error && (
              <p className="text-red-500 font-semibold mb-1">{error}</p>
            )}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading || code.some((digit) => !digit)}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-50"
            >
              {isLoading ? "Verifying..." : "Verify Email"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </BackGround>
  );
};

export default EmailVerificationPage;
