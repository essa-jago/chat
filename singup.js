function setlocalstorage(name, valuess){
    const xdxdlololol = window.localStorage.setItem(name, valuess)
    return xdxdlololol
}

document.getElementById("singups").addEventListener("click", () => {
    const apiUrl = 'https://essa116.pythonanywhere.com/register';
    const data = {
    username: document.getElementById("userinput").value,
    password: document.getElementById("passinput").value,
    email: document.getElementById("emailinput").value
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
        if (data["status"] == "success"){
            window.location.replace("login.html")
        }
    })
    .catch(error => {
        console.error

    ('Error:', error);
  });
})