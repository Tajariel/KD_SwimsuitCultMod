"use strict";

let KDLatexDmg = 1;
let KDLatexBind = 2;

/**
 * @type {Record<string, effectTile>}
 */
let KDEffectTiles = {
	"Ice": {
		name: "Ice",
		duration: 1,
		priority: 1,
		tags: ["ice", "slippery"],
	},
	"Water": {
		name: "Water",
		duration: 40,
		priority: 1,
		tags: ["water", "freezeover", "conductive", "slippery"],
	},
	"Cracked": {
		name: "Cracked",
		duration: 100,
		priority: 0,
		affinities: ["Edge"],
		tags: ["terrain", "ground", "wettable", "freezeover"],
	},
	"Slime": {
		name: "Slime",
		duration: 10,
		priority: 2,
		affinities: ["Sticky"],
		tags: ["slime", "freezeover", "flammable", "conductive"],
	},
	"Latex": {
		name: "Latex",
		duration: 80,
		priority: -2,
		affinities: ["Latex"],
		tags: ["latex", "insulator"],
	},
	"Ropes": {
		name: "Ropes",
		duration: 30,
		priority: 5,
		tags: ["bind", "rope", "flammable"],
	},
	"Fabric": {
		name: "Fabric",
		duration: 30,
		priority: 5,
		tags: ["bind", "fabric", "flammable"],
	},
	"FabricGreen": {
		name: "FabricGreen",
		duration: 30,
		priority: 5,
		brightness: 3.5,
		lightColor: 0x55ff55,
		tags: ["bind", "fabric"],
	},
	"Vines": {
		name: "Vines",
		duration: 50,
		priority: 5,
		tags: ["bind", "vine", "flammable"],
	},
	"Runes": {
		name: "Runes",
		duration: 9999,
		priority: 10,
		tags: ["rune", "hiddenmagic"],
	},
	"Belts": {
		name: "Belts",
		duration: 30,
		priority: 5,
		tags: ["bind", "belt"],
	},
	"Chains": {
		name: "Chains",
		duration: 30,
		priority: 5,
		tags: ["bind", "chain", "noisy", "conductive"],
	},
	"SlimeBurning": {
		name: "SlimeBurning",
		duration: 5,
		priority: 3,
		affinities: ["Sticky"],
		tags: ["slime", "ignite", "fire", "hot", "conductive"],
	},
	"Smoke": {
		name: "Smoke",
		duration: 2,
		priority: 4,
		tags: ["smoke", "visionblock", "brightnessblock", "darkarea"],
	},
	"Inferno": {
		name: "Inferno",
		duration: 5,
		priority: 5,
		brightness: 6,
		lightColor: 0xff8933,
		tags: ["fire", "ignite", "smoke", "visionblock"],
	},
	"Ember": {
		name: "Ember",
		duration: 1,
		priority: 3,
		brightness: 3.5,
		lightColor: 0xb83716,
		tags: ["ignite", "smoke", "visionblock"],
	},
	"Sparks": {
		name: "Sparks",
		duration: 4,
		priority: 7,
		brightness: 6,
		lightColor: 0xaaaaff,
		tags: ["ignite", "electric"],
	},
	"Ignition": {
		name: "Ignition",
		duration: 1,
		priority: 0,
		brightness: 1.5,
		lightColor: 0xff8933,
		tags: ["ignite", "hot"],
	},
	"Torch": {
		name: "Torch",
		duration: 9999,
		priority: 5,
		brightness: 6,
		lightColor: 0xff8933,
		yoffset: -1,
		tags: ["hot"],
	},
	"TorchUnlit": {
		name: "TorchUnlit",
		duration: 9999,
		priority: 5,
		yoffset: -1,
		tags: [],
	},
	"Lantern": {
		name: "Lantern",
		duration: 9999,
		priority: 5,
		brightness: 6.5,
		lightColor: 0xffee83,
		affinitiesStanding: ["Hook", "Edge"],
		yoffset: -1,
		tags: ["hot"],
	},
	"LanternUnlit": {
		name: "LanternUnlit",
		duration: 9999,
		priority: 5,
		affinitiesStanding: ["Hook", "Edge"],
		yoffset: -1,
		tags: [],
	},
	"TorchOrb": {
		name: "TorchOrb",
		duration: 9999,
		priority: 5,
		brightness: 6,
		lightColor: 0x99aaff,
		affinitiesStanding: ["Hook", "Edge"],
		yoffset: -1,
		tags: [],
	},
	"IllusOrb": {
		name: "IllusOrb",
		duration: 9999,
		priority: 5,
		brightness: 4,
		lightColor: 0xffffff,
		affinitiesStanding: ["Hook", "Edge"],
		yoffset: -1,
		tags: [],
	},
	"IllusOrbDead": {
		name: "IllusOrbDead",
		duration: 9999,
		priority: 5,
		brightness: 2,
		lightColor: 0x6700ff,
		affinitiesStanding: ["Hook", "Edge"],
		yoffset: -1,
		tags: [],
	},
	"Steam": {
		name: "Steam",
		duration: 6,
		priority: 2,
		tags: ["steam", "hot", "visionblock"],
	},
};