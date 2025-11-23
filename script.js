const state = {
  name: '',
  party: [],
  tools: [],
  badges: 0,
  location: 'Pallet Lab',
  currentNode: 'intro',
  badgeNodes: new Set()
};

const trainers = [
  { name: 'Ash Ketchum', note: 'Relentless optimist who turns impossible fights into comeback wins. Bold instincts, tighter bonds.' },
  { name: 'Misty', note: 'Cerulean Gym Leader of Water types. Fast, strategic, and allergic to nonsense.' },
  { name: 'Brock', note: 'Pewter Gym Leader. Rock specialist who plays the long game and reads opponents.' },
  { name: 'Giovanni', note: 'Team Rocket boss. Precision Ground strikes and ruthless power spikes.' },
  { name: 'Red', note: 'Silent prodigy whose tactical perfection sets the gold standard.' },
  { name: 'Blue (Gary)', note: 'Genius rival exploiting weaknesses with constant switches.' },
  { name: 'Cynthia', note: 'Sinnoh Champion with synergy so tight Garchomp alone forces retreats.' },
  { name: 'Steven Stone', note: 'Hoenn Champion turned collector. Steel walls soften foes before the counter.' },
  { name: 'Lance', note: 'Dragon master. Storm-level offense that keeps building.' },
  { name: 'Leon', note: 'Galar Champion. Flashy reads, Charizard spectacle, zero hesitation.' }
];

const gyms = [
  { name: 'Pewter City Gym', note: 'Rugged rock arena testing defense, patience, and stamina.' },
  { name: 'Cerulean City Gym', note: 'Aquatic pools rewarding speed and timing.' },
  { name: 'Vermilion City Gym', note: 'Strict Electric discipline and high-voltage offense.' },
  { name: 'Celadon City Gym', note: 'Greenhouse labyrinth where Grass tactics and status rule.' },
  { name: 'Fuchsia City Gym', note: 'Ninja-style Poison puzzles that punish reckless moves.' },
  { name: 'Saffron City Gym', note: 'Teleporting Psychic dojo built on mind games.' },
  { name: 'Cinnabar Island Gym', note: 'Volcanic Fire lab favoring fast, unforgiving battles.' },
  { name: 'Violet City Gym', note: 'Towering Flying arena testing balance and precision.' },
  { name: 'Mauville City Gym', note: 'Flashy Electric gadgets with puzzle-speed hybrids.' },
  { name: 'Snowpoint City Gym', note: 'Frozen slides and Ice attrition that slow challengers down.' }
];

const stadiums = [
  { name: 'Indigo Plateau Stadium', note: 'Elite Four flagship with terrain-shifting finals.' },
  { name: 'Wyndon Stadium', note: 'Galar sports arena with Dynamax towers and Champion Cup energy.' },
  { name: 'Lily of the Valley Conference Stadium', note: 'Sinnoh stage with rotating weather and cinematic ceremonies.' },
  { name: 'Saffron City Exhibition Dome', note: 'High-tech holographic terrain for experimental bouts.' },
  { name: 'Goldenrod Radio Colosseum', note: 'Broadcast battles and sound traps reacting to Pokémon cries.' },
  { name: 'Hearthome Contest Hall Stadium', note: 'Contest-lit arena where rhythm and flair boost strategies.' },
  { name: 'Mossdeep Space Arena', note: 'Zero-G practice and meteor showers change pacing.' },
  { name: 'Ever Grande Stadium', note: 'Hoenn’s final trial mixing sand, lava, and water floors.' },
  { name: 'Castelia Harbor Battle Pier', note: 'Wind-swept steel pier perfect for high-energy doubles.' },
  { name: 'Alola Royal Dome', note: 'Battle Royal spotlight where spectacle and strategy collide.' }
];

const tools = [
  { name: 'Exp Share', note: 'Shares experience to level evenly.' },
  { name: 'Lucky Egg', note: 'Boosts experience gain for faster climbs.' },
  { name: 'Soothe Bell', note: 'Raises friendship with calming chimes.' },
  { name: 'Everstone', note: 'Prevents evolution to preserve movesets.' },
  { name: 'Choice Band', note: 'Raises physical attack but locks the first move.' },
  { name: 'Wise Glasses', note: 'Boosts special attacks across the board.' },
  { name: 'Assault Vest', note: 'Raises special defense; attacks only.' },
  { name: 'Quick Claw', note: 'Sometimes lets the holder strike first.' },
  { name: 'Heat Rock', note: 'Extends sunny weather effects.' },
  { name: 'Leftovers', note: 'Reliable chip healing every turn.' }
];

