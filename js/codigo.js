// Ejercicio 5. Comentarios, Variables y Alternativas
/*Descarga el fichero para la realización del ejercicio.
Utiliza el fichero index.html para escribir en él el código JavaScript que responda a lo que se pide a continuación.
Introduce en el mismo un comentario de una sola línea y otro más de varias líneas en forma de bloque.
Declara una variable llamada miNombre y pide mediante la función prompt() el nombre del usuario.
Si la cadena introducida por el usuario es Pepito Grillo mostraremos un saludo al usuario mediante una ventana emergente. Puedes usar la instrucción alert() para ello.
En caso contrario, mostraremos un saludo diferente al usuario con la misma función alert().*/

  let miNombre = prompt("Introduce el nombre: Pepito Grillo");
  if (miNombre === null || miNombre === "") {
    alert("El nombre no es correcto");
  } else {
    alert("Hello Pepito Grillo");
  }

