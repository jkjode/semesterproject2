import { load } from "../storage/index.mjs";

/**
 * @description This function returns the headers object for an authenticated request.
 * @returns {Object} The headers object containing the Content-Type and Authorization headers.
 */

export function headers() {
  const token = load("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * @description This function makes an authenticated request to the API.
 * @param {string} url  - The URL to make the request to.
 * @param {object} options  - The options object for the request.
 * @returns A Promise that resolves to the fetch response.
 */

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
