// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
import * as labsComponents from "vuetify/labs/components";

export default createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

// const { HTTP } = require("../HTTPs");

// class AuthApis {
//   getData(requestLogin) {
//     return new Promise((resolve, reject) => {
//       httpClient
//         .post(`/login/getlogin`, requestLogin)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   refreshToken(tokenModel) {
//     return new Promise((resolve, reject) => {
//       HTTP.post(`/login/refresh`, tokenModel)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   signIn(newAccount) {
//     return new Promise((resolve, reject) => {
//       HTTP.post(`/login/signin`, newAccount)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   getPhatTu() {
//     return new Promise((resolve, reject) => {
//       HTTP.get(`/api/version1.0/getallphattu`)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   forgetPass(forgetRequest) {
//     return new Promise((resolve, reject) => {
//       HTTP.post(`/login/forgetpass`, forgetRequest)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   confirmCode(code) {
//     return new Promise((resolve, reject) => {
//       HTTP.get(`login/confirmcodeforgetpass?code=${code}`)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   confirmPass(request) {
//     return new Promise((resolve, reject) => {
//       HTTP.post(`login/confirmpass`, request)
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }
// }

// module.exports = new AuthApis();
// const axios = require("axios");

// class HTTPSingleton {
//   static config = {
//     baseURL: "http://192.168.1.56:8080/",
//     // baseURL: "http://192.168.1.149:8080/",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//     timeout: 1000000,
//   };

//   static instance;
//   httpClient;

//   constructor() {
//     this.httpClient = axios.create(HTTPSingleton.config);
//   }

//   static getInstance() {
//     if (!HTTPSingleton.instance) {
//       HTTPSingleton.instance = new HTTPSingleton();
//     }
//     return HTTPSingleton.instance;
//   }

//   getHTTP() {
//     return this.httpClient;
//   }
// }

// const httpClient = HTTPSingleton.getInstance().getHTTP();

// module.exports = {
//   HTTP: httpClient,
// };
