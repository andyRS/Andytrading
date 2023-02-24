
var getData = function(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var message = document.getElementById("message").value;


    //focus
    if(name ==""){
        document.getElementById("name").focus();
    } else
        if(email==""){
            document.getElementById("email").focus();
        }else
            if(phone ==""){
                document.getElementById("phone").focus();
            }else
                if(country ==""){
                    document.getElementById("country").focus();
                }else
                    if(city ==""){
                        document.getElementById("city").focus();
                    }else
                        if(message ==""){
                            document.getElementById("message").focus();
                        }


    
      //Limpiar al mandar datos 
           confirm("Estan correctos los datos a enviar?");
            document.getElementById("name").value ="";
            document.getElementById("email").value="";
            document.getElementById("phone").value="";    
            document.getElementById("country").value=""; 
            document.getElementById("city").value="";
            document.getElementById("message").value="";
            document.getElementById("name").focus();
           alert("Los datos se han enviado con exito");
}



