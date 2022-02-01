export default function fetchAPI(URL, callback) {
  console.log('entrou na api', URL);
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => callback(data));
}
