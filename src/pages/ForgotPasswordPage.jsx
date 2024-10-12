import { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, Loader, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import BackGround from "./BackGround";
import Input from "./Input";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <BackGround>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white bg-opacity-50  backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text">
            Forget Password
          </h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <p className="text-purple-400 mb-6 text-center">
                We'll send you a link to reset your password. Enter your email
                address and we
              </p>
              <Input
                icon={MailIcon}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
              >
                {isLoading ? (
                  <Loader className="animate-spin w-6 h-6 mx-auto" />
                ) : (
                  "Send Reset Link"
                )}
              </motion.button>
            </form>
          ) : (
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-16 h-16 bg-purple-500 rounded-full flex item justify-center mx-auto b-4"
              >
                <MailIcon className="w-8 h-8  text-white" />
              </motion.div>
              <p className="text-purple-300 mb-6">
                if an account exist for {email}, you will receive a password
                reset link shortly.
              </p>
            </div>
          )}
        </div>
        <div className="px-8 py-4 bg-purple-600 bg-opacity-50 flex justify-center">
          <Link
            to="/"
            className="text-sm text-gray-50 hover:underline flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Login
          </Link>
        </div>
      </motion.div>
    </BackGround>
  );
};

export default ForgotPasswordPage;
