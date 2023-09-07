import { useState, useRef } from "react";
import "./App.css";
import { getFinalText } from "./clases/Animal";
import { capitalize } from "./utils/strings";

function App() {
  const [chat, setChat] = useState<string[]>([]);
  const selectFieldRef = useRef<HTMLSelectElement>("");
  const inputFieldRef = useRef<HTMLInputElement>("");

  const generateAnimalMessage = () => {
    const animal = selectFieldRef.current.value;
    const text = inputFieldRef.current.value;
    if (animal && text.trim() !== "") {
      return getFinalText({
        animal,
        text,
      });
    }
    return "";
  };

  const addMessageToChat = (message: string) => {
    if (message) {
      const animal = selectFieldRef.current.value;
      setChat([...chat, `${capitalize(animal)} said: ${message}`]);
    }
  };

  const handleSendAnimalMessage = () => {
    const message = generateAnimalMessage();
    addMessageToChat(message);
  };

  const cleanText = () => {
    inputFieldRef.current.value = "";
  };

  return (
    <>
      <div>
        <h1>Zoo Chat</h1>
      </div>
      <div className="card">
        <select ref={selectFieldRef} className="input" required>
          <option value="">Select an animal</option>
          <option value="lion">Lion</option>
          <option value="tiger">Tiger</option>
          <option value="cow">Cow</option>
        </select>
      </div>
      <div className="input">
        <input
          ref={inputFieldRef}
          className="input"
          placeholder={`Write what the animal said`}
          type="text"
          required
          onFocus={cleanText}
        />
        <div className="card">
          <button onClick={handleSendAnimalMessage}>Send</button>
        </div>
      </div>
      {chat?.length > 0 && (
        <div>
          {chat.map((chatMessage, index) => (
            <p key={index}>{chatMessage}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
