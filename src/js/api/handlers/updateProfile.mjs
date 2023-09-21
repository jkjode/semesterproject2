import { getProfile, updateProfile } from "../api/profiles/index.mjs";

import * as storage from "../storage/index.mjs";

/**
 * @description This function sets the event listeners for updating the user profile.
 */

export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const profile = storage.load("profile");
    console.log(profile);

    const { name, email, banner, avatar } = profile;

    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    form.banner.value = banner;
    form.avatar.value = avatar;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // Send data to the API
      updateProfile(profile);

      const updatedProfile = await getProfile(name);

      // Save the profile to local storage
      storage.save("profile", updatedProfile);
    });
  }
}
