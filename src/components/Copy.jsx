import { FaRegCopy } from "react-icons/fa";
import Swal from "sweetalert2";


export default function Copy({ password }) {
  return (
    <div>
      <h1>Password Generation</h1>
      <div className="pass-container">
        <h2>{password || "PASSWORD"}</h2>
        {/* <input disabled value={password} /> */}
        <FaRegCopy
          className="copy-icon"
          onClick={async () => {
            await navigator.clipboard.writeText(password);
            Swal.fire({
              icon: "success",
              title: "password copied",
              timer: 2000,
              showConfirmButton: false,
              timerProgressBar: true,
              toast: true,
              position: "top",
            });
          }}
        />
      </div>
    </div>
  );
}
