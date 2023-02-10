function login(){
    var user, password

    user = document.getElementById("emailForm").value;
    password = document.getElementById("passwordForm").value;


    if( (user == "rafaelnorato705@gmail.com" && password == "1234")||(user == "yoanandreymorales@gmail.com" && password == "12345")||(user == "josedanielcobamora63@gmail.com" && password == "123456")){
        window.open("menssage.html")
        /*window.location.href = "inicio.html";*/
        localStorage.usuario = user
    }else{
        alert("Datos incorrectos")
    }
}