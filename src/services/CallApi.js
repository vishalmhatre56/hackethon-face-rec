import fetch from "node-fetch";

const baseURL = 'http://localhost:8080/api/';

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
console.log(data);

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

export function CallApi2(api, method, userInfo) {

  var apiBaseURL = baseURL + api + '/';

  return new Promise((resolve, reject) => {

    var headers = {
      "Content-type": "application/json",
      "Accept": "application/json",
      "Accept-Charset": "utf-8"
    };

 

    let formData = new FormData();
    formData.append('first_name', userInfo.first_name);
    formData.append('last_name', userInfo.last_name);
    formData.append('email', userInfo.email);
    formData.append('password', userInfo.password);
   

    // if (userInfo.file || userInfo.file !== null) {
      const fileObj = dataURItoBlob(userInfo.imageData, "newFile.png");
      formData.append('image', fileObj);
    // }


    var settings = {
      headers: headers,
      method: "PUT",
      body:formData
      
    };

   
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

 

export const dataURItoBlob = (dataURI, filename) => {
  var arr = dataURI.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
