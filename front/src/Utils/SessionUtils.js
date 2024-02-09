/**
 * It returns the value of the key that is passed to it.
 * @param value - The value of the session you want to get.
 * @returns The value of the key in localStorage.
 */
export function getSession(value) {
  return localStorage.getItem(value);
}
/**
 * The `parseToken` function takes a JWT token, extracts the payload, decodes it from base64, and returns the parsed JSON object.
 * @param token - The `token` parameter is a string that represents a JSON Web Token (JWT).
 * @returns the decoded JSON object from the encoded payload of the token.
 */
export function parseToken(token) {
  const encodedPayload = token.split(".")[1];
  return JSON.parse(atob(encodedPayload));
}
