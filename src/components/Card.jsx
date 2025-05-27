import { useRef, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";

function Copy() {
  return (
    <>
        <h1>Password Generation</h1>
      <div className="pass-container">
        <h2>PASSWORD</h2>
        <FaRegCopy className="copy-icon" />
      </div>
    </>
  );
}

function Button() {
  function generatePasscode() {
    let text = "";
    let characterSet =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    for (let i = 0; i < range; i++) {
      text += characterSet.charAt(
        Math.floor(Math.random() * characterSet.length)
      );
      return text;
    }
  }

  return (
    <>
      <button onClick={generatePasscode}>
        GENERATE <span>⇢</span>
      </button>
    </>
  );
}

function Strength() {
  return (
    <div className="pass-strength">
      <p className="strength-text">STRENGTH</p>

      <div className="strength-bar">
        <p>MEDIUM</p>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}


export default function Card() {
  const rangeRef = useRef(null)

  useEffect(() => {
    rangeRef.current.value;
  }, [rangeRef]);

  return (
    <>
      <Copy />

      <div className="card">
        {/* range spot */}
        <div className="input-num">
          <h3>Character Length</h3>
          <p>{ rangeRef.current.value}</p>
        </div>
        <input type="range" name="password-range" className="range"  ref={rangeRef} onChange={(e) => {
        rangeRef.current.value = e.target.value} }/> <br />
       
        {/* all check list */}
        <input
          type="checkbox"
          name="Uppercase-letters"
          style={{ accentColor: "#aff3c1" }}
          id="one"
        />
        <label className="test" htmlFor="one">
          Include Uppercase Letters
        </label>
        <br />
        <input
          type="checkbox"
          name="Lowercase-letters"
          style={{ accentColor: "#aff3c1" }}
          id="two"
        />
        <label className="test" htmlFor="two">
          Include Uppercase Letters
        </label>
        <br />
        <input
          type="checkbox"
          name="Numbers"
          style={{ accentColor: "#aff3c1" }}
          id="three"
        />
        <label className="test" htmlFor="three">
          Include Uppercase Letters
        </label>
        <br />
        <input
          type="checkbox"
          name="symbols"
          style={{ accentColor: "#aff3c1" }}
          id="four"
        />
        <label className="test" htmlFor="four">
          Include Uppercase Letters
        </label>
        <Strength />
        <Button />
      </div>
    </>
  );
}
