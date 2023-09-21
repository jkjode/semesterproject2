import * as storage from "../storage/index.mjs";

/**
 * @description This function handles the logout process.
 */

export function logoutHandler() {
    const logoutButton = document.querySelector("#logoutButton");
    
    if (logoutButton) {
        logoutButton.addEventListener("click", async () => {
        storage.logout();
        location.href = "/";
        });
    }
}