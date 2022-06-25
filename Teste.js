let a = 'Certo'
let b = 'Errado'

Deno.test("Teste 1 (NO API)", () => {
    if (a != "Certo") {
        throw new Error(`${a} Não é certo`);
    }
})

Deno.test("Teste 2(NO API)", () => {
    if (b == "Errado") {
        throw new Error(`${a}  É Errado`);
    }
})
