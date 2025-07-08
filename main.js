/*
const apiUrl = 'https://api.example.com/data';
const data = {
  name: 'John Doe',
  email: 'johndoe@example.com',
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};

fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    outputElement.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error

('Error:', error);
  });
*/



let selectedorang = ""
let mycontact = []


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
    setCookie(cname, null, null)
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function getlocalstorage(name){
    const lolxd = window.localStorage.getItem(name)
    return lolxd
}

function setlocalstorage(name, valuess){
    const xdxdlololol = window.localStorage.setItem(name, valuess)
    return xdxdlololol
}
if (window.localStorage.getItem("username") == null || window.localStorage.getItem("username").length == 0){
    document.getElementById("namany").textContent = "belum login"
    const newel = document.createElement("option")
    newel.textContent = "sign up"
    const newel2 = document.createElement("option")
    newel2.textContent = "login"
    document.getElementById("divapainiya").append(newel)
    document.getElementById("divapainiya").append(newel2)
    document.getElementById("divapainiya").addEventListener("change", () => {
        if (document.getElementById("divapainiya").value == "sign up"){
            window.location.replace("singup.html")
        }else if (document.getElementById("divapainiya").value == "login"){
            window.location.replace("login.html")
        }
    })
}else{
    document.getElementById("namany").textContent = getlocalstorage("username")
    const newel = document.createElement("option")
    newel.textContent = "sign out"
    document.getElementById("divapainiya").append(newel)
    document.getElementById("divapainiya").addEventListener("change", () => {
        if (document.getElementById("divapainiya").value == "sign out"){
            setlocalstorage("username", "")
            setlocalstorage("password", "")
            window.location.reload()
        }
    })
}
document.getElementById("chating").addEventListener("click", () => {
    if (selectedorang != ""){
        if (document.getElementById("buatnulis").value != ""){
            const apiUrl = 'https://essa116.pythonanywhere.com/post/chat';
            const data = {
              username: getlocalstorage("username"),
              password: getlocalstorage("password"),
              opponent: selectedorang,
              message: document.getElementById("buatnulis").value,
            };
            
            const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            };
            
            fetch(apiUrl, requestOptions)
              .then(response => {
              })
              .then(data => {
                document.getElementById("buatnulis").value = ""
              })
              .catch(error => {
                console.error
            
            ('Error:', error);
              });
}
}
})
document.getElementById("buatnulis").addEventListener("keyup", (e) => {
    if (selectedorang != ""){
      if (e.keyCode == 13){
        if (document.getElementById("buatnulis").value != ""){
            const apiUrl = 'https://essa116.pythonanywhere.com/post/chat';
            const data = {
              username: getlocalstorage("username"),
              password: getlocalstorage("password"),
              opponent: selectedorang,
              message: document.getElementById("buatnulis").value,
            };
            
            const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            };
            
            fetch(apiUrl, requestOptions)
              .then(response => {
              })
              .then(data => {
                document.getElementById("buatnulis").value = ""
              })
              .catch(error => {
                console.error
            
            ('Error:', error);
              });
    }
      }
    }
  })

document.getElementById("modeoption").addEventListener("change", () =>{
  if (document.getElementById("modeoption").value == "light mode"){
    document.querySelector(".container").style.backgroundColor = "white"
  }
  if (document.getElementById("modeoption").value == "dark mode") {
    document.querySelector(".container").style.backgroundColor ="rgb(41, 41, 41)"
  }
})

document.getElementById("addcon").addEventListener("click", () => {
    let = inputancontact = prompt("username: ")
    if (inputancontact != "" && inputancontact != null){
        const apiUrl = 'https://essa116.pythonanywhere.com/addcontact';
        const data = {
          username: getlocalstorage("username"),
          password: getlocalstorage("password"),
          target: inputancontact,
        };
        
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };
        
        fetch(apiUrl, requestOptions)
          .then(response => {
          })
          .then(data => {
            document.location.reload()
          })
          .catch(error => {
            console.error
        
        ('Error:', error);
          });
}
})

