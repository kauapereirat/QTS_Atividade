import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Cróvis José"); 
    assertStringIncludes(aluno, "Cróvis");    
})

Deno.test("Teste de array (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Davi", "Lais", "João"],
        "Opa! Algo deu errado!");
})