import * as storage from "../storage/index.mjs";

/**
 * @description This function checks if a user is logged in and sends them to the login page if they are not.
 * @module  path  - The path to check.
 */

export function checkIfLoggedIn(path) {
  if (
    !storage.checkIfLoggedIn() &&
    path !== "/" &&
    path !== "/index.html" &&
    path !== "/profile/login/" &&
    path !== "/profile/register/"
  ) {
    window.location.href = "/";
  }
}
