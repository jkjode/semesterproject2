/**
 * @description Saves the value to local storage
 * @param {string} key 
 * @param {string} value 
 */

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @description Loads the value from local storage
 * @param {string} key 
 * @returns The loaded value, or null if the value is not found
 */

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * @description Removes the value from local storage
 * @param {string} key  * 
 */

export function remove(key) {
  localStorage.removeItem(key);
}

/**
 * @description Checks if the user is logged in * 
 * @returns {boolean} true if the user is logged in, false otherwise
 */

export function checkIfLoggedIn() {
  const token = load("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}

/**
 * @description Logs out the user by removing the token and profile from local storage
 */

export function logout() {
  remove("token");
  remove("profile");
}