const pokedex = [
  { name: 'Pikachu', note: 'Electric speedster with loyalty and surprise voltage.' },
  { name: 'Charizard', note: 'Fire/Flying ace built for intense clashes.' },
  { name: 'Bulbasaur', note: 'Grass/Poison tactician with vines and recovery.' },
  { name: 'Squirtle', note: 'Water specialist with precise jets.' },
  { name: 'Gengar', note: 'Ghost/Poison prankster moving through shadows.' },
  { name: 'Lucario', note: 'Fighting/Steel aura striker with discipline.' },
  { name: 'Eevee', note: 'Adaptable Normal partner ready for many paths.' },
  { name: 'Snorlax', note: 'Normal titan with endless endurance.' },
  { name: 'Gyarados', note: 'Water/Flying powerhouse born from grit.' },
  { name: 'Jigglypuff', note: 'Lullaby singer with mischievous flair.' },
  { name: 'Mewtwo', note: 'Engineered Psychic with unmatched power.' },
  { name: 'Alakazam', note: 'Psychic intellect bending spoons and minds.' },
  { name: 'Arcanine', note: 'Legendary-grade Fire loyalty and speed.' },
  { name: 'Gardevoir', note: 'Psychic/Fairy guardian fighting with grace.' },
  { name: 'Machamp', note: 'Fighting bruiser with relentless punches.' },
  { name: 'Lapras', note: 'Gentle Water/Ice ferry hiding strength.' },
  { name: 'Umbreon', note: 'Dark stalker thriving on patience and trust.' },
  { name: 'Scizor', note: 'Bug/Steel cutter blending speed and force.' },
  { name: 'Salamence', note: 'Dragon/Flying juggernaut fueled by flight dreams.' },
  { name: 'Greninja', note: 'Water/Dark ninja wielding blade-like torrents.' }
];

