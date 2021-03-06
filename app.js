// CREAR UNA APP y Pasar argumentos por consola.
const argv = require('./config/yargs').argv;
const color = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.red.bold }`.green.bold))
            .catch((err) => console.log(err))

        break;

    default:
        console.log('Comando no reconocido.');
}