interface FormaGeometrica{
    calcularArea(): number;
    calcularPerimetro(): number;
}
   

class Retangulo implements FormaGeometrica{
    largura: number;
    altura: number; 

    constructor(largura: number, altura: number){
        this.largura = largura;
        this.altura = altura
    }

    calcularArea(): number {
        let area; 
        area = this.altura * this.largura 
        console.log("Área do retângulo: " + area + " metros quadrados.");
        return area;
    }
    
    calcularPerimetro(): number {
        let perimetro;
        perimetro =  (this.altura * 2) + (this.largura * 2);
        console.log("Perímetro do retângulo é: " + perimetro + " metros");
        return perimetro
        
    }    
}

class Triangulo implements FormaGeometrica{
    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor(ladoA: number, ladoB: number,  ladoC: number){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    calcularArea(): number {
        let altura1;
        let altura2;
        let altura3;
        let area;
        altura1 = (this.ladoC/ 2);
        altura2 = (this.ladoB * this.ladoB) - (altura1 * altura1) ;
        altura3 = Math.sqrt(altura2)
        area = (this.ladoC * altura3)/2;
        console.log("A área do triângulo é: " + area.toFixed(2) + " metros quadrados");
        return area
    }

    calcularPerimetro(): number {
        let perimetro;
        perimetro = (this.ladoC + this.ladoB + this.ladoA)
        console.log("O perímetro do triângulo é: " + perimetro + " metros");
        return perimetro
    }
}

class Circulo implements FormaGeometrica{
    raio: number;
    pi: number;

    constructor(raio: number, pi: number){
        this.raio = raio;
        this.pi = pi;
    }

    calcularArea(): number {
       let calculo;
       calculo = this.pi *(this.raio * this.raio);
       console.log("Área do círculo é: " + calculo.toFixed(2) + " metros quadrados")
       return calculo
    }

    calcularPerimetro(): number {
        let calculo;
        calculo = 2 *(this.pi * this.raio)
        console.log("Perímetro do círculo é: " + calculo + " metros")
        return calculo
    }
}


const retangulo = new Retangulo(12, 20);
retangulo.calcularArea();
retangulo.calcularPerimetro();

const triangulo =  new Triangulo(12.5, 12.5, 20);
triangulo.calcularArea();
triangulo.calcularPerimetro();

const circulo = new Circulo(4, 3.14);
circulo.calcularArea();
circulo.calcularPerimetro();


