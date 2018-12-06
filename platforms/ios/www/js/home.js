console.log("welcome to home page");
console.log("welcome to home page");
currentLocation();
document.addEventListener("deviceReady", connectToDatabase);
//document.addEventListener("deviceReady", users);
var db = null;

var slider_content = document.getElementById("box");
document.getElementById("prewButton").addEventListener("click", minusSlides);
document.getElementById("nextButton").addEventListener("click", plusSlides);
document.getElementById("delete").addEventListener("click", deleteFunction);
document.getElementById("contact").addEventListener("click", contactFunction);
document.getElementById("logout").addEventListener("click", logout);
document.getElementById("profile").addEventListener("click", profile);
var city = "unknown";
var y = 0;
currentLocation();
var userNearMe = [];
var userIHate = [];
var display = [];
var database = [{
        "id": 1,
        "name": "Lily Pattinson",
        "locations": "Toronto",
        "image": "img/pic1.jpg",
        "dob": "1/1/1990",
        "contact": "6474000472"
    },
    {
        "id": 2,
        "name": "angel",
        "locations": "Toronto",
        "image": "img/pic2.jpg",
        "dob": "1/4/1988",
        "contact": "6474000472"
    },
    {
        "id": 3,
        "name": "ketty perry",
        "locations": "Toronto",
        "image": "img/pic3.jpg",
        "dob": "4/1/1983",
        "contact": "6474000472"
    },
    {
        "id": 4,
        "name": "Jasmine",
        "locations": "Brampton",
        "image": "img/pic4.jpg",
        "dob": "1/1/1990",
        "contact": "6474000472"
    },
    {
        "id": 5,
        "name": "Priyanka",
        "locations": "Toronto",
        "image": "img/pic5.jpg",
        "dob": "67/9/1994",
        "contact": "6474000472"
    },
    {
        "id": 6,
        "name": "Deepika",
        "locations": "Toronto",
        "image": "img/pic6.jpg",
        "dob": "4/8/1997",
        "contact": "6474000472"
    },
    {
        "id": 7,
        "name": "hermoine",
        "locations": "Toronto",
        "image": "img/pic7.jpg",
        "dob": "1/8/1990",
        "contact": "6474000472"
    },
    {
        "id": 8,
        "name": "robert Pattinson",
        "locations": "Toronto",
        "image": "img/pic8.jpg",
        "dob": "1/1/1990",
        "contact": "4165688684"
    },
    {
        "id": 9,
        "name": "Stefen",
        "locations": "Brampton",
        "image": "img/pic9.jpg",
        "dob": "6/8/1998",
        "contact": "4165688684"
    },
    {
        "id": 10,
        "name": "Denial",
        "locations": "Toronto",
        "image": "img/pic10.jpg",
        "dob": "1/2/1991",
        "contact": "6474000472"
    },
    {
        "id": 11,
        "name": "Sam",
        "locations": "Toronto",
        "image": "img/pic11.jpg",
        "dob": "1/1/1990",
        "contact": "6474000472"
    },
    {
        "id": 12,
        "name": "Olaf",
        "locations": "Toronto",
        "image": "img/pic12.jpg",
        "dob": "8/9/1990",
        "contact": "6474000472"
    },
    {
        "id": 13,
        "name": "John",
        "locations": "Toronto",
        "image": "img/pic13.jpg",
        "dob": "9/5/1990",
        "contact": "6474000472"
    },
    {
        "id": 14,
        "name": "Brad Pitt",
        "locations": "Toronto",
        "image": "img/pic14.jpg",
        "dob": "1/5/1990",
        "contact": "6474000472"
    }
];

var session;
function logout()
{
  session= sessionStorage.removeItem("session");
    //alert("session"+session);
        window.location.replace("index.html"); 

}
function profile()
{
  session=sessionStorage.getItem("session");
    //alert("session"+session);
    if(session==1)
    {
    window.location.replace("profile.html"); 
    }
    else
    {
      alert("your session expired please login again");
       window.location.replace("index.html");
    }
}

var r = 0;
var hateID = 0;
var entry =0;
var image = userNearMe.length;
var deleteLength = userIHate.length;
//alert("user near length:"+image)
var i = 0;
var a = document.getElementById("img1");
//a.src = img/pic1.jpg;

function users() {

    console.log("usr start");
    console.log("user start");
    currentLocation();
    alert("your current location is :" + city);

    for (var x = 0; x <= database.length; x++) {
        var k = 0;
        if (city == database[x]["locations"]) {
            //alert("Are you ready to see people near you?");
            console.log(database[x]["locations"]);
            userNearMe[y] = database[x];
            console.log(userNearMe[y]);
            y++;
            image = userNearMe.length;
            //alert(image);
            if (x == database.length - 1) {
               // alert("naer to hate");
                hateFunction();

            }
        }

    }

}

function contactFunction() {
     console.log("pushed the contact button");
      alert("contact will be saved with name: "  + userIHate[i-1]["name"]);
  try {
    var x = navigator.contacts.create({"displayName": userIHate[i-1]["name"]});
   
    x.save();
    alert("user saved!");
  }
  catch (err) {
    alert("error ");
    console.log("ERROR " + err);
  }



}

function plusSlides() {
    console.log("plus pressed: i is" + i);
    if (i < deleteLength) {
        i = i + 1;
    } else {
        i = 1;
    }
    console.log(i);
    //alert(userNearMe[i - 1]["image"]);
    a.src = userIHate[i - 1]["image"];
    //alert(userNearMe[i - 1]["name"]);
    //a.src = userNearMe[i-1]["image"];
    document.getElementById("check").innerHTML =
        "Name: " +
        userIHate[i - 1]["name"] +
        "<br>" +
        "Location: " +
        userIHate[i - 1]["locations"] +
        "<br>" +
        "Birthdate: " +
        userIHate[i - 1]["dob"] +
        "";

    //slider_content.innerHTML = "<img src="+image[i-1]+".jpg"; 
}