const story = {
  intro: {
    emoji: '👨‍🔬',
    text: 'Professor Pine welcomes you to a world alive with adventure. Before you step outside, what should we call you?',
    location: 'Pallet Lab',
    choices: [],
    input: {
      placeholder: 'Enter your trainer name',
      action: (value) => {
        if (!value.trim()) return;
        state.name = value.trim();
        showToast(`Welcome, ${state.name}!`);
        renderNode('starter');
      }
    }
  },
  starter: {
    emoji: '🎁',
    text: 'Choose your first partner. Each one changes the early path of your journey.',
    location: 'Pallet Lab',
    choices: [
      { title: 'Bulbasaur', emoji: '🍃', hint: 'Grass/Poison tactician', action: () => addMon('Bulbasaur', 'Grass/Poison', '🍃'), next: 'fork' },
      { title: 'Charmander', emoji: '🔥', hint: 'Fire/Flying potential', action: () => addMon('Charmander', 'Fire', '🔥'), next: 'fork' },
      { title: 'Squirtle', emoji: '💧', hint: 'Water defender', action: () => addMon('Squirtle', 'Water', '💧'), next: 'fork' },
    ]
  },
  fork: {
    emoji: '🧭',
    text: 'Outside the lab, two routes beckon. One echoes with waterfalls, the other with crumbling stone.',
    location: 'Route 1',
    choices: [
      { title: 'Head toward Cerulean currents', emoji: '🌊', hint: 'Water trials and Misty intel', next: 'cerulean' },
      { title: 'Climb the Pewter ridges', emoji: '⛰️', hint: 'Rock trials and Brock insights', next: 'pewter' }
    ]
  },
  cerulean: {
    emoji: '🌊',
    text: 'You reach Cerulean Gym. Platforms shift above clear pools as Misty watches with folded arms.',
    location: 'Cerulean City Gym',
    choices: [
      {
        title: 'Challenge Misty',
        emoji: '⚔️',
        hint: 'Speed matters. Grass or Electric excels.',
        next: () => state.party.some(p => p.type.includes('Grass')) ? 'cerulean-win' : 'cerulean-learn'
      },
      { title: 'Scout the arena', emoji: '🔍', hint: 'Study currents to plan better.', next: 'cerulean-scout' }
    ]
  },
  'cerulean-scout': {
    emoji: '📓',
    text: 'You map the current patterns and spot a Lucky Egg prize for clever challengers.',
    location: 'Cerulean City Gym',
    choices: [
      { title: 'Grab the Lucky Egg', emoji: '🥚', action: () => addTool('Lucky Egg'), hint: 'Boosts experience.', next: 'cerulean' }
    ]
  },
  'cerulean-win': {
    emoji: '🏅',
    text: 'Super effective strikes! Misty smirks, admits respect, and hands you the Cascade Badge.',
    location: 'Cerulean City Gym',
    choices: [
      { title: 'Continue toward Indigo Plateau rumors', emoji: '🗺️', next: 'indigo' }
    ],
    badge: true
  },
  'cerulean-learn': {
    emoji: '💡',
    text: 'The battle is close, but speed overwhelms you. Misty points out gaps and recommends training with Steven Stone.',
    location: 'Cerulean City',
    choices: [
      { title: 'Train with Steven', emoji: '⛏️', next: 'steven' },
      { title: 'Retry the challenge', emoji: '🔁', next: 'cerulean' }
    ]
  },
  pewter: {
    emoji: '⛰️',
    text: 'Brock greets you in a rugged arena surrounded by stone pillars. He reads you like a field guide.',
    location: 'Pewter City Gym',
    choices: [
      {
        title: 'Use a Water or Grass edge',
        emoji: '💪',
        hint: 'Type advantage cracks defenses.',
        next: () => state.party.some(p => ['Water', 'Grass', 'Grass/Poison'].some(type => p.type.includes(type))) ? 'pewter-win' : 'pewter-hold'
      },
      { title: 'Ask for training tips', emoji: '📚', next: 'pewter-tips' }
    ]
  },
  'pewter-tips': {
    emoji: '🧠',
    text: 'Brock shares Leftovers to teach sustain and mentions Giovanni stirring at Saffron exhibitions.',
    location: 'Pewter City Gym',
    choices: [
      { title: 'Take the Leftovers', emoji: '🍱', action: () => addTool('Leftovers'), next: 'pewter' }
    ]
  },
  'pewter-win': {
    emoji: '🥇',
    text: 'Onix crumbles under smart pressure. Brock awards the Boulder Badge and notes you battle with heart.',
    location: 'Pewter City Gym',
    choices: [
      { title: 'Journey to Vermilion sparks', emoji: '⚡', next: 'vermillion' }
    ],
    badge: true
  },
  'pewter-hold': {
    emoji: '🛡️',
    text: 'Without an edge, you barely chip the stone walls. Brock suggests visiting Cerulean currents first.',
    location: 'Pewter City Gym',
    choices: [
      { title: 'Head to Cerulean', emoji: '🌊', next: 'cerulean' },
      { title: 'Train in the woods', emoji: '🌲', next: 'woods' }
    ]
  },
  woods: {
    emoji: '🌲',
    text: 'In the Whispering Woods, a Caterpie wiggles toward you, and a Quick Claw gleams on a branch.',
    location: 'Whispering Woods',
    choices: [
      { title: 'Catch Caterpie', emoji: '🔴', action: () => addMon('Caterpie', 'Bug', '🐛'), next: 'fork' },
      { title: 'Snag the Quick Claw', emoji: '🦴', action: () => addTool('Quick Claw'), next: 'fork' }
    ]
  },
  steven: {
    emoji: '🛠️',
    text: 'Steven Stone meets you near Meteor Falls training grounds. He offers a Wise Glasses set for sharper reads.',
    location: 'Meteor Falls Camp',
    choices: [
      { title: 'Accept Wise Glasses', emoji: '👓', action: () => addTool('Wise Glasses'), next: 'cerulean' }
    ]
  },
  indigo: {
    emoji: '🏟️',
    text: 'Stories of Indigo Plateau finals surface. Cynthia and Lance are rumored to scout talent in Saffron City.',
    location: 'Route to Indigo Plateau',
    choices: [
      { title: 'Visit Saffron Exhibition Dome', emoji: '🌀', next: 'saffron' },
      { title: 'Head for Ever Grande detour', emoji: '🌋', next: 'ever-grande' }
    ]
  },
  saffron: {
    emoji: '🔮',
    text: 'The Exhibition Dome pulses with psychic panels. Giovanni is seen negotiating broadcast slots with Goldenrod executives.',
    location: 'Saffron Exhibition Dome',
    choices: [
      { title: 'Challenge a Saffron telekinetic puzzle', emoji: '🧩', next: 'saffron-puzzle' },
      { title: 'Eavesdrop on Giovanni', emoji: '👂', next: 'giovanni' }
    ]
  },
  'saffron-puzzle': {
    emoji: '🧠',
    text: 'You solve the teleports, earning a Soothe Bell for calm focus.',
    location: 'Saffron Exhibition Dome',
    choices: [
      { title: 'Take the Soothe Bell', emoji: '🔔', action: () => addTool('Soothe Bell'), next: 'saffron' }
    ]
  },
  giovanni: {
    emoji: '🦂',
    text: 'Giovanni notices you. "Ambition is useful," he says, offering a Choice Band with a warning: commitment cuts both ways.',
    location: 'Saffron Exhibition Dome',
    choices: [
      { title: 'Accept the Choice Band', emoji: '🪢', action: () => addTool('Choice Band'), next: 'finale' },
      { title: 'Refuse and focus on growth', emoji: '🌱', next: 'finale' }
    ]
  },
  'ever-grande': {
    emoji: '🌊',
    text: 'Ever Grande Stadium roars with distant water and lava trials. You spar briefly and pick up an Exp Share for your team.',
    location: 'Ever Grande Stadium',
    choices: [
      { title: 'Equip Exp Share', emoji: '📈', action: () => addTool('Exp Share'), next: 'finale' }
    ]
  },
  vermillion: {
    emoji: '⚡',
    text: 'The Vermilion Gym crackles with Electric grids. A statue of Lt. Surge warns: speed and nerve only.',
    location: 'Vermilion City Gym',
    choices: [
      { title: 'Challenge the Electric squad', emoji: '⚔️', hint: 'Ground tools help, Quick Claw may save turns.', next: () => state.tools.includes('Quick Claw') ? 'vermillion-win' : 'vermillion-learn' },
      { title: 'Study the wiring for a shortcut', emoji: '🛠️', action: () => addTool('Assault Vest'), hint: 'Boost defense against special shocks.', next: 'vermillion' }
    ]
  },
  'vermillion-win': {
    emoji: '🏆',
    text: 'You read the currents and land decisive hits. The Thunder Badge gleams in your hand.',
    location: 'Vermilion City Gym',
    choices: [
      { title: 'Plan the Champion Circuit', emoji: '🗺️', next: 'finale' }
    ],
    badge: true
  },
  'vermillion-learn': {
    emoji: '⚡',
    text: 'Speed traps zap your timing. Lt. Surge respects the effort and points you to Mauville gadgets for practice.',
    location: 'Vermilion City Gym',
    choices: [
      { title: 'Train with Mauville tech', emoji: '🔌', next: 'mauville' },
      { title: 'Retry with new timing', emoji: '🔁', next: 'vermillion' }
    ]
  },
  mauville: {
    emoji: '🔧',
    text: 'Watts of neon hum in Mauville. You test puzzle panels and pocket a Heat Rock for future sun teams.',
    location: 'Mauville City Gym',
    choices: [
      { title: 'Pocket the Heat Rock', emoji: '☀️', action: () => addTool('Heat Rock'), next: 'vermillion' }
    ]
  },
  finale: {
    emoji: '✨',
    text: () => `With ${state.badges} badge${state.badges === 1 ? '' : 's'}, a bonded team, and a pack of tools, you stand ready for the Champion Circuit. Cynthia, Lance, and Leon await your entrance at Indigo Plateau.`,
    choices: [
      { title: 'Enter the Champion Circuit', emoji: '🏆', action: () => showToast('To be continued...'), next: 'intro' }
    ]
  }
};

