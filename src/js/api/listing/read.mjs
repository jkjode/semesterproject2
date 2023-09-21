// export async function getListings() {}

// export async function getListing(id) {}

import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../../api/constants.mjs";

const action = "/listings";

/**
 * @description This function gets all listings and lets you sort by sortType or filter by tag.
 * @param {string} tag 
 * @param {string} sortType 
 * @returns listings filtered or sorted
 */

export async function getListing(tag, sortType) {
  const getListingsURL = `${API_SOCIAL_URL}${action}?_author=true${tag ? `&_tag=${tag}` : ""}${
    sortType ? `&sort=created&sortOrder=${sortType}` : ""
  }`;

  const response = await authFetch(getListingsURL);
  return await response.json();
}

/**
 * @description This function gets a listing by id.
 * @param {*} id  
 * @throws {Error} If there is no id
 * @returns The listing with the given id.
 */

export async function getListing(id) {
  if (!id) {
    throw new Error("Get requires a listingID");
  }

  const getListingURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getListingURL);

  return await response.json();
}
