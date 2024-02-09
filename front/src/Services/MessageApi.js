import axios from "axios";
import { getSession } from "../Utils/SessionUtils";

const api_url = process.env.REACT_APP_API;

const config = {
  headers: { Authorization: `Bearer ${getSession("token")}` },
};

export async function sendMessage(subject, content, to, from) {
  const body = { subject: subject, content: content, to: to, from: from };
  try {
    const response = await axios.post(api_url + "messages", body, config);
    return response;
  } catch (error) {
    console.error(error);
  }
}

/**
 * The function `getNews` makes an asynchronous request to an API endpoint to fetch news data and returns the response.
 * @returns the response object from the axios GET request.
 */
export async function getAllMessages() {
  try {
    const response = await axios.get(api_url + "messages", config);
    return response;
  } catch (error) {
    console.error(error);
  }
}

/**
 * The function `getNewsById` is an asynchronous function that makes a GET request to the specified API endpoint to retrieve news data by its ID.
 * @param id - The `id` parameter is the unique identifier of the news article you want to retrieve. It is used to construct the URL for the API request.
 * @returns the response object from the API call.
 */
export async function getMessageById(id) {
  try {
    const response = await axios.get(api_url + "messages/" + id, config);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMyOwnMessage(email) {
  try {
    const response = await axios.get(api_url + "messages/owner/" + email, config);
    return response;
  } catch (error) {
    console.error(error);
  }
}
