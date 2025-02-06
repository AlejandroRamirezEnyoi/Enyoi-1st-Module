let persona1 = {
	name:"Alejandro",
	lastName: "Ramirez",
	saludar: function(){
		console.log( "Hola "+ this.name + " este es tu apellido " + this.lastName )
	} 
}

// let persona1 = new Object()
// persona1.name = "Alejandro"

persona1.saludar()

