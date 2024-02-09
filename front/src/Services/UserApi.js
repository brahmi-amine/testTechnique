import axios from "axios";
import { getSession } from "../Utils/SessionUtils";

const api_url = process.env.REACT_APP_API;

/* Setting the header for the axios request. */
const config = {
  headers: { Authorization: `Bearer ${getSession("token")}` },
};

export async function getAllUsers() {
  try {
    const response = await axios.get(api_url + "users/", config);
    return response;
  } catch (error) {
    console.error(error);
  }
}

/**
 * The function `getUserById` is an asynchronous function that makes a GET request to the API endpoint `/users/{id}` to retrieve user data by their ID.
 * @param id - The id parameter is the unique identifier of the user you want to retrieve from the API.
 * @returns The `getUserById` function is returning a promise that resolves to the response object from the API call.
 */
export async function getUserById(id) {
  try {
    const response = await axios.get(api_url + "users/" + id, config);
    return response;
  } catch (error) {
    console.error(error);
  }
}

/**
 * The function `deleteUserById` is an asynchronous function that sends a DELETE request to the API endpoint to delete a user by their ID, and returns
 * the response.
 * @param id - The id parameter is the unique identifier of the user that you want to delete.
 * @returns the response from the API call.
 */
export async function deleteUserById(id) {
  try {
    const response = await axios.delete(api_url + "users/" + id, config);
    return response;
  } catch (error) {
    console.error(error);
  }
}
