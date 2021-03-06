const opts = {
    base: {
        demand: true, //obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea el archivo en una tabla', opts)
    .help()
    .argv;


module.exports = {
    argv
}