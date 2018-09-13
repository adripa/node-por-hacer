const argv = require("yargs")
    .command("crear", "crea una tarea por hacer", {
        descripcion: {
            demand: true,
            alias: "d",
            desc: "Descripción de la tarea por hacer"
        }
    })
    .command("borrar", "borra una tarea", {
        descripcion: {
            demand: true,
            alias: "d",
            desc: "Descripción de la tarea por hacer"
        }
    })
    .command("actualizar", "actualiza el estado completado de una tarea", {
        descripcion: {
            demand: true,
            alias: "d",
            desc: "Descripción de la tarea por hacer"
        },
        completado: {
            default: true,
            alias: "c",
            desc: "Marca como completado o pendiente la tarea"
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}