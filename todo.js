	///////////////////////////////////////////////////////
	////////////   todo js y ajax jquery   ////////////////
	///////////////////////////////////////////////////////

	//comentarios por linea
	/*
	* comentarios por bloque

	* var no se define el tipo de dato de la variable (se puede guardar diferentes tipos de var)
	* una variable no puede empezar por un numero  (SOLAMENTE CON UNA LETRA a-z A-Z O _ $)
	* JAVASCRIPT ES CASE SECITIVE
	* 	los nombres de las variables son sencibles a las mayusculas ejem: Color es diferente a color
	* utilizar camelCase es una buena practica para definir var, function, etc..
	* el ; es opcional en javascript pero se considera una buena pratica ponerlo para hacer el codigo mas legible (DIVIDE LAS SENTENCIAS)
	*/

	alert("soy una alerta");
	confirm("soy una confirmacion");
	var usu =prompt("yo pregunto un valor al usuario");
	var a = 5;
	var b = 2.5;
	var c = "cadena o string";
	var d = true;   	//operador logico
	var f = false;  	//operador logico
	//el número 0 se convierte en false y cualquier otro número distinto de 0 se convierte en true
	// Sin embargo, es necesario insistir en que true y false son valores especiales que no se corresponden ni con números ni con ningún otro tipo de dato.
	//ejemplo
	var edad = prompt("cual es tu edad");
	var mayorDeEdad = edad >= 18; //se aloja en la variable true o false segun el valor pasado en la variable edad
	console.log(mayorDeEdad);

	var variable_octal = 034;
	var variable_hexadecimal = 0xA3;
	//tambien JavaScript define valores especiales muy útiles cuando se trabaja con números. Infinity y –Infinity para representar números demasiado grandes (positivos y negativos) y con los que JavaScript no puede trabajar

	//////////////////////-isNaN//// Not a Number-//////////////

	var variable1 = 3;
	var variable2 = "hola";
	isNaN(variable1);  // false
	isNaN(variable2);  // true
	// pregunta no es un numero 

	var cont = a > 10; // devuelve false

	var g = "8";
	Number(g); //devuelve 8 en numero pero la variable g sige siendo String
	parseInt(g); //devuelve 8 en numero pero la variable g sige siendo String

	//se puede asignar a una variable para que ya quede tipo numerica o a la misma
	var gnum = Number(g);
	//parseInt jfue creado mas para dar la base ejem base 10 
	var g = parseInt(g);

	// una base de 10 indica una conversióna número decimal, 8 octal, 16 hexadecimal, y así sucesivamente. Para bases superiores a 10, las letras del alfabeto indican numerales mayores que 9. Por ejemplo, para números hexadecimales (base 16), se utiliza de la A hasta la F.
	parseInt("FXX123", 16); //devuelve 15
	var h = "45";
	parseInt(h, 10); //devuelve 45 en numero
	parseInt(h, 8); //devuelve 37
	parseInt(h, 16); //devuelve 69

	parseFloat(b) //devuelve 2.5 encambio con parseInt o Number seria 2

	-----------------------------------------------------------------
	/////////////////////////////////////////////////////////////////
	//////////////////////////   operador ternario  /////////////////
	/////////////////////////////////////////////////////////////////

	//es paresido al if(si la bariable boleana es true imprime hola, si es false imprime adios)
	var aux = true;
	var asignar = aux?"hola":"adios";
	console.log(asignar);  //hola

	/////////////////////////////////////////////////////
	///////////////////////use strict////////////////////
	/////////////////////////////////////////////////////

	"use strict";
	//forma para no sobre escribir las variable globales si en algun momento no la declaramos con var y tampoco deja crear variables globales dentro de la function
	//no deja asignar nombres de variables con nombres reservados de javascript
	// use strict = impide la duplicidad de variables y/o var globales, uso de # octales entre otras 

	var i = 3;
	var j = 5;

	function ejemplo(){
		"use strict"
		k = 7; //no se define global si no en scope como si se definiera con var
		addEventListener = 4;  //no deja definir y sale error (nom reservados javascript)
	}
	ejemplo();

	////////////////////////////////////////////////////////////////////
	/////////////////////////// date ///////////////////////////////////
	////////////////////////////////////////////////////////////////////

	hoy = new Date();
	// mas metodos en la docu de mozilla

	--------------------------------------------------------------------------------------
	//////////////////////////////constantes matemáticas//////////////////////////////////
	--------------------------------------------------------------------------------------

	var num = 32.5689;

	var resnum = Math.floor(num);  //32
	var resnum = Math.ceil(num);  //33
	var resnum = Math.round(num);  //33 //si es < a 5 redondea hacia abajo, >=5 redondea arriba 33
	var resnum = Math.random();  //numero aleatorio en tre 0.00 a 0.99
	// ejemplo
	var resnum = Math.random()*5;  //devuelve un numero aletorio entre 1 a 5

	// Constante	Valor	Significado

	Math.E	2.718281828459045	//Constante de Euler, base de los logaritmos naturales y también llamado número e
	Math.LN2	0.6931471805599453	//Logaritmo natural de 2
	Math.LN10	2.302585092994046	//Logaritmo natural de 10
	Math.LOG2E	1.4426950408889634	//Logaritmo en base 2 de Math.E
	Math.LOG10E	0.4342944819032518	//Logaritmo en base 10 de Math.E
	Math.PI	3.141592653589793	//Pi, relación entre el radio de una circunferencia y su diámetro
	Math.SQRT1_2	0.7071067811865476	//Raíz cuadrada de 1/2
	Math.SQRT2	1.4142135623730951	//Raíz cuadrada de 2
	// De esta forma, para calcular el área de un círculo de radio r, se debe utilizar la constante que representa al número Pi:

	var area = Math.PI * r * r;

		//////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////

	// toString() que permite convertir variables de cualquier tipo a variables de cadena de texto
	a.toString(); //devuelve "5" en cadena de texto
	f.toString(); // devuelve "true" en cadena de texto

	// declaracion de una costante //
	const prefix = '212';

	var longitud = "hola mundo".length; //longitud de 10

	////////////////////caracteres especiales //////////////////

	var cadena_txt = "formas de ingresar un caracter especial es: \n en una cadena de texto,"
	var variable3 = "hola 'mundo', esta es una \"frase\" más larga";//no afecta a ''porque en la apertura se esta utilizando comillas dobles

		//   Si se quiere incluir...	Se debe sustituir por...
		//   Una nueva línea     =  \n
		//   Un tabulador        =  \t
		//   Una comilla simple	 =  \'
		//   Una comilla doble	 =  \"
		//   Una barra inclinada =  \\

	-------------------------------------------------
	////////////////////operadores//////////////////
	------------------------------------------------

	//////////// operador de asignacion =
		var op = 2;

	//////////// operadores arimeticos + - * / %
		var op2 = (2+5-1*(5/3))%

		var op2 += op; // += -= *= /= %=   ( var op2 = op2 + op; )		

	++op //la variave se incrementa en uno antes de culquier ejecucion
	op++ //la variave se incrementa en uno despues de culquier ejecucion

	++op //devuelve 3
	op++ //devuelve 2 (pero si la consultamos ya vale 3) 

	//////////////////  negacion  /////////////////////
	var op3 = true;
	console.log(!op3) //devuelve false (si es false devuelve true)

	si es 0 es true
	si es 1 o mas es false
	si es "string" es false
	si es "" es true //string vacio
	// El resultado de todos estos operadores siempre es un valor booleano

	////////////operadores logicos  && ||  ///////////////////
	//////////////////////////////////////////////////////////

	//  && las dos tienen que ser true
	//  || alguna de las dos tiene que ser true
	var op4 = true;
	var op5 = false;
	var resultado = op4 && op5 //devuelve false porque no son verdaderas las dos
	var resultado = op4 || op5 //vevuelve true poque una de las dos es true
	// El resultado de todos estos operadores siempre es un valor booleano

	/////////////////////relacionales ///////////////////////	
	//////////////// > >= < <= == === != ////////////////////

	// El resultado de todos estos operadores siempre es un valor booleano
	var numero1 = 3;
	var numero2 = 5;
	var numero3 = 5;
	var numero4 = "5";
	resultado = numero1 > numero2;  // resultado = false
	resultado = numero1 < numero2;  // resultado = true
	resultado = numero2 >= numero3; // resultado = true
	resultado = numero2 <= numero3; // resultado = true
	resultado = numero2 == numero3; // resultado = true //tambien se puede comparar strings 
	resultado = numero2 != numero3; // resultado = false
	resultado = numero3 !== numero4; // resultado = true //estrictamente diferentes
	resultado = numero3 === numero4; // resultado = false

	if(op3 != true){ console.log("op3 es diferente de true"); }
    
	////  negacion  ////
	var negacion = true;
    
    !negacion  //devuelve false

	////////////////////// typeof ///////////////////////
	/////////////////////////////////////////////////////

	typeof d; //devuelve boolean
	//sirve para averiguar el tipo de dato undefined, null, boolean, number y string
	//muchas veces devuelve object cuando no lo es (porque en javascript todo es un objeto)
	//es mejor hay veces utilizar la triple equivalencia para testear

	var myFunction = function() {
	  console.log('hola');
	};
	var myObject = {
	    foo : 'bar'
	};
	var myArray = [ 'a', 'b', 'c' ];
	var myString = 'hola';
	var myNumber = 3;
	 
	typeof myFunction;   // devuelve 'function'
	typeof myObject;     // devuelve 'object'
	typeof myArray;      // devuelve 'object' -- tenga cuidado
	typeof myString;     // devuelve 'string'
	typeof myNumber;     // devuelve 'number'
	typeof null;         // devuelve 'object' -- tenga cuidado

	//// undefined ////
	/*
	* valor sin definir (cuando se inicializa una variable pero no se la asigna un valor)
	*/
	//// null ////
	/*
	* unico valor un puntero de objeto vacio (tambien se utiliza para unicializar un objeto mas adelante)
	*/
	 
	if (myArray.push && myArray.slice && myArray.join) {
	    // probablemente sea un vector
	    // (este estilo es llamado, en inglés, "duck typing")
	}
	 
	if (Object.prototype.toString.call(myArray) === '[object Array]') {
	    // definitivamente es un vector;
	    // esta es considerada la forma más robusta
	    // de determinar si un valor es un vector.
	}

	/////////////////////INSTANCEOF///////////////////
	//////////////////////////////////////////////////

	// El operador typeof no es suficiente para trabajar con tipos de referencia, ya que devuelve el valor object para cualquier objeto independientemente de su tipo. Por este motivo, JavaScript define el operador instanceof para determinar la clase concreta de un objeto.

	var variable1 = new String("hola mundo");
	typeof variable1;             // devuelve "object"
	variable1 instanceof String;  // devuelve true
	// El operador instanceof sólo devuelve como valor true o false. De esta forma, instanceof no devuelve directamente la clase de la que ha instanciado la variable, 

	-----------------------------------------------------------------------
	////////////////////// ESTRUCTURAS DE CONTROL//////////////////////////
	///////////////////////////////////////////////////////////////////////
	-----------------------------------------------------------------------
	
	////////////////////////////////// if //////////////////////////
	var mostrarMensaje = true;

	if(mostrarMensaje) {
		console.log("Hola Mundo");  //se muestra porque el var es true
	}
	if(!mostrarMensaje) {
		console.log("Hola Mundo");  //no se muestra porque el var es false por(!)negacion
	}

	var c=2;
	var d=3;
	if(c === d){
		console.log(c + " es igual que "+ d);
	}else if(d > c){
		console.log(d+" es mayor que "+ c);
	}else{
		console.log("entonses " + c + " es mayor que "+ d);
	}

	var nombre = "";
	if(nombre == "") {
	  console.log("Aún no nos has dicho tu nombre");
	} else {
	  console.log("Hemos guardado tu nombre");
	}

	//////////////////////////////// switch  ////////////////////////////////////////

	//par mi, no es muy recomendable switch porque este no hace triple equivalencia y podemos caer en errores de codigo si no tenemos encuenta esto (cuando el codigo es simple se utiliza sin riesgos)
	
	switch(dia) {
	  case 1: console.log("Hoy es lunes."); break;
	  case 2: console.log("Hoy es martes."); break;
	  case 3: console.log("Hoy es miércoles."); break;
	  case 4: console.log("Hoy es jueves."); break;
	  case 5: console.log("Hoy es viernes."); break;
	  case 6: console.log("Hoy es sábado."); break;
	  case 0: console.log("Hoy es domingo."); break;
	}
	// otro
	var f = 5;
	switch(f){
		case 3: console.log("f es :"+ f);break;
		case 5: console.log("f es :" + f);break;
		default: console.log("f no es ni 5 ni 3"); break;
	}

	////////////////////////// while  /////////////////////

	var b = 0;
	while(b<10){
		//++b; o b++; empieza en 1 a 10
		console.log("este es el while en :"+ b);
		b++; //empieza de 0 a 9
	}
	
	/////////// do while //////////////
	// se ejecuta aunque sea una vez

	var i=0;
	do {
	  i += 1;
	  console.log(i);
	} while (i < 5);
	
	do { 
	    color = prompt("dame un color (escribe rojo para salir)");
	} while (color != "rojo");

	///////////////// <--estructura For-->//////////////////

	for (var i = 10; i >= 0; i--) {
		console.log("for desde y hasta: " + i);
	}
	for (var a = 0; a <= 10; a++) {
		console.log("otro for desde y hasta: " + a);
	}
	//otro
	var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

	for(var i=0; i<7; i++) {
			console.log(dias[i]);
	}
	
	////////////////////for in //////////////////////////////

	for(propiedad in object) {
		if (object.hasOwnProperty(propiedad)) {
			//si tiene la propiedad
			}
	}

	//////////// break y continue   /////////////

	// break sale del ciclo y terminarlo ejemplo
	for (var i = 0; i<= 10; i++) {
		if(i>5){
			break;  //se ejecuta el ciclo hasta llegar a 5 y se sale del for, no hasta llegar a 10 
		}
		console.log(i);
	}

	continue  //no se interumpe el ciclo de ejecucion (es lo opuesto de break)

	////////////////// try...catch///////////////
	/////////////////////////////////////////////

	function test(){
		try{
			var a = Number(prompt("ingrese el primer numero"));
			var b = Number(prompt("imgrese el segundo numero"));

			if(isNaN(a) || isNaN(b)){
				throw "haz introducido un caracter invalido"
			}
			alert("la suma de los dos numeros es "+(a+b));

		}catch(error){
			alert("Error: "+error);
		}
	}
	test();  //la function es solo para ejecutarla en la consola

	function test(){
    	do{
			try{
            
				var a = Number(prompt("ingrese el primer numero"));
				var b = Number(prompt("imgrese el segundo numero"));
            	var i = 0;
				
				if(isNaN(a) || isNaN(b)){
					throw "haz introducido un caracter invalido"
				}
				alert("la suma de los dos numeros es "+(a+b));
            	i+=2; 
       
			}catch(error){
				alert("Error: "+error);
			}
      	}while(i !=2);
	}
	test();
	//mientras no se introduzcan valores numericos no se teriminara la ejecucion

	--------------------------------------------------------------
	///////////////FUNCIONES Y PROPIEDADES BÁSICAS////////////////
	//////////////////////////////////////////////////////////////
	////////////FUNCIONES ÚTILES PARA CADENAS DE TEXTO //////////
	--------------------------------------------------------------

	/////////////////// length ////////////////////////////

	var mensaje = "Hola Mundo";
	var numeroLetras = mensaje.length; // numeroLetras = 10
	// +, se emplea para concatenar varias cadenas de texto

	var mensaje1 = "Hola";
	var mensaje2 = "Mundo";
	var variable3 = 3;
	var mensaje = mensaje1 + mensaje2; // mensaje = "HolaMundo"

	//////////////////// function concat();  ////////////////////

	var mensaje2 = mensaje1.concat(" Mundo"); // mensaje2 = "Hola Mundo"

	// otra forma de concatenar
	var mensaje = variable1 + variable3; // mensaje = "Hola 3"
	var mensaje = mensaje1 + " " + mensaje2; // mensaje = "Hola Mundo"

	/////////////////// toUpperCase() /////////////////////////

	var mensaje2 = mensaje1.toUpperCase(); // mensaje2 = "HOLA"

	////////////////// toLowerCase()  /////////////////////////

	var mensaje2 = mensaje1.toLowerCase(); // mensaje2 = "hola"

	////////////////// charAt();  ////////////////////////////

	var letra = mensaje.charAt(2); // = L
	var letra = mensaje.charAt(5); // = M

	//////////////// indexOf(caracter) ////////////////////

	// calcula la primera posición en la que se encuentra el carácter indicado dentro de la cadena de texto. Si la cadena no contiene el carácter, la función devuelve el valor -1:
	
	var posicion = mensaje.indexOf('a'); // posicion = 3
	posicion = mensaje.indexOf('b');     // posicion = -1
	//ojo cuenta de 1 hacia adelante sin el 0

	//////////////// lastIndexOf(caracter) ////////////////////

	// calcula la última posición en la que se encuentra el carácter indicado dentro de la cadena de texto. Si la cadena no contiene el carácter, la función devuelve el valor -1:
	
	var posicion = mensaje.lastIndexOf('a'); // posicion = 3
	posicion = mensaje.lastIndexOf('b');     // posicion = -1
	//ojo cuenta de 1 hacia adelante sin el 0

	//////////////// substr() //////////////////////////////////
	/*
		substr(inicio, longitud)
	inicio: 	Localización en la cual se empieza a extraer caracteres (un entero entre 0 y la longitud de la cadena menos 1).
	longitud:   El número de caracteres a extraer.
	*/
	var porcion = mensaje.substring(2); // porcion = "la Mundo"
	porcion = mensaje.substring(1, 3); // porcion = "ola"
	// Si se indica un inicio negativo, se devuelve la misma cadena original


	//////////////// substring(inicio, final) ////////////////// 

	// extrae una porción de una cadena de texto. El segundo parámetro es opcional. 

	//desde(indice A, indice B );
	
	var porcion = mensaje.substring(2); // porcion = "la Mundo"
	porcion = mensaje.substring(1, 8); // porcion = "ola Mun"
	// Si se indica un inicio negativo, se devuelve la misma cadena original

	// JavaScript los considera de forma inversa, ya que automáticamente asigna el valor más pequeño al inicio y el más grande al final:
	var porcion = mensaje.substring(5, 0); // porcion = "Hola "

	/////////////////////////////split///////////////////////////

	//convierte una cadena de texto en un array de cadenas de texto. La función parte la cadena de texto determinando sus trozos a partir del carácter separador indicado:

	var mensaje = "Hola Mundo, soy una cadena de texto!";
	var palabras = mensaje.split(" ");  //separador " "
	// palabras = ["Hola", "Mundo,", "soy", "una", "cadena", "de", "texto!"];

	// Con esta función se pueden extraer fácilmente las letras que forman una palabra:
	var palabra = "Hola";
	var letras = palabra.split(""); // letras = ["H", "o", "l", "a"]
	// sin espacio en la cadena

	----------------------------------------------------------
	////////////// FUNCIONES ÚTILES PARA NÚMEROS /////////////
	//////////////////////////////////////////////////////////
	----------------------------------------------------------

	/////////// NaN (del inglés, "Not a Number") /////////////

    var variable1 = 3;
	var variable2 = "hola";
	isNaN(variable1);  // false
	isNaN(variable2);  // true
	// pregunta no es un numero

	var a = Number(prompt("ingrese el primer numero"));
	var b = Number(prompt("imgrese el segundo numero"));

	if(isNaN(a) || isNaN(b)){
		alert("haz introducido un caracter diferente al un numero");
	}else{
		alert("la suma de los dos numeros es "+(a+b));
	}

	///////////////// Infinity -Infinity ///////////////////////

	// Infinity, hace referencia a un valor numérico infinito y positivo (también existe el valor –Infinity para los infinitos negativos)

	var numero1 = 10;
	var numero2 = 0;
	console.log(numero1/numero2); // se muestra el valor Infinity

	////////////////// toFixed(digitos) ///////////////////////// 

	// devuelve el número original con tantos decimales como los indicados por el parámetro digitos y realiza los redondeos necesarios. Se trata de una función muy útil por ejemplo para mostrar precios.

	var numero1 = 4564.34567;
	numero1.toFixed(2); // 4564.35
	numero1.toFixed(6); // 4564.345670
	numero1.toFixed(); // 4564

	

	----------------------------------------------------------
	///////////// FUNCIONES ÚTILES PARA ARRAYS ///////////////
	//////////////////////////////////////////////////////////
	----------------------------------------------------------

	// length, calcula el número de elementos de un array

	var vocales = ["a", "e", "i", "o", "u"];
	var numeroVocales = vocales.length; // numeroVocales = 5

	// concat(), se emplea para concatenar los elementos de varios arrays
	var array1 = [1, 2, 3];
	array2 = array1.concat(4, 5, 6);   // array2 = [1, 2, 3, 4, 5, 6]
	array3 = array1.concat([4, 5, 6]); // array3 = [1, 2, 3, 4, 5, 6]

	///////////////////// join(separador) ///////////////////////

	//es la función contraria a split(). Une todos los elementos de un array para formar una cadena de texto. Para unir los elementos se utiliza el carácter separador indicado

	var array = ["hola", "mundo"];
	var mensaje = array.join(""); // mensaje = "holamundo"
	mensaje = array.join(" ");    // mensaje = "hola mundo"

	/////////////////////// pop()  //////////////////////////////

	//elimina el último elemento del array y lo devuelve. El array original se modifica y su longitud disminuye en 1 elemento.

	var array = [1, 2, 3];
	var ultimo = array.pop();
	// ahora array = [1, 2], borra el ultimo = 3 y lo devuelve 

	/////////////////////// push() /////////////////////////////

	// añade un elemento al final del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez)

	var array = [1, 2, 3];
	array.push(4);
	// ahora array = [1, 2, 3, 4]

	////////////////////// shift() ////////////////////////////

	// elimina el primer elemento del array y lo devuelve. El array original se ve modificado y su longitud disminuida en 1 elemento.

	var array = [1, 2, 3];
	var primero = array.shift();
	// ahora array = [2, 3], primero = 1

	////////////////////// unshift() //////////////////////////

	// añade un elemento al principio del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez)

	var array = [1, 2, 3];
	array.unshift(0);
	// ahora array = [0, 1, 2, 3]

	/////////////////////// reverse() /////////////////////////

	// modifica un array colocando sus elementos en el orden inverso a su posición original:

	var array = [1, 2, 3];
	array.reverse();
	// ahora array = [3, 2, 1]

	---------------------------------------------------------
	/////////////////// array vectorial  ////////////////////
	/////////////////////////////////////////////////////////
	---------------------------------------------------------

	var vectorial = [9,8,7,4,"otro"];
	console.log("array vec "+ vectorial);
	console.log("estoy en un array vec "+ vectorial[0]); //9
	console.log("estoy en un array vec "+ vectorial[4]); //otro

	var empty = [];
	////// otra forma de crear un array ///
	var empty2 = Array('hola', 'mundo');
	 
	var numbers = [
	    'zero', 'one', 'two', 'three', 'four',
	    'five', 'six', 'seven', 'eight', 'nine'
	];
	 
	empty[1]        // undefined
	numbers[1]      // 'one'
	 
	empty.length    // 0
	numbers.length  // 10

	///////////  Cambiar el largo de un vector y eliminado el resto de campos  ////////////
	numbers.length  = 2; //result  ['zero', 'one']

	///////////////// borrado ////////////////

	/// eliminar el ultimo campo en array
	myArray.pop();   //[ 'hola', 'mundo' ]

	delete numbers[2]; //salida es ['zero', 'one', undefined, 'three', 'four']
	
	/*
	* Desafortunadamente, esto deja un espacio en el array. Esto es porque los elementos a la derecha del elemento eliminado conservan 
	* sus nombres. Para este caso, JavaScript incorpora una función splice, que permite eliminar y reemplazar elementos de un array. 
	* El primer argumento indica el por qué elemento comenzar a reemplazar, y el segundo argumento el número de elementos a eliminar.
	*/

	numbers.splice(2, 1); 
	// numbers es ['zero', 'one', 'three', 'four']

	////////// splice sive para borrar, insertar, remplazar //////////////

	//borrar no deja campos sin datos
	numbers.splice(0,2); //borra zero y one
	/*
	* [
	*    'zero', 'one', 'two', 'three', 'four',
	*    'five', 'six', 'seven', 'eight', 'nine'
	* ];
	*/
	////// insertar //////
	//posicion donde se quiere insertar numeros que se desea eliminar (siempre 0) elementos a insertar

	numbers.splice(2,0, 'splice','insertar')
	/*
	* [
	*    'zero', 'one', 'splice', 'insertar', 'two', 'three', 'four',
	*    'five', 'six', 'seven', 'eight', 'nine'
	* ];
	*/
	///// remplazar /////

	// posisicion de partida, numero de elementos a borrar y elementos a insettar 
	numbers.splice(2,1,"otro")
	

	///////////  Cambiar el valor de un ítem de un vector  ////////////

		var myArray = [ 'hola', 'mundo' ];
	    myArray[1] = 'changed'

	/// adicion de campos a un array ///////
	var myArray = [ 'hola', 'mundo' ];
	
	myArray.push("soy developer");  //salida ['hola', 'mundo', 'soy developer']
	/// otra forma ///
	myArray[myArray.length] = 'soy developer';

	//// inserta el nuevo campo de primeras
	myArray.unshift('primero')  //salida ['primero','hola', 'mundo', 'soy developer']

	// reverse devuelve los campos al reves
	myArray.reverse();  // salida [ 'soy developer','mundo', 'hola', 'primero']

	//sort ordena alfabeticamente
	myArray.sort();  //salida ['hola', 'mundo', 'primero', 'soy developer']

	// devuelve lo que este entre la posicion que indiquemos
	myArray.slice(2,1);  //salida ['hola']
	myArray.slice(2);  //salida ['mundo', 'soy developer']


	///// pasar a una cadena de texto un array /////
	myArray.toString(); //devueleve    'hola,mundo,soy developer' 	


	///////////////// array bidimencional  //////////////////
	////////////////////////////////////////////////////////

	var bidi = [[0,1,0],
				[0,1,0],
				[1,1,1]];
	console.log(bidi[0]);
	console.log(bidi[1][0]);

	---------------------------------------------------------
	//////////////////////////// funciones //////////////////
	/////////////////////////////////////////////////////////
	---------------------------------------------------------

	function hacer_algo () {
		console.log("estoy haciendo algo es esta funcion");
	}
	hacer_algo();
	// se llama a la function linea 556

	function suma_y_muestra(n1, n2) {
	  var resultado = n1 + n2;
	  console.log("El resultado es " + resultado);
	}
	suma_y_muestra(2,5);
	
	var s = function (n1, n2) {
	  var resultado = n1 + n2;
	  console.log("El resultado es " + resultado);
	}
	s(2,5); //se ejecuta con la variable s

	///////////////return ///////////////

	function division(x,y){
		var resultado = x/y;
		return resultado
	}
	var res = division(20,5);
	console.log("la division es: "+ res);

	//otra forma de utilizar varias functions
	//Llamar a una función suspende la ejecución de la función actual, pasando el control y los parámetros a la nueva función.

	function division(x,y){
		var resultado = x/y;
		return resultado
	}
	function ope(a,b) {
		var r = division(a,b)*5;
		alert("la operacion es: "+r)
	}
	ope(5,6)

	////////////////this ///////////////
	var name = "juan";
	function hola(){
		console.log(this.name);
	}
	hola();//no es muy util este metodo ya que se accede al scope global por el objeto window
	//window.hola(); y no hay nesecidad de esto lla que por si sola en el scope ya esta declarada

	// this hace referencia ala propiedad que esta en su padre sea en un objeto funcion o en window

	////////////// funciones como argumentos /////////////////// 

	var myfn = function(fn) {
		var resul = fn();
		console.log(resul) //muestra hola mundo
	}
	myfn(function () {
		return "Hola Mundo"
	})

	var dosVeces = function(funcAnonima){
		funcAnonima();
		funcAnonima();
	}
	dosVeces(function(){ 
		console.log("soy una funcion anonima pasada como argumento");
	});

	///////// function que se ejecuta enseguida /////////////////
	////////////////// closure /////////////
	(function(quien) {
	    alert("hola "+quien)
	})("mundo")

	//otro

	(function($){
		var z = 88;
		console.log($('h1'));
	})(jquery)

	(function(){
		var private = "no soy accesible desde afuera";

		$(document).on('click', function(){
			alert(private);
		});
	}());

	// nuca se puede acceder a la var private es una forma de ocultar codigo 

	// Esos dos paréntesis hacen que lo que está antes de los paréntesis, sea ejecutado de forma inmediata. ¿Recordáis el alcance/scope en JavaScript? JavaScript tiene un alcance a nivel de función. Todas las variables definidas dentro de esa función anónima no están disponibles al resto del mundo, usando una closure que la deja oculta al resto.

	
	//////////// Scope el alcance de una variable /////////////////

	//(la varalves viven solamente en la funcion que fue declarada o en sus hijas)
	// Clouser (la encapsulacion de datos)(no pueden ser accedidos fuera de dicha funcion solo puden se acsedidas por sus funciones hijas)(cada vez que creamos una function estamos creando un clouser )el root es una function que se ejecuta cuando es llamado el archivo.js
	function n1(){
		var a =1;
		function n2(){
			var b=2;
			function n3(){
				var c=3;
				function n4(){
					var d=4;
					console.log("esta function hereda todas las variables de arriba ");
					console.log(a+b+c+d);
				}
				n4();
			}
			n3();
		}
		n2();
		console.log("esta funcion no puede acceder al las variables declaradas en sus fucciones hijas solo a=1");
		console.log(a+b+c+d);
	}
	n1();

	//////////////////////////////////////////////////////////////////////
	///////////////////////shadowing///////////////////////////////////////

	/*
	* shadowing respeta las gerarquias relacionandolas con los ambitos de las variables
	* javascript respeta los valores entre variables declaradas en el ambito global y las declaradas en funciones  
	* (desde se vuelva a declarar la variable con var, si no simplemente se estaria asignando un nuevo valor a dicha variable)
	*/

	var color = "red";
	console.log(color); //imprime red

	function shadowing(){
		var color = "blue";
		console.log(color); //imprime blue
	}

	console.log(color); //imprime red

	//////////////////////////////////////////////////////////////////////
	///////////////////////callback///////////////////////////////////////
	
	function haceAlgo(miCallback){
	    //hago algo y llamo al callback avisando que terminé
	    miCallback('cualquier cosa');
	}

	haceAlgo(function(queHizo){
	   console.log('terminó de hacer ' + queHizo);
	});
	
	//otro
	function haceAlgo(callbackPaso1, callbackPaso2, callbackTermino){
	    //algo aca
	    callbackPaso1('paso 1');

	    //sigo... algo aca
	    callbackPaso2('paso 2');

	    //sigo ... y termino
	    callbackTermino('terminó');
	}

	function paso1(quePaso){
	     console.log(quePaso);
	}

	function paso2(quePaso){
	     console.log(quePaso);
	}

	function termino(queHizo){
	     console.log(queHizo);
	}

	haceAlgo(paso1, paso2, termino);

	// otro

	$("#id").on("click",function() {
		console.log("soy un callback");
	});
	$("#id").on("click", otro);

	function otro() {
		console.log("soy otro callback");
	}

	-------------------------------------------------------------------
	///////////////////////////////////////////////////////////////////
	////////////////////////objetos////////////////////////////////////
	///////////////todo en javascript es un objeto ////////////////////
	-------------------------------------------------------------------
	
	// excepto el valor null y undefined ///
	
	// En JavaScript, los objetos son dinámicos, esto quiere decir que sus propiedades no tienen por qué ser definidas en el momento en el que creamos el objeto. Podemos añadir nuevas propiedades al objeto en tiempo de ejecución, tan solo indicando el nombre la propiedad y asignándole un valor o función.

	var a = new object();//otro
	a.nombre = "juan";
	a.ciudad = "bogota";
	var a = new function(){}//otro

	// otra forma
	var b = {};
	b.nombre = "juan";
	b.id = 123456;
	b["segu nom"] = "carlos"; //cuando hay espacios o caracteres
	b.fuc = function() { console.log("Hello world!"); }
	//forma de ejecutar los metodos //los metodos son funciones dentro de un objeto
	b.fuc();
	console.log(b["segu nom"]) //devuelve carlos
	// En JavaScript también se puede acceder o establecer propiedades de objetos mediante la notación de corchetes [ ].

	//la modificacion del objeto se puede hace de cualquiera de las formas
	b.nombre = "otro_nombre";
	b["segu nom"] = "otro_mas";

	///// borrado de propiedad ////////

	delete b.id;

	//////////////objeto literal///////////////////////////////
	var Persona={
		nombre: "peppito",
		apellido: "pepo"
	};
	console.log(Persona.nombre);
	// Objeto sintaxis literal se puede utilizar para inicializar un objeto en su totalidad:
	var obj = {
		name: "pepe",
		"for": "Maxi",
		objeto: {
			color: "orange",
			size: 12
		},
		objeto2: {
			color: "red",
			size: 25
		}
	};
	console.log(obj.objeto.color); //devuelve orange

	////////////////////////// objeto json  ////////////////////////
	////////////esta es la forma valida para un json////////////////

	var a='{}';
	var b = "{"color":"red","altura":180,"otro":"el_mismo"}"

	////////  JSON.parse(json) ///////
	// devuelve un objeto
	
	var json = '{"name":"juan","apellido":"Alfonso","cel":["555-0100","555-0120"]}';
	var contact = JSON.parse(json);
	document.write(contact.apellido + ", " + contact.name);
	
	///// convierte a json con JSON.stringify() ///// 
	var dibujo = {
		color: "red",
		altura: 180,
		otro: "el_mismo"
	};				
	var c = JSON.stringify(dibujo);
	document.write(c);  //"{"color":"red","altura":180,"otro":"el_mismo"}"


	-----------------------------------------------------------------
	///////////// /Usando una función constructora///////////////////
	////////////// objeto con una function (clase)  /////////////////

	// la clase mascota
	// n, v son el costructor y se envian los parametros cuando se instancia el objeto ("roco", 5)
	function Mascota(n,v){
		//atributos = valores que llegan como para metros de entrada del costructor
		this.nombre = n;
		this. vida = v;
		function metodo (){
			alert("este es un metodo (no esta llamado)");
		}
	}
	//creacion del objeto //instanciando un objeto
	//un objeto es una instancia de una clase 
	var perro = new Mascota("roco", 5);
	var gato = new Mascota("tobi", 5);
	console.log("el perro se llama "+perro.nombre);
	console.log("el gato se llama "+gato.nombre+" y tiene "+ gato.vida + " años");

	//////////////////////////otro objeto //////////////////////////
	///////////////////////////////////////////////////////////////
	//function costructora o clase

	function Auto(marca, modelo, año, propietario) {
		this.marca = marca;
		this.modelo = modelo;
		this.año = año;
		this.propietario = propietario;
		this.mostrarAuto = mostrarAuto;
	}
	function mostrarAuto() {
		var resultado = "Un bonito " + this.marca + " " + this.modelo
		+ " " + this.año+ " y su propietario es "+this.propietario;
		console.log(resultado);
	}
	var auto1 = new Auto("Eagle", "Talon TSi", 1993, "juan");
	var auto2 = new Auto("Nissan", "300ZX", 1992, "carlos");


	auto1.mostrarAuto();
	auto2.mostrarAuto();

	////////////////////////////////////////////////////////////////

	function Persona(nombre, edad, sexo) {
		this.nombre = nombre;
		this.edad = edad;
		this.sexo = sexo;
	}

	var fer = new Persona("Fernando peppito", 38, "M");
	var alvaro = new Persona("Alvaro Caram", 36, "M");

	
	------------------------------------------------------------
	////////////////////////////////////////////////////////////
	///////////////////////prototype////////////////////////////
	////////////////////////////////////////////////////////////
	------------------------------------------------------------

	function Persona (nompersona){
		this.nombre = nompersona;
		this.info = "Esta Persona se llama: "+ this.nombre;
		this.mostrarinfo = function() {
			alert(this.info);
		}
	}

	var Persona1 = new Persona("juan");
	var Persona2 = new Persona("carlos");

	Persona.prototype.diHola = function() {
		alert(this.nombre+ " dice hola");
	}

	Persona1.mostrarinfo();
	Persona2.mostrarinfo();
	Persona1.diHola();
	Persona2.diHola();

	//////////// otro  ////////////

	function Persona (name) {
		this.name = name;
	}
	Persona.prototype.alertName = function(){
		alert(this.name);
	}
	var juan = new Persona("juan");
	
	//////////// otro  ///////////

	function Animal (edad) {
	  this.edad = edad;
	}
	 
	Animal.prototype.crecer = function () {
	  this.edad = this.edad + 1;
	  return this.edad;
	};
	 
	var iris = new Animal(3);
	console.log(iris.crecer()); 

	function Felino () {
	}
	 // herencia con prototype //
	
	Felino.prototype = new Animal();
	Felino.prototype.constructor = Felino;
	
	//metodos  con prototype

	Felino.prototype.maullar = function () {
	  console.log('meowwwww');
	};
	 
	var iris = new Felino();
	iris.crecer();
	iris.maullar();

	-----------------------------------------------------------------
	/////////////////////////////////////////////////////////////////
	/////////////////////// Herencia ////////////////////////////////
	-----------------------------------------------------------------

	function Manifero(nombre,ojos) {
		this.nombre = nombre;
		this.ojos = ojos;
		this.nombreManifero = function() {
			alert("su nombre es: "+this.nombre)
		}
	}
	function Delfin(velocidad) {
		this.velocidad =velocidad;
		this.navegar = function() {
			alert("tiene "+this.ojos+" ojos y\n nada con una velocidad de :"+this.velocidad+"km")
		}
	}
	Delfin.prototype = new Manifero("tammy", 2);
	var tammy = new Delfin(70);
	tammy.nombreManifero();
	tammy.navegar();

	// otro

	function Persona(primerNombre) {
	  this.primerNombre = primerNombre;
	}

	// Agregamos un par de métodos a Persona.prototype
	Persona.prototype.caminar = function() {
	  alert("Estoy caminando!");
	};
	Persona.prototype.diHola = function(){
	  alert("Hola, Soy" + this.primerNombre);
	};

	// Definimos el constructor Estudiante
	function Estudiante(primerNombre, asunto) {
	  // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se ha establecido correctamente durante la llamada
	  Persona.call(this, primerNombre);
	  //Inicializamos las propiedades específicas de Estudiante
	  this.asunto = asunto;
	};

	// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
	Estudiante.prototype = Object.create(Persona.prototype);
	// Establecer la propiedad "constructor" para referencias  a Estudiante
	Estudiante.prototype.constructor = Estudiante;

	// Remplazar el método "diHola"
	Estudiante.prototype.diHola = function(){
	  alert("Hola, Soy " + this.primerNombre + ". Yo estoy estudiando " + this.asunto + ".");
	};

	// Agregamos el método "diAdios"
	Estudiante.prototype.diAdios = function() {
	  alert("¡ Adios !");
	};

	// Ejemplos de uso
	var estudiante1 = new Estudiante("Carolina", "Física Aplicada");
	estudiante1.diHola();    // muestra "Hola, Soy Carolina. Yo estoy estudianto Física Aplicada."
	estudiante1.caminar();   // muestra "Yo estoy caminando !"
	estudiante1.diAdios(); 	//muestra "¡ Adios !"


	-----------------------------------------------------------------
	/////////////////////////////////////////////////////////////////
	///////////////     EXPRESIONES REGULARES   /////////////////////
	/////////////////////////////////////////////////////////////////
	-----------------------------------------------------------------

	// PRIMERA EXPRESIÓN REGULAR

	// Al igual que las cadenas de caracteres se escriben entre comillas dobles ("), los patrones de expresiones regulares se escriben entre barras (/).
		var slash = /\//;
	console.log("AC/DC".search(slash));

	var expre = /hola/ig;//busca hola
	// var expre = /[a-z]{3}a/ig;   //palabras que 3 letras antes de la a 
	// var expre = /[aeiou]/ig;  //remplaza cualquiera de las vocales por lo que uno quiera	

	//i=insensive a mayusculas y g=busque todas las palabras 
	var cadena = "Hola Mundo hola otra vez"
	var mostrar =cadena.replace(expre, "Adios")
	console.log(mostrar)

	//otro ejemplo
	var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

	var url = "http://www.ora.com:80/goodparts?q#fragment";

	var result = parse_url.exec(url);

	var names = ['url', 'scheme', 'slash', 'host', 'port',
	     'path', 'query', 'hash'];
	 
	var i;
	for (i = 0; i < names.length; i += 1) {
	    document.writeln(names[i] + ':\n', result[i]);
	}
	/*
	el resultado es :

	url:    http://www.ora.com:80/goodparts?q#fragment
	scheme: http
	slash:  //
	host:   www.ora.com
	port:   80
	path:   goodparts
	query:  q
	hash:   fragment
	*/

	// CONTRUCCIÓN
	// Podemos indicar tres parámetros al final de la expresión regular, que modifican ligeramente su comportamiento.

	var my_regexp = /\s*/g;
	// Su significado es el siguiente:
	/*
	Parámetro	Significado
	g	Global (hace coincidir el patrón todas las veces posibles, aunque puede variar según el método).
	i	Insensitive (ignora las mayúsculas y minúsculas).
	m	Multiline (los caracteres ^ y $ pueden coincidir con caracteres multilínea).
	*/

	// demaciado largo
	// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

	-----------------------------------------------------------------
	/////////////////////////////////////////////////////////////////
	////////////////////////   DOM   ////////////////////////////////
	-----------------------------------------------------------------

	/////   GETELEMENTSBYTAGNAME()
	var parrafos = document.getElementsByTagName("p");

	/////    GETELEMENTSBYNAME()
	var parrafoEspecial = document.getElementsByName("especial");
	/*
	<p name="prueba">...</p> 
	<p name="especial">...</p> //coje este
	<p>...</p>
	*/

	/////   GETELEMENTBYID()

	var cabecera = document.getElementById("cabecera");
	/*
	<div id="cabecera">
	  <a href="/" id="logo">...</a>
	</div>*/

	/////   Document.getElementsByClassName()

	var c = document.getElementsByClassName('test');
	/*
	<div class="test">
	  <a href="/" id="logo">...</a>
	</div>*/

	/////    QUERYSELECTOR()

	var logo = document.querySelector(".enlace");
	/*
	<div id="cabecera">
	  <a href="/" class="enlace">...</a>
	</div>
	<div id="cuerpo">
	    <p>Loren ipsum <a href="enlace">...</a></p>
	</div>
	En este caso, a pesar de existir varios elementos de la clase enlace, únicamente es seleccionado el primero de ellos. */

	/////    QUERYSELECTORALL()

	var enlaces = document.querySelectorAll(".enlace");
	/*
	<div id="cabecera">
	  <a href="/" class="enlace">...</a>
	</div>
	<div id="cuerpo">
	    <p>Loren ipsum <a href="enlace">...</a></p>
	</div>
	Para acceder a los elementos almacenados en NodeList, recorremos el objeto como si de un array se tratase:

	for (var i=0; i<enlaces.length; i++) {
	    var enlaces = enlaces[i];
	}*/

	------------------------------------------------
	////////////////////////////////////////////////
	/////   CREACIÓN Y ELIMINACIÓN DE NODOS  ///////


			// Crear nodo de tipo Element
	var parrafo = document.createElement("p");
	 
	// Crear nodo de tipo Text
	var contenido = document.createTextNode("Hola Mundo!");
	 
	// Añadir el nodo Text como hijo del nodo Element
	parrafo.appendChild(contenido);
	 
	// Añadir el nodo Element como hijo de la pagina
	document.body.appendChild(parrafo);

	///////////////////////////////////////////////
	//////      ELIMINACIÓN DE NODOS    ///////////

	var parrafo = document.getElementById("provisional");
	parrafo.parentNode.removeChild(parrafo);
	/*
	<p id="provisional">...</p>
	*/

	-------------------------------------------------------
	///////////////////////////////////////////////////////
	///////  ACCESO DIRECTO A LOS ATRIBUTOS XHTML  ////////

	var enlace = document.getElementById("enlace");
	console.log(enlace.href); // muestra http://www...com
	<a id="enlace" href="http://www...com">Enlace</a>
	
	var imagen = document.getElementById("imagen");
	console.log(imagen.style.margin);
	<img id="imagen" style="margin:0; border:0;" src="logo.png" />

	var parrafo = document.getElementById("parrafo");
	console.log(parrafo.style.fontWeight);  // muestra "bold"
	<p id="parrafo" style="font-weight: bold;">...</p>

	-------------------------------------------------------
	///////////////////////////////////////////////////////
	///////////////   CONTROL DE TIEMPOS    ///////////////
	///////////  setTimeout() y setInterval()  ////////////


	///////////  setTimeout()  //////////

	// El método setTimeout() permite ejecutar una función al transcurrir un determinado periodo de tiempo:

	setTimeout("console.log('Han transcurrido 3 segundos desde que me programaron')", 3000);

	// forma functions
	function muestraMensaje() {
		console.log("Han transcurrido 3 segundos desde que me programaron");
	}
	setTimeout(muestraMensaje, 3000);

	///////////  clearTimeout()   ///////////

	// Cuando se establece una cuenta atrás, la función setTimeout() devuelve el identificador de esa nueva cuenta atrás. Empleando ese identificador y la función clearTimeout() es posible impedir que se ejecute el código pendiente:
	function muestraMensaje() {
		console.log("Han transcurrido 3 segundos desde que me programaron");
	}
	var id = setTimeout(muestraMensaje, 3000);
	
	// Antes de que transcurran 3 segundos, se decide eliminar la ejecución pendiente
	clearTimeout(id); //para la ejecucion 

	///////////   setInterval() /////////////////

	// Además de programar la ejecución futura de una función, JavaScript también permite establecer la ejecución periódica y repetitiva de una función. El método necesario es setInterval() y su funcionamiento es idéntico al mostrado para setTimeout():

	function muestraMensaje() {
	  console.log("Este mensaje se muestra cada segundo");
	}		 
	setInterval(muestraMensaje, 1000);

	// De forma análoga a clearTimeout(), también existe un método que permite eliminar una repetición periódica y que en este caso se denomina clearInterval():

	function muestraMensaje() {
		console.log("Este mensaje se muestra cada segundo");
	}
	var id = setInterval(muestraMensaje, 1000);
	// Despues de ejecutarse un determinado número de veces, se elimina el intervalo
	clearInterval(id);

	-----------------------------------------------------------------
	/////////////////////////////////////////////////////////////////
	////////////////////////   EVENTOS    ///////////////////////////
	/////////////////////////////////////////////////////////////////
	-----------------------------------------------------------------

	/*
	Evento		Descripción	Elementos para los que está definido

	onblur   	Un elemento pierde el foco			<button>, <input>, <label>, <select>, 													<textarea>, <body>
	onchange	Un elemento ha sido modificado		<input>, <select>, <textarea>
	onclick		Pulsar y soltar el ratón	Todos los elementos
	ondblclick	Pulsar dos veces seguidas con el ratón	Todos los elementos
	onfocus		Un elemento obtiene el foco			<button>, <input>, <label>, <select>, 													<textarea>, <body>
	onkeydown	Pulsar una tecla y no soltarla		Elementos de formulario y <body>
	onkeypress	Pulsar una tecla					Elementos de formulario y <body>
	onkeyup		Soltar una tecla pulsada			Elementos de formulario y <body>
	onload		Página cargada completamente		<body>
	onmousedown	Pulsar un botón del ratón y no soltarlo	Todos los elementos
	onmousemove	Mover el ratón	Todos los elementos
	onmouseout	El ratón "sale" del elemento		Todos los elementos
	onmouseover	El ratón "entra" en el elemento		Todos los elementos
	onmouseup	Soltar el botón del ratón			Todos los elementos
	onreset		Inicializar el formulario			<form>
	onresize	Modificar el tamaño de la ventana	<body>
	onselect	Seleccionar un texto				<input>, <textarea>
	onsubmit	Enviar el formulario				<form>
	onunload	Se abandona la página, por ejemplo al cerrar el navegador	<body>
	*/

	////////////  MANEJADORES COMO ATRIBUTOS XHTML  ///////////

	// Se trata del método más sencillo y a la vez menos profesional de indicar el código JavaScript

	<input type="button" value="Pinchame y verás" onclick="console.log('Gracias por pinchar');" />

	<div onclick="console.log('Has pinchado con el ratón');" onmouseover="console.log('Acabas de pasar el ratón por encima');">
		Puedes pinchar sobre este elemento o simplemente pasar el ratón por encima
	</div>

	<body onload="console.log('La página se ha cargado completamente');">
	</body>
	
	//otra forma
	
	function muestraMensaje() {
		console.log('Gracias por pinchar');
	}
	<input type="button" value="Pinchame y verás" onclick="muestraMensaje()" />

	///// mejor forma pero la mas adecuada  //////////////

	function muestraMensaje() {
		console.log('Gracias por pinchar');
	}
	document.getElementById("pinchable").onclick = muestraMensaje;
	<input id="pinchable" type="button" value="Pinchame y verás" />

	// la lllamada a la function muestraMensaje se hace sin ()porque se estaria llammando a la function y caeria en errores por que no se a cargado el dom para esto se utiliza esta function
	window.onload = function() {
			//cuando se carge el dom se ejecuta
	}
	// la mejor forma es la siguiente

	----------------------------------------------------------
	///////////  MANEJADORES DE EVENTOS DE DOM  //////////////
	//////////////////////////////////////////////////////////
	//////  addEventListener() y removeEventListener()  //////

	var elDiv = document.getElementById("div_principal");
	elDiv.addEventListener("click", muestraMensaje, false);
	//el true y false es como en jquery on y off 
	// Más adelante se decide desasociar la función al evento
	elDiv.removeEventListener("click", muestraMensaje, false);
	// Asociando múltiples funciones a un único evento:


	function muestraMensaje() {
		console.log("Has pulsado el ratón");
	}
	
	function muestraOtroMensaje() {
	  console.log("Has pulsado el ratón y por eso se muestran estos mensajes");
	}
	
	var elDiv = document.getElementById("div_principal");
	elDiv.addEventListener("click", muestraMensaje, true);
	elDiv.addEventListener("click", muestraOtroMensaje, true);

	////////   EVENTOS DE RATÓN   ////////////
	/*
	click		Se produce cuando se pulsa el botón izquierdo del ratón. También se produce 			cuando el foco de la aplicación está situado en un botón y se pulsa la 					tecla ENTER
	dblclick	Se produce cuando se pulsa dos veces el botón izquierdo del ratón
	mousedown	Se produce cuando se pulsa cualquier botón del ratón
	mouseout	Se produce cuando el puntero del ratón se encuentra en el interior de 					usando elemento y el usuario mueve el puntero a un lugar fuera de ese 					elemento
	mouseover	Se produce cuando el puntero del ratón se encuentra fuera de un elemento y 				el usuario mueve el puntero hacia un lugar en el interior del elemento
	mouseup		Se produce cuando se suelta cualquier botón del ratón que haya sido pulsado
	mousemove	Se produce (de forma continua) cuando el puntero del ratón se encuentra 				sobre un elemento
	*/
	/////////   EVENTOS DE TECLADO /////////////
	/*
	keydown		Se produce cuando se pulsa cualquier tecla del teclado. También se produce 				de forma continua si se mantiene pulsada la tecla
	keypress	Se produce cuando se pulsa una tecla correspondiente a un carácter 						alfanumérico (no se tienen en cuenta telas como SHIFT, ALT, etc.). También 				se produce de forma continua si se mantiene pulsada la tecla
	keyup		Se produce cuando se suelta cualquier tecla pulsada
	*/

	------------------------------------------------
	/////////////   formulatios ////////////////////
	////////////////////////////////////////////////


	<input type="text" id="texto" />
	var valor = document.getElementById("texto").value;
	
	//estalbecer foco a un elemento

	document.getElementById("primero").focus();
	// <form id="formulario" action="#">
	//   <input type="text" id="primero" />
	// </form>



	/////falta mixins///////////////////////////////////////////////////////////////

