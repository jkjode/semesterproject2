import * as listingMethods from "../js/api/listing/index.mjs";
import * as templates from "../js/api/templates/index.mjs";
import * as listeners from "../js/api/handlers/index.mjs";

const path = location.pathname;

listeners.checkIfLoggedIn(path);
listeners.logoutHandler();

/**
 * Handles the logic based on the current path to set up appropriate event listeners and render templates.
 * @param {string} path - The current path.
 */

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/listing/create/") {
  listeners.setCreateListingListener();
} else if (path === "/listing/edit/") {
  listeners.setUpdateListingListener();
} else if (path === "/profile/edit/") {
  listeners.setUpdateProfileListener();
} else if (path === "/feed/") {
  async function testTemplate() {
    const listings = await listingMethods.getListings();
    console.log({ listings })
    const container = document.querySelector("#listings");
    templates.renderListingTemplates(listings, container);
  }
  testTemplate();
  listeners.setSearchAndFilterListener();
} else if (path === "/listing/") {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const listing = await listingMethods.getListing(id);
  const container = document.querySelector("#listing");
  templates.renderOneListingTemplate(listing, container);
} else if (path === "/profile/") {
  listeners.setViewProfileListener();
}
