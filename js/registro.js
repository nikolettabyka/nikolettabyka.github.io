function validar() {

    var nom, apel, cor, cont, dn, tel;
     nom= document.getElementById("nombres").value;
     apel= document.getElementById("apellidos").value;
     cor= document.getElementById("correo").value;
     cont= document.getElementById("inputContraseña").value;
     dn= document.getElementById("DNI").value;
     tel= document.getElementById("Edad").value;

    if(nom ===""  apel ===""  cor ===""  cont ===""  dn ===""  || tel ==="" ){
        alert("Complete el formulario de registro");
        return false;


    }else{
        alert("Se Registró correctamente")
    }

    }