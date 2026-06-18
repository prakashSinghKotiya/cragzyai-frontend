import { motion } from "framer-motion";
import {
  Bot,
  Globe,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function BentoSection() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-cyan-500/5 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] bg-violet-500/5 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}

        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Platform
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-black text-white">
            Everything
            <span className="text-white/30"> You Need</span>
          </h2>
        </div>

        {/* Bento Grid */}

        <div className="grid grid-cols-12 gap-6">

          {/* BIG CARD */}

          <motion.div
            whileHover={{ y: -8 }}
            className="
            col-span-12
            lg:col-span-8
            min-h-[420px]
            rounded-[36px]
            border border-white/10
            bg-zinc-950
            relative
            overflow-hidden
          "
          >
            {/* Glow */}
            <div className="absolute right-0 top-0 h-72 w-72 bg-cyan-500/10 blur-[120px]" />

            <div className="p-10 relative z-10">

              <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300 text-sm">
                AI Infrastructure
              </div>

              <h3 className="mt-8 text-5xl font-black max-w-lg">
                Train Assistants On Any Content
              </h3>

              <p className="mt-5 text-zinc-500 max-w-md">
                PDFs, Websites, Docs, FAQs and internal knowledge.
              </p>
            </div>

            {/* Floating Dashboard */}

            <div className="absolute bottom-8 right-8">

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                bg-white/[0.03]
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-6
                w-[260px]
              "
              >
                <div className="text-zinc-400 text-sm">
                  Knowledge Sources
                </div>

                <div className="mt-4 space-y-3">

                  <div className="flex justify-between">
                    <span>Website</span>
                    <span className="text-cyan-400">
                      Active
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>PDF Docs</span>
                    <span className="text-cyan-400">
                      Active
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>FAQs</span>
                    <span className="text-cyan-400">
                      Active
                    </span>
                  </div>

                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* METRIC CARD */}

          <motion.div
            whileHover={{ y: -8 }}
            className="
            col-span-12
            lg:col-span-4
            rounded-[36px]
            border border-white/10
            bg-zinc-950
            p-8
            relative
            overflow-hidden
          "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />

            <div className="relative z-10">
              <Bot className="text-cyan-400" />

              <div className="mt-10 text-6xl font-black">
                24/7
              </div>

              <p className="text-zinc-500 mt-3">
                AI Availability
              </p>
            </div>
          </motion.div>

          {/* SMALL CARD */}

          <motion.div
            whileHover={{ y: -8 }}
            className="
            col-span-12
            md:col-span-6
            lg:col-span-4
            rounded-[36px]
            border border-white/10
            bg-zinc-950
            p-8
          "
          >
            <Globe className="text-violet-400" />

            <h3 className="mt-8 text-2xl font-bold">
              Multi Language
            </h3>

            <p className="mt-3 text-zinc-500">
              Talk to customers worldwide.
            </p>
          </motion.div>

          {/* SMALL CARD */}

          <motion.div
            whileHover={{ y: -8 }}
            className="
            col-span-12
            md:col-span-6
            lg:col-span-4
            rounded-[36px]
            border border-white/10
            bg-zinc-950
            p-8
          "
          >
            <BarChart3 className="text-cyan-400" />

            <h3 className="mt-8 text-2xl font-bold">
              Analytics
            </h3>

            <p className="mt-3 text-zinc-500">
              Understand every conversation.
            </p>
          </motion.div>

          {/* TALL CARD */}

          <motion.div
            whileHover={{ y: -8 }}
            className="
            col-span-12
            lg:col-span-4
            row-span-2
            rounded-[36px]
            border border-white/10
            bg-zinc-950
            p-8
            relative
            overflow-hidden
          "
          >
            <div className="absolute bottom-0 right-0 h-52 w-52 bg-violet-500/10 blur-[100px]" />

            <Shield className="text-violet-400" />

            <h3 className="mt-8 text-3xl font-black">
              Enterprise Security
            </h3>

            <p className="mt-4 text-zinc-500">
              Built with privacy and compliance in mind.
            </p>

           
          </motion.div>

          {/* WIDE CARD */}

          <motion.div
            whileHover={{ y: -8 }}
            className="
            col-span-12
            lg:col-span-8
            rounded-[36px]
            border border-white/10
            bg-zinc-950
            p-10
            relative
            overflow-hidden
          "
          >
            <div className="absolute left-0 bottom-0 h-72 w-72 bg-cyan-500/10 blur-[120px]" />

            <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-10">

              <div>
                <Zap className="text-cyan-400" />

                <h3 className="mt-6 text-4xl font-black">
                  Deploy Anywhere
                </h3>

                <p className="mt-4 text-zinc-500 max-w-md">
                  One script tag. Any website.
                </p>
              </div>

              <div className="bg-black border border-white/10 rounded-3xl p-6 min-w-[320px]">
                <pre className="text-cyan-400 text-sm overflow-auto">
{`<script
src="widget.js"
data-assistant-id="abc123">
</script>`}
                </pre>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}