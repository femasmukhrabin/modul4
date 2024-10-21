function submitData(event) {
    event.preventDefault(); 


    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;


    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);


    window.location.href = "hasil4.html";
}


function showData() {
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const email = localStorage.getItem("email");

    document.getElementById("nameResult").textContent = name ? "Selamat datang, " + name : "Tidak ada data";
}

window.onload = showData;


function submitData(event) {
    event.preventDefault();  

 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;


    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    window.location.href = "hasilkontak.html";
}

function data(event) {
    event.preventDefault();


    const name = document.getElementById("name").value;
    localStorage.setItem("name", name); 

    window.location.href = "hasilkontak.html";
}

