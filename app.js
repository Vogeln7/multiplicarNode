const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(listarTabla(argv.base, argv.limite));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Àrchivo creado:` + `${ archivo }`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}



// console.log(argv.base);
// console.log('Limite : ', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]