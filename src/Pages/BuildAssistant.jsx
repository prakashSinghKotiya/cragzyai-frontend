import { useState } from "react";
import {
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Save,
} from "lucide-react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/Authcontext";


export default function AssistantBuilder() {
  const navigate = useNavigate();
  const [showKey, setShowKey] = useState(false);
  const {setUser,user}=useAuth();
  const [edit , setEdit ]= useState(false);

  const [pageForm, setPageForm] = useState({
    name: "",
    route: "",
  });

  console.log(user);

  const [formData, setFormData] = useState({
    assistantName:  user?.assistantName || "",
    businessName: user?.businessName || "",
    businessType: user?.businessType || "",
    businessDescription: user?.businessDescription || "",

    theme: "light",
    tone: "friendly",

    geminiApiKey: user?.geminiApiKey || "",

    navigationPages: user?.navigationPages || [],
  });

  


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addPage = () => {
    if (!pageForm.name || !pageForm.route)
      return;

    setFormData((prev) => ({
      ...prev,
      navigationPages: [
        ...prev.navigationPages,
        {
          id: Date.now(),
          ...pageForm,
        },
      ],
    }));

    setPageForm({
      name: "",
      route: "",
    });
  };

  const deletePage = (id) => {
    setFormData((prev) => ({
      ...prev,
      navigationPages:
        prev.navigationPages.filter(
          (page) => page.id !== id
        ),
    }));
  };

  //api call to save assistant
  const saveAssistant = async () => {
    try{

      console.log(formData);
    const response = await axios.post("https://cragzy-ai.onrender.com/user/create-assistant", formData, { withCredentials: true });  
    console.log(response.data.data.isSetupComplete);
  
      console.log("Assistant created successfully");
     console.log("Assistant created successfully",response.data.data );
    
      setUser(response.data.data);

      
      toast.success("Assistant created successfully");
      if(response.data.data.isSetupComplete){
        setEdit(true);
        navigate("/edit");
      }
    
    }catch(error){
      console.error("Error saving assistant:", error);
      toast.error("Error saving assistant");
    }
    
  };


  const tones = [
    "friendly",
    "professional",
    "sales",
  ];

  return (
    
   
    <div className="min-h-screen bg-[#44444E] pt-4">
 
      {/* NAVBAR */}

      {Navbar()}

      
       <div className="max-w-4xl mx-auto px-4 py-10">

        <h1 className="text-4xl font-bold  bg-gradient-to-r from-violet-500 via-purple-400 to-emerald-700 bg-clip-text text-transparent">
          Assistant Builder
        </h1>

        <p className="text-white mt-2">
          
          Customize your AI assistant
        </p>

        {/* BASIC INFO */}

        <div className="mt-8 bg-white border rounded-3xl p-6 md:p-8">

          <h2 className="font-semibold text-2xl mb-6">
            Basic Information
          </h2>

          <div className="space-y-4">

            <input
              name="assistantName"
              value={formData.assistantName}
              onChange={handleChange}
              placeholder="Assistant Name"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              placeholder="Business Type"
              className="w-full border rounded-xl px-4 py-3"
            />

            <textarea
              rows={5}
              name="businessDescription"
              value={
                formData.businessDescription
              }
              onChange={handleChange}
              placeholder="Business Description"
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>
        </div>

        {/* APPEARANCE */}

        <div className="mt-6 bg-white border rounded-3xl p-6 md:p-8">

          <h2 className="font-semibold text-2xl">
            Appearance
          </h2>

          <div className="mt-6">


            <p className="mt-8 mb-3 font-medium">
              Assistant Behaviour
            </p>

            <div className="grid md:grid-cols-3 gap-3">

              {tones.map((tone) => (
                <button
                  key={tone}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      tone,
                    })
                  }
                  className={`border rounded-xl py-3 capitalize ${
                    formData.tone === tone
                      ? "border-violet-500 bg-violet-50"
                      : ""
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* API KEY */}

        <div className="mt-6 bg-white border rounded-3xl p-6 md:p-8">

          <div className="flex items-center justify-between mb-4">

            <h2 className="font-semibold text-2xl">
              API Key
            </h2>

            <a
  href="https://enter.pollinations.ai/sign-in#news-faq"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-xl px-4 py-2 text-white bg-gradient-to-r from-violet-500 to-emerald-400"
>
  Generate your API Key
</a>


          </div>

          <div className="relative">

            <input
              type={
                showKey
                  ? "text"
                  : "password"
              }
              value={formData.geminiApiKey}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  ApiKey:
                    e.target.value,
                })
              }
              placeholder="AIza..."
              className="w-full border rounded-xl px-4 py-3 pr-14"
            />

            <button
              type="button"
              onClick={() =>
                setShowKey(!showKey)
              }
              className="absolute right-4 top-3"
            >
              {showKey ? (
                <EyeOff />
              ) : (
                <Eye />
              )}
            </button>

            <h1 className="text-zinc-500 mt-2">
              GenerateAPI - Login to pollinations.ai  - Keys - Create your API - Copy and Paste 
            </h1>

          </div>
        </div>

        {/* NAVIGATION */}

        <div className="mt-6 bg-white border rounded-3xl p-6 md:p-8">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h2 className="font-semibold text-2xl">
                Navigation Pages
              </h2>

              <p className="text-zinc-500">
                Pages assistant can redirect users to
              </p>
            </div>

            <button
              onClick={addPage}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-emerald-400 text-white"
            >
              <Plus size={16} />
              Add
            </button>

          </div>

          <div className="grid md:grid-cols-2 gap-3">

            <input
              placeholder="Page Name"
              value={pageForm.name}
              onChange={(e) =>
                setPageForm({
                  ...pageForm,
                  name: e.target.value,
                })
              }
              className="border rounded-xl px-4 py-3"
            />

            <input
              placeholder="/pricing"
              value={pageForm.route}
              onChange={(e) =>
                setPageForm({
                  ...pageForm,
                  route: e.target.value,
                })
              }
              className="border rounded-xl px-4 py-3"
            />

          </div>

          <div className="mt-6 space-y-3">

            {formData.navigationPages.map(
              (page) => (
                <div
                  key={page.id}
                  className="border rounded-xl p-4 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-medium">
                      {page.name}
                    </h3>

                    <p className="text-zinc-500">
                      {page.route}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      deletePage(page.id)
                    }
                    className="text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              )
            )}

          </div>
        </div>

       

        {/* SAVE */}

        <button
          onClick={saveAssistant}
          className="mt-8 w-full rounded-2xl py-4 font-semibold text-white bg-gradient-to-r from-violet-500 via-purple-500 to-emerald-400 flex items-center justify-center gap-2"
        >
          <Save size={18} /> {user.isSetupComplete ? "Update Assistant" : "SaveAssistant" }
         
        </button>

      </div>

      
    </div>
  );
}