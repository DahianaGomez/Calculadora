var operacion;
var radio ;
var altura;

operacion = prompt ('1:volumen cilindro 2: convertidor 3:factorizacion');

if (operacion === "1") {


	radio = prompt ('porfavor ingresar el radio');
	altura = prompt ('porfavor ingresar la altura');
	var volumen_cilindro = parseFloat (Math.PI * Math.pow (radio,2) * altura);
	volumen_cilindro= Math.round (volumen_cilindro);

	console.log ("el volumen del cilindro es " + volumen_cilindro);
	alert("el volumen del cilindro es " + volumen_cilindro  );
}

if(operacion === "2"){
	
	var convertidor = prompt ('1:De onzas a toneladas 2:De toneladas a onzas?');
	if (convertidor === "2") {
		tonelada = prompt ('cuantas toneladas?');
		var onza;
		var tonelada;
		onza = parseFloat (tonelada*35274/1);
		
		console.log (tonelada + " toneladas, equivalen a " + onza +" onzas");
		alert (tonelada + " toneladas, equivalen a " + onza +" onzas");
	}
	if (convertidor === "1") {
		onza = prompt ('cuantas onzas?');
	tonelada = parseFloat (onza* 0.0000283495 /1);
	
console.log (onza + " onzas, equivalen a " + tonelada +" toneladas");
		alert (onza + " onzas, equivalen a " + tonelada +" toneladas");
 }		
}

 if (operacion === "3") {
 	var numero = prompt ('que numero desea factorizar?');
 	var total = 1;
for (var inicial = 2; total <= numero; inicial++)
	total *= inicial;
alert ("el total es " + total);
console.log ("el total es " + total);
}
var operacionUsuario = prompt ('quieres hacer otra operacion?');
 if (operacionUsuario === "si") {
 	
location.reload();

 }
