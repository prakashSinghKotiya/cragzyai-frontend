import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { toast } from "react-toastify";



export default function Hero() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const {setUser} = useAuth();

  
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[25%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute right-[10%] top-[35%] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[150px]"
        />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        
       <div className="flex items-center">
  <img
    src="/logo.png"
    alt="logo"
    className="h-14 md:h-14 w-auto -mr-1"
  />

  <span className="text-white md:text-2xl text-2xl font-bold">
    Cragzy<span className="text-cyan-400">AI</span>
  </span>
</div>

        

         
            <GoogleLogin 
              onSuccess={async (credentialResponse) => {
                try {
                  
                  
                  const data = await axios.post("https://cragzy-ai.onrender.com/google", { token: credentialResponse.credential }, { withCredentials: true });
                  
                  

                  if (!data.error) {
                    console.log("Login successful, navigating to home...");
                    toast.success("Login successful");
                    console.log("login",data);
                    setUser(data.data.user); // Update the user state in context

                   
                 navigate("/home");
                 
                  
                  }
                } catch (err) {
                  console.error("Google login failed:", err);
                  
                }
              }}
              onError={(error) => console.log("Login Failed", error)}
              shape="circle"
              theme="filled_black"
              text="continue_with"
              scope="openid email profile "
            
               
            />
         

         
        

       

      
       
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center pt-20">

        {/* Small badge */}
        <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  className="mb-10 flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 w-fit mx-auto"
>
  <img
    src="/logo.png"
    alt="logo"
    className="h-10 w-10 object-contain p-0"
  />

  AN  AI SERVICE FOR WEB APPS 
</motion.div>

        {/* Layer 1 */}
       {/* Layer 1 */}
<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="
    text-[48px]
    md:text-[90px]
    lg:text-[120px]
    font-black
    leading-none
    text-white/10
    tracking-tight
  "
>
  Your Business.
</motion.h1>

{/* Layer 2 */}
<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.15 }}
  className="
    -mt-2
    text-[48px]
    md:text-[90px]
    lg:text-[120px]
    font-black
    leading-none
    text-white/10
    tracking-tight
  "
>
  Your Knowledge.
</motion.h1>

        {/* Main Text */}
        <div className="mt-2 flex flex-wrap justify-center items-center gap-4">

          <span
  className="
    text-[36px]
    md:text-[64px]
    lg:text-[90px]
    font-black
    text-white
    leading-none
  "
>
  Your AI Agent.
</span>

         
        </div>

      
        
        {/* Buttons */}
        
      </div>

      {/* Floating Cards */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        absolute
        left-[8%]
        top-[55%]
        hidden
        lg:block
      "
      >
        <div
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-5
          w-[220px]
        "
        >
          
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        right-[8%]
        top-[48%]
        hidden
        lg:block
      "
      >
        <div
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-5
          w-[220px]
        "
        >
          <div className="text-violet-400 text-3xl font-bold">
           
          </div>

          <p className="text-zinc-500 mt-2">
          
          </p>
        </div>
      </motion.div>

      
    </section>
  );
}