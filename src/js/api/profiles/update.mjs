import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_URL } from "../../api/constants.mjs";

const action = "/profiles";
const method = "put";

/**
 * @Description This function updates a profile.
 * @param {object} profileData  - The profile data object
 * @returns an updated profile object.
 */

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileURL = `${API_AUCTION_URL}${action}/${profileData.name}`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  return await response.json();
}
