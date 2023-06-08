var firebaseConfig = {
      apiKey: "AIzaSyB1wCgPSPVevFCQcYKe0jVwdkPCWfo75MI",
      authDomain: "chatbox-87a51.firebaseapp.com",
      databaseURL: "https://chatbox-87a51-default-rtdb.firebaseio.com",
      projectId: "chatbox-87a51",
      storageBucket: "chatbox-87a51.appspot.com",
      messagingSenderId: "1022595629381",
      appId: "1:1022595629381:web:371b31d93d54abd8647e2c",
      measurementId: "G-5KLD7GFB8Z"
    };
    
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


function getData() { console.log("value");
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start
console.log("room name - " + Room_names);
row="<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id) '> # "+ Room_names+" </div> <hr>" ;
document.getElementById("output").innerHTML += row;





      //End code
});});}
getData()

function addRoom() 
{
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose : "to add rooms"
      });
      localStorage.setItem("room_name" , Room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name" , name);
 window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}