document.getElementById("remcon").addEventListener("click", () => {
    let = inputancontact = prompt("username: ")
    if (inputancontact != "" && inputancontact != null){
        const apiUrl = 'https://essa116.pythonanywhere.com/removecontact';
        const data = {
          username: getlocalstorage("username"),
          password: getlocalstorage("password"),
          target: inputancontact,
        };
        
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };
        
        fetch(apiUrl, requestOptions)
          .then(response => {
          })
          .then(data => {
            document.location.reload()
          })
          .catch(error => {
            console.error
        
        ('Error:', error);
          });
}
})

fetch(`https://essa116.pythonanywhere.com/get/user/username=${getlocalstorage("username")}`, {method: "GET"})
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.friends.length; i++){
            mycontact.push(data.friends[i])
            const mynewel = document.createElement("button")
            mynewel.textContent = `${data.friends[i]} (not checked)`
            mynewel.id = data.friends[i]
            mynewel.addEventListener("click", () => {
                document.getElementById("buatnulis").placeholder = "write text to " + data.friends[i]
                selectedorang = data.friends[i]
            })
            document.getElementById("containerfriend").append(mynewel)
        }
    })
    .catch(error => console.error(error));

let mymessagess = []
let mymessagessid = []
let orangmessagesids = []
let orangmessagess = []
let lastedselectedorang = ""
let newelmy = document.getElementById("thecon")
setInterval(() => {
    if (selectedorang != ""){
        if (lastedselectedorang != selectedorang){
            document.getElementById("thecon").innerHTML = ""
            mymessagessid = []
            lastedselectedorang = selectedorang
        }
    fetch(`https://essa116.pythonanywhere.com/get/chat/username=${getlocalstorage("username")}&opponent=${selectedorang}`, {method: "GET"})
    .then(response => response.json())
    .then(data => {
        let chatss = []
        let peoplengomong = []
        let timess = []
        for (let i = 0; i < data.length; i ++){
            if (!mymessagessid.includes(data[i][0])){
                mymessagessid.push(data[i][0])
                peoplengomong.push(data[i][3])
                timess.push(data[i][4])
                chatss.push(data[i][5])
            }
        }
        let realtimechat = []
        for (let i=0; i < chatss.length; i++){
            realtimechat.push(`${peoplengomong[i]} (${timess[i]}) : ${chatss[i]}`)
        }
        for(let i = 0; i < realtimechat.length; i++){
            const neweltoolololol = document.createElement("div")
            neweltoolololol.textContent = realtimechat[i]
            newelmy.append(neweltoolololol)
            document.getElementById("containerchat").append(newelmy)
        }
        
    })
    .catch(error => console.error(error));
    }
}, 100);

let lastedselecteduser = selectedorang

setInterval(() => {
  if (selectedorang != ""){
    if (selectedorang != lastedselecteduser){
      document.getElementById(selectedorang).textContent = `${selectedorang} (checking...)`
      lastedselecteduser = selectedorang
      fetch(`https://essa116.pythonanywhere.com/get/online/username=${selectedorang}`, {method: "GET"})
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => console.error(error));
    }
    else {
    fetch(`https://essa116.pythonanywhere.com/get/online/username=${selectedorang}`, {method: "GET"})
        .then(response => response.json())
        .then(data => {
            document.getElementById(selectedorang).textContent = `${selectedorang} (${data["data"][2]})`
        })
        .catch(error => console.error(error));
      }
      }else {

      }
}, (5000))

setInterval(() => {
  const apiUrl = 'https://essa116.pythonanywhere.com/update/online';
const data = {
  username: getlocalstorage("username"),
  password: getlocalstorage("password"),
  online: "on"
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};

fetch(apiUrl, requestOptions)
  .then(response => {
  })
  .then(data => {
  })
  .catch(error => {
    console.error

('Error:', error);
  });
}, (3000));