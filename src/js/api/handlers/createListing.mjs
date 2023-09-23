import { createListing } from "../listing/create.mjs";

export function setCreateListingListener() {
  const form = document.querySelector("#createListing");

  /**
 * Adds a submit event listener to a form element and sends data to the API when the form is submitted.
 * @param {HTMLFormElement} form - The form element to listen for submit events.
 */

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      //   const action = form.action;
      //   const method = form.method;
      listing.tags = [];
      // Send data to the API
      createListing(listing);
      console.log(listing);
    });
  }
}
