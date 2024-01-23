import Swal from "sweetalert2";

export const showBasicAlert = (title, icon, text = "") =>
  Swal.fire({
    icon: icon,
    title: title,
    backdrop: "rgba(0,0,0,0.7)",
    text: text,
  });
