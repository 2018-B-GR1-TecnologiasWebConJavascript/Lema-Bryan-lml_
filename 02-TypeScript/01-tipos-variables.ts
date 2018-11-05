// 01 - variables.ts
let edad: number|string = 23 ;
edad = 25;
edad = 'Bryan'
let nombre: string = 'Bryan';
let casado: boolean = true;
let bryan: {/*Interface*/nombre:string;} = {
    /*JSON*/nombre: 'Bryan'
}
console.log(bryan)
let numeros: number[] = [1,2,3,4]

function saludar(
    nombre: string,
    apellido?: string,
    ...otrosNombres: string[]):string {
    return 'string';

}
saludar('Bryan');