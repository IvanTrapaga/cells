class Ejercicio1 {

	constructor(){
		console.log('constructor');
		this.datos = [
					{
					name:'Ivan',
					age: 24,
					training:[{
						name: 'Java',
						duration: 5,
						date: new Date('3/28/2019')
						},
						{
						name: 'C#',
						duration: 4,
						date: new Date('4/28/2019')
						}
						],
					hobbies:[
						{name:'programar'},{name:'dormir'}
						]
					},
					{
					name:'Pedro',
					age: 23,
					training:[{
						name: 'Java',
						duration: 6,
						date: new Date('3/28/2019')
						},
						{
						name: 'Python',
						duration: 8,
						date: new Date('3/28/2019')
						}
						],
					hobbies:[
						{name:'programar'},{name:'dibujar'}
						]
					}
				
		
		
		
				]
	}
//Cierre del constructor

	cursosPersonas(){
		console.log(`Cursos tomados :`);
		this.datos.forEach((item)=>{ item.training.forEach((item)=>{console.log(item.name)})});
	}

	hobbiesPersonas(){
		console.log(`Hobbies: `);
		this.datos.forEach((item)=>{ item.hobbies.forEach((item)=>{console.log(item.name.toUpperCase())})});
	}

	sumaDeHoras(){
		console.log(`Suma de horas: `);
		this.datos.forEach((item)=>{console.log(item.training.reduce((a,b)=>{ return a + b.duration;},0))});
	}

	promedioEdades(){
		console.log(`Promedio de edades`);
		let a = 0;
		let b = 0;
		this.datos.forEach((item)=>{a=a+item.age});
		b=this.datos.length;
		console.log(a/b);
	}
}
const ejercicio1 = new Ejercicio1();
ejercicio1.cursosPersonas();
ejercicio1.hobbiesPersonas();
ejercicio1.sumaDeHoras();
ejercicio1.promedioEdades();
