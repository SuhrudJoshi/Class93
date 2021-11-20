
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmIJzn4zRpjvHbnVCJIz1l0PmeUsrnlFw",
  authDomain: "class94-c9300.firebaseapp.com",
  projectId: "class94-c9300",
  storageBucket: "class94-c9300.appspot.com",
  messagingSenderId: "1088442094073",
  appId: "1:1088442094073:web:96edc9cbe6b1cb2e1d6d28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
