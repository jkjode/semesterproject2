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
  const listingLink = document.createElement("a");
  listingLink.href = `/listing/?id=${listingData.id}`;
  const listing = document.createElement("div");
  listingLink.append(listing);
  listingLink.classList.add("col-md-4");
  listingLink.classList.add("listing");
  listingLink.classList.add("border");
  listingLink.classList.add("w-25");
  listingLink.classList.add("mh-25");
  listingLink.classList.add("m-4");
  listingLink.classList.add("text-decoration-none");
  listingLink.classList.add("text-light");
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

  return listingLink;
}

/**
 * Renders a single listing template and appends it to the specified parent element.
 * @param {Object} listingData - The data of the listing.
 * @param {HTMLElement} parent - The parent element to append the listing template.
 */

export function renderListingTemplates(listingDataList, parent) {
  parent.innerHTML = "";
  parent.append(...listingDataList.map(listingTemplateB));
  parent.classList.add("row");

}