const tabs = {
  trainers,
  gyms,
  stadiums,
  items: tools,
  pokemon: pokedex
};

const storyText = document.getElementById('story-text');
const storyChoices = document.getElementById('story-choices');
const storyImage = document.getElementById('story-image');
const inputSlot = document.getElementById('input-slot');
const trainerName = document.getElementById('trainer-name');
const partyEl = document.getElementById('party');
const toolEl = document.getElementById('tools');
const locationPill = document.getElementById('location-pill');
const badgePill = document.getElementById('badge-pill');
const toast = document.getElementById('toast');
const codex = document.getElementById('codex');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1600);
}

function addMon(name, type, emoji) {
  state.party.push({ name, type, emoji });
  showToast(`${name} joined the team!`);
  renderState();
}

function addTool(name) {
  if (state.tools.includes(name)) return;
  state.tools.push(name);
  showToast(`${name} acquired.`);
  renderState();
}

function updateBadges() {
  badgePill.textContent = `Badges: ${state.badges}`;
}

function renderParty() {
  partyEl.innerHTML = '';
  if (!state.party.length) {
    const div = document.createElement('div');
    div.className = 'chip';
    div.textContent = 'No partners yet';
    partyEl.appendChild(div);
    return;
  }
  state.party.forEach(mon => {
    const card = document.createElement('div');
    card.className = 'mon';
    card.innerHTML = `<span>${mon.emoji}</span><span>${mon.name}</span><span class="tag">${mon.type}</span>`;
    partyEl.appendChild(card);
  });
}

