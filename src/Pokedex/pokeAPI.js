const pokemon = [
  {
    id: "001",
    name: "Bulbasaur",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    height: "2ft 04in",
    weight: "15.2 lbs",
    category: "Seed",
    abilities: "Overgrown",
    types: ["Grass", "Poison"],
    weakness: ["Fire", "Flying", "Ice", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    id: "002",
    name: "Ivysaur",
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    height: "3ft 03in",
    weight: "28.7 lbs",
    category: "Seed",
    abilities: "Overgrown",
    types: ["Grass", "Poison"],
    weakness: ["Fire", "Flying", "Ice", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
  },
  {
    id: "003",
    name: "Venusaur",
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    height: "6ft 07in",
    weight: "220.5 lbs",
    category: "Seed",
    abilities: "Overgrown",
    types: ["Grass", "Poison"],
    weakness: ["Fire", "Flying", "Ice", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
  },
  {
    id: "004",
    name: "Charmander",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    height: "2ft",
    weight: "18.7 lbs",
    category: "Lizard",
    abilities: "Blaze",
    types: ["Fire"],
    weakness: ["Ground", "Rock", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    id: "005",
    name: "Charmeleon",
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    height: "3ft 07in",
    weight: "41.9 lbs",
    category: "Flame",
    abilities: "Blaze",
    types: ["Fire"],
    weakness: ["Ground", "Rock", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
  },
  {
    id: "006",
    name: "Charizard",
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    height: "5ft 07in",
    weight: "199.5 lbs",
    category: "Flame",
    abilities: "Blaze",
    types: ["Fire", "Flying"],
    weakness: ["Electric", "Rock", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
  },
  {
    id: "007",
    name: "Squirtle",
    description:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    height: "1ft 08in",
    weight: "19.8 lbs",
    category: "Tiny Turtle",
    abilities: "Torrent",
    types: ["Water"],
    weakness: ["Electric", "Grass"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  },
  {
    id: "008",
    name: "Wartortle",
    description:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
    height: "3ft 03in",
    weight: "49.6 lbs",
    category: "Turtle",
    abilities: "Torrent",
    types: ["Water"],
    weakness: ["Electric", "Grass"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
  },
  {
    id: "009",
    name: "Blastoise",
    description:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    height: "5ft 03in",
    weight: "188.5 lbs",
    category: "Shellfish",
    abilities: "Torrent",
    types: ["Water"],
    weakness: ["Electric", "Grass"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
  },
  {
    id: "010",
    name: "Caterpie",
    description:
      "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
    height: "1ft",
    weight: "6.4 lbs",
    category: "Worm",
    abilities: "Shield Dust",
    types: ["Bug"],
    weakness: ["Flying", "Fire", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
  },
  {
    id: "011",
    name: "Metapod",
    description:
      "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
    height: "2ft 04in",
    weight: "21.8 lbs",
    category: "Cocoon",
    abilities: "Shed Skin",
    types: ["Bug"],
    weakness: ["Flying", "Fire", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
  },
  {
    id: "012",
    name: "Butterfree",
    description:
      "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
    height: "3ft 07in",
    weight: "70.5 lbs",
    category: "Butterfly",
    abilities: "Compound Eyes",
    types: ["Bug", "Flying"],
    weakness: ["Flying", "Fire", "Rock", "Electric", "Ice"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
  },
  {
    id: "013",
    name: "Weedle",
    description:
      "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    height: "1ft",
    weight: "7.1 lbs",
    category: "Hairy Bug",
    abilities: "Shield Dust",
    types: ["Bug", "Poison"],
    weakness: ["Flying", "Fire", "Rock", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"
  },
  {
    id: "014",
    name: "Kakuna",
    description:
      "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    height: "2ft",
    weight: "22 lbs",
    category: "Cocoon",
    abilities: "Shed Skin",
    types: ["Bug", "Poison"],
    weakness: ["Flying", "Fire", "Rock", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"
  },
  {
    id: "015",
    name: "Beedrill",
    description:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    height: "3ft 03in",
    weight: "65 lbs",
    category: "Poison Bee",
    abilities: "Swarm",
    types: ["Bug", "Poison"],
    weakness: ["Flying", "Fire", "Rock", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"
  },
  {
    id: "016",
    name: "Pidgey",
    description:
      "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    height: "1ft",
    weight: "4 lbs",
    category: "Tiny Bird",
    abilities: "Keen Eye",
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
  },
  {
    id: "017",
    name: "Pidgeotto",
    description:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    height: "3ft 07in",
    weight: "66.1 lbs",
    category: "Bird",
    abilities: "Keen Eye",
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"
  },
  {
    id: "018",
    name: "Pidgeot",
    description:
      "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
    height: "4ft 11in",
    weight: "87.1 lbs",
    category: "Bird",
    abilities: "Keen Eye",
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
  },
  {
    id: "019",
    name: "Rattata",
    description:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    height: "1ft",
    weight: "7.7 lbs",
    category: "Mouse",
    abilities: "Run Away",
    types: ["Normal"],
    weakness: ["Fighting"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"
  },
  {
    id: "020",
    name: "Raticate",
    description:
      "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
    height: "2ft 04in",
    weight: "40.8 lbs",
    category: "Mouse",
    abilities: "Run Away",
    types: ["Normal"],
    weakness: ["Fighting"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"
  },
  {
    id: "021",
    name: "Spearow",
    description:
      "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
    height: "1ft",
    weight: "4.4 lbs",
    category: "Tiny Bird",
    abilities: "Keen Eye",
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png"
  },
  {
    id: "022",
    name: "Fearow",
    description:
      "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
    height: "3ft 11in",
    weight: "83.8 lbs",
    category: "Beak",
    abilities: "Keen Eye",
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png"
  },
  {
    id: "023",
    name: "Ekans",
    description:
      "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
    height: "6ft 07in",
    weight: "15.2 lbs",
    category: "Snake",
    abilities: "Shed Skin",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png"
  },
  {
    id: "024",
    name: "Arbok",
    description:
      "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
    height: "11ft 06in",
    weight: "143.3 lbs",
    category: "Cobra",
    abilities: "Shed Skin",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"
  },
  {
    id: "025",
    name: "Pikachu",
    description:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    height: "1ft 04in",
    weight: "13.2 lbs",
    category: "Mouse",
    abilities: "Static",
    types: ["Electric"],
    weakness: ["Ground"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    id: "026",
    name: "Raichu",
    description:
      "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    height: "2ft 07in",
    weight: "66.1 lbs",
    category: "Mouse",
    abilities: "Static",
    types: ["Electric"],
    weakness: ["Ground"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
  },
  {
    id: "027",
    name: "Sandshrew",
    description:
      "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
    height: "2ft",
    weight: "26.5 lbs",
    category: "Mouse",
    abilities: "Sand Veil",
    types: ["Ground"],
    weakness: ["Grass", "Ice", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png"
  },
  {
    id: "028",
    name: "Sandslash",
    description:
      "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
    height: "3ft 03in",
    weight: "65 lbs",
    category: "Mouse",
    abilities: "Sand Veil",
    types: ["Ground"],
    weakness: ["Grass", "Ice", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png"
  },
  {
    id: "029",
    name: "Nidoran♀",
    description:
      "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    height: "1ft 04in",
    weight: "15.4 lbs",
    category: "Poison Pin",
    abilities: "Poison Point",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png"
  },
  {
    id: "030",
    name: "Nidorina",
    description:
      "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    height: "2ft 07in",
    weight: "44.1 lbs",
    category: "Poison Pin",
    abilities: "Poison Point",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png"
  },
  {
    id: "031",
    name: "Nidoqueen",
    description:
      "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    height: "4ft 03in",
    weight: "132.3 lbs",
    category: "Drill",
    abilities: "Poison Point",
    types: ["Poison", "Ground"],
    weakness: ["Ground", "Psychic", "Ice", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png"
  },
  {
    id: "032",
    name: "Nidoran♂",
    description:
      "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.",
    height: "1ft 08in",
    weight: "19.8 lbs",
    category: "Poison Pin",
    abilities: "Poison Point",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png"
  },
  {
    id: "033",
    name: "Nidorino",
    description:
      "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    height: "2ft 11in",
    weight: "43 lbs",
    category: "Poison Pin",
    abilities: "Poison Point",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png"
  },
  {
    id: "034",
    name: "Nidoking",
    description:
      "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    height: "4ft 07in",
    weight: "136.7 lbs",
    category: "Drill",
    abilities: "Poison Point",
    types: ["Poison", "Ground"],
    weakness: ["Ground", "Psychic", "Ice", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png"
  },
  {
    id: "035",
    name: "Clefairy",
    description:
      "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
    height: "2ft",
    weight: "16.5 lbs",
    category: "Fairy",
    abilities: "Cute Charm",
    types: ["Fairy"],
    weakness: ["Steel", "Poison"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
  }
];

const getAll = () => {
  let array = [];
  pokemon.forEach(el => {
    array.push(el);
  });
  return array;
};

const getAllPokeNames = () => {
  let array = [];
  pokemon.forEach(el => {
    array.push(el.name);
  });

  return array;
};

const getAllPokeLNames = () => {
  let array = [];
  pokemon.forEach(el => {
    array.push(el.name.toLowerCase());
  });

  return array;
};

const getAllId = () => {
  let array = [];
  pokemon.forEach(el => {
    array.push(parseInt(el.id));
  });
  return array;
};

const getByName = name => {
  let exact;
  pokemon.forEach(el => {
    if (el.name.toLowerCase() === name.toLowerCase()) {
      exact = el;
    }
  });
  return exact;
};

const getById = id => {
  let exact;
  pokemon.forEach(el => {
    if (parseInt(el.id) === parseInt(id)) {
      exact = el;
    }
  });
  return exact;
};

const sortByName = array => {
  return array.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

const sortById = arr => {
  return arr.sort((a, b) => a.id - b.id);
};

export default {
  getAll,
  getAllPokeNames,
  getAllPokeLNames,
  getByName,
  getById,
  getAllId,
  sortByName,
  sortById
};
