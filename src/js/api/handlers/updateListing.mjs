import { getListing, updateListing } from "../listing/index.mjs";

/**
 * @description This function sets the event listeners for updating listings.
 */

export async function setUpdateListingListener() {
  const form = document.querySelector("#editListing");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const listing = await getListing(id);

    console.log(listing);

    form.title.value = listing.title;
    form.body.value = listing.body;
    if (listing.tags) {
      form.tags.value = listing.tags;
    }
    if (listing.media) {
      form.media.value = listing.media;
    }

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      listing.tags = listing.tags.split(",").map((tag) => tag.trim());
      listing.id = id;

      // Send data to the API
      updateListing(listing);

      // Redirect to the profile
      location.assign("/profile/");
    });
  }
}
