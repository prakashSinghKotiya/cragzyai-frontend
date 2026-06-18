import Hero from "../Components/Hero";
import BentoSection from "../Components/BentoSection";

export default function LandingPage() {
  const steps = [
    {
      number: "01",
      title: "Create Agent",
      desc: "Sign up and create your AI assistant."
    },
    {
      number: "02",
      title: "Train Knowledge",
      desc: "Train AI with your prompt and website content."
    },
    {
      number: "03",
      title: "Customize Voice",
      desc: "Choose personality, tone and voice."
    },{
      number: "04",
      title: "Generate API",
      desc: "Generate your own api key for working ."
    },
    {
      number: "05",
      title: "Embed Anywhere",
      desc: "Paste one line of code into your website."
    }
  ];
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* Global Background */}

      <div className="fixed inset-0 -z-50 bg-black">

        <div className="absolute top-0 left-0 h-[700px] w-[700px] bg-cyan-500/5 blur-[220px]" />

        <div className="absolute right-0 top-[20%] h-[700px] w-[700px] bg-violet-500/5 blur-[220px]" />

        <div className="absolute bottom-0 left-[30%] h-[700px] w-[700px] bg-cyan-500/5 blur-[220px]" />

      </div>

      {/* Hero */}

      <Hero />

      {/* Bento Grid */}

      <BentoSection />

      {/* Dashboard Showcase */}

      <section className="relative py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
        Dashboard
      </p>

      <h2 className="mt-6 text-5xl md:text-7xl font-black">
        HOW IT
        <span className="text-white/30"> WORKS ?</span>
      </h2>
    </div>

    {/* Steps Grid */}
    <div className="grid md:grid-cols-2 gap-6">

      {steps.map((step) => (
        <div
          key={step.number}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            transition-all
            duration-300
            hover:border-cyan-500/30
            hover:-translate-y-1
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              -top-24
              -right-24
              h-48
              w-48
              rounded-full
              bg-cyan-500/10
              blur-3xl
              opacity-0
              group-hover:opacity-100
              transition
            "
          />

          {/* Number */}
          <div className="relative z-10 text-6xl font-black text-cyan-400 mb-6">
            {step.number}
          </div>

          {/* Title */}
          <h3 className="relative z-10 text-2xl font-bold text-white mb-3">
            {step.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 text-zinc-400 leading-relaxed">
            {step.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* Integration */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-10">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>
                <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
                  Deploy
                </p>

                <h2 className="mt-6 text-5xl font-black">
                  One Line
                  <br />
                  Installation
                </h2>

                <p className="mt-6 text-zinc-500">
                  Embed your assistant anywhere.
                </p>
              </div>

              <div className="bg-black rounded-[32px] border border-white/10 p-8">

                <pre className="text-cyan-400 overflow-auto">
{`<script
src="https://xyzz.com/widget.js"
data-assistant-id="abc123">
</script>`}
                </pre>

              </div>

            </div>

          </div>
        </div>
      </section>

      

      {/* Pricing */}

      <section className="py-32">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-black">
        Pricing
      </h2>

      <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
        Start for free and upgrade when you need unlimited AI conversations.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

      {/* Free Plan */}
      <div
        className="
          relative
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-10
          overflow-hidden
        "
      >
        <div className="mb-8">
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
            Free
          </span>
        </div>

        <h3 className="text-3xl font-bold text-white">
          Starter
        </h3>

        <div className="mt-6 flex items-end gap-2">
          <span className="text-6xl font-black text-white">
            ₹0
          </span>
          <span className="text-zinc-500 mb-2">
            forever
          </span>
        </div>

        <ul className="mt-10 space-y-4 text-zinc-300">
          <li>✓ AI Assistant Creation</li>
          <li>✓ Basic Website Integration</li>
          <li>✓ Limited Monthly Messages</li>
          <li>✓ Basic Analytics</li>
          <li>✓ Community Support</li>
        </ul>

        <button
          className="
            mt-10
            w-full
            py-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-white
            font-semibold
            transition-all
            duration-300
            hover:bg-white/10
          "
        >
          Current Plan
        </button>
      </div>

      {/* Premium Plan */}
      <div
        className="
          relative
          rounded-[40px]
          p-[1px]
          overflow-hidden
          group
        "
      >
        {/* Animated Border */}
        <div
          className="
            absolute
            inset-0
            rounded-[40px]
            bg-[linear-gradient(90deg,#06b6d4,#8b5cf6,#06b6d4)]
            bg-[length:200%_200%]
            animate-[gradient_6s_linear_infinite]
          "
        />

        <div
          className="
            relative
            rounded-[40px]
            bg-zinc-950
            backdrop-blur-xl
            p-10
            h-full
          "
        >
          <div className="mb-8">
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm text-cyan-400">
              Most Popular
            </span>
          </div>

          <h3 className="text-3xl font-bold text-white">
            Premium
          </h3>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-6xl font-black text-white">
              ₹399
            </span>
            <span className="text-zinc-500 mb-2">
              / 3 months
            </span>
          </div>

          <ul className="mt-10 space-y-4 text-zinc-300">
            <li>✓ Unlimited AI Conversations</li>
            <li>✓ Unlimited Website Visitors</li>
            <li>✓ Advanced Analytics</li>
            <li>✓ Priority Response Speed</li>
            <li>✓ Premium Support</li>
            <li>✓ Future Features Included</li>
          </ul>

          <button
            className="
              mt-10
              w-full
              py-4
              rounded-2xl
              bg-cyan-500
              text-black
              font-semibold
              transition-all
              duration-300
              hover:bg-cyan-400
              hover:scale-[1.02]
            "
          >
            Upgrade Now
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Final CTA */}

      <section className="py-40">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="relative">

            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 blur-[180px]" />

            <h2 className="relative text-6xl md:text-8xl font-black">
              Build Your
              <br />
              Assistant
            </h2>

        

          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex justify-between items-center">

          <h3 className="font-bold text-xl">
            CragzyAI
          </h3>

          <p className="text-zinc-600">
            © 2026
          </p>

        </div>
      </footer>

    </main>
  );
}
