import axios from "axios";
import {
  Mic,
  Bot,
  Globe,
  BarChart3,
  Headphones,
  Sparkles,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import { useAuth } from "../context/Authcontext";
import {  X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";




export default function Home() {
 
  const navigate = useNavigate();
  const{user } = useAuth();
  const [chatOpen, setChatOpen] = useState(false);

  

  


  
  const features = [
    {
      icon: <Bot size={24} />,
      title: "AI Assistant",
      desc: "Answer customer questions instantly with AI."
    },
    {
      icon: <Mic size={24} />,
      title: "Voice Enabled",
      desc: "Natural conversations powered by voice AI."
    },
    {
      icon: <Globe size={24} />,
      title: "Multilingual",
      desc: "Support customers globally in multiple languages."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics",
      desc: "Track conversations and performance metrics."
    },
    {
      icon: <Headphones size={24} />,
      title: "Human Handoff",
      desc: "Transfer users to live support when needed."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Easy Integration",
      desc: "Embed on any website with a single script."
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Agent",
      desc: "Sign up and create your AI assistant."
    },
    {
      number: "02",
      title: "Train Knowledge",
      desc: "Upload documents and website content."
    },
    {
      number: "03",
      title: "Customize Voice",
      desc: "Choose personality, tone and voice."
    },
    {
      number: "04",
      title: "Embed Anywhere",
      desc: "Paste one line of code into your website."
    }
  ];

  return (
    <div className="min-h-screen bg-[#44444E] overflow-hidden">

      {/* NAVBAR */}

      {Navbar()}

      {/* HERO */}

      <section className="relative pt-40 pb-24">

        <div className="absolute inset-0">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-violet-400/20 blur-[140px]" />

          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-[140px]" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="w-fit mx-auto mb-8 rounded-full border bg-white px-5 py-2 shadow-sm">
            ✨ CUSTOMIZE LIKE YOU WANT !!
          </div>

          <h1 className="text-center font-extrabold text-5xl md:text-7xl leading-tight">

            Build Powerful

            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              {" "}AI Agents
            </span>

            <br />

            For Your Website
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-center text-black text-lg md:text-xl">
            Create intelligent AI assistants that answer questions,
            generate leads and help visitors instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            { user.isSetupComplete ? <button onClick={() => navigate("/edit")} className="rounded-2xl bg-gradient-to-r from-violet-500 to-emerald-400 px-8 py-4 text-white font-semibold">
             YOUR ASSISTANT 
            </button> : 
            <button onClick={() => navigate("/create")} className="rounded-2xl bg-black px-8 py-4 text-white font-semibold cursor-pointer hover:bg-gray-800 transition-colors duration-300">
             BUILD YOUR ASSISTANT
            </button> }

            

           

          </div>

          {/* DASHBOARD PREVIEW */}

         <div className="mt-24 max-w-6xl mx-auto">
  <div className="rounded-[32px] border bg-white/80 backdrop-blur-xl p-4 shadow-[0_40px_120px_rgba(0,0,0,.08)]">

    {/* Browser Header */}
    <div className="flex gap-2 mb-5">
      <div className="h-3 w-3 rounded-full bg-red-400" />
      <div className="h-3 w-3 rounded-full bg-yellow-400" />
      <div className="h-3 w-3 rounded-full bg-green-400" />
    </div>

    {/* Website */}
    <div className="relative h-[520px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#16122f] to-[#090814]">
      

      {/* Website Content */}
      <div className="absolute inset-0 p-8">
        <p className="text-white text-lg font-semibold mb-4">YOUR WEBSITE </p>

        <div className="h-12 rounded-2xl bg-white/5 mb-6" />
        

        <div className="space-y-5 max-w-[65%]">

          <div className="h-28 rounded-3xl bg-white/5" />

          <div className="h-16 rounded-3xl bg-white/5" />

          <div className="h-16 rounded-3xl bg-white/5" />

          <div className="h-16 rounded-3xl bg-white/5" />

          <div className="h-16 rounded-3xl bg-white/5" />

        </div>

      </div>

      {/* Launcher */}
      {!chatOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setChatOpen(true)}
          className="
            absolute
            bottom-8
            right-8
            h-16
            w-16
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-violet-500
            flex
            items-center
            justify-center
            shadow-[0_0_40px_rgba(34,211,238,.45)]
          "
        >
          <Mic size={24} className="text-white" />
        </motion.button>
      )}

      {/* Chat Widget */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              absolute
              bottom-6
              right-6
              w-[380px]
              h-[460px]
              rounded-3xl
              border
              border-cyan-500/20
              bg-[#071224]
              overflow-hidden
              shadow-[0_0_80px_rgba(34,211,238,.15)]
            "
          >

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

              <div className="flex items-center gap-3">

                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

                <div>
                  <h3 className="text-white font-semibold">
                    YOUR AI NAME 
                  </h3>

                  <p className="text-emerald-400 text-sm">
                    Online now
                  </p>
                </div>

              </div>

              <button
                onClick={() => setChatOpen(false)}
                className="text-zinc-400 hover:text-white transition"
              >
                <X size={20} />
              </button>

            </div>

            {/* Messages */}
            <div className="p-4 space-y-4">

              <div className="bg-white/10 text-zinc-300 rounded-2xl p-3 w-fit max-w-[80%]">
                Hi! How can I help today?
              </div>

              <div className="bg-cyan-500 text-black rounded-2xl p-3 ml-auto w-fit max-w-[80%]">
                What are your pricing plans?
              </div>

              <div className="bg-white/10 text-zinc-300 rounded-2xl p-3 max-w-[80%]">
                We offer a free plan and a premium plan for ₹100 / 3 months.
              </div>

            </div>

            {/* Input */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-4">

              <div className="flex items-center gap-3">

                <div className="flex-1 bg-white/5 rounded-xl px-4 py-3 text-zinc-500">
                  Ask anything...
                </div>

                <button
                  className="
                    h-12
                    w-12
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-500
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Mic size={18} className="text-white" />
                </button>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  </div>
</div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold mb-16">
            Everything you need
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border bg-white p-8 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="mb-5 text-violet-500">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="bg-[#44444E] py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold mb-16">
            Get started in minutes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-zinc-50 border p-8"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-violet-500 to-emerald-400 bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>

                <h3 className="font-semibold text-xl mb-2">
                  {step.title}
                </h3>

                <p className="text-zinc-500">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="rounded-[40px] bg-gradient-to-r from-violet-600 to-emerald-400 p-12 md:p-20 text-center text-white">

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to launch your AI assistant?
            </h2>

            <p className="mt-5 text-lg text-white/80">
              Start building today and deploy in minutes.
            </p>

            <button  className="mt-8 bg-white text-black rounded-xl px-8 py-4 font-semibold  " onClick={() => navigate("/create")}>
              Start Free
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-[#070b1c] text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-4 gap-10">

            <div>
              <h3 className="font-bold text-2xl mb-4">
                CragzyAI
              </h3>

              <p className="text-zinc-400">
                AI Voice Assistants for modern businesses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                Product
              </h4>

              <ul className="space-y-2 text-zinc-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Integrations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                Resources
              </h4>

              <ul className="space-y-2 text-zinc-400">
                <li>Docs</li>
                <li>Blog</li>
                <li>Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                Legal
              </h4>

              <ul className="space-y-2 text-zinc-400">
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-zinc-500">

            <p>© 2026 CragzyAI. All rights reserved.</p>

            

          </div>

        </div>

      </footer>

    </div>
  );
}