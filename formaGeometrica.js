"use strict";
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        let area;
        area = this.altura * this.largura;
        console.log("Área do retângulo: " + area + " metros quadrados.");
        return area;
    }
    calcularPerimetro() {
        let perimetro;
        perimetro = (this.altura * 2) + (this.largura * 2);
        console.log("Perímetro do retângulo é: " + perimetro + " metros");
        return perimetro;
    }
}
class Triangulo {
    constructor(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    calcularArea() {
        let altura1;
        let altura2;
        let altura3;
        let area;
        altura1 = (this.ladoC / 2);
        altura2 = (this.ladoB * this.ladoB) - (altura1 * altura1);
        altura3 = Math.sqrt(altura2);
        area = (this.ladoC * altura3) / 2;
        console.log("A área do triângulo é: " + area.toFixed(2) + " metros quadrados");
        return area;
    }
    calcularPerimetro() {
        let perimetro;
        perimetro = (this.ladoC + this.ladoB + this.ladoA);
        console.log("O perímetro do triângulo é: " + perimetro + " metros");
        return perimetro;
    }
}
class Circulo {
    constructor(raio, pi) {
        this.raio = raio;
        this.pi = pi;
    }
    calcularArea() {
        let calculo;
        calculo = this.pi * (this.raio * this.raio);
        console.log("Área do círculo é: " + calculo.toFixed(2) + " metros quadrados");
        return calculo;
    }
    calcularPerimetro() {
        let calculo;
        calculo = 2 * (this.pi * this.raio);
        console.log("Perímetro do círculo é: " + calculo + " metros");
        return calculo;
    }
}
const retangulo = new Retangulo(12, 20);
retangulo.calcularArea();
retangulo.calcularPerimetro();
const triangulo = new Triangulo(12.5, 12.5, 20);
triangulo.calcularArea();
triangulo.calcularPerimetro();
const circulo = new Circulo(4, 3.14);
circulo.calcularArea();
circulo.calcularPerimetro();
