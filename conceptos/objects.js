const tsuru = {
    model: 2001,
    color: 'morado',
    kilometers: 20000,
    engine: '2.0 litros'
}
console.log(tsuru);
console.log(tsuru.model);
console.log(tsuru.color);
tsuru.engine= '4.0 litros';
console.log(tsuru);

tsuru.collitions = 5;
console.log(tsuru);
tsuru['numero placas']= 'Go /jo0';
console.log(tsuru);
tsuru.services = [2005, 2010, 2023];
tsuru.status = 'apagado';
console.log(tsuru);

tsuru.start = function(){
    console.log('ru rur ruru ru rururu');
    console.log('ruuuuuuuuuuuuuun');
    console.log('rrrrrrrrrrrrr');
    this.status = 'encendido';
}

tsuru.start();
console.log(tsuru.status);

tsuru['turn off']=function(){
    console.log('Apagandose');
    this.status = 'Apagado';
    console.log(this.status);
}
tsuru['turn off']();

delete tsuru['numero placas'];
console.log(tsuru);