// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyARNofmYCUJYR39V9AfkBn5iygN5zAaaJw",
    authDomain: "funimation-app.firebaseapp.com",
    databaseURL: "https://funimation-app-default-rtdb.firebaseio.com",
    projectId: "funimation-app",
    storageBucket: "funimation-app.appspot.com",
    messagingSenderId: "446899955196",
    appId: "1:446899955196:web:6b1d9d271cc60f846ebe79",
    measurementId: "G-D74100PPMK"
  }
  
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
