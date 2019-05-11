import fetch from "node-fetch";

const baseURL = 'http://localhost:3000/api/';
export function CallApi(api, method, data) {

  var apiBaseURL = baseURL + api + '/';

  return new Promise((resolve, reject) => {

    var headers = {
      "Content-type": "application/json",
      "Accept": "application/json",
      "Accept-Charset": "utf-8"
    };



    var settings = {
      headers: headers,
      method: method
    };

    if (method === "POST") {
      settings.body = JSON.stringify(data);
    } else {
      var params = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      apiBaseURL += '?' + params;
    }
    fetch(apiBaseURL, settings)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        resolve(response.statusText);

      })
      .then((res) => {

        resolve(res);
      })
      .catch((error) => {
        console.log("error", error)
        reject(error);
      });

  });

}