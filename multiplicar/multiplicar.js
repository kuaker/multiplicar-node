// requireds
const fs = require('fs');
const color = require('colors');
//const fs = require('express');
//const fs = require('../fs');

let listarTabla = (base, limite = 10) => {

    console.log('========================='.green);
    console.log(`==========tabla de ${ base } ===============`);
    console.log('========================='.red);


    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor base no es un número');
            return;
        }

        let data = ``;

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}