(function () {
  const scriptTag = document.currentScript;
  const css = document.createElement("link");
  
css.rel = "stylesheet";

css.href = new URL(
  "./Aiassis.css",
  scriptTag.src
).href;

 document.head.appendChild(css);

 const deleteIconUrl = new URL(
  "./delete.svg",
  scriptTag.src
).href;

const micIconUrl = new URL(
  "./mic.svg",
  scriptTag.src
).href;

const sun = new URL(
  "./sun.svg",
  scriptTag.src
).href;

const moon = new URL(
  "./moon.svg",
  scriptTag.src
).href;

const mainlogo = new URL(
  "./logo.png",
  scriptTag.src
).href;

  const userId = scriptTag.getAttribute("data-user-id");
  let assistantdata = null
  let darkMode = false;




  // Chat Button
  const button = document.createElement("button");

  button.innerHTML = "💬";

  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    background: "#00040b",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: "999999",
    boxShadow: "0 4px 12px rgba(0,0,0,.2)",
  });

  document.body.appendChild(button);

  // Popup
  const popup = document.createElement("div");

Object.assign(popup.style, {
  position: "fixed",
  bottom: "90px",
  right: "20px",
  width: "350px",
  height: "500px",
  background: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  display: "none",
  flexDirection: "column",
  boxShadow: "0 8px 25px rgba(0,0,0,.2)",
  zIndex: "999999",
  fontFamily: "Arial, sans-serif"
});

 popup.innerHTML = `
  <div class="ai-header">
    <div class="ai-header-content">
      

      <div class="ai-info">
        <h3 class="ai-title">
          Hello! I'm ${assistantdata?.assistantName  || "AI Assistant"}
        </h3>

        </div>
      <div class="ai-actions">
    <button id="themeBtn"><img
    src="${moon}"
    class="moon-icon"
    alt="moon"
  /></button>
   <button id="clearBtn">
  <img src="${deleteIconUrl}" class="delete-icon" />
</button>
  
  </div>

      
      </div>
    
  </div>


  <div id="assistant-messages" class="ai-messages">
    
  </div>

  <div class="ai-input-wrapper">
    <input
      id="assistant-input"
      class="ai-input"
      type="text"
      placeholder="Ask anything..."
    />
     <button id="voiceBtn" class="voice-btn">
      <img
    src="${micIconUrl}"
    class="action-icon"
    alt="Mic"
  />
  </button>

    <button
      id="assistant-send"
      class="ai-send-btn"
    >
      Send
    </button>
  </div>
`;

 document.body.appendChild(popup);

  const messagesContainer =
    popup.querySelector("#assistant-messages");

  const input =
    popup.querySelector("#assistant-input");

  const sendBtn =
    popup.querySelector("#assistant-send");

  const clearBtn =
  popup.querySelector("#clearBtn");

  clearBtn.addEventListener("click", () => {
  if (
    confirm(
      "Clear all messages?"
    )
  ) {
    messagesContainer.innerHTML = "";

    addMessage(
      "Hi 👋 How can I help you today?",
      "assistant"
    );
  }
});
  
 //darkmode 
const themeBtn =
  popup.querySelector("#themeBtn");

  themeBtn.addEventListener("click", () => {
  darkMode = !darkMode;

  popup.classList.toggle("dark-mode");

  themeBtn.innerHTML =
    darkMode ?`<img
    src="${sun}"
    class="sun-icon"
    alt="sun"
  />`: `<img
    src="${moon}"
    class="moon-icon"
    alt="moon"
  />`
});


  // Toggle popup
  button.addEventListener("click", () => {
    popup.style.display =
      popup.style.display === "none"
        ? "flex"
        : "none";
  });

  //loadingstate 

  function showTyping() {
  const typing = document.createElement("div");

  typing.id = "ai-typing";

  typing.innerHTML = `
    <div class="typing-bubble">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  messagesContainer.appendChild(typing);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight;
}

function hideTyping() {
  const typing =
    document.getElementById("ai-typing");

  if (typing) {
    typing.remove();
  }
}

  //geting user  deetails
  const loadAssistant = async () => {
  try {
    const res = await fetch(
      `https://cragzy-ai.onrender.com/assistant/${userId}`
    );

    const data = await res.json();

    console.log(data);

    if (data) {
      assistantdata = data.data
      console.log(assistantdata);
      applyConfig();
    }
  } catch (error) {
    console.log("Assistant Load Error:", error);
  }
};

const applyConfig = () => {
  if (!assistantdata) return;

  popup.querySelector(".ai-title").innerHTML =
    `Hello! I'm ${assistantdata.assistantName}`;


};

loadAssistant();


  function addMessage(text, sender) {
    const msg = document.createElement("div");

    msg.style.marginBottom = "10px";
    msg.style.display = "flex";
    msg.style.justifyContent =
      sender === "user"
        ? "flex-end"
        : "flex-start";

    msg.innerHTML = `
      <div style="
        max-width:80%;
        padding:10px;
        border-radius:10px;
        background:${
          sender === "user"
            ? "#00030a"
            : "#e5e7eb"
        };
        color:${
          sender === "user"
            ? "white"
            : "black"
        };">
        ${text}
      </div>
    `;

   messagesContainer.appendChild(msg);

requestAnimationFrame(() => {
  messagesContainer.scrollTop =
    messagesContainer.scrollHeight;
});
  }

  const voiceBtn =
  popup.querySelector("#voiceBtn");

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

let recognition = null;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();

  voiceBtn.addEventListener("click", () => {
  if (!recognition) return;

  recognition.start();
});

recognition.onstart = () => {
  voiceBtn.style.opacity = "0.6";
};

recognition.onend = () => {
  voiceBtn.style.opacity = "1";
};

  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcript =
      event.results[0][0].transcript;

    input.value = transcript;

    sendMessage();
  };

  recognition.onerror = (error) => {
    console.log(error);
  };
}

function speakText(text) {
  speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.rate = 1;
  utterance.pitch = 1;

  speechSynthesis.speak(utterance);
}

  async function sendMessage() {
    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user");

    input.value = "";
    showTyping();

    try {
      const response = await fetch(
        "https://cragzy-ai.onrender.com/assistant/get-response",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            userId,
            message,
          }),
        }
      );


      const data = await response.json();
      console.log(data)

     hideTyping();
     
     addMessage(
  data.aiResponse || "No response",
  "assistant"
);

speakText(data.aiResponse);
    } catch (error) {
      console.error(error);

      addMessage(
        "Something went wrong.",
        "assistant"
      );
    }
  }

  sendBtn.addEventListener(
    "click",
    sendMessage
  );

  input.addEventListener(
    "keypress",
    (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    }
  );

  addMessage(
    "Hi 👋 How can I help you today?",
    "assistant"
  );
})();