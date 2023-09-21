import * as listingMethods from "../api/listings/index.mjs";

/**
 * Generates the HTML template for rendering a single listing.
 * @param {Object} listingData - The data of the listing.
 * @param {string} listingData.title - The title of the listing.
 * @param {string} listingData.body - The body content of the listing.
 * @param {string} listingData.media - The URL of the listing's media (optional).
 * @param {string[]} listingData.tags - The tags associated with the listing (optional).
 * @returns {HTMLElement} The generated listing HTML element.
 */

export function listingTemplateB(listingData) {
  const listing = document.createElement("div");

  listing.id = listingData.id;
  listing.classList.add("col-md-4");
  listing.classList.add("listing");
  listing.classList.add("border");
  listing.classList.add("w-25");
  listing.classList.add("mh-25");
  listing.classList.add("m-4");
  listing.classList.add("text-decoration-none");
  listing.classList.add("text-light");
  const listingTitle = document.createElement("h2");
  listingTitle.innerText = listingData.title;
  listing.append(listingTitle);

  const listingBody = document.createElement("p");
  listingBody.innerText = listingData.body;
  listing.append(listingBody);

  if (listingData.media) {
    const img = document.createElement("img");
    img.src = listingData.media;
    img.alt = `Image from ${listingData.title}`;
    img.classList.add("mt-5");
    img.classList.add("mb-2");
    img.classList.add("img-fluid");
    listing.append(img);
  }

  if (listingData.tags.length > 0) {
    const tags = document.createElement("div");
    tags.classList.add("tags");
    tags.classList.add("d-flex");
    tags.innerHTML = "<p class= 'pe-2'>Tags: </p>";
    listingData.tags.forEach((tag) => {
      const tagElement = document.createElement("p");
      tagElement.classList.add("tag");
      tagElement.innerText = `${tag}, `;
      tagElement.classList.add("pe-2");
      tags.append(tagElement);
    });
    listing.append(tags);
  }

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("d-flex");
  const editButtonLink = document.createElement("a");
  editButtonLink.href = `/listing/edit/?id=${listingData.id}`;
  const editButton = document.createElement("button");
  editButton.classList.add("btn");
  editButton.classList.add("btn-primary");
  editButton.innerHTML = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("btn-danger");
  buttonContainer.append(deleteButton);
  editButtonLink.append(editButton);
  buttonContainer.append(editButtonLink);
  listing.append(buttonContainer);
  return listing;
}

/**
 * Renders the templates for profile listings and appends them to the specified parent element.
 * @param {Object[]} listingDataList - An array of listing data objects.
 * @param {HTMLElement} parent - The parent element to append the listing templates.
 */

export function renderProfileListingsTemplates(listingDataList, parent) {
  parent.innerHTML = "";
  parent.append(...listingDataList.map(listingTemplateB));
  parent.classList.add("row");
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      const id = e.target.parentElement.parentElement.id;
      await listingMethods.removeListing(id);
      window.location.reload();
    });
  });
}
