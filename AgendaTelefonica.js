//Class AgendaTelefonica

//Apresentar um menu com as seguintes funcionalidades:
//1. Criar contato:
//   - Contato: nome e número;
//   - Certifique-se que não existe outro contato com o mesmo nome ou número;
//2. Pesquisar contato:
//   - Pesquisa por nome ou parte do nome. Por exemplo, ao digitar "an", retornar "Antonio", "Ana" e "Luana";
//3. Listar contatos (em ordem alfabética);
//4. Remover contato:
//   - Remova buscando por nome ou índice no array.

class AgendaTelefonica {
  constructor (nome, numero) {
    this.nome = nome;
    this.numero = numero;
  }
}

function continuarExecutando() {
  let resposta = prompt("Deseja continuar? (s/n)");
  
  if (resposta == "n") {
    return false;
  }
  return true;
}

function ordemAlfabetica(x) {
  x.sort((a, b) => a.nome.localeCompare(b.nome));
  return x;
}

let executando = true;
let encontrado = false;
let contatos = [
  { nome: "Ana", numero: 12345678910 },
  { nome: "Jhennifer", numero: 12345678912 },
  { nome: "Luana", numero: 12345678914 }, 
  { nome: "Jonathan", numero: 12345678913 },
  { nome:"Antonio", numero: 12345678911 }
];

while(executando) {
  console.clear();
  
  console.log(`======= MENU =======
1. Adicionar contato
2. Pesquisar contato
3. Listar contatos
4. Remover contato`);

  let opc = Number(prompt("\nDigite a opção desejada"));

  switch(opc) {
    case 1:
      console.log(`\n> Adicionar contato:`);

      let nome = prompt("Digite o nome do contato");
      let numero = prompt("Digite o número do contato (DDD+XXXXXXXXX)");

      if (numero.length < 11 || numero.length > 11) {
        console.log("\nInválido. O número deve conter 11 dígitos.\n");
      } else {
        let ctt = new AgendaTelefonica(nome, numero);
        let cts = contatos.filter(p => p.nome == nome);
        let nmr = contatos.filter(no => no.numero == numero);

        if (cts.length == 1 && nmr.length == 1) {
          console.log(`\nEsse contato já está na lista.`);
        } else if (cts.length == 1) {
          console.log(`\nJá existe um contato com esse nome.`);
        } else if (nmr.length == 1) {
          console.log(`\nJá existe um contato com esse número.`);
        } else {
          contatos.push(ctt);
          console.log(`\nContato "${nome}" adicionado!`);
        }
      }

      console.log('');
      executando = continuarExecutando();
      break;

    case 2:
      console.log(`\n> Pesquisar contato:`);

      let contatoBusca = prompt("Digite o nome do contato").toLowerCase();
      console.log('');

      ordemAlfabetica(contatos);

      for (let i in contatos) {
        if (contatos[i].nome.toLowerCase().includes(contatoBusca)) {
          console.log(`Nome: ${contatos[i].nome} - Número: ${contatos[i].numero}`);
          encontrado = true;
        }
      }
      
      if (!encontrado) {
        console.log(`Nenhum contato foi encontrado.`);
      }

      console.log('');
      executando = continuarExecutando();
      break;

    case 3:
      console.log(`\n> Lista de contatos:\n`);

      ordemAlfabetica(contatos);

      if (contatos.length > 0) {
        for (let c of contatos) {
          console.log(`Nome: ${c.nome} - Número: ${c.numero}`);
        }
        console.log('');
      } else {
        console.log(`Não há contato(s) registrado(s).\n`);
      }

      executando = continuarExecutando();
      break;

    case 4:
      console.log(`\n> Remover contato\n\nContatos:\n`);

      ordemAlfabetica(contatos);

      if (contatos.length > 0) {
        for (let c of contatos) {
          console.log(`Nome: ${c.nome} - Número: ${c.numero}`);
        }
        console.log('');

        let removeCtt = prompt("Digite o nome do contato que deseja remover");

        for (let i in contatos) {
          if (removeCtt.toLowerCase() == contatos[i].nome.toLowerCase()) {
            contatos.splice(i, 1);
            console.log(`\nContato "${removeCtt}" removido.\n`);
            encontrado = true;
            break;
          }
        }

        if (!encontrado) {
          console.log(`\nContato "${removeCtt}" não foi encontrado.\n`);
        }
      } else {
        console.log(`Não há contato(s) registrado(s).\n`);
      }

      executando = continuarExecutando();
      break;
  }
}
