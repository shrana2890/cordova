//------initiate database---------//
//alert("hello signin");
document.addEventListener("deviceReady", connectToDatabase);
document.getElementById("signup").addEventListener("click", signupButton);


var inputName = "";
var inputPassword = "";
var inputMail = "";
var inputDOB  = "";
var inputLocation = "";
var db = "";

function signupButton() {
    console.log("signup pressed");
    inputMail = document.getElementById("email").value;
    inputPassword = document.getElementById("password").value;
    inputName = document.getElementById("name").value;
    inputDOB = document.getElementById("dob").value;
    inputLocation = document.getElementById("location").value;
    inputDescription = document.getElementById("description").value;
    inputPhone = document.getElementById("phone").value;
    console.log(inputMail);
    // alert(inputPassword);
    // alert(inputName);
    // alert(inputDOB);
    // alert(inputLocation);
    // alert(inputName ,inputPassword, inputName, inputDOB,inputLocation);
    
    
    
    
    db.transaction(
                   function(tx){
                   
                   tx.executeSql(
                                 "SELECT * FROM user where email = ?",
                                 [inputMail],
                                 displayResults,
                                 onError
                                 )
                   },
                   onError,
                   onReadyTransaction
                   )
}

function displayResults( tx, results ){
    if(results.rows.length == 0) {
        console.log("new user");
        insertUser();
        
    }
    
}








function onReadyTransaction(){
    console.log( 'Transaction completed' );
}

function datasaved(){
    console.log( 'data saved into database' );
    //alert("data saved into database");
    window.location.replace("index.html");
}
function onSuccessExecuteSql( tx, results ){
    console.log( 'Execute SQL completed' +tx +results );
    //alert("data saved into database");
    //window.location.replace("index.html");
}
function onError( err ){
    console.log( "error"+err.message );
    alert("error"+err.message);
    
    
}

function connectToDatabase() {
    
    console.log("device is ready - connecting to database");
    
    
    // 2. open the database. The code is depends on your platform!
    if (window.cordova.platformId === 'browser') {
        console.log("browser detected...");
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
    else{
        console.log("hello databse");
        
        db.transaction(
                       function(tx){
                       tx.executeSql(
                                     "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT, name TEXT, birthdate TEXT, location TEXT,phone TEXT, profile Text)",
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
function insertUser(){
    console.log("hiii")
    console.log("hiiiiii")
    db.transaction(
                   function(tx){
                   tx.executeSql(
                                 "INSERT INTO user(email, password, name, birthdate, location, description, phone)  VALUES(?,?,?,?,?,?,?)",
                                 [inputMail, inputPassword, inputName, inputDOB, inputLocation, inputDescription, inputPhone],
                                 datasaved,
                                 onError
                                 )
                   },
                   onError,
                   datasaved
                   )
    
    
}
