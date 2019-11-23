const pokemon = [
    {
        id: "001",
        nationalId: "810",
        name: "Grookey",
        img: "../img/001.png",
        gender: {
            male: 88.14,
            female: 11.86
        },
        types: ["grass"],
        classification: "Chimp",
        height: 0.3,
        weight: 5,
        abilities: ["Overgrow"],
        hiddenAbility: "Grassy Surge",
        ev: [
            {
                type: "attack",
                amount: 1
            }
        ],
        eggGroups: ["field", "grass"],
        sword: true,
        shield: true,
        obtain: ["Gift from Leon in Postwick"],
        swordFlavor: "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area.",
        shieldFlavor: "It attacks with rapid beats of its stick. As it strikes with amazing speed, it gets more and more pumped."
    },
    {
        id: "002",
        nationalId: "811",
        name: "Thwackey",
        img: "../img/002.png",
        gender: {
            male: 88.14,
            female: 11.86
        },
        types: ["grass"],
        classification: "Beat",
        height: 0.7,
        weight: 14,
        abilities: ["Overgrow"],
        hiddenAbility: "Grassy Surge",
        ev: [
            {
                type: "attack",
                amount: 2
            }
        ],
        captureRate: 45,
        eggGroups: ["field", "grass"],
        sword: true,
        shield: true,
        obtain: ["Evolve Grookey at level 16"],
        swordFlavor: "The faster a Thwackey can beat out a rhythm with its two sticks, the more respect it wins from its peers.",
        shieldFlavor: "When it's drumming out rapid beats in battle, it gets so caught up in the rhythm that it won't even notice that it's already knocked out its opponent."
    },
    {
        id: "003",
        nationalId: "812",
        name: "Rillaboom",
        img: "../img/003.png",
        gender: {
            male: 88.14,
            female: 11.86
        },
        types: ["grass"],
        classification: "Beat",
        height: 0.7,
        weight: 14,
        abilities: ["Overgrow"],
        hiddenAbility: "Grassy Surge",
        ev: [
            {
                type: "attack",
                amount: 2
            }
        ],
        captureRate: 45,
        eggGroups: ["field", "grass"],
        sword: true,
        shield: true,
        obtain: ["Evolve Thwackey at level 35"],
        swordFlavor: "By drumming, it taps into the power of its special tree stump. The roots of the stump follow its direction in battle.",
        shieldFlavor: "The one with the best drumming techniques becomes the boss of the troop. It has a gentle disposition and values harmony among its group."
    },
    {
        id: "004",
        nationalId: "813",
        name: "Scorbunny",
        img: "../img/004.png",
        gender: {
            male: 88.14,
            female: 11.86
        },
        types: ["fire"],
        classification: "Rabbit",
        height: 0.3,
        weight: 4.5,
        abilities: ["Blaze"],
        hiddenAbility: "Libero",
        ev: [
            {
                type: "speed",
                amount: 1
            }
        ],
        captureRate: 45,
        eggGroups: ["field", "human-like"],
        sword: true,
        shield: true,
        obtain: ["Gift from Leon in Postwick"],
        swordFlavor: "A warm-up of running around gets fire energy coursing through this Pokémon's body. Once that happens, it's ready to fight at full power.",
        shieldFlavor: "It has special pads on the backs of its feet, and one on its nose. Once it's raring to fight, these pads radiate tremendous heat."
    },
    {
        id: "005",
        nationalId: "814",
        name: "Raboot",
        img: "../img/005.png",
        gender: {
            male: 88.14,
            female: 11.86
        },
        types: ["fire"],
        classification: "Rabbit",
        height: 0.6,
        weight: 9,
        abilities: ["Blaze"],
        hiddenAbility: "Libero",
        ev: [
            {
                type: "speed",
                amount: 2
            }
        ],
        captureRate: 45,
        eggGroups: ["field", "human-like"],
        sword: true,
        shield: true,
        obtain: ["Evolve Scorbunny at level 16"],
        swordFlavor: "Its thick and fluffy fur protects it from the cold and enables it to use hotter fire moves.",
        shieldFlavor: "It kicks berries right off the branches of trees and then juggles them with its feet, practicing its footwork."
    },
    {
        id: "006",
        nationalId: "815",
        name: "Cinderace",
        img: "../img/006.png",
        gender: {
            male: 88.14,
            female: 11.86
        },
        types: ["fire"],
        classification: "Striker",
        height: 1.4,
        weight: 33,
        abilities: ["Blaze"],
        hiddenAbility: "Libero",
        ev: [
            {
                type: "speed",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["field", "human-like"],
        sword: true,
        shield: true,
        obtain: ["Evolve Raboot at level 35"],
        swordFlavor: "It juggles a pebble with its feet, turning it into a burning soccer ball. Its shots strike opponents hard and leave them scorched.",
        shieldFlavor: "It's skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot."
    },
    {
        id: "007",
        nationalId: "816",
        name: "Sobble",
        img: "../img/007.png",
        gender: {
            male: 88.14,
            female: 11.86
        },
        types: ["water"],
        classification: "Water Lizard",
        height: 0.3,
        weight: 4,
        abilities: ["Torrent"],
        hiddenAbility: "Sniper",
        ev: [
            {
                type: "speed",
                amount: 1
            },
            {
                type: "sp. defense",
                amount: 1
            }
        ],
        captureRate: 45,
        eggGroups: ["water 1", "field"],
        sword: true,
        shield: true,
        obtain: ["Gift from Leon in Postwick"],
        swordFlavor: "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won't be able to resist weeping.",
        shieldFlavor: "When it gets wet, its skin changes color, and this Pokémon becomes invisible as if it were camouflaged."
    },
    {
        id: "008",
        nationalId: "817",
        name: "Drizzile",
        img: "../img/008.png",
        gender: {
            male: 88.14,
            female: 11.86
        },
        types: ["water"],
        classification: "Water Lizard",
        height: 0.7,
        weight: 11.5,
        abilities: ["Torrent"],
        hiddenAbility: "Sniper",
        ev: [
            {
                type: "sp. attack",
                amount: 2
            }
        ],
        captureRate: 45,
        eggGroups: ["water 1", "field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Sobble at level 16"],
        swordFlavor: "A clever combatant, this Pokémon battles using water balloons created with moisture secreted from its palms.",
        shieldFlavor: "Highly intelligent but also very lazy, it keeps enemies out of its territory by laying traps everywhere."
    },
    {
        id: "009",
        nationalId: "818",
        name: "Inteleon",
        img: "../img/009.png",
        gender: {
            male: 88.14,
            female: 11.86
        },
        types: ["water"],
        classification: "Secret Agent",
        height: 1.9,
        weight: 45.2,
        abilities: ["Torrent"],
        hiddenAbility: "Sniper",
        ev: [
            {
                type: "speed",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["water 1", "field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Drizzile at level 35"],
        swordFlavor: "It has many hidden capabilities, such as fingertips that can shoot water and a membrane on its back that it can use to glide through the air.",
        shieldFlavor: "Its nictitating membranes let it pick out foes' weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3."
    },
    {
        id: "010",
        nationalId: "824",
        name: "Blipbug",
        img: "../img/010.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug"],
        classification: "Larva",
        height: 0.4,
        weight: 8,
        abilities: ["Swarm", "Compoundeyes"],
        hiddenAbility: "Telepathy",
        ev: [
            {
                type: "sp. defense",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Route 1", "Route 2", "Giant's Cap", "Slumbering Weald", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)"],
        swordFlavor: "A constant collector of information, this Pokémon is very smart. Very strong is what it isn't.",
        shieldFlavor: "Often found in gardens, this Pokémon has hairs on its body that it uses to assess its surroundings."
    },
    {
        id: "011",
        nationalId: "825",
        name: "Dottler",
        img: "../img/011.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug", "psychic"],
        classification: "Radome",
        height: 0.4,
        weight: 19.5,
        abilities: ["Swarm", "Compoundeyes"],
        hiddenAbility: "Telepathy",
        ev: [
            {
                type: "sp. defense",
                amount: 2
            }
        ],
        captureRate: 120,
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Evolve Blipbug at level 10", "Route 5", "Giant's Cap", "Giant's Mirror", "Stony Wilderness", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)"],
        swordFlavor: "It barely moves, but it's still alive. Hiding in its shell without food or water seems to have awakened its psychic powers.",
        shieldFlavor: "As it grows inside its shell, it uses its psychic abilities to monitor the outside world and prepare for evolution"
    },
    {
        id: "012",
        nationalId: "826",
        name: "Orbeetle",
        img: "../img/012.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug", "psychic"],
        classification: "Seven Spot",
        height: 0.4,
        weight: 40.8,
        abilities: ["Swarm", "Frisk"],
        hiddenAbility: "Telepathy",
        ev: [
            {
                type: "sp. defense",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Evolve Dottler at level 30", "Giant's Cap", "Lake of Outrage", "Slumbering Weald", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)", "Bridge Field (Gigantamax)", "Dappled Grove (Gigantamax)"],
        swordFlavor: "It's famous for its high level of intelligence, and the large size of its brain is proof that it also possesses immense psychic power.",
        shieldFlavor: "It emits psychic energy to observe and study what's around it, and what's around it can include things over six miles away."
    },
    {
        id: "013",
        nationalId: "010",
        name: "Caterpie",
        img: "../img/013.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug"],
        classification: "Worm",
        height: 0.3,
        weight: 2.9,
        abilities: ["Shield Dust"],
        hiddenAbility: "Run Away",
        ev: [
            {
                type: "hp",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Route 1", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)"],
        swordFlavor: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        shieldFlavor: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
    },
    {
        id: "014",
        nationalId: "011",
        name: "Metapod",
        img: "../img/014.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug"],
        classification: "Cocoon",
        height: 0.7,
        weight: 9.9,
        abilities: ["Shed Skin"],
        hiddenAbility: null,
        ev: [
            {
                type: "defense",
                amount: 2
            }
        ],
        captureRate: 120,
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Evolve Caterpie at level 7", "Rollings Fields", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)"],
        swordFlavor: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        shieldFlavor: "Even though it is encased in a sturdy shell, the body inside is tender. It can't withstand a harsh attack."
    },
    {
        id: "015",
        nationalId: "012",
        name: "Butterfree",
        img: "../img/015.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug", "flying"],
        classification: "Butterfly",
        height: 1.1,
        weight: 32,
        abilities: ["Compoundeyes"],
        hiddenAbility: "Tinted Lens",
        ev: [
            {
                type: "sp. attack",
                amount: 2
            },
            {
                type: "sp. defense",
                amount: 1
            }
        ],
        captureRate: 45,
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Evolve Metapod at level 10", "East Lake Axewell", "Rollings Fields", "Slumbering Weald", "Bridge Field (Raid)", "Dappled Grove (Raid)", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)", "Rolling Fields (Gigantamax)"],
        swordFlavor: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        shieldFlavor: "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest."
    },
    {
        id: "016",
        nationalId: "736",
        name: "Grubbin",
        img: "../img/016.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug"],
        classification: "Larva",
        height: 0.4,
        weight: 4.4,
        abilities: ["Swarm"],
        hiddenAbility: null,
        ev: [
            {
                type: "attack",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Route 1", "Dappled Grove", "East Lake Axewell", "North Lake Miloch", "Slumbering Weald", "Watchtower Ruins", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "Its natural enemies, like Rookidee, may flee rather than risk getting caught in its large mandibles that can snap thick tree branches.",
        shieldFlavor: "It uses its big jaws to dig nests into the forest floor, and it loves to feed on sweet tree sap."
    },
    {
        id: "017",
        nationalId: "737",
        name: "Charjabug",
        img: "../img/017.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug", "electric"],
        classification: "Battery",
        height: 0.5,
        weight: 10.5,
        abilities: ["Battery"],
        hiddenAbility: null,
        ev: [
            {
                type: "defense",
                amount: 2
            }
        ],
        captureRate: 120,        
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Evolve Grubbin at level 20", "Axew's Eye", "Dusty Bowl", "Hammerlocke Hills", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Giant's Cap (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "While its durable shell protects it from attacks, Charjabug strikes at enemies with jolts of electricity discharged from the tips of its jaws.",
        shieldFlavor: "Its digestive processes convert the leaves it eats into electricity. An electric sac in its belly stores the electricity for later use."
    },
    {
        id: "018",
        nationalId: "738",
        name: "Vikavolt",
        img: "../img/018.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug", "electric"],
        classification: "Stag Beetle",
        height: 1.5,
        weight: 45,
        abilities: ["Levitate"],
        hiddenAbility: null,
        ev: [
            {
                type: "sp. attack",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Evolve Charjabug with Thunder Stone", "Giant's Mirror", "Giant's Seat", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Giant's Cap (Raid)", "Giant's Mirror (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "It builds up electricity in its abdomen, focuses it through its jaws, and then fires the electricity off in concentrated beams.",
        shieldFlavor: "If it carries a Charjabug to use as a spare battery, a flying Vikavolt can rapidly fire high-powered beams of electricity."
    },
    {
        id: "019",
        nationalId: "163",
        name: "Hoothoot",
        img: "../img/019.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal", "flying"],
        classification: "Owl",
        height: 0.7,
        weight: 21.2,
        abilities: ["Insomnia", "Keen Eye"],
        hiddenAbility: "Tinted Lens",
        ev: [
            {
                type: "hp",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["flying"],
        sword: true,
        shield: true,
        obtain: ["Route 1", "Route 2", "Dappled Grove", "Giant's Cap", "Slumbering Weald", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "It always stands on one foot. It changes feet so fast, the movement can rarely be seen.",
        shieldFlavor: "It begins to hoot at the same time every day. Some Trainers use them in place of clocks."
    },
    {
        id: "020",
        nationalId: "164",
        name: "Noctowl",
        img: "../img/020.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal", "flying"],
        classification: "Owl",
        height: 1.6,
        weight: 40.8,
        abilities: ["Insomnia", "Keen Eye"],
        hiddenAbility: "Tinted Lens",
        ev: [
            {
                type: "hp",
                amount: 2
            }
        ],
        captureRate: 90,
        eggGroups: ["flying"],
        sword: true,
        shield: true,
        obtain: ["Evolve Hoothoot at level 20", "Bridge Field", "Giant's Cap", "Motostoke Outskirts", "Motostoke Riverbank", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "Its eyes are specially developed to enable it to see clearly even in murky darkness and minimal light.",
        shieldFlavor: "When it needs to think, it rotates its head 180 degrees to sharpen its intellectual power."
    },
    {
        id: "021",
        nationalId: "821",
        name: "Rookidee",
        img: "../img/021.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["flying"],
        classification: "Tiny Bird",
        height: 0.2,
        weight: 1.8,
        abilities: ["Keen Eye", "Unnerve"],
        hiddenAbility: "Big Pecks",
        ev: [
            {
                type: "speed",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["flying"],
        sword: true,
        shield: true,
        obtain: ["Route 1", "Route 2", "Route 3", "Motostoke Riverbank", "Slumbering Weald", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)"],
        swordFlavor: "It will bravely challenge any opponent, no matter how powerful. This Pokémon benefits from every battle; even a defeat increases its strength a bit.",
        shieldFlavor: "Jumping nimbly about, this small-bodied Pokémon takes advantage of even the slightest opportunity to disorient larger opponents."
    },
    {
        id: "022",
        nationalId: "822",
        name: "Corvisquire",
        img: "../img/022.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["flying"],
        classification: "Raven",
        height: 0.8,
        weight: 16,
        abilities: ["Keen Eye", "Unnerve"],
        hiddenAbility: "Big Pecks",
        ev: [
            {
                type: "speed",
                amount: 2
            }
        ],
        captureRate: 120,
        eggGroups: ["flying"],
        sword: true,
        shield: true,
        obtain: ["Evolve Rookidee at level 18", "Route 3", "Hammerlocke Hills", "Motostoke Riverbank", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)"],
        swordFlavor: "Smart enough to use tools in battle, these Pokémon have been seen picking up rocks and flinging them or using ropes to wrap up enemies.",
        shieldFlavor: "The lessons of many harsh battles have taught it how to accurately judge an opponent's strength."
    },
    {
        id: "023",
        nationalId: "823",
        name: "Corviknight",
        img: "../img/023.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["flying", "steel"],
        classification: "Raven",
        height: 2.2,
        weight: 75,
        abilities: ["Pressure", "Unnerve"],
        hiddenAbility: "Mirror Armor",
        ev: [
            {
                type: "defense",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["flying"],
        sword: true,
        shield: true,
        obtain: ["Evolve Corvisquire at level 38", "Route 7", "Dusty Bowl", "Giant's Cap", "Hammerlocke Hills", "Lake of Outrage", "Motostoke Riverbank", "North Lake Miloch", "Slumbering Weald", "Watchtower Ruins", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Giant's Cap (Gigantamax)"],
        swordFlavor: "This Pokémon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe.",
        shieldFlavor: "With their great intellect and flying skills, these Pokémon very successfully act as the Galar region's airborne taxi service."
    },
    {
        id: "024",
        nationalId: "819",
        name: "Skwovet",
        img: "../img/024.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal"],
        classification: "Cheeky",
        height: 0.3,
        weight: 2.5,
        abilities: ["Cheek Pouch"],
        hiddenAbility: "Gluttony",
        ev: [
            {
                type: "hp",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Dappled Grove", "Motostoke Riverbank", "North Lake Miloch", "Rolling Fields", "Slumbering Weald", "Watchtower Ruins", "Bridge Field (Raid)", "East Lake Axewell (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "Found throughout the Galar region, this Pokémon becomes uneasy if its cheeks are ever completely empty of berries.",
        shieldFlavor: "It eats berries nonstop; a habit that has made it more resilient than it looks. It'll show up on farms, searching for yet more berries."
    },
    {
        id: "025",
        nationalId: "820",
        name: "Greedent",
        img: "../img/025.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal"],
        classification: "Greedy",
        height: 0.6,
        weight: 6,
        abilities: ["Cheek Pouch"],
        hiddenAbility: "Gluttony",
        ev: [
            {
                type: "hp",
                amount: 2
            }
        ],
        captureRate: 90,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Skwovet at level 24", "Route 6", "Route 7", "Route 9", "Axew's Eye", "Bridge Field", "Giant's Cap", "Giant's Mirror", "Giant's Seat", "Hammerlocke Hills", "Lake of Outrage", "Motostoke Riverbank", "Bridge Field (Raid)", "Motostoke Riverbank (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "It stashes berries in its tail; so many berries that they fall out constantly. But this Pokémon is a bit slow-witted, so it doesn't notice the loss.",
        shieldFlavor: "Common throughout the Galar region, this Pokémon has strong teeth and can chew through the toughest of berry shells."
    },
    {
        id: "026",
        nationalId: "519",
        name: "Pidove",
        img: "../img/026.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal", "flying"],
        classification: "Tiny Pigeon",
        height: 0.6,
        weight: 6,
        abilities: ["Big Pecks", "Super Luck"],
        hiddenAbility: "Rivalry",
        ev: [
            {
                type: "attack",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["flying"],
        sword: true,
        shield: true,
        obtain: ["East Lake Axewell", "North Lake Miloch", "Rolling Fields", "Watchtower Ruins", "Bridge Field (Raid)", "East Lake Axewell (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "Where people go, these Pokémon follow. If you're scattering food for them, be carefulâ€” several hundred of them can gather at once.",
        shieldFlavor: "It's forgetful and not very bright, but many Trainers love it anyway for its friendliness and sincerity."
    },
    {
        id: "027",
        nationalId: "520",
        name: "Tranquill",
        img: "../img/027.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal", "flying"],
        classification: "Wild Pigeon",
        height: 0.6,
        weight: 15,
        abilities: ["Big Pecks", "Super Luck"],
        hiddenAbility: "Rivalry",
        ev: [
            {
                type: "attack",
                amount: 2
            }
        ],
        captureRate: 120,
        eggGroups: ["flying"],
        sword: true,
        shield: true,
        obtain: ["Evolve Pidove at level 21", "Bridge Field", "Giant's Mirror", "Giant's Seat", "Stony Wilderness", "Bridge Field (Raid)", "East Lake Axewell (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "It can fly moderately quickly. No matter how far it travels, it can always find its way back to its master and its nest.",
        shieldFlavor: "These bright Pokémon have acute memories. Apparently delivery workers often choose them as their partners."
    },
    {
        id: "028",
        nationalId: "521",
        name: "Unfezant",
        img: "../img/028.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal", "flying"],
        classification: "Proud",
        height: 1.2,
        weight: 29,
        abilities: ["Big Pecks", "Super Luck"],
        hiddenAbility: "Rivalry",
        ev: [
            {
                type: "attack",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["flying"],
        sword: true,
        shield: true,
        obtain: ["Evolve Tranquill at level 32", "Axew's Eye", "Giant's Mirror", "Hammerlocke Hills", "Stony Wilderness", "Bridge Field (Raid)", "East Lake Axewell (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "Unfezant are exceptional fliers. The females are known for their stamina, while the males outclass them in terms of speed.",
        shieldFlavor: "This Pokémon is intelligent and intensely proud. People will sit up and take notice if you become the Trainer of one."
    }
];

export default pokemon;