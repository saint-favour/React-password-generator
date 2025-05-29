export default function Strength({ strength }) {
  const strengthKeys = Object.keys(strength);
  const checkCount = strengthKeys.filter((key) => strength[key]).length;

  return (
    <div className="pass-strength">
      <p className="strength-text">STRENGTH</p>

      <div className="strength-bar">
        <p>
          {checkCount === 4
            ? "EXCELLENT"
            : checkCount === 3
            ? "GOOD"
            : checkCount === 2
            ? "MEDIUM"
            : checkCount === 1
            ? "WEAK"
            : "VERY WEAK"}
        </p>
        <div
          className="bar"
          style={{
            backgroundColor: checkCount >= 1 ? "#aff3c1" : "",
          }}
        ></div>
        <div
          className="bar"
          style={{
            backgroundColor: checkCount >= 2 ? "#aff3c1" : "",
          }}
        ></div>
        <div
          className="bar"
          style={{
            backgroundColor: checkCount >= 3 ? "#aff3c1" : "",
          }}
        ></div>
        <div
          className="bar"
          style={{
            backgroundColor: checkCount >= 4 ? "#aff3c1" : "",
          }}
        ></div>
      </div>
    </div>
  );
}
