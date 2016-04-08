// Code goes here

(function() {
  var app = angular.module('Dragonweb', ['dragon-directives']);

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.setCurrent = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

  app.controller('DragonController', function() {
    this.dragonMania = Dragons;
  });


  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(dragon){
      this.review.createdOn = Date.now();
      dragon.reviews.push(this.review);
      this.review = {};
    };

  });

  var Dragons = [{
    name: 'toothless',
    description: "Once thought of as the unholy offspring of lightning and death itself,Toothless has proven to be much more of a giant, winged pussycat than the stuff of nightmares. Toothless is a Night Fury, one of the rarest and most intelligent of dragon species. He is presumed to be the last living Night Fury in the world, at least on Berk or the surrounding isles in the Archipelago. Playful, inqusitive and intelligent. As the last known specimen of the Night Fury species, Toothless is indisputably special. He commands respects from dragons and humans alike. Toothless also Possesses an echolocation sense not unlike radar or sonar. When flying through dark or cramped environments, Toothless issues a plasma blast in all directions. When the plasma bounces off the nearby terrain and returns to Toothless,it gives him an incredibly accurate of his surroundings.",
    price:1000,
	Species : 8,
    Class : 110.50,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/toothless.jpg"
      
    ],
    reviews: [{
      stars: 5,
      body: "Awesome dragon. My favourite.",
      author: "Mridul",
      createdOn: 2364236468234
    }]
  }, {
    name: 'baby_nadder',
    description: " Much like their adult counterparts, baby Deadly Nadders are as beautiful as they are deadly with their tropical colorations. Hatching from the spiked eggs, baby Nadders are notable for their spryness and alert senses, as well as their ability to fly a bit sooner than other hatchings, such as baby Gronckles or baby Zipplebacks. Baby Nadders tend to flock around their mothers for protection and nourishment and only start to strike out on their own once they reach maturity in their broad wing stage. Deadly Nadders younfg and old have a remarkable sense of smell, hence their revised designation in the Tracker class. While the full range of this olfactory ability has yet to be fully explored, Nadders have been known to sniff out a Berserker spy from one-hundred feet away",
    Species : 8,
	 price:1000,
    Class : 110.50,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/baby_nadder.jpg"
    ],
    reviews: [{
      stars: 3,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  }, {
    name: 'baby_gronckle',
    description: "Even at early age baby Gronckles mirror their adult counterparts with their robust bodies and relatively tiny wings. Baby gronckles make up for their small wing size with tremendous flapping velocity, like hummingbirds. They open their mouths to display their groing tusks as they are teething , baby Gronckles seldom attack one another. Gronckle eggs don't just hatch-they explode like grenades.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/baby_gronkle.jpg"
    ],
    reviews: [{
      stars: 1,
      body: "This dragon is WAY too expensive for its rarity value.",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'armorwing',
    description: "Sitting atop its hoarded pile of looted metal on Iron Isle, the Armorwing dragon appears at once impregnable and invincible, but appearances can be deceiving. with its welding torch-like flames and chain-whip tail, the Armorwing keeps enemies at bay long enough for it to attract new scraps of metals to its magnetic body and fuse them into an ever expanding coat of armor. However, that armor is just a shell used for protection and intimidation. Beneath that reinforced hide lies a much differnt dragon that would prefer to remain in isolation with its private trove of discarded metal tresures.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/armorwing.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
    name: 'baby_nightmares',
    description: "Hatching fast and fiery, baby Monstrous Nightmares are quick to separate from the rest of the litter and assert their independence with minutes of their birth. Much like their adult counterparts, baby Nightmares are skilled hunters and adaptive survirors, making them one of the hardiest dragon breeds. Despite their self-reliance and solitary natures, Nightmares grow up to be some of the most devoted dragons and are particularly protective of their Viking riders, even if they have a funny way of showing it sometimes. As with all babies, young Nightmares are konown to drool regularly. However, this slobber packs a punch, since its kerosene gel composition makes it akin to lighter fluid. ",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/baby_nightmares.jpg",
      "img/gem-05.gif",
      "img/gem-09.gif"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'baby_zipplebacks',
    description: "Coming soon",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/baby_zipplebacks.jpg",
      "img/gem-05.gif",
      "img/gem-09.gif"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'changewind',
    description: "Coming soon",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/changewind.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
    name: 'dragons_belchbarf',
    description: "Coming soon",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/dragons_belchbarf.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
    name: 'white_bewilderbeast',
    description: "Coming soon",
    Species : 8,
    Class : 110.50,
    Attack : 7,
	 price:1000,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/white_bewilderbeast.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'cloudjumper',
    description: "Coming soon",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/cloudjumper.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Bing, Bam and Boom',
    description: "Separated from the rest of the their flock at an early age, the unruly trio of Thunderdrums dubbed Bing, Bam, and Boom eventually found their way back to Berk--and proceeded to trash it. Since they had grown up without proper guidance from an adult Thunderdrum, these adoloscent dragons never learned how to control their sonic blasts and were unable to tell the difference between a whisper and a scream. While it's true that Thunderdrums create tremendous amounts of noise, they also possess the ability to cancel out each other's sonic blasts. By modulating its roars to the roars to the proper proper frequency, a thunderdrum can use its soundwaves to negate an attcking Thunderdrum's bellow, rendering it into a rather calming wave of white noise!",
    Species : 'Thunderdrum',
    Class : 'Tidal',
    Attack : 12,
    Speed : 14,
    Armor : 10,
	Firepower : 16,
    Venom : 0,
    Jaw_strength: 7,
    images: [
      "img/Bing_Bang_Boom.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nicer",
      createdOn: 2364236468234
    }]
  },{
   name: 'Catastrophic Quaken',
    description: "As one of the biggest dragons to appear in the series, the Catastrophic Quaken has a somewhat stubby and short body with rather small wings. This dragon also has dark brown, wrinkly skin, akin to that of the Gronckle and the Hotburple. It is covered with spikes all over. The Catastrophic Quaken's head, body, and tail are covered in short spikes. Its lower jaw can split in two, with a tongue on each jaw. They are larger than other dragons, including the Gronckle.The Catastrophic Quaken can curl up into a boulder and roll into either its prey or its predators in a form of attack or defense. It can also smash into the ground with powerful strength and create a shock wave strong enough to knock dragons down whether on land or in the air.Catastrophic Quakens, like most Boulder Class dragons, eat rocks. Their love for these geological materials derive from their habitat in rocky terrains where they roam afoot and pick up sustenance while traveling. They also can produce a magma slobber from their jaws. When fully unhinged, their trifold jaws can ingest a plethora of rocks, which it subsequently spews out in the form of a molten lava stream.This dragon is described to be the 'bully of the dragon world'. It is extremely lonely and cautious towards humans due to a lack of interaction with them. Like the Razorwhip, it has very limited contact with humans and other dragons making them distrusting and destructive, however simply by slowly introducing it to humans and dragons you can earn it's loyalty. Once you do that, it becomes quite an agreeable animal. According to School of Dragons, these dragons surround their nests with large boulders in order to protect them from other dragons. According to School of Dragons Quakens are know to be loyal dragons.",
    Species : 8,
    Class : 'Boulder',
    Attack : 12,
    Speed : 14,
    Armor : 35,
	Firepower : 10,
    Venom : 0,
    Jaw_strength: 20,
    images: [
      "img/Quaken.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nicer",
      createdOn: 2364236468234
    }]
  },{
   name: 'Death Song',
    description: "The Death Song is a rare and dangerous dragon that uses a melodic call to lure it's targets into the dense jungles of Melody Island. Only a few dragons can resist the melodic call. Death Songs are also shown to be extremely fast and strong.The Death Song uses a siren-like song to lure its prey to a remote island. The secret behind this amazing feat is the Death Song's extra cervical vertebrate.[1] When the Death Song calls, its extra vertebrae expand into its frills, and its song is able to be projected to specific targets up to a mile away.After striking its prey, the Death Song covers it in a yellow, amber substance which traps and preserves victims as it hardens into a stiff amber cocoon. This cocoon is so strong, it is only penetrable by flame. Afterwords, the Death Song returns to finish its prey off. It does this by breaking the prey out of the amber and then eating them.Considering their size, Death Songs have strong jaw muscles, as they have been shown to lift up medium sized dragons such as the Gronckle, which weighs over a few tons. It apparently can also disconnect the amber substance from the ground with its own jaw.   ",
    Species : 8,
    Class : 110.50,
    Attack : 16,
    Speed : 17,
    Armor : 16,
	Firepower : 13,
    Venom : 0,
    Jaw_strength: 10,
    images: [
      "img/Death_Song.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'fireworm',
    description: "These dragons are often found in large groups. This makes them extremely dangerous. They are even remotely aggressive, occasionally clinging to potential enemies. Usually Fireworms make their homes in dark caverns. Fireworm Queens are very protective of their firecombs of gel and will chase down anything that tries to take it. As being a mother, the Queen has a devoted, discreet nature even on rage to take back her firecombs, and being highly intelligent as being capable of conjecturing the intruders' motives and objectives. Strangely enough, average fireworms are afraid of fire. As shown in Portrait of Hiccup as a Buff Young Man, when Toothless blasted at them, they started to back off. The Queen, however, is not. In the episode Race to Fireworm Island, when Stormfly blasted the Queen, she stood firm and kept fighting. All fireworms can heat up their skin to a temperature expressed to be hotter than the sun and being high enough that they can burn almost anything. While doing so they also generate a great amount of light, and sometimes, they even set themselves on fire. It is known that the closer two fireworms are to one another, the brighter they will shine. This ability is used as self defense and also can be used against other dragons. It has been shown to be very powerful especially when there is a pack of dragons using this ability. On top of that, they are able to stand on four legs and their tongue has a venom that has the special ability to reignite the worn out fire of Stoker Class Dragons, like Monstrous Nightmares. Fireworms can also produce some kind of gel that gives them their fire and they dragon in honeycomb-like containers. When Stoker Class dragons consume that, their fire is reignited. Fireworm Queen has shown to be clever as she was able to a take short cut to catch up the escaping Hiccup, Toothless, and Snotlout. Another way of showing off her intelligence is that she quickly understood that a bond between a dragon and their rider was strong enough to risk their lives for each other. ",
    Species : 16,
    Class : 110.50,
    Attack : 16,
    Speed : 12,
    Armor : 15,
	Firepower : 30,
    Venom : 0.14,
    Jaw_strength: 3,
    images: [
      "img/fireworm.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'flightmare',
    description: "The Flightmare is a medium-sized dragon that has a very ghost-like appearance. Its body is covered in tiny spots that almost resemble the night sky. It slightly resembles a mix between a Skrill, a Night Fury, and a Fireworm, with blue, glowing scales. It appears to get a bright glowing, ghost-like appearance from the glowing blue algae that is a stapled part of its diet. From what has been seen, the Flightmare is a very aggressive and territorial dragon, being very protective of its territory and food sources. Seeing how Flightmares are build for speed and defense, they usually avoid fights with bigger and stronger dragons. Flightmares have been shown to be quite determined, as the Flightmare in Fright of Passage kept chasing his opponents, and was willing to search food over long distances. They seem to be quite reclusive and avoid contact with humans, unless they get in the way of their algae, or if they think that they do. The Flightmare's body produces a weak and dark glow, but bright enough for it to be spotted easily. But when the Flightmare consumes Glowing Algae, a type of unique algae that glows with their metabolism, its body's glow is greatly enhanced. Flightmares can also control on how bright they can glow after consuming the algae. They can use this ability to nearly blind their prey or enemies. The Flightmare can strike with a mist that paralyzes its prey to give itself enough time to return and finish it off. Its prey appears to have a glossy surface after being sprayed for a while. In order for the Flightmare to kill its prey with its mist, it needs to spray its prey for several seconds in order for it to freeze to death, for the temperatures reach below freezing.",
    Species : 5,
    Class : 110.50,
    Attack : 5,
    Speed : 8,
    Armor : 4,
	Firepower : 7,
    Venom : 10,
    Jaw_strength: 4,
    images: [
      "img/flightmare.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'grump',
    description: "Grump greatly resembles a Gronckle, but he is larger in size and has larger wings, and his eyes are positioned closer to his snout than to his ears. He is rather unintelligent looking and lazy. Grump is extremely lazy and spends most of his time sleeping. But he is loyal and affectionate with his rider Gobber, a lot like a cat. Although Gobber complains (very hypocritically) about Grump, they are obviously really good friends and partners, and are perfect for each other. Grump is shown to be able to fly low and knock people over with his lumpy tail. He is very talented at this, as he can do it while he's dozing (sometimes even asleep), airborne, and carrying Gobber at the same time.",
    Species : 8,
    Class : 110.50,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/grump.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Hookfang',
    description: "Hookfang is shown to be a very powerful dragon. Hookfang has never shown any sign of struggle of lifting up any heavy objects in the air. He has shown to be carrying heavy Vikings, such as Gobber, Stoick, Alvin, and Fishlegs, plus with an axe, on his neck with an extra weight of Snotlout without any sign of struggle. Fishlegs can even stand on Hookfang's neck with Snotlout sitting on it as well. He has also been able to wrestle with Toothless (although not always winning, or the fight was broken up) and been able to throw Toothless away with his mouth (Riders of Berk 'Viking for Hire').  Hookfang's wings are strong enough to blast a fullgrown Hideous Zippleback, blow away Barf's gas, Smothering Smokebreath veil of smoke, or move a pair of trees a very far distance. Hookfang was able to combine this hidden ability and his fire in order to create a more powerful attack. He has been seen using this in the battle against Dagur the Deranged and used this to save the Screaming Death's mother from harm to set her free from the ropes[7]. Hookfang is a very fast flier. He shown to able to keep up with Toothless at the Thawfest race, though ultimately not as fast as the Night Fury. This may be the result of his hard training with Snotlout. This shows that he is faster then normal Nightmares. Snotlout had stated that Hookfang speed doesn't match up to Stormfly's speed, and he believes that Astrid's dragon is extremely fast, however this is because of Stormfly's chicken diet which enables Stormfly to surpass Hookfang in terms of speed. He has shown that he is also relatively fast when running and swimming. Hookfang has shown to have amazing stamina and endurance even before being tamed by Hiccup and training hard with Snotlout. Hookfang has shown for his kind to have great stamina like as he was able to running out of his cage around the arena as he was also chasing Hiccup in the arena, he even got hit by the strength of Astrid's by throwing a hammer at his face able to chase her as well. But he focus on Hiccup again to attack him and then being attacked by Toothless, but he lost in brutal short fight and still be able to shown that he was in a perfect condition afterwards.[14] Even when he became sick of the hypothermia, which was a result from Snotlout's hard training, he could still fly high to catch up to the dragons, but though with much trouble by his illness was getting worst by lower some altitude.[5] He also recovered fairly quickly several times, such as when he was stun by the Screaming Death's sonic shriek, slam by Screaming Death, able to endure Meatlug tackle or fell into Mildew's house from diving full speed to save his rider from harm [25]. He even was able to get back up from being thrown by a Titan Monstrous Nightmare and attack by this dragon to counting to fly full speed to engage combat against the other male. Like most dragons he was able to understand that Hiccup wasn't trying to kill him by showing to take away his weapon and helmet. Also Hookfang is able to understand Snotlout's orders. Though this doesn't always mean he obeys them. The orders he knows are 'Annihilate' by hand singles[25] and 'Wing Blast', that was latter being taught by Astrid[6]. He even understood from Snoutlout to come closer but quieter to do a sneak attack[7]. He even tries to be smarter then his owner by getting back on him for being mistreated. ",
    Species : 8,
    Class : 110.50,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Hookfang.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Meatlug',
    description: "Meatlug mellowed the most after the events in the movie. She is very kind and loving. Meatlug is also motherly, as she even plays with the younger kids on Berk, as seen on Gift of the Night Fury. She also comforts Fishlegs when he's down. Meatlug can also be hostile to enemies[9]. She cares about Fishlegs very much, and is usually by his side. Meatlug has shown multiple times to be very loyal to Fishlegs. They have a very sweet, though slightly weird relationship. They also understand each other very well. In fact after Hiccup and Toothless they have the strongest bond. Like most dragons and their riders, they have a similar personality. They both show that they can be very afraid of things, but both will try to get over their fear to face it. She saved Fishlegs on numerous occasions and stood by him when he needed her, which was shown in the cave. She is shown to be protective of Fishlegs, which was proven when she protected Fishlegs from the Speed Stingers. She was visibly worried about Fishlegs when he got close to Gobber's traps.[12] Meatlug is also smart in her own way. She even shown to have more bit of dog like personality such as when she gets upset she starts to whine adorably. She also doesn't like being alone, as shown when Fishlegs was hypnotized into Thor Bonecrusher. She is shown to be very intelligent as understand Fishlegs and humans in general quite well. She usually knows when Fishlegs needs company or comfort (Though this isn't always two-sided) and has been trained to understand Fishleg's hand gestures as commands such as when Fishlegs saved Ruffnut and Tuffnut from a breaking tree branch.[4] She also figured out quickly Toothless had eaten an eel.[19] She has also learned how to recognize her rider's dragon call that acts as a beacon in case she and Fishlegs get separated.[4] She even came up the idea to use her powerful gas in order to be free from the Screaming Death mouth.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Meatlug.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Night Terror',
    description: "Night Terrors are small dragons that are slightly larger than the Smothering Smokebreaths and the Terrible Terrors. Each individual Night Terror is black in color, except for the alpha. When they group together, especially at night, they appear to be all black in color and they form the shape of any large dragon. They have small teeth and rounded tongue. They also have two small horn-like ledges on top of their nose. They also appear to have a short tail with four, short, thin spikes on the tail. Night Terrors are able to fly closely together in order to form the shapes of larger, more terrifying dragons for protection. This behavior resembles that of certain shoals of fish, who swim together in order to appear larger so as to scare off predators. Also, each swarm has an alpha. The alpha is able to control its fellow dragons and instruct them to form certain formations. They have been shown forming a Night Fury, Fireworm Queen and a larger Night Terror. They are able to form a shape of other dragons, making themselves look bigger. They even figured out their own way to get rid of the Fireworms by forming themselves into the shape of a Fireworm Queen. It is possible they had never seen a Fireworm Queen before, but they had the idea to make themselves look like a large Fireworm, hoping they would be followed by the smaller Fireworms. ",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Night_Terror.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Red_death',
    description: "The Red Death, the second biggest species after the Bewilderbeast, is a colossal dragon; literally its entire body is a weapon itself. The dragon primarily uses its enlarged nostrils (that slightly resemble those of the Deadly Nadders) and hearing in order to hunt down its prey. Its entire body is heavily armored with horns and a coral-like frill, enabling the titanic beast to perforate, pierce, and demolish enormous rock cliffs of the volcano and smaller mountains entirely. It also has a tail specifically designed to smash into objects. Not only with brutal, destructive power, the queen of dragons has been shown to have an incredible speed and stamina in flight despite its tremendous size, being able to keep up with Toothless for long amounts of time. This gigantic dragon is able take many attacks from other dragons, Stoick's strength from throwing wooden-like spear, getting hit in the eyes by Snotlout, Toothless' Plasma blasts attacks and being able to take the damage from crashing into the sea stacks. The dragon also does not have a blind spot, due to having six sensitive eyes, and heavily relies on scent and hearing. As shown its sense of smell was very strong enough to find intruders in her home. The Red Death's flame jets are enormous and are powerful enough to take down an entire Viking fleet of ships in just one breath. Like other dragons, however the Red Death can't hunt efficiently if its wings are damaged and it's just as susceptible to fire on its insides. ",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Red_death.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Scauldron',
    description: "This dragon is gigantic, growing up to a size nearly the same as many giant cetaceans. It is a huge sea dragon that walks on four stubby and powerful legs. They have intense obesity to heat the water they suck in. Its tail is like a fish, helping it to swim. When filled with water, the Scauldron's stomach protrudes out and becomes very round. Its neck is very long and thin, and its head is usually fairly slender with its bottom jaw having a sort of pouch that hands from its chin. When it is out of water for a long time it begins to dehydrate due to which it's skin turns into a shade of silver. These massive, powerful dragons are well-known for blasting currents of searing waters that can destroy an entire ship in seconds. It is revealed that the venom of these dragons is the only known antidote to the critically noxious Blue Oleander pollen; they have tolerances to the flowers despite being an aquatic race. According to Hiccup, Scauldron venom can kill a human in 24 hours. They are immune to the Blue Oleander. ",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Scauldron.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Screaming_death',
    description: "The Screaming Death is a pure white dragon which is a subspecies of the Whispering Death. It has large red eyes, a longer and more massive body and tail than a normal Whispering Death. It also has three rows of teeth, but they are aligned differently than those of the Whispering Death, set in a chin reminiscent of the Seadragonus Giganticus Maximus. Like the Whispering Death, it can tunnel underground, and can shoot spikes from its body, although the tunnel it creates and the spikes it launches are larger. But unlike the Whispering Death, the Screaming Death shoots balls of fire like a mortar. During this, it also releases fire from behind it's frill. Judging by the massive size of what is apparently a hatchling, this albino giant is probably one of the biggest dragons of them all. It is attracted to sunlight just as the Whispering Death is weakened by sunlight. It is also known to be highly intelligent, as it did not fall for the reflection off Hiccup's shield a second time. One hatches every 100 years. And it was in it adulgant state the second time so the third time it will be an adult Screaming Death bigger and the Whispering Deaths who helped the Screaming Death will be adults when the Screaming Death comes back it will be a lot bigger. And this dragon is a queen dragon so there probabily be more Screaming Deaths. The Screaming Death gets its name by its incredibly disorienting roar that can affect the flight of other dragons.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Screaming_death.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Seashocker',
    description: "The Seashocker is one of the few species to utilize electricity as a weapon. Although it can emit electricity from its mouth, it will be released when it has bitten something, or in a short range just before it nips its target. Their electro-charged bites can take out even the largest enemies. Because of their electro-abilities, rather interestingly, electric eels are regarded as the closest evolutionary relative to the Seashocker, which may be the reason eels are feared by almost all dragons.[2]The episode The Eel Effect, however, suggests the reason dragons fear eels is because of eel-pox and is completely unrelated to the Seashockers. As seen in Race to the Edge, Seashockers are be able to generate a field of electricity as a protection around themselves by joining their heads together. An electrical current can be produced by the snout of each head. When the electrical current joins together, it generates a round electrical field, similar to how the Skrill does. The energy released creates a electrical force so powerful, that even large creatures like Scauldrons, after being electrocuted, would be ejected away very quickly, regardless the density of water. It can also apparently eject a human up to approximately 60 feet.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Seashocker.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Skrill',
    description: "This incredible creature has large wings and a spiked back and tail. The spikes on the Skrill's back and tail are sharp enough to cut with the slightest abrasion, and it's an excellent flyer. It also appears to have three shark-like gills on its neck. The Skrill possess a crown of spikes on its head which nearly all are the same length except for the center one. The Skrill's crown can also be used to give it expression, as it is able to control them to be pulled back or forward. Skrills have three short spines on their chin. Its head slightly resembles that of a Thunderdrum or a Flightmare. The proportion of its head, body, and wings are quite close to that of a Flightmare's. It apparently resembles a Night Fury in flight and rivals its speed, being only slightly slower. It's the size of a Deadly Nadder, but incredibly fast, comparing speed to size. Like the Monstrous Nightmare, its locomotion on land resembles that of a Pterosaur, using the large claws on its wings to walk and run on land. However, the Skrill has been shown to walk and run on its two legs with its wings folded. A new model in School of Dragons was made for the Skrill, featuring the Skrill walking on two legs, instead of its original locomotion. Find more information at Dragon Anatomy. One of the most mysterious and feared species in the Book of Dragons, the Skrill is aggressive, powerful, and nearly untrainable. It appears to be almost as feared as the Night Fury, if not more feared (this could perhaps be due to the Berserkers who used to harness the Skrill and use it as a weapon). This reclusive dragon is belligerent and as unpredictable as lightning strikes. It is very territorial, despite following stormy weather; Skrills do not breathe fire, instead, they channel lightning down their metallic spines, firing it from their mouths in a show of destructive blasts. If you find yourself flying through a thunderstorm, watch out! Despite it's average size, Skrills can give as good as they take, and they can take a lot.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Skrill.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Skullcrusher',
    description: "In comparison to Grump, Skullcrusher is stern and serious looking, and sometimes a little stubborn, (corresponding with the personality of Stoick). He looks like a cross between a Triceratops and a scarab beetle (due to his neck plates). He always has his nose to the ground, following a scent, as is typical for his species. He can be friendly, especially towards his rider. He is doggedly determined once he has caught a scent. He is caring and a natural leader, warning the other dragons of an oncoming tsunami to ensure their safety. Skullcrusher is extremely strong and quite capable of destroying any dragon traps he encounters using his tail and jaws. Skullcrusher can charge with his head lowered and horns displayed to do some serious damages. He also doesn't have trouble carrying large Vikings on his back such as Stoick and extra weight of Hiccup. Skullcrusher's extreme strength was greatly proven when he was able to ram down a sea stack when flying at full speed towards it,[1] as well as during the time when he charged clear through a Berserker ship and sunk it into the ocean. Like all Rumblehorns, Skullcrusher has a keen sense of smell, enabling him to track anything once he has caught the scent.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Skullcrusher.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Smothering smokebreath',
    description: "This dragon can create a veil of smoke to hide from enemies or victims. Because of this ability, it was thought to be a kind of Fog Monster and became legendary, to the point that, although the Book of Dragons had information about it, Fishlegs believed it was just a myth. It is classified as a Mystery Class dragon. Although they usually breathe smoke, they can breathe a very hot fire, since it is capable of melting metal in a matter of moments. A large swarm may appear as a strange smoke cloud. The Book of Dragons in Wild Skies says the smoke is pumped out of their skin. A single Smokebreath by itself is relatively of little consequence, but an entire swarm is powerful enough to tear apart a fleet of Berserker ships or bring the Isle of Berk to the brink of defeat by stripping it of nearly all the metal available. Everybody believed that Breakneck Bog to be haunted by some kind of Fog Monster. The riders found an unconscious Trader Johann on a wooden plank. He says he was attacked by the Fog Monster. When they investigate, they discover that Johann's merchant ship is on top of a tree. After the ship drops, the Fog Monster chases the dragons and their riders. They are revealed to be Smothering Smokebreaths after the dragons used their wings to clear the smoke. ",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Smothering_smokebreath.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Snaptrapper',
    description: "The Snaptrapper is a dragon that has four heads, each with three jaws. Their tails are forked like the Hideous Zippleback's, and they look somewhat like the latter as well. Their unique, frightening jaws open up in a way that resembles a flower blooming, and the spines on their neck, body and tail look similar to leaves. All four heads of the Snaptrapper have three tongues; these tongues each resemble the anther of a flower, as it is the Snaptrapper's tactic to resemble a plant of some kind to lure prey in close, or to help them hide from the dragon's few potential predators. They are one of the larger species of dragons, and have very long necks and tails. The Snaptrapper is known to breathe a flammable mist containing methane, and can produce the smell of chocolate from their mouths to lure in potential prey. They also spit acid that can sting foes and even melt through metal. Superbly stealthy hunters, they can excellently camouflage themselves amidst dense vegetation, both to hide from larger dragons and from their prey. As shown in the Book of Dragons short, these dragons are capable of swallowing a Viking whole. The Snaptrapper also has the most deadly venom of all dragons.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Snaptrapper.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Snow_wraith',
    description: "The Snow Wraith has a snowy white body. It also has blue highlights, mainly around the wing frames, legs, face and tail spikes. It possess two legs and a broad wings. The Snow Wraith has different types of teeth and is the only strike class dragon to have significantly different types of teeth. Sharp and pointy teeth for biting and tearing cover most of its mouth, while two prominent tusks used for grabbing protrude from its lower jaw. The teeth that are the key to open the Dragon Eye are known to be found just in front of the large tusks. Also, this dragon has a long ledge under its chin and what seems to be thick eyebrows. The Snow Wraith has a long tail covered with spikes and a thick, fleshy tongue with bumps on it. It has two claws and toes on its feet. The Snow Wraith's wings are unique, in terms of structure. The humerus (part of bone connected to the body) is the only part of the wing connected to the body, with the rest of the wing structure is hanging outside of the body. This allows the Snow Wraith to easily walk on four limbs, as the wing fingers that stretch to the back of the wing are placed in a very unique way, some of them are close to each other, while the next one would be further apart. This also makes its humerus very strong, while most dragons require extra support from the rest of its wings for speed and stability, the Snow Wraith is still able to fly at very high speeds. The Snow Wraith is highly aggressive and likes to attack when it cannot be seen. As such, it often strikes when a snowstorm approaches, which are quite frequent in Glacier Island. Snow Wraiths also attack in ice caves. It can burrow through the ice and flank enemies, then burrowing through the ice walls again for cover. Snow Wraiths are also very adapted to this kind of attack, as they are very fast at firing, flanking and burrowing. They can also work efficiently in a group.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Snow_wraith.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Speedstinger',
    description: "The Speed Stinger is a swift, flightless dragon which resembles a featherless theropod Raptor/dinosaur. Even though it's flightless, with sail-like appendages on its head, back and legs, the Speed Stinger does have wings, these are very small and useless. Its name is derived from the barbed stinger at the tip of its tail (rather like a stingray's). All of them have red stingers and red eyes. Their small pupils resemble those of Terrible Terrors. They also have muscular back legs with webbed feet. Average Speed Stingers are green, while the leader has red stripes and highlights, and is slightly bigger than the rest of the pack. The Speed Stinger is described as the Velociraptor of the Dragon World, being extremely intelligent and cunning. These dragons are ravenous scavengers, that will often steal from other dragons and Vikings but they probably also hunt. They live in packs, led by a Lead Stinger, and have a hive-like mindset. They hide under the shadows of the sun. The Lead Stinger decides everything, and the pack follows wherever he goes; without him or her, the pack becomes useless. Speed Stingers are nocturnal, spending the days in caverns in order to avoid predators. When attacking, they leap in the air and use their stinger to paralyze their victims. Any member of a Speed Stinger pack would be very loyal to their pack, and protect them at all costs, even from its own kind, or previous pack. The Speed Stinger lives up to its name. It is the fastest dragon on land, hunts in packs, and can't fly like all the other dragons. However, with its super speed, it can jump higher than any other dragon. It is also shown to be good at stealth and is a highly intelligent dragon. Speed Stingers are nocturnal dragons, but can still be awaken during the day, usually because of an injury. Speed Stingers lack any flame usage. This is because all the internal flame energy goes to its powerful legs, which give it its speed, agility, and the capacity to jump high. Because of their thick hides and large amount of internal energy, Speed Stingers have great stamina for use in an entire night.",
    description: "The Speed Stinger is a swift, flightless dragon which resembles a featherless theropod Raptor/dinosaur. Even though it's flightless, with sail-like appendages on its head, back and legs, the Speed Stinger does have wings, these are very small and useless. Its name is derived from the barbed stinger at the tip of its tail (rather like a stingray's). All of them have red stingers and red eyes. Their small pupils resemble those of Terrible Terrors. They also have muscular back legs with webbed feet. Average Speed Stingers are green, while the leader has red stripes and highlights, and is slightly bigger than the rest of the pack. The Speed Stinger is described as the Velociraptor of the Dragon World, being extremely intelligent and cunning. These dragons are ravenous scavengers, that will often steal from other dragons and Vikings but they probably also hunt. They live in packs, led by a Lead Stinger, and have a hive-like mindset. They hide under the shadows of the sun. The Lead Stinger decides everything, and the pack follows wherever he goes; without him or her, the pack becomes useless. Speed Stingers are nocturnal, spending the days in caverns in order to avoid predators. When attacking, they leap in the air and use their stinger to paralyze their victims. Any member of a Speed Stinger pack would be very loyal to their pack, and protect them at all costs, even from its own kind, or previous pack. The Speed Stinger lives up to its name. It is the fastest dragon on land, hunts in packs, and can't fly like all the other dragons. However, with its super speed, it can jump higher than any other dragon. It is also shown to be good at stealth and is a highly intelligent dragon. Speed Stingers are nocturnal dragons, but can still be awaken during the day, usually because of an injury. Speed Stingers lack any flame usage. This is because all the internal flame energy goes to its powerful legs, which give it its speed, agility, and the capacity to jump high. Because of their thick hides and large amount of internal energy, Speed Stingers have great stamina for use in an entire night.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Speedstinger.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Stormfly',
    description: "Like all Deadly Nadders, Stormfly is a very beautiful dragon, and unfortunately, she knows it. She has a generous dose of vanity which is typical for her species. She is normally docile, but she can turn aggressive when she needs to. She also loves to play fetch and will chase after anything that is thrown, and bring it back again. Stormfly is shown to have a strong bond with her rider, and is caring and protective of Astrid. Though sometimes she's willing to connect with others, like Heather and Eret, and let them ride her. Stormfly has shown to be loyal to save her rider in time from a fallen anchor by Trader Johann's ship. Stormfly seems to be quite intelligent, as Astrid managed to teach her several hand signals. Stormfly has always been a fast dragon, as was demonstrated several times. However, her speed has been increased greatly, since Astrid discovered a hidden ability of the Deadly Nadder, which is that they fly faster when put on a diet of Chicken.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Stormfly.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'terrible-terror',
    description: "The Terrible Terror is a Stoker Class dragon. It is the second smallest of the dragons, after the Fireworm, but also one of the most feared. It loosely resembles the Common or Garden Dragon and is roughly the size of a small cat. The Terror can crawl into Viking homes, sheds, outhouses and shacks, attacking when its prey is least expecting it. The only warning a Terror gives is the hissing sound it makes just before breathing fire. It is capable of such pinpoint accuracy with its flames that it can be considered the sniper of the Dragon World. The Terrible Terror resembles a Common or Garden Dragon in appearance. It has an iguana-like body, two pairs of horns, one pair of wings, and a tail with a barbed tip. It comes in various colors, with green being the most common. Others are red, orange, blue, yellow and purple. Its physical attributes (such as the type of horn and spinal ridge) suggest that, despite the size difference, it is closely related to the Monstrous Nightmare. Its large yellow eyes and small size make it one of the most adorable species of dragons. Titan Terrors are reddish brown in colour. They have developed larger, black horns on their head and bigger eyes, thus giving them a more 'devilsed' appearance. They have larger spines on their back. Their wings possess dark brown spots and they have a small, pointy, arrow-shaped tail. These Titans have grown slightly larger, though are still small compared to other dragons in the franchise.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/terrible-terror.PNG"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Timberjack',
    description: "Timberjacks is large dragon with its broad, razor sharp wings that can cut through a forest of trees. They can use their wings to fold around weary riders like a makeshift tent that can be use for protection and warmth from the elements and from other dragons. Physically, their main weaponry is their wings that can slice through a forest of trees. It can be used for offensive or defensive goals. According to Rise of Berk, the Timberjack's wings are not only great at slicing trees, but they are also tough and have the ability to absorb a great deal of punishment. The fact that they have strong wings was later reinforced in School of dragons as it has the 'Tough' Factor.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Timberjack.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Typhoonerang',
    description: "Typhoomerangs are very large dragons, and they come in a variety of colors including blue, yellow, red, and orange. They have two large horns and orange eyes.The legs are exactly like that of a Monstrous Nightmare.They look like a mix-breed of a Monstrous Nightmare and a Timberjack. As a baby, Torch has a measured wingspan that reached 20 inches long. Until a fully grown Typhoomerang was spotted, Hiccup and the others thought that the baby Torch was already fully grown. Much to their surprise, fully grown Typhoomerangs can reach an outstanding difference from a juvenile, not only that adult Typhoomerangs reach huge sizes, but that they do grow up fast as well. Much later, the group discovers a large part of the forest destroyed, with a great swirling marking in the middle. They concluded that it was caused by a giant Typhoomerang. Hiccup finally realizes that this was the reason that Toothless tried to warn him about. Torch's mother suddenly appears and starts to chase Hiccup, Toothless and Torch. Hiccup and Toothless, however, manage to force the mother in a crash landing and Torch is reunited with his family.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Typhoonerang.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Whispering_death',
    description: "The Whispering Death is somewhat similar to a Deadly Nadder, but with bulging eyes, face and spirals of barbed teeth that line the entirety of his inner mouth. It has a snake body and neck, similar to a Zippleback, but Whispering Deaths have no legs, only the lower spikes (which can be used for locomotion through their tunnels). Many consider them extremely vicious and often have nightmares after confronting these horrors. Their gaping mouths are full of deadly rotating teeth. Their wings can also be rotated, presumably to aid in the drilling process. They look very similar to the Gulper Eel. Whispering Deaths are extremely deadly, like most other dragons, and are able to chew their victims after their ingestion, using their multiple rows of rotating teeth. They usually live in underground tunnels they burrow themselves, using a burrowing attack against oncoming enemy/prey. The Dragon Guide once said that they were extremely dangerous and must be killed on the spot. Nevertheless, despite their fearsome reputation, they wanted to brush their teeth. In What Flies Beneath, Fishlegs noticed that a Whispering Death's eyes were sensitive against direct sunlight, which is why it spends most of its time underground. Whispering Deaths are known to be more dangerous in their infant stages, in contrast to their teenage or adult forms. They say that they have less control over their rotating teeth and spines, and are described to be out of control saw blades. Young Whispering Deaths are known to be extremely territorial of their homeland",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Whispering_death.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'Windshear',
    description: "Like all Razorwhips, Windshear distrusts most humans and dragons. However, once her trust is earned, she is a loyal ally. Windshear cares deeply for Heather. She did show some curiosity to Tuffnut when he woke up after she knocked him out. His proposal did not seem to bother her. Due to her sharp scales and reflexes, Windshear's body is literally a living weapon. Her wings can slice through trees and rocks. She uses her tail as a whip that can cut just as well, and can grip objects too. Being in the Sharp Class like Stormfly, Windshear can shoot metallic spikes from her tail at enemies with pinpoint accuracy and great force. Like her tail and wings, they harbor enough destructive power to eviscerate sturdy Viking ships with but a few shots. Windshear appears to be extremely strong. She was able to hold off a Typhoomerang, even though she was badly injured after that. Also, when Dagur's army chained her up, she was able to drag the first two ships slightly and resist the other ships. She was able to endure the attacks from a Typhoomerang but was badly injured. She is proven to have great stamina on her side to travel long distances.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/Windshear.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  },{
   name: 'cloudjumper',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    Species : 8,
    Class : 110.50,
	 price:1000,
    Attack : 7,
    Speed : '#CCC',
    Armor : 14,
	Firepower : 7,
    Venom : '#CCC',
    Jaw_strength: 14,
    images: [
      "img/cloudjumper.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "Nice ",
      author: "Nice er",
      createdOn: 2364236468234
    }]
  }];

})();
