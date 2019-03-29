console.log('--------------ARRAYS-------------');

const b = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let name = 'Ivan';

//for(let i = 0; i<b.length; i++){
//	if(b[i].length<=5){
//		console.log(`mes ${b[i]}`);
//	}
//}

//let a = b.filter((item)=>{return item.length<=5});
//console.log(a.toString());

//console.log(b.map((item) => {return item = item.toUpperCase()}));


//---Que convierta a mayusculas los meses que contengan 5 digitos

let mayus = b.filter((item)=>{return item.length>6});
console.log(mayus.map((item) => {return item = item.toUpperCase()}));

console.log(b.filter( (item) => {return item.length>=6}).map( (item)=>{ return item = item.toUpperCase()}));
