
const fs = require('fs')

const nombreDelArchivo = 'ejemplo.txt'
const contenidoArchivo = new Date();



fs.readFile(nombreDelArchivo, 'utf-8',
    (error, textoDelArchivoLeido) => {

        if(error){
            try{
                throw new Error(error);
            }catch(e){
                console.log(e);
            }
        }
        else{
            console.log(textoDelArchivoLeido)
            fs.writeFile(nombreDelArchivo,textoDelArchivoLeido + '\n'+contenidoArchivo,
                (err) => {
                    if(err) throw err;
                    console.log('Archivo Guardado')

                }

            )
        }
    }

);

