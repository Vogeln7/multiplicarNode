//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        let result = base * i;
        data += `${base} * ${i} = ${result}\n`;

    }
    console.log(data);
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        } else {

            for (let i = 1; i <= limite; i++) {
                let result = base * i;
                data += `${base} * ${i} = ${result}\n`;

            };
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla ${base}.txt`);

        });

    });
};

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}