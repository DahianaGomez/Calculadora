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
	
	var convertidor = prompt ('de onzas a toneladas o toneladas a onzas?');
	if (convertidor === "de toneladas a onzas") {
		tonelda = prompt ('cuantas toneladas?');
		var onza;
		var tonelada;
		onza = parseFloat (1*35274/tonelada);
		onza= Math.round (onza);
		console.log (tonelada + " toneladas, equivalen a " + onza +" onzas");
		alert (tonelada + " toneladas, equivalen a " + onza +" onzas");
	}
	if (convertidor === "de onzas a toneladas") {
		onza = prompt ('cuantas onzas?');
	tonelada = parseFloat (1* 0.0000283495 /onza);
	tonelada = Math.round (tonelada);
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
