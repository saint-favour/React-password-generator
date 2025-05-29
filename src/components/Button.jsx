export default function Button({ characterLength, strength, setPassword }) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*";

  const strengthKeys = Object.keys(strength);
  const checkCount = strengthKeys.filter((key) => strength[key]).length;

  function generatePasscode() {
    if (characterLength === 0 || checkCount === 0) return;

    let pwd = "";
    for (let i = 0; i < characterLength; i++) {
      if (strength.uppercase) {
        pwd += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
      }
      if (strength.lowercase) {
        pwd += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
      }
      if (strength.numbers) {
        pwd += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
      if (strength.symbols) {
        pwd += symbols.charAt(Math.floor(Math.random() * symbols.length));
      }
    }

    setPassword(pwd.slice(0, pwd.length / checkCount));
  }

  return (
    <button onClick={generatePasscode}>
      GENERATE <span>⇢</span>
    </button>
  );
}
