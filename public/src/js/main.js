var base_login = [ {usuario:"admin", contraseña:"1234"} , {usuario:"user",contraseña:"12345"}]
var switch_login=false;

function login(){
    var user=document.getElementById('floatingInput1').value;
    var pass=document.getElementById('floatingPassword1').value;
    console.log(user);
    console.log(pass);

    base_login.forEach(el => {
        console.log(el);

    if (user == el.usuario && pass == el.contraseña){
        switch_login=true;
        alert('Login exitoso');
        location.reload();
        login1();
    }else{
        alert('Usuario o contraseña incorrectos')
    }
});
}

function login1(){
    if (switch_login == true){
        // alert('Login Exitoso')
    }
}