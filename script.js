const terminal = document.getElementById('terminal');
const statusPill = document.getElementById('status-pill');

const trainers = [
  { name: 'Ash Ketchum', note: 'Relentless optimist who turns impossible fights into comeback wins. Known for bold battle instincts and deep bonds.' },
  { name: 'Misty', note: 'Cerulean Gym Leader dominating with Water types. Strategic, fast, and allergic to nonsense.' },
  { name: 'Brock', note: 'Pewter Gym Leader with rock-solid defense and encyclopedic care knowledge. Plays the long game.' },
  { name: 'Giovanni', note: 'Team Rocket boss commanding Ground types with ruthless precision and overwhelming force.' },
  { name: 'Red', note: 'Silent prodigy with tactical perfection and an untouchable roster.' },
  { name: 'Blue (Gary)', note: 'Hyper-competitive rival who exploits weaknesses and switches strategies on a dime.' },
  { name: 'Cynthia', note: 'Sinnoh Champion with perfect team synergy. Garchomp alone causes veteran trainers to panic.' },
  { name: 'Steven Stone', note: 'Former Hoenn Champion obsessed with rare stones and Steel tactics that wear rivals down.' },
  { name: 'Lance', note: 'Dragon master mixing raw power with speed. Battles build like storms.' },
  { name: 'Leon', note: 'Galar Champion with flashy confidence and perfect reads. Charizard is the showstopper.' }
];

const gyms = [
  { name: 'Pewter City Gym', note: 'Rugged rock arena testing defense, patience, and stamina.' },
  { name: 'Cerulean City Gym', note: 'Aquatic gym of pools and platforms rewarding speed and timing.' },
  { name: 'Vermilion City Gym', note: 'Military-style Electric facility running on strict, high-voltage offense.' },
  { name: 'Celadon City Gym', note: 'Greenhouse labyrinth where Grass types deploy status tricks and misdirection.' },
  { name: 'Fuchsia City Gym', note: 'Ninja-themed, trap-filled Poison gym forcing careful strikes.' },
  { name: 'Saffron City Gym', note: 'Psychic dojo with teleport panels and relentless mental warfare.' },
  { name: 'Cinnabar Island Gym', note: 'Volcanic lab of Fire battles that are fast, hot, and punishing.' },
  { name: 'Violet City Gym', note: 'Towering wooden arena for Flying types testing balance and adaptability.' },
  { name: 'Mauville City Gym', note: 'Flashy Electric gym of gadgets, puzzles, and speed.' },
  { name: 'Snowpoint City Gym', note: 'Frozen gauntlet of Ice slides that punish reckless challengers.' }
];

const stadiums = [
  { name: 'Indigo Plateau Stadium', note: 'Flagship Kanto/Johto arena with terrain-shifting Elite Four battles.' },
  { name: 'Wyndon Stadium', note: 'Galar sports colossus with Dynamax towers and Champion Cup energy.' },
  { name: 'Lily of the Valley Conference Stadium', note: 'Sinnoh stage with rotating weather and endurance-testing ceremonies.' },
  { name: 'Saffron City Exhibition Dome', note: 'High-tech arena with holographic terrain for experimental battles.' },
  { name: 'Goldenrod Radio Colosseum', note: 'Johto matches broadcast live; sound-based traps react to cries.' },
  { name: 'Hearthome Contest Hall Stadium', note: 'Battle meets style—lighting shifts and rhythm boosts creative strategies.' },
  { name: 'Mossdeep Space Arena', note: 'Zero-G practice and meteor shower effects redefine pacing.' },
  { name: 'Ever Grande Stadium', note: 'Hoenn’s final trial with terrain swapping between sand, lava, and water.' },
  { name: 'Castelia Harbor Battle Pier', note: 'Wind-swept steel platform ideal for high-energy doubles.' },
  { name: 'Alola Royal Dome', note: 'Battle Royal spotlight chaos where spectacle and strategy collide.' }
];

const tools = [
  { name: 'Exp Share', note: 'Distributes experience to the whole team for smooth leveling.' },
  { name: 'Lucky Egg', note: 'Boosts experience gain for rapid training sessions.' },
  { name: 'Soothe Bell', note: 'Raises friendship through calming chimes while traveling.' },
  { name: 'Everstone', note: 'Prevents evolution to preserve movesets or style.' },
  { name: 'Choice Band', note: 'Spikes physical attack but locks the first chosen move.' },
  { name: 'Wise Glasses', note: 'Gives every special attack a subtle power boost.' },
  { name: 'Assault Vest', note: 'Raises special defense but allows only attacking moves.' },
  { name: 'Quick Claw', note: 'Occasionally lets the holder act first.' },
  { name: 'Heat Rock', note: 'Extends sunny weather for Fire-heavy teams.' },
  { name: 'Leftovers', note: 'Steady healing each turn; the most reliable recovery snack.' }
];

