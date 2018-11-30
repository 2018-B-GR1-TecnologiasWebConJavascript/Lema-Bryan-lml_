

declare const require: any;
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;

function inicializarBase() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                'data.json',
                'utf-8',
                (error, contenidoArchivo) => { // CALLBACK
                    if (error) {

                        fs.writeFile(
                            'data.json',
                            'vuelve a intentarlo',
                            (error) => {
                                if (error) {
                                    reject({
                                        mensaje: 'Error creando',
                                        error: 500
                                    })
                                } else {
                                    resolve({
                                        mensaje: 'BDD leida',
                                        bdd: JSON.parse('{"libros":[],"peticiones":[]}')
                                    })
                                }

                            }
                        )

                    } else {
                        let json = JSON.parse(contenidoArchivo)
                        console.log(json.abilities)
                        resolve({
                            mensaje: 'BDD leida',
                            bdd: JSON.parse(contenidoArchivo)
                        })
                    }

                }

            )
        }
    );
}

function main(){
    const respuestaBDD$ = rxjs.from(inicializarBase());
    /*respuestaBDD$.pipe(
        buscarTypes()
    )*/
}
main();
function buscarTypes(){
    return new Promise(
        (resolve, reject) => {
            fs.readFile('data.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.types
                            .filter(
                                (tipo) => {
                                    return ;
                                }
                            );

                        resolve(respuestaFind);
                    }

                });
        }
    );
}

interface RespuestaLeerBDD {
    mensaje: string;
    bdd?: BaseDeDatos;
    usuario?: Pokemon;
}

export interface BaseDeDatos {
    pokemon: Pokemon[];
}

interface Pokemon {
    types: string;
}
