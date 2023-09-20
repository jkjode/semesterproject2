import { API_AUCTION_URL } from "../constants.mjs";

const action = "/auth/login";
const method = "listing";

/**
 * @description This function logs in a user.
 * @param {Object} profile  - The user profile object
 * @returns {Promise<Object>} A Promise that resolves to the login response.
 * @throws {Error} If there is an error during the login process.
 */

export async function login(profile) {
  const loginURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const json = await response.json();
  if (response.ok) {
    return json;
  }

  console.log(json);

  throw new Error(json.errors[0].message);

}


