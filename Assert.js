import {
    assertExists,
    assertMatch,
    assertNotMatch,
    assertNotEquals
} from "http://deno.land/std/testing/asserts.ts"

let teste1 = ['Teste ','Teste 1'];
let teste2 = [2, 3];
let teste3 = 0;
Deno.test("Teste da definação da assert", () => {
    assertExists(teste1, "Variavel teste1 não encontrada");
    assertExists(teste2, "Variavel teste2 não encontrada");
    assertExists(teste3, "Variavel teste3 não encontrada");
  })

Deno.test("Teste de não existencia", () => {
    assertNotEquals(teste1, "Teste 1 concluído", "Erro: Erro encontrado no teste 1");
    assertNotEquals(teste2, 2, "Erro: Erro encontrado no teste 2");
    assertNotEquals(teste3, 'Teste 3 concluído', "Erro: Erro encontrado no teste 3");
  });

  const Url = new RegExp("^https?://[a-z.]+.com$");

Deno.test("Teste de verificação", () => {
    assertMatch("https://www.youtube.com", Url, "Erro encontrado na url");
    assertMatch("https://web.whatsapp.com", Url), "Erro encontrado na url";
  });

Deno.test("Teste de verificação(errado)", () => {
    assertNotMatch("https://www.twitch.tv/", Url, "Erro encontrado na url");
  });