---------------------------------------------------------------
///////////////////////////////////////////////////////////////
/////////////////////   ajax con jquery   /////////////////////
///////////////////////////////////////////////////////////////
---------------------------------------------------------------
//consulta de ajax
$.ajax({
	url: 'http://api.tvmaze.com/shows',
	success: function(shows, textStatus, xhr){
		// console.log(shows); //lista todos los shows en consola
		$Cont.find('.loader').remove(); //remueve el spiner creado en el html y con css
		renderShows(shows);
	}
});

// template a agregar por cada show
var template = '<article class="Cont-article">' +
			'<figure class="Cont-articleFigure">' +
				'<img src=":img:" alt=":img alt:" width="80" height="100">' +
			'</figure>' +
			'<div class="Cont-articleInfo">' +
				'<h2 class="Cont-articleInfoTitle">:name:</h2>' +
				'<h4 class="Cont-articleInfoAutor">:language:</h4>' +
				'<a class="Cont-articleInfoButton icon-plus" id="leer">Leer</a>' +
			'</div>' +
		'</article>';

var template3= $('<div class="SearchNone">' +
		'<h4 class="SearchNone-face icon-sad"></h4>' +
		'<h4 class="SearchNone-info">lo sentimos no hemos encontrado en nuestra base de datos esta serie, intenta con las iniciales u otras series mas que están esperando para ti</h4>' +
	'</div>');
