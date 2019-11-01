export class Persona {
    private nombre:string
    private edad:number
    private NSS:string
    private sexo:string
    private peso:number
    private altura:number

    private readonly MAYORIA_DE_EDAD:number = 18
    private readonly SEXO_DEFAULT:string = "H"

    constructor(){
        this.nombre = "Un tipo"
        this.edad = 0
        this.NSS = ""
        this.sexo = "H"
        this.peso = 0
        this.altura = 0
    }

    public calcularIMC(){
        // Se declaran los valores
        let resultado:number
        let altura:number = this.altura
        let peso:number = this.peso
        const DECIMALES:number = 2
        
        // Se calcula el imc
        let imc:number = peso/Math.pow(altura/100, 2)

        // Se retorna el imc con 2 decimales
        switch(true) {
            case (imc < 20) : { resultado = -1; break }
            case (imc >= 25) : { resultado = 1; break }
            default : { resultado = 0; break }
        }

        return resultado
    }
    
    public esMayorDeEdad(){
        return this.edad > this.MAYORIA_DE_EDAD ? true : false
    }


    private comprobarSexo(){
        return this.sexo == this.SEXO_DEFAULT ? true : false
    }

    public toString(){
        return "Esta es toda la información del objeto"
    }

    private generarNSS(){
        let nss:string = ''
        let caracteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (var i = 8; i > 0; --i) {
            nss += caracteres[Math.floor(Math.random() * caracteres.length)]
        }
        
        return nss
    }


    
    // ===============  Seters ===============
    setNombre(nombre:string){
        this.nombre = nombre
    }

    setEdad(edad:number){
        this.edad = edad
    }

    setSexo(sexo:string){
        this.sexo = sexo
    }

    setPeso(peso:number){
        this.peso = peso
    }

    setAltura(altura:number){
        this.altura = altura
    }
}