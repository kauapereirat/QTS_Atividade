let nome = 'Nelson Roger'
let nome2 = ['Ron', 'Bruno', 'Gustavo', 'Iago']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(nome, "Nelson"); 
    assertStringIncludes(nome, "Roger");    
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Bruno", "Lucas", "Mars"],
        "Opa! Algo deu errado!");
})