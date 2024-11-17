var colors = require('colors');
const inquirer = require('inquirer');


const preguntas = [
    {
        type: 'list',
        name: 'options',
        message: 'que deseas hacer',
        choices: [
            {
                value: '1',
                name: `${'1.'.blue} Crear una tarea`,
            },
            {
                value: '2',
                name: `${'2.'.blue} Listar todas las tareas`,
            },
            {
                value: '3',
                name: `${'3.'.blue} Listar tareas completas`,
            },
            {
                value: '4',
                name: `${'4.'.blue} Listar tareas pendientes`,
            },
            {
                value: '5',
                name: `${'5.'.blue} Completar tarea(s)`,
            },
            {
                value: '6',
                name: `${'6.'.blue} Borrar tarea`,
            },
            {
                value: '0',
                name: `${'0.'.blue} Salir`,
            }
        ]
    }
]

const menu = async () => {

    console.clear();
    console.log(`${'♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ '.pink}`);
    console.log(`${'♡           Bienvenido al menú de tareas     ♡'.white}`);
    console.log(`${'♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ '.pink}`);

    const { options } = await inquirer.default.prompt(preguntas);
    return options;

}

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione la tecla ${'Enter'.green} para continuar`
        }
    ]
    console.log('\n');
    await inquirer.default.prompt(question);
}


const leerInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }
    ];


    const { desc } = await inquirer.default.prompt(question);
    return desc;
}


module.exports = {
    menu,
    pausa,
    leerInput
};