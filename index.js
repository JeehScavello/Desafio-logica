console.log("Esse é um mundo cheio de aventuras, escolha o nome do grupo antes de iniciar a batalha!")

let nickname = "Força Bruta"
console.log("Sejam bem-vindos bravos aventureiros da " + nickname + "! Que seus músculos sejam tão fortes quanto suas vontades e que juntos enfrentem os desafios que os aguardam com coragem e determinação!")


// Variável para armazenar os participantes e suas xp's
let participantes = [
    { nome: 'Hera', xp: 8000 },
    { nome: 'Falcão', xp: 3000 },
    { nome: 'Dex', xp: 1500 },
    { nome: 'Predador', xp: 6000 },
    { nome: 'Dean', xp: 9500 },
    { nome: 'ElMago', xp: 11000 },
    { nome: 'LordSupreme', xp: 500 },
    { nome: 'Thor', xp: 7500 }
];

// Laço de repetição para percorrer cada participante
for (let participante of participantes) {
    let nivel;

// Estrutura de decisão para determinar o nível com base na XP

    if (participante.xp < 1000) {
        nivel = 'Ferro';
    } else if (participante.xp >= 1001 && participante.xp <= 2000) {
        nivel = 'Bronze';
    } else if (participante.xp >= 2001 && participante.xp <= 5000) {
        nivel = 'Prata';
    } else if (participante.xp >= 5001 && participante.xp <= 7000) {
        nivel = 'Ouro';
    } else if (participante.xp >= 7001 && participante.xp <= 8000) {
        nivel = 'Platina';
    } else if (participante.xp >= 8001 && participante.xp <= 9000) {
        nivel = 'Ascendente';
    } else if (participante.xp >= 9001 && participante.xp <= 10000) {
        nivel = 'Imortal';
    } else {
        nivel = 'Radiante';
    }

// Exibir mensagem com o nome e o nível do herói
    console.log(`O Herói ${participante.nome} está no nível de ${nivel}, com ${participante.xp} pontos de experiência`);
}

// Exibir mensagem antes da aventura.
console.log( "Que belo time! Preparados para aventura?")