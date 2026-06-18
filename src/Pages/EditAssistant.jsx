import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Copy, Check, Pencil } from "lucide-react";
import Navbar from "../Components/Navbar";
import { useAuth } from "../context/Authcontext";

export default function EditPage() {
  const navigate = useNavigate();
const {user}=useAuth();
  const [copied, setCopied] = useState(false);

  const totalMsg = user?.data.plan === "free"? (user?.data.requestLimit || 0) - (user?.data.totalMessages || 0): "Unlimited";

    const remainingDays =
  user?.data.proExpiresAt
    ? Math.max(
        0,
        Math.ceil(
          (
            new Date(user.proExpiresAt) -
            new Date()
          ) /
          (1000 * 60 * 60 * 24)
        )
      )
    : 0;

console.log("editassis:",user )
  // Replace with actual user data
  const assistant = {
    name: user.data.assistantName || "My Assistant",
    plan: user.data.plan || "Free Plan",
    status: user.data.geminiStatus || "Active",
    TokenLeft: totalMsg|| 200,
    expiresat:remainingDays
   
  };

  const embedCode = `<script src="http://localhost:5173/Aiassistant.js" data-user-id="${user?.data._id}"></script>`;

  const copyCode = () => {
    navigator.clipboard.writeText(embedCode);

    setCopied(true);


    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#44444E] pt-28 pb-10 px-4">
        <div className="max-w-5xl mx-auto">

          {/* HEADER */}

          <div className="bg-white rounded-3xl border shadow-sm p-8 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">

              <div>
                <p className="text-sm text-gray-500">
                  Assistant Dashboard
                </p>

                <h1 className="text-4xl font-bold mt-1">
                  {assistant.name}
                </h1>

                <p className="text-gray-500 mt-2">
                  Your assistant is ready to use on your website.
                </p>
              </div>

              <button
                onClick={() => navigate("/create")}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl"
              >
                <Pencil size={18} />
                Edit Assistant
              </button>

            </div>
          </div>

          {/* STATUS CARDS */}

          <div className="grid md:grid-cols-3 gap-4 mb-6">

            <div className="bg-white border rounded-2xl p-5">
              <p className="text-sm text-gray-500">
                Current Plan
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {assistant.plan}
              </h3>
            </div>

            <div className="bg-white border rounded-2xl p-5">
              <p className="text-sm text-gray-500">
                AI Status
              </p>

              <h3 className="text-2xl font-bold text-green-600 mt-2">
                {assistant.status}
              </h3>
            </div>

            <div className="bg-white border rounded-2xl p-5">
              <p className="text-sm text-gray-500">
                Tokens Left
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {assistant.TokenLeft}
              </h3>
            </div>

          </div>

          

          {/* INTEGRATION GUIDE */}

          <div className="bg-yellow-50 border border-yellow-300 rounded-3xl p-6 mb-6">

            <h2 className="font-semibold text-lg mb-4">
              Integration Guide
            </h2>

            <div className="space-y-2 text-gray-700 mb-6">
              <p>1. Copy the embed script below.</p>
              <p>2. Paste it before the closing {"</body>"} tag in your main HTML file .</p>
              <p>3. Deploy your website.</p>
            </div>

      
          </div>

          {/* EMBED CODE */}

          <div className="bg-white border rounded-3xl p-6">

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-xl font-semibold">
                Embed Code
              </h2>

              <button
                onClick={copyCode}
                className="flex items-center gap-2 border px-4 py-2 rounded-xl hover:bg-gray-50"
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Code
                  </>
                )}
              </button>

            </div>

            <pre className="bg-slate-950 text-green-400 rounded-2xl p-5 overflow-x-auto text-sm">
              {embedCode}
            </pre>

          </div>

        </div>
      </div>
    </>
  );
}