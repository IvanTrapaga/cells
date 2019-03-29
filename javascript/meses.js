class Meses{

	constructor(){
		console.log('constructor');
		this.meses = [{mes:'Enero', estacion:'Invierno'}
			, {mes:'Febrero', estacion:'Invierno'}
			, {mes:'Marzo', estacion: 'Primavera'}
			, {mes:'Abril', estacion: 'Primavera'}
			, {mes:'Mayo', estacion: 'Primavera'}
			, {mes:'Junio', estacion: 'Verano'}
			, {mes:'Julio', estacion: 'Verano'}
			, {mes:'Agosto', estacion: 'Verano'}
			, {mes:'Septiembre',estacion: 'Otoño'}
			, {mes:'Octubre', estacion: 'Otoño'} 
			, {mes:'Noviembre', estacion: 'Otoño'}
			, {mes:'Diciembre', estacion: 'Invierno'}]
	}
	print(){
	//--imprimir meses de año
		console.log('--------print()');
		this.meses.forEach((item)=>{console.log(item.mes)});
	}
	printPorEstacion(estacion){
		console.log(`-----------printPorEstacion(${estacion})`);

		//--imprimir solo los meses de la estacion ${estacion}
		this.meses.filter((item)=>{return item.estacion === estacion})
			.forEach((item) => {console.log(item.mes)});
	}

}
const meses = new Meses();
meses.print();
meses.printPorEstacion('Invierno');

