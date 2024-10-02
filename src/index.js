import { q01 } from "./questions/q01.js";
import { pertenceFibonacci } from "./questions/q02.js";
import { faturamento } from "./questions/q03.js";
import { faturamentoMensal } from "./questions/q04.js";
import { inverterString } from "./questions/q05.js";

console.log("Questão 01:");
q01();

console.log("Questão 02:");
console.log(pertenceFibonacci(21));

console.log("Questão 03:");
faturamento();
console.log();

console.log("Questão 04:");
faturamentoMensal();
console.log();

console.log("Questão 05:");
inverterString("Hello World!");
console.log();
