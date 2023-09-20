import { API_AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "listing";

/**
 * @description This function registers a new user.
 * @param {Object} profile - The user profile object.
 * @param {string} profile.username - The username of the user.
 * @param {string} profile.email - The email of the user.
 * @param {string} profile.password - The password of the user.
 * @returns {Promise<Object>} A Promise that resolves to the registration response.
 * @throws {Error} If there is an error during the registration process.
 */

export async function register(profile) {
  const registerURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  alert("You have successfully registered");
  return result;
}
