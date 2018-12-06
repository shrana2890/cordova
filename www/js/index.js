//------initiate database---------//
console.log("welcome");
document.addEventListener("deviceReady", connectToDatabase);
document.getElementById("login").addEventListener("click", loginButton);
document.getElementById("create").addEventListener("click", redirect);
var db = null;
var inputName = 0;
var inputPassword = 0;



// function login(){
//     alert("login  button pressed");
// }
function loginButton() {

    console.log("login  button pressed");
    console.log("login pressed");
    inputName = document.getElementById("email").value;
    inputPassword = document.getElementById("password").value;
    console.log(inputName + inputPassword);
    db.transaction(
      function(tx){

          tx.executeSql(
            "SELECT * FROM user where email = ? AND password = ?",
            [inputName,inputPassword],
            displayResults,
            onError
          )
      },
      onError,
      onReadyTransaction
    )
  }
  function displayResults( tx, results ){
    console.log("display");
    if(results.rows.length == 0) {
            alert("Please enter valid username and password");
            window.location.replace("index.html");
            return false;
      }
      else{
         console.log("welcome");
      var row = "";
      for(var i=0; i<results.rows.length; i++) {
      name = results.rows.item(i).email;

      password = results.rows.item(i).password;
     

      localStorage.setItem("mail", name);
      localStorage.setItem("password", password);
      localStorage.setItem("userEntry", 1);
      sessionStorage.setItem("session", 1);
      
// <<<<<<< HEAD
       window.location.replace("home.html"); 
         }
// =======
     //window.location.replace("profile.html");
  }
}

function redirect(){
 console.log("redirect");
  window.location.replace("signup.html");
}

  function onReadyTransaction(){
    console.log( 'Transaction completed' )
  }
  function onSuccessExecuteSql( tx, results ){
    console.log( 'Execute SQL completed' );
  }
  function onError( err ){
    console.log( "eroor message"+err.message )
  }

function connectToDatabase() {
  console.log("device is ready - connecting to database");


  // 2. open the database. The code is depends on your platform!
  if (window.cordova.platformId === 'browser') {
    console.log("browser detected...");
    console.log("browser detected");
    // For browsers, use this syntax:
    //  (nameOfDb, version number, description, db size)
    // By default, set version to 1.0, and size to 2MB
    db = window.openDatabase("cestar", "1.0", "Database for Cestar College app", 2*1024*1024);
  }
  else {
    console.log("mobile device detected");
    console.log("mobile device detected!");
    var databaseDetails = {"name":"cestar.db", "location":"default"}
    db = window.sqlitePlugin.openDatabase(databaseDetails);
    console.log("done opening db");
  }

  if (!db) {
    alert("databse not opened!");
    return false;
  }

db.transaction(
        function(tx){
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT, name TEXT, birthdate TEXT, location TEXT, description TEXT, phone INTEGER, profile TEXT)",
                [],
                insertUser,
                onError
            )
        },
        onError, 
       onReadyTransaction
    )

}
function insertUser(){
  console.log("insert user");
  if (localStorage.getItem("userEntry") != 1){
    console.log(localStorage.getItem("userEntry"));
  db.transaction(
        function(tx){
            tx.executeSql(
                "INSERT INTO user(email, password, name, birthdate, location, description, phone) VALUES('sagar@gmail.com','sagar11', 'sagar','1/1/1994','toronto','lambton college','6474000472'),('sukh@gmail.com','sukh11', 'sukhwinder','2/2/1994','brampton','ww','6474000472'),('raman@gmail.com','raman11', 'raman','3/3/1994','toronto','e','6474000472')",
                [],
                onSuccessExecuteSql,
                onError
            )
        },
        onError,
        onReadyTransaction
    )
 }
}