const pokedex = [
  { name: 'Pikachu', note: 'Speedy Electric mouse with loyal sparks and sudden voltage spikes.' },
  { name: 'Charizard', note: 'Fire/Flying ace thriving on intense battles and devastating flames.' },
  { name: 'Bulbasaur', note: 'Grass/Poison tactician with healing vines and calm resilience.' },
  { name: 'Squirtle', note: 'Water specialist whose precise jets carve stone.' },
  { name: 'Gengar', note: 'Ghost/Poison prankster hiding in shadows with dangerous tricks.' },
  { name: 'Lucario', note: 'Fighting/Steel aura master with disciplined, pinpoint strikes.' },
  { name: 'Eevee', note: 'Adaptable Normal type ready for many evolutions and adventures.' },
  { name: 'Snorlax', note: 'Massive Normal wall with endless hunger and durability.' },
  { name: 'Gyarados', note: 'Water/Flying powerhouse born from perseverance and rage.' },
  { name: 'Jigglypuff', note: 'Lullaby singer that puts foes to sleep—marker ready.' },
  { name: 'Mewtwo', note: 'Engineered Psychic with unreal power and precision.' },
  { name: 'Alakazam', note: 'Psychic genius whose spoons bend under mental pressure.' },
  { name: 'Arcanine', note: 'Fire legend famed for loyalty, speed, and presence.' },
  { name: 'Gardevoir', note: 'Psychic/Fairy protector battling with graceful devotion.' },
  { name: 'Machamp', note: 'Four-armed Fighting bruiser who never stops swinging.' },
  { name: 'Lapras', note: 'Gentle Water/Ice ferry that hides surprising power.' },
  { name: 'Umbreon', note: 'Trust-forged Dark type thriving in stealth and patience.' },
  { name: 'Scizor', note: 'Bug/Steel cutter combining speed with brutal pincers.' },
  { name: 'Salamence', note: 'Dragon/Flying terror fueled by its dream of flight.' },
  { name: 'Greninja', note: 'Water/Dark ninja with blade-like water and shadow movement.' }
];

function writeLines(lines) {
  if (!Array.isArray(lines) || lines.length === 0) return;
  terminal.innerText += lines.join('\n') + '\n\n';
  terminal.scrollTop = terminal.scrollHeight;
}

function listSection(title, collection) {
  const header = `>>> ${title}`;
  const items = collection.map((item, index) => `${index + 1}. ${item.name} — ${item.note}`);
  return [header, ...items];
}

function campaignBrief() {
  return [
    '>>> Campaign Brief: Destiny Journey',
    '• Trainers: rally champions like Ash, Cynthia, and Leon to anchor narrative arcs.',
    '• Gyms: blend Rock endurance tests with Water speed runs, Electric puzzles, and Poison traps.',
    '• Stadiums: rotate Indigo Plateau, Wyndon, and Mossdeep zero-G for escalating finals.',
    '• Tools: load Exp Share, Lucky Egg, and Leftovers for growth; slot Choice Band for burst.',
    '• Pokémon: pick a hero trio (Pikachu, Charizard, Greninja) and support roster for synergy.',
    '• Next Action: pick a gym route, assign rivals, then simulate the opening ceremony.',
  ];
}

function runCommand(type) {
  const updatedStatus = `Command: ${type}`;
  statusPill.textContent = updatedStatus;

  let lines = [];

  switch (type) {
    case 'upgrade':
      lines = [
        'Initializing upgrade protocol...',
        'Backing up giggle files...',
        'Installing maturity.exe... ERROR ❌',
        'Upgrade complete. Jayce and Maddie now 3% more obedient.'
      ];
      break;

    case 'ninja':
      lines = [
        'Engaging Ninja Mode...',
        'Loading smoke bomb.wav...',
        'Jayce has vanished into the shadows. 🥷'
      ];
      break;

    case 'unicorn':
      lines = [
        'Sparkles loading...',
        'Rainbow unicorn DNA fusion initialized...',
        'Maddie has entered Unicorn Mode. 🦄'
      ];
      break;

    case 'iq':
      lines = [
        'Boosting IQ...',
        'Downloading Wikipedia into brain.zip...',
        'Error: Too many fart jokes detected. IQ boost paused.'
      ];
      break;

    case 'prank':
      lines = [
        'Activating prank mode...',
        'Deploying digital whoopee cushion...',
        '💩💩💩💩💩'
      ];
      break;

    case 'dance':
      lines = [
        'Loading beat.mp3...',
        'Starting dance party...',
        'Now playing: “Dad Jams Vol. 1”'
      ];
      break;

    case 'shutdown':
      lines = [
        'Powering down...',
        'Saving last eye roll...',
        'Goodnight, KidOS 💻'
      ];
      break;

    case 'trainers':
      lines = listSection('Trainer Roster', trainers);
      break;

    case 'gyms':
      lines = listSection('Gym Circuit', gyms);
      break;

    case 'stadiums':
      lines = listSection('Stadium Almanac', stadiums);
      break;

    case 'tools':
      lines = listSection('Battle Tools', tools);
      break;

    case 'pokemon':
      lines = listSection('Pokédex Highlights', pokedex);
      break;

    case 'campaign':
      lines = campaignBrief();
      break;

    default:
      lines = [`Unknown command: ${type}`, 'Try trainers, gyms, stadiums, tools, pokemon, or campaign.'];
      break;
  }

  writeLines(lines);
}

function wireControls() {
  document.querySelectorAll('.command-button').forEach(button => {
    const { command } = button.dataset;
    button.addEventListener('click', () => runCommand(command));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  wireControls();
  runCommand('campaign');
});
