// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwJqNloYPnhMjDnwBrE3akYWDh61sfvGA",
    authDomain: "let-schatwebbapp.firebaseapp.com",
    projectId: "let-schatwebbapp",
    storageBucket: "let-schatwebbapp.appspot.com",
    messagingSenderId: "262828347203",
    appId: "1:262828347203:web:d367ddac68bde7a84269f6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";

}



