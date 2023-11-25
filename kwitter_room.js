var firebaseConfig = {
      apiKey: "AIzaSyCRZyfauI94q_FMqyjDVRrSS7Kgs_xBU2c",
      authDomain: "kwitter-f2f93.firebaseapp.com",
      databaseURL: "https://kwitter-f2f93-default-rtdb.firebaseio.com",
      projectId: "kwitter-f2f93",
      storageBucket: "kwitter-f2f93.appspot.com",
      messagingSenderId: "878722315432",
      appId: "1:878722315432:web:2681585f2367ecf0c33e9d",
      measurementId: "G-PMDWWDNCBK"
    };
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+ user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
       
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "Kwitter_page.html";
}

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(" Room Name - " + Room_names);
row = "<div class=' room_name' id =" + Room_names+" onclick='redriectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
