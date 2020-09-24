const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame (){
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener("click", () =>selectOption(option))
            optionButtonsElement.appendChild(button)


        }


    })

}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)

}

function selectOption(option){
    const nextTextNodeId = option.nextText

    if (nextTextNodeId <= 0) {
        return startGame()
    }

    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}

const textNodes = [
    {
        id: 1,
        text:"Você está numa mesa de canto da “Gato Moribundo”, uma taberna afastada do centro da cidade, famosa pela cerveja barata e por ser frequentada pelos piores tipos do reino. Depois de ter sido expulso da guarda real, é tudo pelo qual você pode pagar. A música é alta. As conversas animadas. De vez em quando algumas brigas florescem, mas são interrompidas pelo taberneiro, que parece ser respeitado. Mesmo distraído pelo efeito da bebida,  você percebe que um sujeito baixo vai ataca-lo. O que você faz?",
        options: [
            {
                text: "Aguarda para ver o resultado do ataque",
                nextText: 2,
            },
            {
                text: "Lança sua adaga contra o sujeito",
                nextText: 3,

            },
            {
                text: "Se levanta e o ameaça com sua espada",
                nextText: 4,
            },
        ]

    },

    {
        id:2,
        text: "O assassino é um profissional. Move-se pelas sombras produzidas pelo dançar das chamas das velas que iluminam o lugar. A baixa estatura parece favorecê-lo. Ele apunhala o taberneiro com um único golpe, pelas costas. Poucos percebem a expressão de dor. O fio da vida se desvanecendo. Quando cai morto, ninguém entende o que houve. O ladino se mistura ao tumulto e desaparece na noite.\n\n A música para. Há comoção. Uma mulher chora. Mas o serviço continua. Um grupo de mal encarados exige que a música volte. E assim acontece, a despeito do corpo estendido. Num canto escuro você nota uma inusitada dupla. Sob um capuz esfarrapado esconde-se um elfo. O outro, um anão, que estranhamente exibe um arco as costas. De vez em quando o elfo te olha, discretamente. Você...",
        options: [
            {
                text: "Se aproxima dos dois para tentar descobrir algo",
                nextText: 8,
            },
            {
                text: "Permanece em sua mesa, dando atenção exclusiva à sua cerveja.",
                nextText: 5,
            },



        ]
    },

    {

    id: 3,
    text: "Você é um grande guerreiro, não um sorrateiro ladino. Sua mira com a adaga é ruim e você acerta o taberneiro diretamente na jugular, que sangra até a morte. Todos na taberna se voltam contra você, que até abate alguns dos mais embriagados, mas logo é feito em pedaços pela multidão enfurecida. Uma morte violenta e desonrosa.",
    options: [
        {
        text: "Jogue novamente",
        nextText: -1,
        }
    ]

    },

    {
        id:4,
        text: "-- Covarde! - você grita, desembaiando sua espada curta e apontando para o assassino. - Porque não enfrenta alguém de frente, para variar?\n\n O sujeito te encara atônito, como quem vê um fantasma. Sua reação é lançar uma adaga contra você, que a rechaça facilmente em um movimento defensivo. Antes mesmo que todos voltem a atenção para cena você já venceu a distância que os separava. Quando todos percebem, a cabeça do ladino já está rolando pelo chão.\n\nUm silêncio incomodo toma conta do salão.Você retorna para sua mesa e volta a sorver de sua caneca, como se nada houvesse acontecido. O taberneiro parece em choque. De repente chacoalha a cabeça como que acordado de um transe.\n\n-- A próxima rodada é por conta da casa! Agradeçam ao cavalheiro ali! - brada com a euforia de que escapou da morte por muito pouco. Todos brindam em sua homenagem.\n\nAlgum tempo depois o taberneiro se aproxima, com mais uma caneca de cerveja.\n-- Por conta da casa. Sabe, fiz alguns inimigos no passado... Muito obrigado. Quero que fique com isso. Só pode ser usado mais uma única vez. Então sopre apenas em caso de extrema necessidade.\n\n Você recebeu o Chifre de Orgard. ",
        options: [
            {
                text: "Continue",
                setState: {chifreDeOrgard:true},
                nextText: 6,
            },
            



        ]
    },

    {
        id:5,
        text: "Você estica a noite de bebedeira e sai da taberna mais embriagado do que de costume. Seus reflexos estão diminuídos a ponto de não perceber a aproximação do inimigo que o golpeia com força no ombro. Um ataque mortal. Antes de partir você percebe pelas vestes do jovem que ele é um Cavaleiro da Luz, o braço armado da Igreja.",
        options: [
            {
                text: "Jogue Novamente",
                nextText: -1,
            },
            



        ]
    },

    {
        id:6,
        text: "Num canto escuro você nota uma inusitada dupla. Sob um capuz esfarrapado esconde-se um elfo. O outro, um anão, que estranhamente exibe um arco as costas. De vez em quando o elfo te olha, discretamente. Parece nervoso. Então os dois se levantam e vão até sua mesa. Perguntam se podem se sentar e você permite, desconfiado. O elfo toma a palavra:\n\n-- É um prazer conhecê-lo, Argard.\n\n Seus serviços na guarda real o tornaram razoavelmente conhecido, a ponto de não ser uma total supresa que alguém naquele bueiro o reconheça.\n\n-- Vá direto ao assunto, elfo. - você responde, abruptamente. - Oh, sim. Esse capuz não esconde suas orelhas pontudas. E essa sua carinha bonita é inconfundível. Você sabe que elfos são cada vez mais raros, não sabe? Um colecionador adoraria sua cabeça enfeitando uma parede.\n\nO anão ri. O elfo parece surpreso e ofendido.\n\n-- Certo. Certo. Meu nome é Zarthan e tenho uma proposta de trabalho para você. Coisa rara no seu caso, imagino. Ninguém quer contratar um desafeto do sacerdote Rasgtur. Conhece a história do Princípe Estrangeiro? Pois bem, acredito que seja mais do que uma lenda. Minhas pesquisas apontam que o ser que realiza desejos realmente exista. E são trẽs desejos, meu amigo. Três! Um para cada ser nesta mesa. Sei que você sonha em voltar para a Guarda Real e livrar seu amado rei da nefasta influência do sacerdote. Não há meios de conseguir isso sem magia, meu amigo.\n\n\ -- E você está com esse cara? - você pergunta para o anão. Pensei que anões odiassem elfos. Qual é o seu nome?\n\n\ -- Eu sou Goldof, A flecha das montanhas. Claro que não confio em elfos, mas esse aqui não pode me enganar!",
        options: [
            {
                text: "Continue",
                nextText: 7,
            },
            



        ]
    },

    {
        id:7,
        text: "Zarthan dobra a manga do manto e exibe um longo corte no antebraço. Você reconhece como um contrato de sangue.Um antigo feitiço que mata imediatamente quem descumprir com o acordo.\n\n-- Farei o mesmo contigo. Aparentemente a palavra não vale muito hoje em dia. Prometo que se encontrarmos o gênio, um dos pedidos será seu. Você promete me auxiliar até o fim desta jornada, fazendo o possível para que cheguemos todos vivos ao final. Vamos lá fora, selar o acordo.",
        options: [
            {
                text: "Você aceita o pacto de sangue",
                nextText: 9,
            },
            {
                text: "Você não aceita o trabalho",
                nextText: 5,
            },
            



        ]
    },

    {
        id:8    ,
        text: "Zarthan dobra a manga do manto e exibe um longo corte no antebraço. Você reconhece como um contrato de sangue.Um antigo feitiço que mata imediatamente quem descumprir com o acordo.\n\n-- Farei o mesmo contigo. Aparentemente a palavra não vale muito hoje em dia. Prometo que se encontrarmos o gênio, um dos pedidos será seu. Você promete me auxiliar até o fim desta jornada, fazendo o possível para que cheguemos todos vivos ao final. Vamos lá fora, selar o acordo.",
        options: [
            {
                text: "Você aceita o pacto de sangue",
                nextText: 9,
            },
            {
                text: "Você não aceita o trabalho",
                nextText: 5,
            },
            



        ]
    },

]

startGame();