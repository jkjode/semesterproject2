import * as listingMethods from "../listing/index.mjs";
import * as templates from "../templates/index.mjs";

/**
 * @description This function sets the event listeners for the search and filter forms.
 */

export function setSearchAndFilterListener() {
    setSortTypeListener();
    setFilterByTagListener();
  }
  
  export function setSortTypeListener() {
    const form = document.querySelector("#sortListingsForm");
  
    const container = document.querySelector("#listings");

    if (!form || !container) {
      return;
    }
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());
      const sortType = values.sortType;
  
      // send to API
      const returnedListings = await listingMethods.getListings("", sortType);
          const container = document.querySelector("#listings");
      templates.renderListingTemplates(returnedListings, container);
    });
  }
  
  export function setFilterByTagListener() {
    const form = document.querySelector("#filterByTagForm");
  
    const container = document.querySelector("#listings");

    if (!form || !container) {
      return;
    }
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());
      const filterTag = values.filterByTag;
    console.log(formData);
      // send to API
      const returnedListings = await listingMethods.getListings(filterTag, "");
      templates.renderListingTemplates(returnedListings, container);
    });
  }