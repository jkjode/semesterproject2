import { register } from "../api/auth/register.mjs";

/**
 * @description Sets up a submit event listener for the register form and handles the register process.
 */

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");
  
  if (form) {

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    const action = form.action;
    const method = form.method;

    // Send data to the API
    register(profile)
  });
}
}