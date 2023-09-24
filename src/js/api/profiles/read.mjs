import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_URL } from "../constants.mjs";

const action = "/profiles";

/**
 * @description This function gets a profile by name.
 * @param {string} name 
 * @returns Get a profile by name and return the profile object.
 */

export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a name");
  }

  const getProfileURL = `${API_AUCTION_URL}${action}/${name}?_listings=true`;

  const response = await authFetch(getProfileURL);

  return await response.json();
}
