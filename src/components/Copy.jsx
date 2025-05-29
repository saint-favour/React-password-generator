import { FaRegCopy } from "react-icons/fa";

export default function Copy({ password }) {
  return (
    <div>
      <h1>Password Generation</h1>
      <div className="pass-container">
        <h2>{password || "PASSWORD"}</h2>
        {/* <input disabled value={password} /> */}
        <FaRegCopy className="copy-icon" />
      </div>
    </div>
  );
}