function minusSlides() {
    console.log("going on previous image");

    if (i < deleteLength + 1) {
        if (i > 1) {
            i = i - 1;
        }
    } else {
        i = deleteLength;
    }
    console.log(i);
    console.log(userIHate[i - 1]["image"]);
    a.src = userIHate[i - 1]["image"];
    console.log(userIHate[i - 1]["name"]);
    a.src = userIHate[i - 1]["image"];
    document.getElementById("check").innerHTML =
        "Name: " +
        userIHate[i - 1]["name"] +
        "<br>" +
        "Location: " +
        userIHate[i - 1]["locations"] +
        "<br>" +
        "Birthdate: " +
        userIHate[i - 1]["dob"] +
        "";

}

function currentLocation() {
    console.log("getting location!");
    var xhr = new XMLHttpRequest
    xhr.open('GET', 'https://geoip-db.com/jsonp/');
    xhr.send(null);
    xhr.onreadystatechange = function() {
        console.log("coming back!");
        console.log("coming back!");
       
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            console.log("Done getting xhr request");
            if (xhr.status === OK) {
                console.log("xhr request == OK");
                console.log(xhr.responseText); // 'This is the returned text.'
                //getting string from net
                var response = xhr.responseText;

                var r = JSON.stringify(response);

                console.log("JSON RESPONSE: " + x);

                var x = response.substring(9, response.lastIndexOf(')'));

                var z = JSON.parse(x);
                console.log(z["city"]);
                city = z["city"];
            } else {
                console.log('Error: ' + xhr.status);
                city = "Toronto";
            }
        }
        else {
            console.log("error when fetching xhr request");
            console.log("error when fetching xhr request");
        }
    }
}

function hateFunction() {
    //alert("hate funtion start");
    db.transaction(
        function(tx) {

            tx.executeSql(
                "SELECT * FROM hateData",
                [],
                
                displayResults,
                onError
            )
        },
        onError,
        onReadyTransaction

    )
}
function check(tx, results, n){
    var count =0;
    var row = "";
    var m = n;

 for (var p=0; p < results.rows.length; p++) {
            hateID = results.rows.item(p).hateUserId;
            hateID = parseInt(hateID);

            if (userNearMe[m - 1]["id"] == hateID) {
                count = count+1;
                
        }
    }
    return count;

}

function displayResults(tx, results) {
    console.log("displayResult");
    var row = "";
    var c = 0;
    var p = 0;
    if (results.rows.length == 0) {
        alert("you have nobody in block person list");
         
    for (var z = 1; z <= image; z++) {
            userIHate[r] = userNearMe[z - 1];
            r++;
            deleteLength = userIHate.length;

            if(z == image){
                a.src = userIHate[0]["image"];
                document.getElementById("check").innerHTML =
                "Name: " +
                userIHate[0]["name"] +
                "<br>" +
                "Location: " +
                userIHate[0]["locations"] +
                "<br>" +
                "Birthdate: " +
                userIHate[0]["dob"] +
                "";
                i++;
               }

}
}
    
    for (var z = 1; z <= image; z++) {
      c =  check(tx, results, z);

      if(c == 0){
         userIHate[r] = userNearMe[z - 1];
         r++;
         deleteLength = userIHate.length;



      }

    if(z == image){
        a.src = userIHate[0]["image"];
        document.getElementById("check").innerHTML =
        "Name: " +
        userIHate[0]["name"] +
        "<br>" +
        "Location: " +
        userIHate[0]["locations"] +
        "<br>" +
        "Birthdate: " +
        userIHate[0]["dob"] +
        "";
        i++;
               }

}
}

function onReadyTransaction() {
    console.log('Transaction completed');
    console.log('Transaction completed');

}

function onSuccessExecuteSql(tx, results) {
    console.log('Execute SQL completed');
    console.log('sucessful execution completed');
    // localStorage.setItem("userEntry", 1);
}

function redirect(){
    window.location.replace("home.html");
}
function onError(err) {
    console.log(err);
}

function connectToDatabase() {

    console.log("device is ready - connecting to database");


    // 2. open the database. The code is depends on your platform!
    if (window.cordova.platformId === 'browser') {
        console.log("browser detected...");
        // For browsers, use this syntax:
        //  (nameOfDb, version number, description, db size)
        // By default, set version to 1.0, and size to 2MB
        db = window.openDatabase("cestar", "1.0", "Database for Cestar College app", 2 * 1024 * 1024);
    } else {
        console.log("mobile device detected");
        console.log("mobile device detected!");
        var databaseDetails = {
            "name": "cestar.db",
            "location": "default"
        }
        db = window.sqlitePlugin.openDatabase(databaseDetails);
        console.log("done opening db");
    }

    if (!db) {
        console.log("databse not opened!");
        return false;
    }

    db.transaction(
        function(tx) {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS hateData (id INTEGER PRIMARY KEY AUTOINCREMENT, hateUserId TEXT)",
                [],
                onSuccessExecuteSql,
                onError
            )
        },
        onError,
        users
    )

}

function deleteFunction() {
    console.log("delete button pressed");
    hateID = userIHate[i-1]["id"]
    console.log("hate person id is:" + hateID);
    // alert(localStorage.getItem("userEntry"));
    db.transaction(
        function(tx) {
            tx.executeSql(
                "INSERT INTO hateData (hateUserId) VALUES(?)",
                [hateID],
                redirect,
                onError
            )
        },
        onError,
        onReadyTransaction
    )
}