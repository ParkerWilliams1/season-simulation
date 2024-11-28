
class Team {
  constructor(teamId, teamLocation, teamName, primaryColor, secondaryColor, teamRating) {
    this._teamId = teamId; 
    this._teamLocation = teamLocation;
    this._teamName = teamName;
    this._primaryColor = primaryColor;
    this._secondaryColor = secondaryColor;
    this._teamRating = teamRating;
  }

  // team getter functions
  get teamId() { return this._teamId; }
  get teamLocation() { return this._teamLocation; }
  get teamName() { return this._teamName; }
  get primaryColor() { return this._primaryColor; }
  get secondaryColor() { return this._secondaryColor; }
  get teamRating() { return this._teamRating; }
}

// Beast: North Division:
const saints = new Team(1, "St. Louis", "Saints", "primaryColor", "secondaryColor", 75);
const giants = new Team(2, "Detroit", "Giants", "primaryColor", "secondaryColor", 60);
const indies = new Team(3, "Indianapolis", "Indies", "primaryColor", "secondaryColor", 55);
const knights = new Team(4, "Pittsburgh", "Knights", "primaryColor", "secondaryColor", 84);

// Beast: South Division:
const heat = new Team(5, "Arizona", "Heat", "primaryColor", "secondaryColor", 45);
const devils = new Team(6, "Tampa Bay", "Devils", "primaryColor", "secondaryColor", 60);
const red_sharks = new Team(7, "Miami", "Red Sharks", "#e0260d", "#ffffff", 77);
const tornadoes = new Team(8, "Tennessee", "Tornadoes", "#c9800a", "#949494", 95);

// Beast: East Division:
const cavs = new Team(9, "Cleveland", "Cavs", "primaryColor", "secondaryColor", 77);
const rebels = new Team(10, "Boston", "Rebels", "#9e0606", "#8f7501", 78);
const natives = new Team(11, "Nashville", "Natives", "#60009c", "#000000", 85);
const soul = new Team(12, "Philadelphia", "Soul", "primaryColor", "secondaryColor", 72);

// Beast: West Division:
const islanders = new Team(13, "Hawaii", "Islanders", "#32d615", "#0974ad", 94);
const grizzlies = new Team(14, "Sacramento", "Grizzlies", "#401f06", "#918e8c", 58);
const dynamite = new Team(15, "Denver", "Dynamite", "#c90000", "#e3b419", 63);
const aggies = new Team(16, "Kansas", "Aggies", "#5c0b04", "#c2bebe", 88);


// Strong: North Division:
const gladiators = new Team(17, "Green Bay", "Gladiators", "#0d3b01", "#31382f", 84);
const arrows = new Team(18, "Washington", "Arrows", "#cc0b04", "#000000", 85);
const spartins = new Team(19, "Cincinnati", "Spartins", "#fa0000", "#ffffff", 74);
const flames = new Team(20, "Chicago", "Flames", "#e81700", "#ffee00", 66);

// Strong: South Division:
const mustangs = new Team(21, "Texas", "Mustangs", "#180599", "#450301", 88);
const falcons = new Team(22, "Florida", "Falcons", "#0c8c00", "#f8fff7", 83);
const coasters = new Team(23, "Orlando", "Coasters", "primaryColor", "secondaryColor", 76);
const mountaineers = new Team(24, "Colorado", "Mountaineers", "primaryColor", "secondaryColor", 69);

// Strong: East Division:
const squids = new Team(25, "New Jersey", "Squids", "primaryColor", "secondaryColor", 80);
const braves = new Team(26, "Brooklyn", "Braves", "primaryColor", "secondaryColor", 72);
const gold = new Team(27, "New York", "Gold", "primaryColor", "secondaryColor", 79);
const colonials = new Team(28, "Charlotte", "Colonials", "primaryColor", "secondaryColor", 83);

// Strong: West Division:
const stars = new Team(29, "Los Angeles", "Stars", "primaryColor", "secondaryColor", 65);
const ducks = new Team(30, "San Diego", "Ducks", "#e87909", "#085c8c", 94);
const quakes = new Team(31, "San Francisco", "Quakes", "#1a1b47", "#bfbf62", 86);
const slisers = new Team(32, "San Jose", "Slisers", "#483fa1", "#49069c", 78);

const league = {
  Beast: {
    "North": [saints, giants, indies, knights],
    "South": [heat, devils, red_sharks, tornadoes],
    "East": [cavs, rebels, natives, soul],
    "West": [islanders, grizzlies, dynamite, aggies]
  },
  Strong: {
    "North": [gladiators, arrows, spartins, flames],
    "South": [mustangs, falcons, coasters, mountaineers],
    "East": [squids, braves, gold, colonials],
    "West": [stars, ducks, quakes, slisers]
  }
}

module.exports = { Team,
saints, giants, indies, knights,
heat, devils, red_sharks, tornadoes, 
cavs, rebels, natives, soul, 
islanders, grizzlies, dynamite, aggies,
gladiators, arrows, spartins, flames, 
mustangs, falcons, coasters, mountaineers,
squids, braves, gold, colonials,
stars, ducks, quakes, slisers, league
};

