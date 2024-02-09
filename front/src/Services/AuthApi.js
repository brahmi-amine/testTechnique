import axios from "axios";

const api_url = process.env.REACT_APP_API;

/**
 * The `inscription` function sends a POST request to an API endpoint with user registration data.
 * @param firstName - The first name of the user who is registering.
 * @param lastName - The `lastName` parameter is the last name of the person being registered for the inscription.
 * @param email - The email parameter is the email address of the user who wants to register.
 * @param password - The "password" parameter is the password that the user wants to set for their account during the registration process.
 * @param phone - The "phone" parameter is the phone number of the user who is registering.
 * @returns the response from the axios post request.
 */
export async function register(email, password, name) {
  const body = { email: email, password: password, name: name };

  try {
    const response = await axios.post(api_url + "register", body);
    return response;
  } catch (error) {
    console.error(error);
  }
}

/**
 * The login function sends a POST request to the API with the provided email and password, and returns the response.
 * @param email - The `email` parameter is the email address of the user trying to log in. It is used to identify the user and verify their identity
 * during the login process.
 * @param password - The `password` parameter is the user's password that they enter when trying to log in. It is a string value.
 * @returns The response from the API call is being returned.
 */
export async function login(email, password) {
  const body = { email: email, password: password };
  try {
    const response = await axios.post(api_url + "login", body);
    return response;
  } catch (error) {
    console.error(error);
  }
}