// asignacion de cada show con unna funcion pero tambien se puede en el mismo success 
// se acunseja asi para poder reutilizar el codigo (ejemplo = para buscar shows)

	var $Cont = $("#Cont");

	function renderShows(shows) {
		shows.forEach(function(show){
			var article =template
				.replace(':name:', show.name)
				.replace(':img:', show.image.original)
				.replace(':img alt:', show.name + " logo")
				.replace(':language:', show.language);

			$Cont.append($(article));

		})
	}
/*
<form class="Cont-form">
	<input type="text">
	<button type="submit">buscar</button>
</form>
*/
$('#Cont')
	.find('form')
	.submit(function(e){
		e.preventDefault();
		// console.log(this);
		var busqueda =$(this)
		.find('input[type="text"]')
		.val();
		// alert('buscastes '+ busqueda); //validando si esta opteniendo el valor
		$.ajax({
			url: 'http://api.tvmaze.com/search/shows',
			data:{ q: busqueda },
			success: function (res, textStatus, xhr) {
				// console.log(res); //llegan los shows que 
				$loader.remove(); //remueve el spiner creado en el html y con css
				//valida si la respuesta == a cero agrege un aviso de disculpas (template3) y si no muestre los shows
				if(res == 0){
					template3.appendTo($Cont);
				}else{
					template3.remove();
					var shows = res.map(function(el){
						return el.show;
					})
					renderShows(shows);
				}
			}
		});
	});

// ejemplo de peticion de ajax con promises
// shows con ajax promises
	$.ajax('http://api.tvmaze.com/shows')
		.then(function(shows){
			$Cont.find('.loader').remove();
			renderShows(shows);
		})
