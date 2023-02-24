

function validar(){
    var name, email, phone, country, city, message, expresion;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    country = document.getElementById("country").value;
    city = document.getElementById("city").value;
    message = document.getElementById("message").value;

    expresion = /\w+@\w+\.+[a-z]/;
 

    if(name === "" || email === "" || phone==="" || country==="" || city===""|| message ===""  ){
        alert("Todos los campos son obligatorios");
           return false;
    }

    else if(name.length>30){
        alert("El nombre es muy largo");
        return false;

    }

    else if(email.length>30){
        alert("El email es muy largo");
        return false;
    }

    else if(!expresion.test(email)){
        alert("El email no es valido");
        return false;
    }

    else if(phone.length>16){
        alert("El numero de telefon es muy largo");
        return false;
    }

    else if(isNaN(phone)){
        alert("El numero de telefon ingresado no es validado");
        return false;
    }

    else if(country.length>20){
        alert("El nombre del pais es muy largo");
        return false;
    }

    else if(city.length>25){
        alert("El nombre de la cuidad es muy largo");
        return false;
    }

    else if(message.length>200){
        alert("El texto del mensaje es muy largo");
        return false;
    }
 
}


