const form = document.querySelector('form');

form.addEventListener("submit", async (event)=>{
    event.preventDefault();

    const formData = new FormData(form);
    let formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });
    console.log(formDataObj);

    const resp = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataObj)
    })
    .then(resp => {
        if(resp.ok){
            return resp.json();
        }
        else{
            throw new Error("Failed to fetch the data.")
        }
    })
    .then(data=>{
        console.log("Server response:" + data['data']);
        var linker = document.getElementById('linker');
        var email = document.getElementById('email').value;
        linker.style.display = "flex";
        linker.style.flexDirection = "column";
        var link = `<p>Thank you registering</p><p>CLick on below link to activate your account</p><a href="http://localhost:9900/activate?act-code=${data['data']}&email=${email}">http://localhost:9900/activate?act-code=${data['data']}&email=${email}</a>`
        linker.innerHTML=link;
    })
    .catch(error => {
        console.log(error);
    })
})