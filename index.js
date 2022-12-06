import fs from 'fs';
import chalk from 'chalk';

const deuErro = chalk.bold.red;
const alerta = chalk.hex('#FFA500');
const textoNormal = chalk.white;
const textoImportante = chalk.yellow;
const textoRetornos = chalk.green;

function trataErro (erro) {
    console.log(erro);
    throw new Error(erro);
}

function pegaArquivo(caminhodoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhodoArquivo, encoding)
        .then((texto) => console.log(textoRetornos(texto)))
        .catch(trataErro);
}

pegaArquivo('./arquivos/')

// function pegaArquivo (caminhodoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhodoArquivo, encoding, (erro, texto) => {
//         if (erro){
//             trataErro(erro);
//         }
//         console.log(console.log(textoNormal(texto)));
//     })
// }

// pegaArquivo('./arquivos/texto.m');
