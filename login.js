function setlocalstorage(name, valuess){
    const xdxdlololol = window.localStorage.setItem(name, valuess)
    return xdxdlololol
}

document.getElementById("loginbtn").addEventListener("click", () => {
    const apiUrl = 'https://essa116.pythonanywhere.com/login';
    const data = {
    username: document.getElementById("userinput").value,
    password: document.getElementById("passinput").value
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
        if (data["status"] == "successfully"){
            setlocalstorage("username", document.getElementById("userinput").value)
            setlocalstorage("password", document.getElementById("passinput").value)
            window.location.replace("index.html")
        }else {
            alert("failed to login, wrong data")
        }
    })
    .catch(error => {
        console.error

    ('Error:', error);
  });
})

//setlocalstorage("username", document.getElementById("userinput").value)
             //   setlocalstorage("password", document.getElementById("passinput").value)
           //     window.location.replace("index.html")