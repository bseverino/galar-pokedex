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
    },
    {
        id: "029",
        nationalId: "827",
        name: "Nickit",
        img: "../img/029.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["dark"],
        classification: "Fox",
        height: 0.6,
        weight: 8.9,
        abilities: ["Run Away", "Unburden"],
        hiddenAbility: "Stakeout",
        ev: [
            {
                type: "sp. defense",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Route 1", "Route 2", "Dusty Bowl", "Giant's Mirror", "Stony Wilderness", "Bridge Field (Raid)", "Dusty Bowl (Raid)", "Giant's Mirror (Raid)", "Stony Wilderness (Raid)", "West Lake Axewell (Raid)"],
        swordFlavor: "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains.",
        shieldFlavor: "Cunning and cautious, this Pokémon survives by stealing food from others. It erases its tracks with swipes of its tail as it makes off with its plunder."
    },
    {
        id: "030",
        nationalId: "828",
        name: "Nickit",
        img: "../img/030.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["dark"],
        classification: "Fox",
        height: 1.2,
        weight: 19.9,
        abilities: ["Run Away", "Unburden"],
        hiddenAbility: "Stakeout",
        ev: [
            {
                type: "sp. defense",
                amount: 2
            }
        ],
        captureRate: 127,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Nickit at level 18", "Route 7", "Route 9", "Bridge Field", "Hammerlocke Hills", "South Lake Miloch", "Stony Wilderness", "Bridge Field (Raid)", "Dusty Bowl (Raid)", "Giant's Mirror (Raid)", "Stony Wilderness (Raid)", "West Lake Axewell (Raid)"],
        swordFlavor: "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it.",
        shieldFlavor: "With a lithe body and sharp claws, it goes around stealing food and eggs. Boltund is its natural enemy."
    },
    {
        id: "031",
        nationalId: "263",
        name: "Zigzagoon",
        img: "../img/031.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["dark", "normal"],
        classification: "Tiny Raccoon",
        height: 0.4,
        weight: 17.5,
        abilities: ["Pickup", "Gluttony"],
        hiddenAbility: "Quick Feet",
        ev: [
            {
                type: "speed",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Route 2", "Route 3", "Bridge Field", "Giant's Cap", "Stony Wilderness", "Dusty Bowl (Raid)", "Giant's Mirror (Raid)", "Motostoke Riverbank (Raid)", "Stony Wilderness (Raid)", "West Lake Axewell (Raid)"],
        swordFlavor: "Its restlessness has it constantly running around. If it sees another Pokémon, it will purposely run into them in order to start a fight.",
        shieldFlavor: "Thought to be the oldest form of Zigzagoon, it moves in zigzags and wreaks havoc upon its surroundings."
    },
    {
        id: "032",
        nationalId: "264",
        name: "Linoone",
        img: "../img/032.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["dark", "normal"],
        classification: "Rush",
        height: 0.5,
        weight: 32.5,
        abilities: ["Pickup", "Gluttony"],
        hiddenAbility: "Quick Feet",
        ev: [
            {
                type: "speed",
                amount: 2
            }
        ],
        captureRate: 90,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Zigzagoon at level 20", "Bridge Field", "Giant's Cap", "Bridge Field (Raid)", "Dusty Bowl (Raid)", "Giant's Mirror (Raid)", "Motostoke Riverbank (Raid)", "Stony Wilderness (Raid)", "West Lake Axewell (Raid)"],
        swordFlavor: "It uses its long tongue to taunt opponents. Once the opposition is enraged, this Pokémon hurls itself at the opponent, tackling them forcefully.",
        shieldFlavor: "This very aggressive Pokémon will recklessly challenge opponents stronger than itself."
    },
    {
        id: "033",
        nationalId: "862",
        name: "Obstagoon",
        img: "../img/033.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["dark", "normal"],
        classification: "Blocking",
        height: 1.6,
        weight: 46,
        abilities: ["Reckless", "Guts"],
        hiddenAbility: "Defiant",
        ev: [
            {
                type: "defense",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Linoone after certain number of battles", "Route 2", "Lake of Outrage", "Bridge Field (Raid)", "Dusty Bowl (Raid)", "Giant's Mirror (Raid)", "Stony Wilderness (Raid)", "West Lake Axewell (Raid)"],
        swordFlavor: "Its voice is staggering in volume. Obstagoon has a tendency to take on a threatening posture and shout—this move is known as Obstruct.",
        shieldFlavor: "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch."
    },
    {
        id: "034",
        nationalId: "831",
        name: "Wooloo",
        img: "../img/034.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal"],
        classification: "Sheep",
        height: 0.6,
        weight: 6,
        abilities: ["Fluffy", "Run Away"],
        hiddenAbility: "Bulletproof",
        ev: [
            {
                type: "defense",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Route 1", "Route 4", "Motostoke Riverbank", "Bridge Field (Raid)", "East Lake Axewell (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.",
        shieldFlavor: "If its fleece grows too long, Wooloo won't be able to move. Cloth made with the wool of this Pokémon is surprisingly strong."
    },
    {
        id: "035",
        nationalId: "832",
        name: "Dubwool",
        img: "../img/035.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal"],
        classification: "Sheep",
        height: 1.3,
        weight: 43,
        abilities: ["Fluffy", "Steadfast"],
        hiddenAbility: "Bulletproof",
        ev: [
            {
                type: "defense",
                amount: 2
            }
        ],
        captureRate: 127,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Wooloo at level 24", "Dusty Bowl", "Hammerlocke Hills", "Motostoke Riverbank", "Bridge Field (Raid)", "East Lake Axewell (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "Weave a carpet from its springy wool, and you end up with something closer to a trampoline. You'll start to bounce the moment you set foot on it.",
        shieldFlavor: "Its majestic horns are meant only to impress the opposite gender. They never see use in battle."
    },
    {
        id: "036",
        nationalId: "270",
        name: "Lotad",
        img: "../img/036.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["water", "grass"],
        classification: "Water Weed",
        height: 0.5,
        weight: 2.6,
        abilities: ["Swift Swim", "Rain Dish"],
        hiddenAbility: "Own Tempo",
        ev: [
            {
                type: "sp. defense",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["water 1", "grass"],
        sword: false,
        shield: true,
        obtain: ["Route 2", "Dappled Grove", "Rolling Fields", "West Lake Axewell", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "It searches about for clean water. If it does not drink water for too long, the leaf on its head wilts.",
        shieldFlavor: "Its leaf grew too large for it to live on land. That is how it began to live floating in the water."
    },
    {
        id: "037",
        nationalId: "271",
        name: "Lombre",
        img: "../img/037.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["water", "grass"],
        classification: "Jolly",
        height: 1.2,
        weight: 32.5,
        abilities: ["Swift Swim", "Rain Dish"],
        hiddenAbility: "Own Tempo",
        ev: [
            {
                type: "sp. defense",
                amount: 2
            }
        ],
        captureRate: 120,
        eggGroups: ["water 1", "grass"],
        sword: false,
        shield: true,
        obtain: ["Evolve Lotad at level 14", "Route 5", "Dappled Grove", "Giant's Cap", "Giant's Seat", "South Lake Miloch", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "It is nocturnal and becomes active at nightfall. It feeds on aquatic mosses that grow in the riverbed.",
        shieldFlavor: "It lives at the water's edge where it is sunny. It sleeps on a bed of water grass by day and becomes active at night."
    },
    {
        id: "038",
        nationalId: "272",
        name: "Ludicolo",
        img: "../img/038.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["water", "grass"],
        classification: "Carefree",
        height: 1.5,
        weight: 55,
        abilities: ["Swift Swim", "Rain Dish"],
        hiddenAbility: "Own Tempo",
        ev: [
            {
                type: "sp. defense",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["water 1", "grass"],
        sword: false,
        shield: true,
        obtain: ["Evolve Lombre with Water Stone", "Dappled Grove", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "The rhythm of bright, festive music activates Ludicolo's cells, making it more powerful.",
        shieldFlavor: "If it hears festive music, it begins moving in rhythm in order to amplify its power."
    },
    {
        id: "039",
        nationalId: "273",
        name: "Seedot",
        img: "../img/039.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["grass"],
        classification: "Acorn",
        height: 0.5,
        weight: 4,
        abilities: ["Chlorophyll", "Early Bird"],
        hiddenAbility: "Pickpocket",
        ev: [
            {
                type: "defense",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["field", "grass"],
        sword: true,
        shield: false,
        obtain: ["Route 2", "Dappled Grove", "Rolling Fields", "West Lake Axewell", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "If it remains still, it looks just like a real nut. It delights in surprising foraging Pokémon.",
        shieldFlavor: "It attaches itself to a tree branch using the top of its head. Strong winds can sometimes make it fall."
    },
    {
        id: "040",
        nationalId: "274",
        name: "Nuzleaf",
        img: "../img/040.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["grass", "dark"],
        classification: "Wily",
        height: 1,
        weight: 28,
        abilities: ["Chlorophyll", "Early Bird"],
        hiddenAbility: "Pickpocket",
        ev: [
            {
                type: "attack",
                amount: 2
            }
        ],
        captureRate: 120,
        eggGroups: ["field", "grass"],
        sword: true,
        shield: false,
        obtain: ["Evolve Seedot at level 14", "Route 5", "Dappled Grove", "Giant's Cap", "Giant's Seat", "South Lake Miloch", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "It lives deep in forests. With the leaf on its head, it makes a flute whose song makes listeners uneasy.",
        shieldFlavor: "They live in holes bored in large trees. The sound of Nuzleaf's grass flute fills listeners with dread."
    },
    {
        id: "041",
        nationalId: "275",
        name: "Shiftry",
        img: "../img/041.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["grass", "dark"],
        classification: "Wicked",
        height: 1.3,
        weight: 59.6,
        abilities: ["Chlorophyll", "Early Bird"],
        hiddenAbility: "Pickpocket",
        ev: [
            {
                type: "attack",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["field", "grass"],
        sword: true,
        shield: false,
        obtain: ["Evolve Nuzleaf with Leaf Stone", "Dappled Grove", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "A Pokémon that was feared as a forest guardian. It can read the foe's mind and take preemptive action.",
        shieldFlavor: "It lives quietly in the deep forest. It is said to create chilly winter winds with the fans it holds."
    },
    {
        id: "042",
        nationalId: "833",
        name: "Chewtle",
        img: "../img/042.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["water"],
        classification: "Snapping",
        height: 0.3,
        weight: 8.5,
        abilities: ["Strong Jaw", "Shell Armor"],
        hiddenAbility: "Swift Swim",
        ev: [
            {
                type: "attack",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["monster", "water 1"],
        sword: true,
        shield: true,
        obtain: ["Route 2", "Route 4", "Route 5", "Galar Mine No. 2", "Giant's Cap", "Giant's Mirror", "Hulbury", "Motostoke", "Motostoke Outskirts", "Motostoke Riverbank", "Bridge Field (Raid)", "Dusty Bowl (Raid)", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Giant's Mirror (Raid)", "Lake of Outrage (Raid)", "South Lake Miloch (Raid)", "West Lake Axewell (Raid)"],
        swordFlavor: "Apparently the itch of its teething impels it to snap its jaws at anything in front of it.",
        shieldFlavor: "It starts off battles by attacking with its rock-hard horn, but as soon as the opponent flinches, this Pokémon bites down and never lets go."
    },
    {
        id: "043",
        nationalId: "834",
        name: "Drednaw",
        img: "../img/043.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["water", "rock"],
        classification: "Bite",
        height: 1,
        weight: 115.5,
        abilities: ["Strong Jaw", "Shell Armor"],
        hiddenAbility: "Swift Swim",
        ev: [
            {
                type: "attack",
                amount: 2
            }
        ],
        captureRate: 75,
        eggGroups: ["monster", "water 1"],
        sword: true,
        shield: true,
        obtain: ["Evolve Chewtle at level 22", "Route 2", "Route 6", "Bridge Field", "Dusty Bowl", "Galar Mine No. 2", "Giant's Cap", "Giant's Mirror", "Lake of Outrage", "West Lake Axewell", "Bridge Field (Raid)", "Dusty Bowl (Raid)", "Giant's Mirror (Raid)", "Lake of Outrage (Raid)", "South Lake Miloch (Raid)", "West Lake Axewell (Raid)", "Giant's Cap (Gigantamax)"],
        swordFlavor: "With jaws that can shear through steel rods, this highly aggressive Pokémon chomps down on its unfortunate prey.",
        shieldFlavor: "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
    },
    {
        id: "044",
        nationalId: "509",
        name: "Purrloin",
        img: "../img/044.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["dark"],
        classification: "Devious",
        height: 0.4,
        weight: 10.1,
        abilities: ["Limber", "Unburden"],
        hiddenAbility: "Prankster",
        ev: [
            {
                type: "speed",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Route 2", "Dappled Grove", "East Lake Axewell", "Motostoke Riverbank", "North Lake Miloch", "Watchtower Ruins", "West Lake Axewell", "Dusty Bowl (Raid)", "Giant's Mirror (Raid)", "Stony Wilderness (Raid)", "West Lake Axewell (Raid)"],
        swordFlavor: "It steals things from people just to amuse itself with their frustration. A rivalry exists between this Pokémon and Nickit.",
        shieldFlavor: "Opponents that get drawn in by its adorable behavior come away with stinging scratches from its claws and stinging pride from its laughter."
    },
    {
        id: "045",
        nationalId: "510",
        name: "Liepard",
        img: "../img/045.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["dark"],
        classification: "Cruel",
        height: 1.1,
        weight: 37.5,
        abilities: ["Limber", "Unburden"],
        hiddenAbility: "Prankster",
        ev: [
            {
                type: "speed",
                amount: 2
            }
        ],
        captureRate: 90,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Purrloin at level 20", "Route 7", "Route 9", "Bridge Field", "Giant's Cap", "Giant's Seat", "North Lake Miloch", "Bridge Field (Raid)", "Dusty Bowl (Raid)", "Giant's Mirror (Raid)", "Stony Wilderness (Raid)", "West Lake Axewell (Raid)"],
        swordFlavor: "Don't be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon.",
        shieldFlavor: "This stealthy Pokémon sneaks up behind prey without making any sound at all. It competes with Thievul for territory."
    },
    {
        id: "046",
        nationalId: "835",
        name: "Yamper",
        img: "../img/046.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["electric"],
        classification: "Puppy",
        height: 0.3,
        weight: 13.5,
        abilities: ["Ball Fetch"],
        hiddenAbility: "Rattled",
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
        obtain: ["Route 2", "Route 4", "Giant's Mirror", "Motostoke Riverbank", "Stony Wilderness", "Giant's Mirror (Raid)", "Lake of Outrage (Raid)", "Motostoke Riverbank (Raid)"],
        swordFlavor: "This Pokémon is very popular as a herding dog in the Galar region. As it runs, it generates electricity from the base of its tail.",
        shieldFlavor: "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity."
    },
    {
        id: "047",
        nationalId: "836",
        name: "Boltund",
        img: "../img/047.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["electric"],
        classification: "Dog",
        height: 1,
        weight: 34,
        abilities: ["Strong Jaw"],
        hiddenAbility: "Competitive",
        ev: [
            {
                type: "speed",
                amount: 2
            }
        ],
        captureRate: 45,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Yamper at level 25", "Dusty Bowl", "Lake of Outrage", "Motostoke Riverbank", "North Lake Miloch", "Giant's Mirror (Raid)", "Lake of Outrage (Raid)", "Motostoke Riverbank (Raid)"],
        swordFlavor: "This Pokémon generates electricity and channels it into its legs to keep them going strong. Boltund can run nonstop for three full days.",
        shieldFlavor: "It sends electricity through its legs to boost their strength. Running at top speed, it easily breaks 50 mph."
    },
    {
        id: "048",
        nationalId: "659",
        name: "Bunnelby",
        img: "../img/048.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal"],
        classification: "Digging",
        height: 0.4,
        weight: 5,
        abilities: ["Pickup", "Cheek Pouch"],
        hiddenAbility: "Huge Power",
        ev: [
            {
                type: "speed",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Dappled Grove", "East Lake Axewell", "Giant's Cap", "North Lake Miloch", "Rolling Fields", "West Lake Axewell", "Bridge Field (Raid)", "East Lake Axewell (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "It excels at digging holes. Using its ears, it can dig a nest 33 feet deep in one night.",
        shieldFlavor: "It's very sensitive to danger. The sound of Corviknight's flapping will have Bunnelby digging a hole to hide underground in moments."
    },
    {
        id: "049",
        nationalId: "660",
        name: "Diggersby",
        img: "../img/049.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal", "ground"],
        classification: "Digging",
        height: 1,
        weight: 42.4,
        abilities: ["Pickup", "Cheek Pouch"],
        hiddenAbility: "Huge Power",
        ev: [
            {
                type: "hp",
                amount: 2
            }
        ],
        captureRate: 127,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Bunnelby at level 20", "Axew's Eye", "Bridge Field", "Giant's Cap", "Giant's Mirror", "Giant's Seat", "North Lake Miloch", "Rolling Fields", "Bridge Field (Raid)", "East Lake Axewell (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "With power equal to an excavator, it can dig through dense bedrock. It's a huge help during tunnel construction.",
        shieldFlavor: "The fur on its belly retains heat exceptionally well. People used to make heavy winter clothing from fur shed by this Pokémon."
    },
    {
        id: "050",
        nationalId: "572",
        name: "Minccino",
        img: "../img/050.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal"],
        classification: "Chinchilla",
        height: 0.4,
        weight: 5.8,
        abilities: ["Cute Charm", "Technician"],
        hiddenAbility: "Skill Link",
        ev: [
            {
                type: "speed",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Route 5", "East Lake Axewell", "Giant's Cap", "Rolling Fields", "East Lake Axewell (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "The way it brushes away grime with its tail can be helpful when cleaning. But its focus on spotlessness can make cleaning more of a hassle.",
        shieldFlavor: "They pet each other with their tails as a form of greeting. Of the two, the one whose tail is fluffier is a bit more boastful."
    },
    {
        id: "051",
        nationalId: "573",
        name: "Cinccino",
        img: "../img/051.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["normal"],
        classification: "Scarf",
        height: 0.5,
        weight: 7.5,
        abilities: ["Cute Charm", "Technician"],
        hiddenAbility: "Skill Link",
        ev: [
            {
                type: "speed",
                amount: 2
            }
        ],
        captureRate: 60,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Minccino with Shiny Stone", "Giant's Cap", "East Lake Axewell (Raid)", "Rolling Fields (Raid)"],
        swordFlavor: "Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won't tolerate even a speck of the stuff.",
        shieldFlavor: "A special oil that seeps through their fur helps them avoid attacks. The oil fetches a high price at market."
    },
    {
        id: "052",
        nationalId: "761",
        name: "Bounsweet",
        img: "../img/052.png",
        gender: {
            male: 0,
            female: 100
        },
        types: ["grass"],
        classification: "Fruit",
        height: 0.3,
        weight: 3.2,
        abilities: ["Leaf Guard", "Oblivious"],
        hiddenAbility: "Sweet Veil",
        ev: [
            {
                type: "hp",
                amount: 1
            }
        ],
        captureRate: 235,
        eggGroups: ["grass"],
        sword: true,
        shield: true,
        obtain: ["Dappled Grove", "East Lake Axewell", "Rolling Fields", "Stony Wilderness", "Watchtower Ruins", "West Lake Axewell", "Dappled Grove (Raid)", "Giant's Mirror (Raid)"],
        swordFlavor: "Its body gives off a sweet, fruity scent that is extremely appetizing to bird Pokémon.",
        shieldFlavor: "When under attack, it secretes a sweet and delicious sweat. The scent only calls more enemies to it."
    },
    {
        id: "053",
        nationalId: "762",
        name: "Steenee",
        img: "../img/053.png",
        gender: {
            male: 0,
            female: 100
        },
        types: ["grass"],
        classification: "Fruit",
        height: 0.7,
        weight: 8.2,
        abilities: ["Leaf Guard", "Oblivious"],
        hiddenAbility: "Sweet Veil",
        ev: [
            {
                type: "speed",
                amount: 2
            }
        ],
        captureRate: 120,
        eggGroups: ["grass"],
        sword: true,
        shield: true,
        obtain: ["Evolve Bounsweet at level 18", "Axew's Eye", "Dappled Grove (Raid)", "Giant's Mirror (Raid)"],
        swordFlavor: "As it twirls like a dancer, a sweet smell spreads out around it. Anyone who inhales the scent will feel a surge of happiness.",
        shieldFlavor: "Any Corvisquire that pecks at this Pokémon will be greeted with a smack from its sepals followed by a sharp kick."
    },
    {
        id: "054",
        nationalId: "763",
        name: "Tsareena",
        img: "../img/054.png",
        gender: {
            male: 0,
            female: 100
        },
        types: ["grass"],
        classification: "Fruit",
        height: 0.7,
        weight: 8.2,
        abilities: ["Leaf Guard", "Queenly Majesty"],
        hiddenAbility: "Sweet Veil",
        ev: [
            {
                type: "attack",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["grass"],
        sword: true,
        shield: true,
        obtain: ["Evolve Steenee with Stomp", "Stony Wilderness", "Dappled Grove (Raid)", "Giant's Mirror (Raid)"],
        swordFlavor: "This feared Pokémon has long, slender legs and a cruel heart. It shows no mercy as it stomps on its opponents.",
        shieldFlavor: "A kick from the hardened tips of this Pokémon's legs leaves a wound in the opponent's body and soul that will never heal."
    },
    {
        id: "055",
        nationalId: "043",
        name: "Oddish",
        img: "../img/055.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["grass", "poison"],
        classification: "Weed",
        height: 0.5,
        weight: 5.4,
        abilities: ["Chlorophyll"],
        hiddenAbility: "Run Away",
        ev: [
            {
                type: "sp. attack",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["grass"],
        sword: true,
        shield: true,
        obtain: ["Dappled Grove", "East Lake Axewell", "Rolling Fields", "Watchtower Ruins", "Dappled Grove (Raid)", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Motostoke Riverbank (Raid)", "North Lake Miloch (Raid)"],
        swordFlavor: "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
        shieldFlavor: "During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight."
    },
    {
        id: "056",
        nationalId: "044",
        name: "Gloom",
        img: "../img/056.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["grass", "poison"],
        classification: "Weed",
        height: 0.8,
        weight: 8.6,
        abilities: ["Chlorophyll"],
        hiddenAbility: "Stench",
        ev: [
            {
                type: "sp. attack",
                amount: 2
            }
        ],
        captureRate: 120,
        eggGroups: ["grass"],
        sword: true,
        shield: true,
        obtain: ["Evolve Oddish at level 21", "Axew's Eye", "Giant's Cap", "Giant's Mirror", "North Lake Miloch", "Dappled Grove (Raid)", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Motostoke Riverbank (Raid)"],
        swordFlavor: "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
        shieldFlavor: "What appears to be drool is actually sweet honey. It is very sticky and clings stubbornly if touched."
    },
    {
        id: "057",
        nationalId: "045",
        name: "Vileplume",
        img: "../img/057.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["grass", "poison"],
        classification: "Flower",
        height: 1.2,
        weight: 18.6,
        abilities: ["Chlorophyll"],
        hiddenAbility: "Effect Spore",
        ev: [
            {
                type: "sp. attack",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["grass"],
        sword: true,
        shield: true,
        obtain: ["Evolve Gloom with Leaf Stone", "Dappled Grove", "Giant's Mirror", "Hammerlocke Hills", "Dappled Grove (Raid)", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Motostoke Riverbank (Raid)", "North Lake Miloch (Raid)"],
        swordFlavor: "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
        shieldFlavor: "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up."
    },
    {
        id: "058",
        nationalId: "182",
        name: "Bellossom",
        img: "../img/058.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["grass"],
        classification: "Flower",
        height: 0.4,
        weight: 5.8,
        abilities: ["Chlorophyll"],
        hiddenAbility: "Healer",
        ev: [
            {
                type: "sp. defense",
                amount: 3
            }
        ],
        captureRate: 45,
        eggGroups: ["grass"],
        sword: true,
        shield: true,
        obtain: ["Evolve Gloom with Sun Stone", "Giant's Mirror", "Dappled Grove (Raid)"],
        swordFlavor: "Plentiful in the tropics. When it dances, its petals rub together and make a pleasant ringing sound.",
        shieldFlavor: "Bellossom gather at times and appear to dance. They say that the dance is a ritual to summon the sun."
    },
    {
        id: "059",
        nationalId: "406",
        name: "Budew",
        img: "../img/059.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["grass", "poison"],
        classification: "Bud",
        height: 0.2,
        weight: 1.2,
        abilities: ["Natural Cure", "Poison Point"],
        hiddenAbility: "Leaf Guard",
        ev: [
            {
                type: "sp. attack",
                amount: 1
            }
        ],
        captureRate: 255,
        eggGroups: ["cannot breed"],
        sword: true,
        shield: true,
        obtain: ["Breed Roselia/Roserade with Rose Incense", "Route 4", "Dappled Grove", "East Lake Axewell", "Giant's Mirror", "Rolling Fields", "West Lake Axewell", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Giant's Mirror (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "The pollen it releases contains poison. If this Pokémon is raised on clean water, the poison's toxicity is increased.",
        shieldFlavor: "This Pokémon is highly sensitive to temperature changes. When its bud starts to open, that means spring is right around the corner."
    },
    {
        id: "060",
        nationalId: "315",
        name: "Roselia",
        img: "../img/060.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["grass", "poison"],
        classification: "Thorn",
        height: 0.3,
        weight: 2,
        abilities: ["Natural Cure", "Poison Point"],
        hiddenAbility: "Leaf Guard",
        ev: [
            {
                type: "sp. attack",
                amount: 2
            }
        ],
        captureRate: 150,
        eggGroups: ["fairy", "grass"],
        sword: true,
        shield: true,
        obtain: ["Evolve Budew at 220 happiness during the day", "Axew's Eye", "Dusty Bowl", "Giant's Mirror", "Rolling Fields", "South Lake Miloch", "Bridge Field (Raid)", "Dappled Grove (Raid)", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Giant's Mirror (Raid)", "Hammerlocke Hills (Raid)", "Motostoke Riverbank (Raid)", "North Lake Miloch (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "Its flowers give off a relaxing fragrance. The stronger its aroma, the healthier the Roselia is.",
        shieldFlavor: "It uses the different poisons in each hand separately when it attacks. The stronger its aroma, the healthier it is."
    },
    {
        id: "061",
        nationalId: "407",
        name: "Roserade",
        img: "../img/061.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["grass", "poison"],
        classification: "Bouquet",
        height: 0.9,
        weight: 14.5,
        abilities: ["Natural Cure", "Poison Point"],
        hiddenAbility: "Technician",
        ev: [
            {
                type: "sp. attack",
                amount: 3
            }
        ],
        captureRate: 75,
        eggGroups: ["fairy", "grass"],
        sword: true,
        shield: true,
        obtain: ["Evolve Roselia with Shiny Stone", "Hammerlocke Hills", "Dappled Grove (Raid)"],
        swordFlavor: "After captivating opponents with its sweet scent, it lashes them with its thorny whips.",
        shieldFlavor: "The poison in its right hand is quick acting. The poison in its left hand is slow acting. Both are life threatening."
    },
    {
        id: "062",
        nationalId: "278",
        name: "Wingull",
        img: "../img/062.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["water", "flying"],
        classification: "Seagull",
        height: 0.6,
        weight: 9.5,
        abilities: ["Keen Eye", "Hydration"],
        hiddenAbility: "Rain Dish",
        ev: [
            {
                type: "speed",
                amount: 1
            }
        ],
        captureRate: 190,
        eggGroups: ["water 1", "flying"],
        sword: true,
        shield: true,
        obtain: ["East Lake Axewell", "North Lake Miloch", "Rolling Fields", "South Lake Miloch", "Watchtower Ruins", "West Lake Axewell", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)"],
        swordFlavor: "It makes its nest on sheer cliffs. Riding the sea breeze, it glides up into the expansive skies.",
        shieldFlavor: "It soars on updrafts without flapping its wings. It makes a nest on sheer cliffs at the sea's edge."
    },
    {
        id: "063",
        nationalId: "279",
        name: "Pelipper",
        img: "../img/063.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["water", "flying"],
        classification: "Water Bird",
        height: 1.2,
        weight: 28,
        abilities: ["Keen Eye", "Drizzle"],
        hiddenAbility: "Rain Dish",
        ev: [
            {
                type: "defense",
                amount: 2
            }
        ],
        captureRate: 45,
        eggGroups: ["water 1", "flying"],
        sword: true,
        shield: true,
        obtain: ["Evolve Wingull at level 25", "Route 9", "Axew's Eye", "Bridge Field", "Dusty Bowl", "Hammerlocke Hills", "Lake of Outrage", "North Lake Miloch", "Rolling Fields", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)"],
        swordFlavor: "It is a messenger of the skies, carrying small Pokémon and eggs to safety in its bill.",
        shieldFlavor: "Skimming the water's surface, it dips its large bill in the sea, scoops up food and water, and carries it."
    },
    {
        id: "064",
        nationalId: "595",
        name: "Joltik",
        img: "../img/064.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug", "electric"],
        classification: "Attaching",
        height: 0.1,
        weight: 0.6,
        abilities: ["Compoundeyes", "Unnerve"],
        hiddenAbility: "Swarm",
        ev: [
            {
                type: "speed",
                amount: 1
            }
        ],
        captureRate: 190,
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Route 4", "Dappled Grove", "East Lake Axewell", "Giant's Cap", "Giant's Mirror", "North Lake Miloch", "Rolling Fields", "South Lake Miloch", "West Lake Axewell", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Lake of Outrage (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)"],
        swordFlavor: "Joltik can be found clinging to other Pokémon. It's soaking up static electricity because it can't produce a charge on its own.",
        shieldFlavor: "Joltik latch on to other Pokémon and suck out static electricity. They're often found sticking to Yamper's hindquarters."
    },
    {
        id: "065",
        nationalId: "596",
        name: "Galvantula",
        img: "../img/065.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["bug", "electric"],
        classification: "EleSpider",
        height: 0.8,
        weight: 14.3,
        abilities: ["Compoundeyes", "Unnerve"],
        hiddenAbility: "Swarm",
        ev: [
            {
                type: "speed",
                amount: 2
            }
        ],
        captureRate: 75,
        eggGroups: ["bug"],
        sword: true,
        shield: true,
        obtain: ["Evolve Joltik at level 36", "Route 7", "Giant's Cap", "Giant's Seat", "Lake of Outrage", "South Lake Miloch", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Giant's Cap (Raid)", "Lake of Outrage (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)"],
        swordFlavor: "It launches electrified fur from its abdomen as its means of attack. Opponents hit by the fur could be in for three full days and nights of paralysis.",
        shieldFlavor: "It lays traps of electrified threads near the nests of bird Pokémon, aiming to snare chicks that are not yet good at flying."
    },
    {
        id: "066",
        nationalId: "309",
        name: "Electrike",
        img: "../img/066.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["electric"],
        classification: "Lightning",
        height: 0.6,
        weight: 15.2,
        abilities: ["Static", "Lightning Rod"],
        hiddenAbility: "Minus",
        ev: [
            {
                type: "speed",
                amount: 1
            }
        ],
        captureRate: 120,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Route 4", "Dappled Grove", "Dusty Bowl", "East Lake Axewell", "Giant's Seat", "Rolling Fields", "South Lake Miloch", "Watchtower Ruins", "West Lake Axewell", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Motostoke Riverbank (Raid)"],
        swordFlavor: "It stores static electricity in its fur for discharging. It gives off sparks if a storm approaches.",
        shieldFlavor: "It stores electricity in its fur. It gives off sparks from all over its body in seasons when the air is dry."
    },
    {
        id: "067",
        nationalId: "310",
        name: "Manectric",
        img: "../img/067.png",
        gender: {
            male: 50.2,
            female: 49.8
        },
        types: ["electric"],
        classification: "Discharge",
        height: 1.5,
        weight: 40.2,
        abilities: ["Static", "Lightning Rod"],
        hiddenAbility: "Minus",
        ev: [
            {
                type: "speed",
                amount: 2
            }
        ],
        captureRate: 45,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Axew's Eye", "Giant's Cap", "Giant's Seat", "Rolling Fields", "Giant's Cap (Raid)", "Motostoke Riverbank (Raid)"],
        swordFlavor: "It stimulates its own muscles with electricity, so it can move quickly. It eases its soreness with electricity, too, so it can recover quickly as well.",
        shieldFlavor: "It rarely appears before people. It is said to nest where lightning has fallen."
    },
    {
        id: "068",
        nationalId: "037",
        name: "Vulpix",
        img: "../img/068.png",
        gender: {
            male: 24.9,
            female: 75.1
        },
        types: ["fire"],
        classification: "Fox",
        height: 0.6,
        weight: 9.9,
        abilities: ["Flash Fire"],
        hiddenAbility: "Drought",
        ev: [
            {
                type: "speed",
                amount: 1
            }
        ],
        captureRate: 190,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Motostoke", "Route 3 - Sword", "Axew's Eye - Sword", "Dappled Grove - Sword", "East Lake Axewell - Sword", "Giant's Seat - Sword", "North Lake Miloch - Sword", "Rolling Fields - Sword", "South Lake Miloch - Sword", "Watchtower Ruins - Sword", "West Lake Axewell - Sword", "Dusty Bowl (Raid) - Sword", "Giant's Cap (Raid) - Sword", "Hammerlocke Hills (Raid) - Sword", "Lake of Outrage (Raid) - Sword", "Stony Wilderness (Raid) - Sword", "Dusty Bowl - Shield", "Hammerlocke Hills - Shield"],
        swordFlavor: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
        shieldFlavor: "As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm."
    },
    {
        id: "069",
        nationalId: "038",
        name: "Ninetales",
        img: "../img/069.png",
        gender: {
            male: 24.9,
            female: 75.1
        },
        types: ["fire"],
        classification: "Fox",
        height: 1.1,
        weight: 19.9,
        abilities: ["Flash Fire"],
        hiddenAbility: "Drought",
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
        captureRate: 75,
        eggGroups: ["field"],
        sword: true,
        shield: true,
        obtain: ["Evolve Vulpix with Fire Stone", "Giant's Cap (Raid)", "Lake of Outrage - Sword", "Dusty Bowl (Raid) - Sword", "Hammerlocke Hills (Raid)", "Lake of Outrage (Raid)", "Stony Wilderness (Raid)"],
        swordFlavor: "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
        shieldFlavor: "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse."
    }
];

export default pokemon;