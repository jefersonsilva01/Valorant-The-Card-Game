const characters = [
  {
    name: "brimstone",
    cover: "../../assets/images/brimstone.png",
    class: "../../assets/images/controller.svg",
    bio: "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
    skills: {
      Attack: 8,
      Defense: 7,
      Agility: 6,
      Tech: 9
    }
  },

  {
    name: "viper",
    cover: "../../assets/images/viper.png",
    class: "../../assets/images/controller.svg",
    bio: "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
    skills: {
      Attack: 5,
      Defense: 8,
      Agility: 7,
      Tech: 7
    }
  },

  {
    name: "omen",
    cover: "../../assets/images/omen.png",
    class: "../../assets/images/controller.svg",
    bio: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    skills: {
      Attack: 9,
      Defense: 5,
      Agility: 8,
      Tech: 6
    }
  },

  {
    name: "killjoy",
    cover: "../../assets/images/killjoy.png",
    class: "../../assets/images/sentinel.svg",
    bio: "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
    skills: {
      Attack: 7,
      Defense: 9,
      Agility: 5,
      Tech: 8
    }
  },

  {
    name: "cypher",
    cover: "../../assets/images/cypher.png",
    class: "../../assets/images/sentinel.svg",
    bio: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
    skills: {
      Attack: 6,
      Defense: 6,
      Agility: 9,
      Tech: 7
    }
  },

  {
    name: "sova",
    cover: "../../assets/images/sova.png",
    class: "../../assets/images/initiator.svg",
    bio: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    skills: {
      Attack: 4,
      Defense: 4,
      Agility: 10,
      Tech: 6
    }
  },

  {
    name: "sage",
    cover: "../../assets/images/sage.png",
    class: "../../assets/images/sentinel.svg",
    bio: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
    skills: {
      Attack: 10,
      Defense: 6,
      Agility: 4,
      Tech: 8
    }
  },

  {
    name: "phoenix",
    cover: "../../assets/images/phoenix.png",
    class: "../../assets/images/duelist.svg",
    bio: "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
    skills: {
      Attack: 7,
      Defense: 8,
      Agility: 5,
      Tech: 6
    }
  },

  {
    name: "jett",
    cover: "../../assets/images/jett.png",
    class: "../../assets/images/duelist.svg",
    bio: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
    skills: {
      Attack: 5,
      Defense: 7,
      Agility: 8,
      Tech: 7
    }
  },

  {
    name: "reyna",
    cover: "../../assets/images/reyna.png",
    class: "../../assets/images/duelist.svg",
    bio: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
    skills: {
      Attack: 9,
      Defense: 5,
      Agility: 7,
      Tech: 6
    }
  },

  {
    name: "raze",
    cover: "../../assets/images/raze.png",
    class: "../../assets/images/duelist.svg",
    bio: "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of 'boom.'",
    skills: {
      Attack: 6,
      Defense: 9,
      Agility: 4,
      Tech: 8
    }
  },

  {
    name: "breach",
    cover: "../../assets/images/breach.png",
    class: "../../assets/images/initiator.svg",
    bio: "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
    skills: {
      Attack: 8,
      Defense: 6,
      Agility: 7,
      Tech: 5
    }
  },

  {
    name: "skye",
    cover: "../../assets/images/skye.png",
    class: "../../assets/images/initiator.svg",
    bio: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.",
    skills: {
      Attack: 7,
      Defense: 5,
      Agility: 9,
      Tech: 6
    }
  },

  {
    name: "yoru",
    cover: "../../assets/images/yoru.png",
    class: "../../assets/images/duelist.svg",
    bio: "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
    skills: {
      Attack: 4,
      Defense: 8,
      Agility: 6,
      Tech: 7
    }
  },

  {
    name: "astra",
    cover: "../../assets/images/astra.png",
    class: "../../assets/images/controller.svg",
    bio: "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
    skills: {
      Attack: 10,
      Defense: 4,
      Agility: 8,
      Tech: 5
    }
  },

  {
    name: "kay/o",
    cover: "../../assets/images/kayo.png",
    class: "../../assets/images/initiator.svg",
    bio: "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to Suppress enemy abilities dismantles his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
    skills: {
      Attack: 5,
      Defense: 6,
      Agility: 9,
      Tech: 7
    }
  },

  {
    name: "chamber",
    cover: "../../assets/images/chamber.png",
    class: "../../assets/images/sentinel.svg",
    bio: "Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
    skills: {
      Attack: 9,
      Defense: 7,
      Agility: 5,
      Tech: 6
    }
  },

  {
    name: "neon",
    cover: "../../assets/images/neon.png",
    class: "../../assets/images/duelist.svg",
    bio: "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
    skills: {
      Attack: 6,
      Defense: 8,
      Agility: 7,
      Tech: 4
    }
  },

  {
    name: "fade",
    cover: "../../assets/images/fade.png",
    class: "../../assets/images/initiator.svg",
    bio: "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.",
    skills: {
      Attack: 8,
      Defense: 5,
      Agility: 6,
      Tech: 7
    }
  },

  {
    name: "harbor",
    cover: "../../assets/images/harbor.png",
    class: "../../assets/images/controller.svg",
    bio: "Hailing from India’s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies, or pummel those that oppose him.",
    skills: {
      Attack: 7,
      Defense: 6,
      Agility: 8,
      Tech: 5
    }
  },

  {
    name: "gekko",
    cover: "../../assets/images/gekko.png",
    class: "../../assets/images/initiator.svg",
    bio: "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.",
    skills: {
      Attack: 5,
      Defense: 7,
      Agility: 6,
      Tech: 8
    }
  },

  {
    name: "deadlock",
    cover: "../../assets/images/deadlock.png",
    class: "../../assets/images/duelist.svg",
    bio: "Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives her unyielding ferocity.",
    skills: {
      Attack: 9,
      Defense: 4,
      Agility: 7,
      Tech: 6
    }
  }
]