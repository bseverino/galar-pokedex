const pokemon = [
    {
        "id": 1,
        "national-id": 810,
        "name": "Grookey",
        "gender": {
            "male": 88.14,
            "female": 11.86
        },
        "types": ["grass"],
        "classification": "Chimp",
        "height": 0.3,
        "weight": 5,
        "abilities": ["Overgrow"],
        "hidden-ability": "Grassy Surge",
        "ev": [
            {
                "type": "attack",
                "amount": 1
            }
        ],
        "egg-groups": ["field", "grass"],
        "sword": true,
        "shield": true,
        "obtain": ["Gift from Leon in Postwick"],
        "sword-flavor": "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area.",
        "shield-flavor": "	It attacks with rapid beats of its stick. As it strikes with amazing speed, it gets more and more pumped."
    },
    {
        "id": 2,
        "national-id": 811,
        "name": "Thwackey",
        "gender": {
            "male": 88.14,
            "female": 11.86
        },
        "types": ["grass"],
        "classification": "Beat",
        "height": 0.7,
        "weight": 14,
        "abilities": ["Overgrow"],
        "hidden-ability": "Grassy Surge",
        "ev": [
            {
                "type": "attack",
                "amount": 2
            }
        ],
        "capture-rate": 45,
        "egg-groups": ["field", "grass"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Grookey at level 16"],
        "sword-flavor": "The faster a Thwackey can beat out a rhythm with its two sticks, the more respect it wins from its peers.",
        "shield-flavor": "When it's drumming out rapid beats in battle, it gets so caught up in the rhythm that it won't even notice that it's already knocked out its opponent."
    },
    {
        "id": 3,
        "national-id": 812,
        "name": "Rillaboom",
        "gender": {
            "male": 88.14,
            "female": 11.86
        },
        "types": ["grass"],
        "classification": "Beat",
        "height": 0.7,
        "weight": 14,
        "abilities": ["Overgrow"],
        "hidden-ability": "Grassy Surge",
        "ev": [
            {
                "type": "attack",
                "amount": 2
            }
        ],
        "capture-rate": 45,
        "egg-groups": ["field", "grass"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Thwackey at level 35"],
        "sword-flavor": "By drumming, it taps into the power of its special tree stump. The roots of the stump follow its direction in battle.",
        "shield-flavor": "The one with the best drumming techniques becomes the boss of the troop. It has a gentle disposition and values harmony among its group."
    },
    {
        "id": 4,
        "national-id": 813,
        "name": "Scorbunny",
        "gender": {
            "male": 88.14,
            "female": 11.86
        },
        "types": ["fire"],
        "classification": "Rabbit",
        "height": 0.3,
        "weight": 4.5,
        "abilities": ["Blaze"],
        "hidden-ability": "Libero",
        "ev": [
            {
                "type": "speed",
                "amount": 1
            }
        ],
        "capture-rate": 45,
        "egg-groups": ["field", "human-like"],
        "sword": true,
        "shield": true,
        "obtain": ["Gift from Leon in Postwick"],
        "sword-flavor": "A warm-up of running around gets fire energy coursing through this Pokémon's body. Once that happens, it's ready to fight at full power.",
        "shield-flavor": "It has special pads on the backs of its feet, and one on its nose. Once it's raring to fight, these pads radiate tremendous heat."
    },
    {
        "id": 5,
        "national-id": 814,
        "name": "Raboot",
        "gender": {
            "male": 88.14,
            "female": 11.86
        },
        "types": ["fire"],
        "classification": "Rabbit",
        "height": 0.6,
        "weight": 9,
        "abilities": ["Blaze"],
        "hidden-ability": "Libero",
        "ev": [
            {
                "type": "speed",
                "amount": 2
            }
        ],
        "capture-rate": 45,
        "egg-groups": ["field", "human-like"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Scorbunny at level 16"],
        "sword-flavor": "Its thick and fluffy fur protects it from the cold and enables it to use hotter fire moves.",
        "shield-flavor": "It kicks berries right off the branches of trees and then juggles them with its feet, practicing its footwork."
    },
    {
        "id": 6,
        "national-id": 815,
        "name": "Cinderace",
        "gender": {
            "male": 88.14,
            "female": 11.86
        },
        "types": ["fire"],
        "classification": "Striker",
        "height": 1.4,
        "weight": 33,
        "abilities": ["Blaze"],
        "hidden-ability": "Libero",
        "ev": [
            {
                "type": "speed",
                "amount": 3
            }
        ],
        "capture-rate": 45,
        "egg-groups": ["field", "human-like"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Raboot at level 35"],
        "sword-flavor": "It juggles a pebble with its feet, turning it into a burning soccer ball. Its shots strike opponents hard and leave them scorched.",
        "shield-flavor": "It's skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot."
    },
    {
        "id": 7,
        "national-id": 816,
        "name": "Sobble",
        "gender": {
            "male": 88.14,
            "female": 11.86
        },
        "types": ["water"],
        "classification": "Water Lizard",
        "height": 0.3,
        "weight": 4,
        "abilities": ["Torrent"],
        "hidden-ability": "Sniper",
        "ev": [
            {
                "type": "speed",
                "amount": 1
            },
            {
                "type": "sp. defense",
                "amount": 1
            }
        ],
        "capture-rate": 45,
        "egg-groups": ["water 1", "field"],
        "sword": true,
        "shield": true,
        "obtain": ["Gift from Leon in Postwick"],
        "sword-flavor": "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won't be able to resist weeping.",
        "shield-flavor": "When it gets wet, its skin changes color, and this Pokémon becomes invisible as if it were camouflaged."
    },
    {
        "id": 8,
        "national-id": 817,
        "name": "Drizzile",
        "gender": {
            "male": 88.14,
            "female": 11.86
        },
        "types": ["water"],
        "classification": "Water Lizard",
        "height": 0.7,
        "weight": 11.5,
        "abilities": ["Torrent"],
        "hidden-ability": "Sniper",
        "ev": [
            {
                "type": "sp. attack",
                "amount": 2
            }
        ],
        "capture-rate": 45,
        "types": ["water"],
        "egg-groups": ["water 1", "field"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Sobble at level 16"],
        "sword-flavor": "A clever combatant, this Pokémon battles using water balloons created with moisture secreted from its palms.",
        "shield-flavor": "Highly intelligent but also very lazy, it keeps enemies out of its territory by laying traps everywhere."
    },
    {
        "id": 9,
        "national-id": 818,
        "name": "Inteleon",
        "gender": {
            "male": 88.14,
            "female": 11.86
        },
        "types": ["water"],
        "classification": "Secret Agent",
        "height": 1.9,
        "weight": 45.2,
        "abilities": ["Torrent"],
        "hidden-ability": "Sniper",
        "ev": [
            {
                "type": "speed",
                "amount": 3
            }
        ],
        "capture-rate": 45,
        "egg-groups": ["water 1", "field"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Drizzile at level 35"],
        "sword-flavor": "It has many hidden capabilities, such as fingertips that can shoot water and a membrane on its back that it can use to glide through the air.",
        "shield-flavor": "Its nictitating membranes let it pick out foes' weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3."
    },
    {
        "id": 10,
        "national-id": 824,
        "name": "Blipbug",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "types": ["bug"],
        "classification": "Larva",
        "height": 0.4,
        "weight": 8,
        "abilities": ["Swarm", "Compoundeyes"],
        "hidden-ability": "Telepathy",
        "ev": [
            {
                "type": "sp. defense",
                "amount": 1
            }
        ],
        "capture-rate": 255,
        "egg-groups": ["bug"],
        "sword": true,
        "shield": true,
        "obtain": ["Route 1", "Route 2", "Giant's Cap", "Slumbering Weald", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)"],
        "sword-flavor": "A constant collector of information, this Pokémon is very smart. Very strong is what it isn't.",
        "shield-flavor": "Often found in gardens, this Pokémon has hairs on its body that it uses to assess its surroundings."
    },
    {
        "id": 11,
        "national-id": 825,
        "name": "Dottler",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "types": ["bug", "psychic"],
        "classification": "Radome",
        "height": 0.4,
        "weight": 19.5,
        "abilities": ["Swarm", "Compoundeyes"],
        "hidden-ability": "Telepathy",
        "ev": [
            {
                "type": "sp. defense",
                "amount": 2
            }
        ],
        "capture-rate": 120,
        "egg-groups": ["bug"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Blipbug at level 10", "Route 5", "Giant's Cap", "Giant's Mirror", "Stony Wilderness", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)"],
        "sword-flavor": "It barely moves, but it's still alive. Hiding in its shell without food or water seems to have awakened its psychic powers.",
        "shield-flavor": "As it grows inside its shell, it uses its psychic abilities to monitor the outside world and prepare for evolution"
    },
    {
        "id": 12,
        "national-id": 826,
        "name": "Orbeetle",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "types": ["bug", "psychic"],
        "classification": "Seven Spot",
        "height": 0.4,
        "weight": 40.8,
        "abilities": ["Swarm", "Frisk"],
        "hidden-ability": "Telepathy",
        "ev": [
            {
                "type": "sp. defense",
                "amount": 3
            }
        ],
        "capture-rate": 45,
        "egg-groups": ["bug"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Dottler at level 30", "Giant's Cap", "Lake of Outrage", "Slumbering Weald", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)", "Bridge Field (Gigantamax)", "Dappled Grove (Gigantamax)"],
        "sword-flavor": "It's famous for its high level of intelligence, and the large size of its brain is proof that it also possesses immense psychic power.",
        "shield-flavor": "It emits psychic energy to observe and study what's around it, and what's around it can include things over six miles away."
    },
    {
        "id": 13,
        "national-id": 10,
        "name": "Caterpie",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "types": ["bug"],
        "classification": "Worm",
        "height": 0.3,
        "weight": 2.9,
        "abilities": ["Shield Dust"],
        "hidden-ability": "Run Away",
        "ev": [
            {
                "type": "hp",
                "amount": 1
            }
        ],
        "capture-rate": 255,
        "egg-groups": ["bug"],
        "sword": true,
        "shield": true,
        "obtain": ["Route 1", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)"],
        "sword-flavor": "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        "shield-flavor": "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
    },
    {
        "id": 14,
        "national-id": 11,
        "name": "Metapod",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "types": ["bug"],
        "classification": "Cocoon",
        "height": 0.7,
        "weight": 9.9,
        "abilities": ["Shed Skin"],
        "hidden-ability": null,
        "ev": [
            {
                "type": "defense",
                "amount": 2
            }
        ],
        "capture-rate": 120,
        "egg-groups": ["bug"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Caterpie at level 7", "Rollings Fields", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)"],
        "sword-flavor": "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        "shield-flavor": "Even though it is encased in a sturdy shell, the body inside is tender. It can't withstand a harsh attack."
    },
    {
        "id": 15,
        "national-id": 12,
        "name": "Butterfree",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "national-id": 12,
        "types": ["bug", "flying"],
        "classification": "Butterfly",
        "height": 1.1,
        "weight": 32,
        "abilities": ["Compoundeyes"],
        "hidden-ability": "Tinted Lens",
        "ev": [
            {
                "type": "sp. attack",
                "amount": 2
            },
            {
                "type": "sp. defense",
                "amount": 1
            }
        ],
        "capture-rate": 45,
        "egg-groups": ["bug"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Metapod at level 10", "East Lake Axewell", "Rollings Fields", "Slumbering Weald", "Bridge Field (Raid)", "Dappled Grove (Raid)", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Rolling Fields (Raid)", "South Lake Miloch (Raid)", "Rolling Fields (Gigantamax)"],
        "sword-flavor": "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        "shield-flavor": "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest."
    },
    {
        "id": 16,
        "national-id": 736,
        "name": "Grubbin",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "types": ["bug"],
        "classification": "Larva",
        "height": 0.4,
        "weight": 4.4,
        "abilities": ["Swarm"],
        "hidden-ability": null,
        "ev": [
            {
                "type": "attack",
                "amount": 1
            }
        ],
        "capture-rate": 255,
        "egg-groups": ["bug"],
        "sword": true,
        "shield": true,
        "obtain": ["Route 1", "Dappled Grove", "East Lake Axewell", "North Lake Miloch", "Slumbering Weald", "Watchtower Ruins", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Rolling Fields (Raid)"],
        "sword-flavor": "Its natural enemies, like Rookidee, may flee rather than risk getting caught in its large mandibles that can snap thick tree branches.",
        "shield-flavor": "It uses its big jaws to dig nests into the forest floor, and it loves to feed on sweet tree sap."
    },
    {
        "id": 17,
        "national-id": 737,
        "name": "Charjabug",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "types": ["bug"],
        "classification": "Battery",
        "height": 0.5,
        "weight": 10.5,
        "abilities": ["Battery"],
        "hidden-ability": null,
        "ev": [
            {
                "type": "defense",
                "amount": 2
            }
        ],
        "capture-rate": 120,
        "types": ["bug", "electric"],
        "egg-groups": ["bug"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Grubbin at level 20", "Axew's Eye", "Dusty Bowl", "Hammerlocke Hills", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Giant's Cap (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)"],
        "sword-flavor": "While its durable shell protects it from attacks, Charjabug strikes at enemies with jolts of electricity discharged from the tips of its jaws.",
        "shield-flavor": "Its digestive processes convert the leaves it eats into electricity. An electric sac in its belly stores the electricity for later use."
    },
    {
        "id": 18,
        "national-id": 738,
        "name": "Vikavolt",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "types": ["bug", "electric"],
        "classification": "Stag Beetle",
        "height": 1.5,
        "weight": 45,
        "abilities": ["Levitate"],
        "hidden-ability": null,
        "ev": [
            {
                "type": "sp. attack",
                "amount": 3
            }
        ],
        "capture-rate": 45,
        "egg-groups": ["bug"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Charjabug with Thunder Stone", "Giant's Mirror", "Giant's Seat", "Bridge Field (Raid)", "Dappled Grove (Raid)", "Giant's Cap (Raid)", "Giant's Mirror (Raid)", "Motostoke Riverbank (Raid)", "Rolling Fields (Raid)"],
        "sword-flavor": "It builds up electricity in its abdomen, focuses it through its jaws, and then fires the electricity off in concentrated beams.",
        "shield-flavor": "If it carries a Charjabug to use as a spare battery, a flying Vikavolt can rapidly fire high-powered beams of electricity."
    },
    {
        "id": 19,
        "national-id": 163,
        "name": "Hoothoot",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "types": ["normal", "flying"],
        "classification": "Owl",
        "height": 0.7,
        "weight": 21.2,
        "abilities": ["Insomnia", "Keen Eye"],
        "hidden-ability": "Tinted Lens",
        "ev": [
            {
                "type": "hp",
                "amount": 1
            }
        ],
        "capture-rate": 255,
        "egg-groups": ["flying"],
        "sword": true,
        "shield": true,
        "obtain": ["Route 1", "Route 2", "Dappled Grove", "Giant's Cap", "Slumbering Weald", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Rolling Fields (Raid)"],
        "sword-flavor": "It always stands on one foot. It changes feet so fast, the movement can rarely be seen.",
        "shield-flavor": "It begins to hoot at the same time every day. Some Trainers use them in place of clocks."
    },
    {
        "id": 20,
        "national-id": 164,
        "name": "Noctowl",
        "gender": {
            "male": 50.2,
            "female": 49.8
        },
        "types": ["normal", "flying"],
        "classification": "Owl",
        "height": 1.6,
        "weight": 40.8,
        "abilities": ["Insomnia", "Keen Eye"],
        "hidden-ability": "Tinted Lens",
        "ev": [
            {
                "type": "hp",
                "amount": 2
            }
        ],
        "capture-rate": 90,
        "egg-groups": ["flying"],
        "sword": true,
        "shield": true,
        "obtain": ["Evolve Hoothoot at level 20", "Bridge Field", "Giant's Cap", "Motostoke Outskirts", "Motostoke Riverbank", "East Lake Axewell (Raid)", "Giant's Cap (Raid)", "Hammerlocke Hills (Raid)", "Rolling Fields (Raid)"],
        "sword-flavor": "It always stands on one foot. It changes feet so fast, the movement can rarely be seen.",
        "shield-flavor": "It begins to hoot at the same time every day. Some Trainers use them in place of clocks."
    }
];