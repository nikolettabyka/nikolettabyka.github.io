function nyFuction(){
    var x = document.getElementById("inputContraseña");
    
    if (x.type==="password"){
        x.type="text";
    } else{
        x.type="password";
    }
}