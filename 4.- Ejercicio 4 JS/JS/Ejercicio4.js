
   let edad = 45;

   let autorizacion = (edad >= 18) ? true : false;

   let result = autorizacion 
     ? "Ya puedes votar" 
     : `Todavía te quedan ${18 - edad} años para votar`;

   // Mostramos el resultado también en un alert
   alert(result);