const execSync = require("child_process").execSync;
const regex = /\d+$/g;

const trabajos = (printer) => {

    //result es el array que tiene los trabajos en cola cuando la impresora es llamada
    const result = execSync(`cscript prnjobs.vbs -l -p ${printer}`, { cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES', encoding: 'utf8' }).replace(/\r\n/g, '').match(regex);

    //Si hay más de 500 lo dejo pasar, hay muchas impresoras averiadas con millones de trabajos
    if (parseInt(result[0]) > 500) {
        return ("+500");
    };

    return result[0];
};

const resultInfo = trabajos('\\\\ctxprinter\\01SIPRO01');

console.log(resultInfo);