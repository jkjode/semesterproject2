import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_URL } from "../../api/constants.mjs";

const action = "/listings";
const method = "put";

/**
 * @description This function updates a listing.
 * @param {Object} listingData - The listing data object
 * @returns - A Promise that resolves to the listing update response.
 */

export async function updateListing(listingData) {
  if (!listingData.id) {
    throw new Error("Listing ID is required");
  }

  const updateListingURL = `${API_AUCTION_URL}${action}/${listingData.id}`;

  const response = await authFetch(updateListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
