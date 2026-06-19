import React, { useEffect } from "react";
import { Crown, Zap, Check, Amphora } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const PlansPage = () => {
    const {user, setUser} = useAuth();
    const navigate = useNavigate();
   

    useEffect(() => {
      if (!user.isSetupComplete) {
        toast.error("Please complete the setup first");
        navigate("/create");
      }
    const razorpayScript = document.querySelector("#razorpay-script"); // when user will come in plan page then only this script will be added
    if (razorpayScript) return;
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.id = "razorpay-script";
    document.body.appendChild(script);
  
    }, []);

    const handlePlanChange = async () => {
      try{  const rsp =await axios.post("https://cragzy-ai.onrender.com/payment/order", { plan: "pro" }, { withCredentials: true });
      
      const order = rsp.data.order;
      

      const Options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        order_id: order.id,
        amount: order.amount,
        currency: "INR",
        name: "AI Assistant",
      
        handler: async(response)=> {

          const verifyingOrder = await axios.post("https://cragzy-ai.onrender.com/payment/verifying",response , { withCredentials: true } );
          
          console.log("plans:",verifyingOrder);
          
          if(verifyingOrder.data.success){
            toast.success("payment successfull");
            console.log("plans:",verifyingOrder);
            setUser(verifyingOrder.data.data);
          }
          

      }}

      const rzp = new window.Razorpay(Options); // this is oepening razorpayPOPUP and in option we are sednning data 
      rzp.open();
    }
    catch(err){
      console.log(err);
      toast.error("payment failed");
    }
    
    }
  


  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
            <div className="mb-6">
  <button
    onClick={() => navigate("/edit")}
    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
  >
    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
    Back
  </button>
</div>
          <h1 className="text-5xl font-bold mb-3">
            PLANS
          </h1>
          <p className="text-gray-400 text-lg">
            Manage your AI assistant plan and unlock premium features.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <p className="text-gray-400">Current Plan</p>
            <h2 className="text-3xl font-bold mt-2">{user.plan}</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <p className="text-gray-400">Status</p>
            <h2 className="text-3xl font-bold mt-2 text-green-400">
              {user.geminiStatus}
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <p className="text-gray-400">Messages Left</p>
            <h2 className="text-3xl font-bold mt-2">
                     {user.plan === "free"
                     ? Math.max(0, user.requestLimit - user.totalMessages)
                        : "Unlimited"}
                    </h2>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-gray-400" />
                <h2 className="text-3xl font-bold">Free Plan</h2>
              </div>

              <div className="mb-8">
                <span className="text-6xl font-bold">₹0</span>
                <span className="text-gray-400 ml-2">/ forever</span>
              </div>

              <div className="space-y-5">
                {[
                  "200 AI Messages",
                  "Voice Assistant",
                  "Navigation Support",
                  "Basic Customization",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-10 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition text-lg font-semibold">
                Current Plan
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="group relative overflow-hidden rounded-[32px] p-[1px]">
  {/* Animated Border */}
  <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(90deg,#7c3aed,#06b6d4,#7c3aed)] bg-[length:300%_300%] animate-[gradient_6s_ease_infinite]" />

  {/* Glow Orbs */}
  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl transition-all duration-700 group-hover:scale-125" />
  <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl transition-all duration-700 group-hover:scale-125" />

  {/* Card */}
  <div className="relative h-full rounded-[32px] bg-[#101624]/95 backdrop-blur-xl p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_80px_rgba(124,58,237,0.4)]">

    {/* Shine Effect */}
    <div className="absolute inset-0 overflow-hidden rounded-[32px]">
      <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[150%]" />
    </div>

    {/* Badge */}
    <div className="absolute top-5 right-5">
      <span className="relative flex items-center gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-1 rounded-full text-xs font-semibold text-white">
        <span className="absolute inset-0 rounded-full bg-violet-500 opacity-30 animate-ping" />
        MOST POPULAR
      </span>
    </div>

    {/* Header */}
    <div className="relative z-10 flex items-center gap-3 mb-6">
      <Crown className="w-8 h-8 text-yellow-400" />
      <h2 className="text-3xl font-bold text-white">
        Pro Plan
      </h2>
    </div>

    {/* Price */}
    <div className="relative z-10 mb-8">
      <span className="text-6xl font-bold bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-[length:200%_200%] animate-[gradient_5s_ease_infinite] bg-clip-text text-transparent">
        ₹100
      </span>

      <p className="text-gray-400 mt-2">
        3 Months Access
      </p>
    </div>

    {/* Features */}
    <div className="relative z-10 space-y-5">
      {[
        "Unlimited AI Messages",
        "Advanced AI Assistant",
        "Priority Performance",
        "Unlimited Navigation",
        "Premium Support",
        "Early Access Features",
      ].map((item) => (
        <div key={item} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-cyan-400" />
          <span className="text-gray-200">
            {item}
          </span>
        </div>
      ))}
    </div>

    {/* CTA */}
    <button className="group/btn relative overflow-hidden w-full mt-10 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 transition-all duration-300 hover:scale-[1.03] shadow-[0_0_30px_rgba(6,182,212,0.4)]"
      onClick={handlePlanChange}
    >
      <span className="absolute inset-0 bg-white/10 translate-x-[-150%] skew-x-12 transition-all duration-1000 group-hover/btn:translate-x-[250%]" />
      <span className="relative z-10"> 
        {user?.plan === "pro" ? "Active Plan ✓" : "Upgrade Now →"}
      </span>
    </button>
  </div>
</div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-blue-500/10 p-8 backdrop-blur-xl">
          <h3 className="text-2xl font-bold mb-2">
            Unlock Unlimited AI Power 🚀
          </h3>
          <p className="text-gray-400">
            Upgrade today and experience faster responses,
            unlimited conversations, premium features, and
            priority support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;