function renderTools() {
  toolEl.innerHTML = '';
  if (!state.tools.length) {
    const empty = document.createElement('div');
    empty.className = 'chip';
    empty.textContent = 'No tools yet';
    toolEl.appendChild(empty);
    return;
  }
  state.tools.forEach(tool => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.textContent = tool;
    toolEl.appendChild(chip);
  });
}

function renderCodex(key) {
  codex.innerHTML = '';
  const list = tabs[key];
  list.forEach(entry => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${entry.name}</h3><p>${entry.note}</p>`;
    codex.appendChild(card);
  });
}

function renderState() {
  trainerName.textContent = state.name || '---';
  locationPill.textContent = state.location;
  updateBadges();
  renderParty();
  renderTools();
}

function createChoice(choice) {
  const button = document.createElement('button');
  button.className = 'choice';
  const title = typeof choice.title === 'function' ? choice.title() : choice.title;
  button.innerHTML = `<span class="emoji">${choice.emoji || '➡️'}</span><div class="details"><div class="title">${title}</div>${choice.hint ? `<div class="hint">${choice.hint}</div>` : ''}</div>`;
  button.addEventListener('click', () => {
    if (choice.action) choice.action();
    const next = typeof choice.next === 'function' ? choice.next() : choice.next;
    renderNode(next);
  });
  return button;
}

function renderNode(key) {
  const node = story[key];
  if (!node) return;
  state.currentNode = key;

  if (node.badge && !state.badgeNodes.has(key)) {
    state.badges += 1;
    state.badgeNodes.add(key);
  }

  if (node.location) {
    state.location = node.location;
  }

  const text = typeof node.text === 'function' ? node.text() : node.text;
  storyText.textContent = text;
  storyImage.textContent = node.emoji || '✨';
  storyChoices.innerHTML = '';
  inputSlot.innerHTML = '';

  if (node.choices && node.choices.length) {
    node.choices.forEach(choice => storyChoices.appendChild(createChoice(choice)));
  }

  if (node.input) {
    const wrap = document.createElement('div');
    wrap.className = 'input-row';
    const input = document.createElement('input');
    input.placeholder = node.input.placeholder;
    const button = document.createElement('button');
    button.textContent = 'OK';
    const handle = () => node.input.action(input.value);
    button.addEventListener('click', handle);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') handle(); });
    wrap.appendChild(input);
    wrap.appendChild(button);
    inputSlot.appendChild(wrap);
    input.focus();
  }

  renderState();
}

function wireTabs() {
  const tabButtons = document.querySelectorAll('.tab');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCodex(btn.dataset.tab);
    });
  });
}

function resetRun() {
  state.name = '';
  state.party = [];
  state.tools = [];
  state.badges = 0;
  state.location = 'Pallet Lab';
  state.badgeNodes = new Set();
  renderNode('intro');
}

function init() {
  wireTabs();
  document.getElementById('reset-btn').addEventListener('click', resetRun);
  renderCodex('trainers');
  renderNode('intro');
}

init();
