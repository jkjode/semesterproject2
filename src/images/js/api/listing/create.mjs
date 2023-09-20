import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../../api/constants.mjs";
import { load } from "../../storage/index.mjs";

const action = "/listings";
const method = "listing";

/**
 * @description This function creates a new listing URL
 * @param {Object} listingData  - The listing data object
 * @returns {Promise<Object>} A Promise that resolves to the listing creation response.
 */

export async function createListing(listingData) {
  const createListingURL = API_SOCIAL_URL + action;

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
