// Banco de Magias - Clérigo D&D 5e
const CLERIC_SPELLS = [
  // TRUQUES (Cantrips)
  {
    nome: "Guidance",
    nivel: 0,
    concentracao: true,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Toque uma criatura. Uma vez antes do fim do efeito, ela pode rolar 1d4 e adicionar ao teste de atributo à sua escolha.",
    tags: ["buff", "utilidade"]
  },
  {
    nome: "Sacred Flame",
    nivel: 0,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Chamas sagradas descem sobre uma criatura. A criatura deve ter sucesso em um TR de Destreza ou sofre 1d8 de dano radiante.",
    tags: ["dano"]
  },
  {
    nome: "Light",
    nivel: 0,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Você toca um objeto que não seja maior que 3 metros. Até a magia acabar, o objeto emite luz plena num raio de 6 metros.",
    tags: ["utilidade"]
  },
  {
    nome: "Spare the Dying",
    nivel: 0,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Você toca uma criatura viva que esteja com 0 pontos de vida. A criatura se torna estável.",
    tags: ["cura", "utilidade"]
  },
  {
    nome: "Thaumaturgy",
    nivel: 0,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Você manifesta um pequeno prodígio, um sinal de poder sobrenatural. Voz ampliada, chamas tremeluzem, tremores leves, etc.",
    tags: ["utilidade"]
  },

  // NÍVEL 1
  {
    nome: "Fogo das Fadas",
    nivel: 1,
    concentracao: true,
    ritual: false,
    dominio: true,
    nivelMinimo: 1,
    descricao: "Cada objeto em um cubo de 6m emite luz azul, verde ou violeta. Criaturas na área são delineadas se falharem em Destreza.",
    tags: ["utilidade", "controle"]
  },
  {
    nome: "Sono",
    nivel: 1,
    concentracao: false,
    ritual: false,
    dominio: true,
    nivelMinimo: 1,
    descricao: "Faz criaturas adormecerem em ordem ascendente de PV atual. Até 5d8 PV de criaturas caem inconscientes.",
    tags: ["controle"]
  },
  {
    nome: "Raio Lunar",
    nivel: 2,
    concentracao: true,
    ritual: false,
    dominio: true,
    nivelMinimo: 3,
    descricao: "Um feixe prateado causa 2d10 radiante (TR Constituição para metade). Você pode mover a área em turnos posteriores.",
    tags: ["dano", "controle"]
  },
  {
    nome: "Ver o Invisível",
    nivel: 2,
    concentracao: false,
    ritual: false,
    dominio: true,
    nivelMinimo: 3,
    descricao: "Você vê criaturas e objetos invisíveis e o Plano Etéreo por até 1 hora.",
    tags: ["utilidade"]
  },
  {
    nome: "Bless",
    nivel: 1,
    concentracao: true,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Até 3 criaturas ganham 1d4 em rolagens de ataque e testes de resistência enquanto a magia durar.",
    tags: ["buff"]
  },
  {
    nome: "Bane",
    nivel: 1,
    concentracao: true,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Até 3 criaturas devem subtrair 1d4 de suas rolagens de ataque e testes de resistência enquanto a magia durar.",
    tags: ["controle"]
  },
  {
    nome: "Healing Word",
    nivel: 1,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Uma criatura à sua escolha que você possa ver recupera 1d4 + seu modificador de Sabedoria em PV. Ação bônus.",
    tags: ["cura"]
  },
  {
    nome: "Protection from Evil and Good",
    nivel: 1,
    concentracao: true,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Uma criatura está protegida contra aberrações, celestiais, corruptores, elementais, fadas e mortos-vivos. Desvantagem em ataques contra ela.",
    tags: ["buff"]
  },
  {
    nome: "Shield of Faith",
    nivel: 1,
    concentracao: true,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Um campo cintilante aparece e envolve uma criatura à sua escolha, concedendo +2 de bônus na CA.",
    tags: ["buff"]
  },
  {
    nome: "Detect Magic",
    nivel: 1,
    concentracao: true,
    ritual: true,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Você sente a presença de magia em um raio de 9 metros e pode usar sua ação para ver uma aura ao redor de criaturas ou objetos.",
    tags: ["utilidade"]
  },
  {
    nome: "Cure Wounds",
    nivel: 1,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Uma criatura que você tocar recupera 1d8 + seu modificador de Sabedoria em PV.",
    tags: ["cura"]
  },
  {
    nome: "Guiding Bolt",
    nivel: 1,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Faça um ataque mágico à distância. Acerto: 4d6 de dano radiante e o próximo ataque contra o alvo tem vantagem.",
    tags: ["dano", "buff"]
  },
  {
    nome: "Sanctuary",
    nivel: 1,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Você protege uma criatura. Qualquer criatura que tente atacá-la deve fazer um TR de Sabedoria ou escolher um novo alvo.",
    tags: ["buff", "controle"]
  },
  {
    nome: "Command",
    nivel: 1,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 1,
    descricao: "Você dá uma ordem de uma palavra a uma criatura. Ela deve obedecer no próximo turno se falhar em Sabedoria.",
    tags: ["controle"]
  },

  // NÍVEL 2
  {
    nome: "Spiritual Weapon",
    nivel: 2,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 3,
    descricao: "Você cria uma arma espectral flutuante. Ação bônus para mover e atacar. 1d8 + modificador de Sabedoria de dano de força.",
    tags: ["dano"]
  },
  {
    nome: "Aid",
    nivel: 2,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 3,
    descricao: "Até 3 criaturas aumentam seu máximo de PV e PV atuais em 5 por 8 horas.",
    tags: ["buff", "cura"]
  },
  {
    nome: "Prayer of Healing",
    nivel: 2,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 3,
    descricao: "Até 6 criaturas recuperam 2d8 + seu modificador de Sabedoria em PV. Requer 10 minutos para conjurar.",
    tags: ["cura"]
  },
  {
    nome: "Lesser Restoration",
    nivel: 2,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 3,
    descricao: "Você toca uma criatura e encerra uma doença ou condição (cego, surdo, paralisado ou envenenado).",
    tags: ["cura", "utilidade"]
  },
  {
    nome: "Hold Person",
    nivel: 2,
    concentracao: true,
    ritual: false,
    dominio: false,
    nivelMinimo: 3,
    descricao: "Escolha um humanoide que você possa ver. Ele deve ter sucesso em TR de Sabedoria ou fica paralisado.",
    tags: ["controle"]
  },
  {
    nome: "Silence",
    nivel: 2,
    concentracao: true,
    ritual: true,
    dominio: false,
    nivelMinimo: 3,
    descricao: "Nenhum som pode ser criado em uma esfera de 6 metros. Criaturas dentro estão imunes a dano trovejante.",
    tags: ["controle", "utilidade"]
  },

  // NÍVEL 3
  {
    nome: "Spirit Guardians",
    nivel: 3,
    concentracao: true,
    ritual: false,
    dominio: false,
    nivelMinimo: 5,
    descricao: "Espíritos protetores cercam você. Inimigos em 4,5m têm movimento pela metade e sofrem 3d8 de dano (TR Sabedoria para metade).",
    tags: ["dano", "controle"]
  },
  {
    nome: "Revivify",
    nivel: 3,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 5,
    descricao: "Você toca uma criatura que morreu no último minuto. Ela retorna à vida com 1 PV. Requer diamantes de 300 PO.",
    tags: ["cura"]
  },
  {
    nome: "Mass Healing Word",
    nivel: 3,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 5,
    descricao: "Até 6 criaturas recuperam 1d4 + seu modificador de Sabedoria em PV. Ação bônus.",
    tags: ["cura"]
  },
  {
    nome: "Dispel Magic",
    nivel: 3,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 5,
    descricao: "Escolha uma criatura, objeto ou efeito mágico. Qualquer magia de 3° nível ou inferior é encerrada.",
    tags: ["utilidade"]
  },
  {
    nome: "Beacon of Hope",
    nivel: 3,
    concentracao: true,
    ritual: false,
    dominio: false,
    nivelMinimo: 5,
    descricao: "Criaturas escolhidas têm vantagem em TR de Sabedoria e testes contra morte, e curas maximizadas.",
    tags: ["buff", "cura"]
  },
  {
    nome: "Aura de Vitalidade",
    nivel: 3,
    concentracao: true,
    ritual: false,
    dominio: true,
    nivelMinimo: 5,
    descricao: "Você ou uma criatura a 9m recupera 2d6 PV como ação bônus. Dura 1 minuto.",
    tags: ["cura", "buff"]
  },

  {
    nome: "Pequena Cabana de Leomund",
    nivel: 3,
    concentracao: false,
    ritual: true,
    dominio: true,
    nivelMinimo: 5,
    descricao: "Cria uma cúpula imóvel que protege você e aliados por até 8 horas.",
    tags: ["utilidade"]
  },

  // NÍVEL 4
  {
    nome: "Death Ward",
    nivel: 4,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 7,
    descricao: "Você toca uma criatura. Na primeira vez que ela cair para 0 PV, ela cai para 1 PV.",
    tags: ["buff"]
  },
  {
    nome: "Guardian of Faith",
    nivel: 4,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 7,
    descricao: "Um guardião espectral aparece. Inimigos a 3m fazem TR de Destreza ou sofrem 20 de dano radiante.",
    tags: ["dano", "controle"]
  },
  {
    nome: "Freedom of Movement",
    nivel: 4,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 7,
    descricao: "O movimento da criatura tocada não pode ser reduzido ou impedido por terreno ou magia.",
    tags: ["buff", "utilidade"]
  },
  {
    nome: "Banishment",
    nivel: 4,
    concentracao: true,
    ritual: false,
    dominio: false,
    nivelMinimo: 7,
    descricao: "Você tenta enviar uma criatura para outro plano. TR de Carisma ou a criatura é banida.",
    tags: ["controle"]
  },

  {
    nome: "Aura de Devoção",
    nivel: 4,
    concentracao: true,
    ritual: false,
    dominio: true,
    nivelMinimo: 7,
    descricao: "Aura que protege e fortalece aliados próximos.",
    tags: ["buff"]
  },
  {
    nome: "Invisibilidade Maior",
    nivel: 4,
    concentracao: true,
    ritual: false,
    dominio: true,
    nivelMinimo: 7,
    descricao: "Uma criatura fica invisível mesmo quando ataca ou conjura magias.",
    tags: ["utilidade", "controle"]
  },

  // NÍVEL 5
  {
    nome: "Mass Cure Wounds",
    nivel: 5,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 9,
    descricao: "Até 6 criaturas recuperam 3d8 + seu modificador de Sabedoria em PV.",
    tags: ["cura"]
  },
  {
    nome: "Raise Dead",
    nivel: 5,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 9,
    descricao: "Você retorna uma criatura morta há no máximo 10 dias à vida com 1 PV. Requer diamantes de 500 PO.",
    tags: ["cura"]
  },
  {
    nome: "Greater Restoration",
    nivel: 5,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 9,
    descricao: "Você remove redução de atributos, níveis de exaustão, petrificação, ou encanta/amaldiçoa um item.",
    tags: ["cura", "utilidade"]
  },
  {
    nome: "Flame Strike",
    nivel: 5,
    concentracao: false,
    ritual: false,
    dominio: false,
    nivelMinimo: 9,
    descricao: "Uma coluna vertical de fogo divino desce. Criaturas na área fazem TR de Destreza ou sofrem 4d6 de fogo + 4d6 radiante.",
    tags: ["dano"]
  },
  {
    nome: "Círculo do Poder",
    nivel: 5,
    concentracao: true,
    ritual: false,
    dominio: true,
    nivelMinimo: 9,
    descricao: "Aliados na área têm vantagem em TR contra magias e efeitos; reduz impacto em sucesso.",
    tags: ["buff", "controle"]
  },
  {
    nome: "Despistar",
    nivel: 5,
    concentracao: true,
    ritual: false,
    dominio: true,
    nivelMinimo: 9,
    descricao: "Cria um duplo ilusório enquanto você fica invisível; pode trocar percepção com o duplo.",
    tags: ["utilidade", "controle"]
  }
];

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLERIC_SPELLS;
}
