describe("Test Card Game Logic", function () {

  const playGame = new CardGame([{
    id: 1,
    name: "brimstone",
    cover: "../../assets/images/brimstone.png",
    class: "../../assets/images/controller.svg",
    bio: "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
    skills: {
      attack: 8,
      defense: 7,
      agility: 6,
      tech: 9
    }
  },

  {
    id: 2,
    name: "viper",
    cover: "../../assets/images/viper.png",
    class: "../../assets/images/controller.svg",
    bio: "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
    skills: {
      attack: 5,
      defense: 8,
      agility: 7,
      tech: 7
    }
  },

  {
    id: 3,
    name: "omen",
    cover: "../../assets/images/omen.png",
    class: "../../assets/images/controller.svg",
    bio: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    skills: {
      attack: 9,
      defense: 5,
      agility: 8,
      tech: 6
    }
  },

  {
    id: 4,
    name: "killjoy",
    cover: "../../assets/images/killjoy.png",
    class: "../../assets/images/sentinel.svg",
    bio: "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
    skills: {
      attack: 7,
      defense: 9,
      agility: 5,
      tech: 8
    }
  }]);

  it("Class CardGame", function () {
    expect(typeof playGame).toEqual('object');
  });

  it("Card is a object", function () {
    expect(typeof playGame.cards).toEqual('object');
  });

  it("Shufflecards is a function", function () {
    expect(typeof playGame.shuffleCards).toEqual('function');
  });

  playGame.shuffleCards();

  it("Shufflecards is a object", function () {
    expect(typeof playGame.cardsShuffle).toEqual('object');
  });

  it("getCards is a function", function () {
    expect(typeof playGame.getCards).toEqual('function');
  });

  playGame.getCards();

  it("PlayerCards is a object", function () {
    expect(typeof playGame.PlayerCards).toEqual('object');
  });

  it("CPUCards is a object", function () {
    expect(typeof playGame.CPUCards).toEqual('object');
  });

  it("discard is a function", function () {
    expect(typeof playGame.discard).toEqual('function');
  });

  it("discard arr2 to arr1", function () {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    playGame.discard(arr1, arr2);

    expect(arr1).toEqual([1, 2, 3, 4]);
  });

  it("skillsPlayer is a object", function () {
    expect(typeof playGame.skillsPlayer).toEqual('object');
  });

  it("skillsCPU is a object", function () {
    expect(typeof playGame.skillsCPU).toEqual('object');
  });

  it("compareSkills is a function", function () {
    expect(typeof playGame.compareSkills).toEqual('function');
  });

  it("compareSkills skillsPlayer > skillsCPU", function () {
    playGame.skillsPlayer.skill = 10;
    playGame.skillsCPU.skill = 9;
    const result = playGame.compareSkills(playGame.skillsPlayer.skill, playGame.skillsCPU.skill);

    expect(result).toEqual('playerWin');
  });

  it("compareSkills skillsPlayer < skillsCPU", function () {
    playGame.skillsPlayer.skill = 9;
    playGame.skillsCPU.skill = 10;
    const result = playGame.compareSkills(playGame.skillsPlayer.skill, playGame.skillsCPU.skill);

    expect(result).toEqual('cpuWin');
  });

  it("compareSkills draw", function () {
    playGame.skillsPlayer.skill = 10;
    playGame.skillsCPU.skill = 10;
    const result = playGame.compareSkills(playGame.skillsPlayer.skill, playGame.skillsCPU.skill);

    expect(result).toBeUndefined();
  });

  it("gameEnded is a function", function () {
    expect(typeof playGame.gameEnded).toEqual('function');
  });

  it("gameEnded player lose", function () {
    playGame.PlayerCards = [];
    playGame.CPUCards = [1];
    const result = playGame.gameEnded()
    expect(result).toEqual('player lose');
  });

  it("gameEnded cpu lose", function () {
    playGame.PlayerCards = [1];
    playGame.CPUCards = [];
    const result = playGame.gameEnded()
    expect(result).toEqual('cpu lose');
  });
});