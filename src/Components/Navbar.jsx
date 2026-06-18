import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { useAuth } from "../context/Authcontext";
import { toast } from "react-toastify";
import axios from "axios";


function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  console.log("navbar:",user);

  const defaultAvatar =
    "https://ui-avatars.com/api/?name=User&background=7c3aed&color=fff";

  const handleLogout = async () => {
    try {
     await axios.post("https://cragzy-ai.onrender.com/user/logout", null, {
        withCredentials: true,
     })
     toast.success("Logout successful");
     setUser(null);
     navigate("/");
     
    } catch (err) {
      console.log(err);
      toast.error("Logout failed");

    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#37353E]/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-15 flex items-center justify-between">
         
        <div
          onClick={() => navigate("/home")}
          className="flex items-center gap-1 cursor-pointer"
        >
          <img
    src="/logo.png"
    alt="logo"
    className="h-8 md:h-8 w-auto -mr-1"
  />

          <h1 className="font-bold text-2xl">
            Cra<span className="text-violet-400">gzy</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {!user?.isSetupComplete ? (
            <button
              onClick={() => navigate("/create")}
              className="hover:text-violet-400 transition"
            >
              Create Assistant
            </button>
          ) : (
            <button
              onClick={() => navigate("/edit")}
              className="hover:text-violet-400 transition"
            >
              Edit Assistant
            </button>
          )}

          <button
            onClick={() => navigate("/plans")}
            className="hover:text-violet-400 transition"
          >
            Plans
          </button>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <img
            src={user?.image || defaultAvatar}
            alt="profile"
            className="h-10 w-10 rounded-full border border-zinc-700 object-cover"
            referrerPolicy="no-referrer"
          />

           <div className="flex flex-col">
    <span className="text-sm font-medium">
      {user?.name || "User"}
    </span>

    <button
      onClick={handleLogout}
      className="mt-1 flex items-center gap-2 bg-black hover:bg-red-700 px-3 py-1 rounded-lg transition text-sm cursor-pointer"
    >
      <LogOut size={14} />
      Logout
    </button>
  </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-5">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={user?.image || defaultAvatar}
              alt="profile"
              className="h-12 w-12 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />

            <div>
              <p className="font-semibold">
                {user?.name || "User"}
              </p>

              <p className="text-xs text-zinc-400">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {!user?.isSetupComplete ? (
              <button
                onClick={() => {
                  navigate("/create");
                  setMenuOpen(false);
                }}
                className="text-left hover:text-violet-400"
              >
                Create Assistant
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/edit");
                  setMenuOpen(false);
                }}
                className="text-left hover:text-violet-400"
              >
                Edit Assistant
              </button>
            )}

            <button
              onClick={() => {
                navigate("/plans");
                setMenuOpen(false);
              }}
              className="text-left hover:text-violet-400"
            >
              Plans
            </button>

            <button
              
              className="mt-2 flex items-center gap-2 " onClick={handleLogout}
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;