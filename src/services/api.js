export default function fetchAPI(URL, callback) {
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => callback(data));
}
