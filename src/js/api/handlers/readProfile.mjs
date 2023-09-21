import * as storage from "../storage/index.mjs";
import * as profileMethods from "../profiles/index.mjs";
import * as templates from "../templates/index.mjs";

/**
 * @description This function sets the event listeners for the user profile.
 */

export async function setViewProfileListener() {
  const profile = storage.load("profile");
  console.log(profile);
  const profileData = await profileMethods.getProfile(profile.name);

  const listingsContainer = document.querySelector("#listings");
  const profileTitle = document.querySelector("#profileName");

  profileTitle.innerHTML = profileData.name;
  templates.renderProfileListingsTemplates(profileData.listings, listingsContainer);
}
