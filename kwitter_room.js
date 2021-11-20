// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjQMtygzR4kI8FU8AzFraf2X09xIj69rQ",
  authDomain: "classtest-3174e.firebaseapp.com",
  databaseURL: "https://classtest-3174e-default-rtdb.firebaseio.com",
  projectId: "classtest-3174e",
  storageBucket: "classtest-3174e.appspot.com",
  messagingSenderId: "633713286309",
  appId: "1:633713286309:web:e4f16d27376c368643c14c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebaseConfig.databaseURL().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' > #"+Roome_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
});});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebaseConfig.databaseURL().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
  window.location = "index.html";
}
  