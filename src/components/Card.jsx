import Strength from "./Strength";
import Button from "./Button";
import Copy from "./Copy";
import { useState } from "react";

// generate a password based on the checked values
// copy the password to the clipboard

export default function Card() {
  const [range, setRange] = useState(0);
  const [strength, setStrength] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [password, setPassword] = useState("");

  return (
    <>
      <Copy password={password} />
      <div className="card">
        {/* range spot */}
        <div className="input-num">
          <h3>Character Length</h3>
          <p>{range}</p>
        </div>
        <input
          type="range"
          name="password-range"
          className="range"
          value={range}
          onChange={(e) => {
            setRange(e.target.value);
          }}
          min={0}
          max={20}
        />{" "}
        <br />
        {/* all check list */}
        <input
          type="checkbox"
          name="Uppercase-letters"
          style={{ accentColor: "#aff3c1" }}
          id="one"
          checked={strength.uppercase}
          onChange={(e) =>
            setStrength({ ...strength, uppercase: e.target.checked })
          }
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
          checked={strength.lowercase}
          onChange={(e) =>
            setStrength({ ...strength, lowercase: e.target.checked })
          }
        />
        <label className="test" htmlFor="two">
          Include Lowercase Letters
        </label>
        <br />
        <input
          type="checkbox"
          name="Numbers"
          style={{ accentColor: "#aff3c1" }}
          id="three"
          checked={strength.numbers}
          onChange={(e) =>
            setStrength({ ...strength, numbers: e.target.checked })
          }
        />
        <label className="test" htmlFor="three">
          Include Numbers
        </label>
        <br />
        <input
          type="checkbox"
          name="symbols"
          style={{ accentColor: "#aff3c1" }}
          id="four"
          checked={strength.symbols}
          onChange={(e) =>
            setStrength({ ...strength, symbols: e.target.checked })
          }
        />
        <label className="test" htmlFor="four">
          Include Symbols
        </label>
        <Strength strength={strength} />
        <Button
          characterLength={range}
          strength={strength}
          setPassword={setPassword}
        />
      </div>
    </>
  );
}
