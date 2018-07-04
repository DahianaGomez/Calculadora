var operacion;
var radio ;
var altura;
operacion = prompt ('que operacion deseas hacer?');

if (operacion = "volumen cilindro"); {

var radio ;
var altura;

 radio = prompt ('porfavor ingresar el radio');
 altura = prompt ('porfavor ingresar la altura');
var volumen_cilindro = parseFloat (Math.PI * radio * radio * altura);
volumen_cilindro= Math.round (volumen_cilindro);

	console.log ("el volumen del cilindro es " + volumen_cilindro);
	alert("el volumen del cilindro es " + volumen_cilindro  );
}

else  if (operacion == "convertidor");
{
	var convertidor = prompt ('de onzas a toneladas o toneladas a onzas?');
tonelada = prompt ('cuantas onzas?');
var onza;
var tonelada;



onza = parseFloat (1*35274/tonelada);
onza= Math.round (onza);

console.log (tonelada + "toneladas, equivalen a " + onza);
}