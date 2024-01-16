const store = {
  cards: [
    { name: "Go" },
    {
      name: "Brown 1",
      color: "brown",
      price: 60,
    },
    {
      name: "Chest 1",
    },
    {
      name: "Brown 2",
      color: "brown",
      price: 60,
    },
    {
      name: "Super tax",
    },
    { name: "Station 1", price: 200 },
    {
      name: "Lightblue 1",
      color: "skyblue",
    },
    {
      name: "Chance 1",
    },
    {
      name: "Lightblue 2",
      color: "skyblue",
    },
    {
      name: "Lightblue 3",
      color: "skyblue",
    },
    { name: "Jail" },
    {
      name: "Pink 1",
      color: "pink",
    },
    { name: "Electricity", price: 150 },
    {
      name: "Pink 2",
      color: "pink",
    },
    {
      name: "Pink 3",
      color: "pink",
    },
    { name: "Station 2", price: 200 },
    {
      name: "Orange 1",
      color: "orange",
    },
    {
      name: "Chest 2",
    },
    {
      name: "Orange 2",
      color: "orange",
    },
    {
      name: "Orange 3",
      color: "orange",
    },
    { name: "Free parking" },
    {
      name: "Red 1",
      color: "red",
    },
    {
      name: "Chance 2",
    },
    {
      name: "Red 2",
      color: "red",
    },
    {
      name: "Red 3",
      color: "red",
    },
    { name: "Station 3", price: 200 },
    {
      name: "Yellow 1",
      color: "yellow",
    },
    {
      name: "Yellow 2",
      color: "yellow",
    },
    { name: "Water", price: 150 },
    {
      name: "Yellow 3",
      color: "yellow",
    },
    { name: "Go to jail" },
    {
      name: "Green 1",
      color: "green",
    },
    {
      name: "Green 2",
      color: "green",
    },
    {
      name: "Chest 3",
    },
    {
      name: "Green 3",
      color: "green",
    },
    { name: "Station 4", price: 200 },
    {
      name: "Chance 3",
    },
    {
      name: "Blue 1",
      color: "blue",
      price: 350,
    },
    {
      name: "Tax",
    },
    {
      name: "Blue 2",
      color: "blue",
      price: 400,
    },
  ],
  players: [
    { id: 1, color: "red", balance: 1500 },
    { id: 2, color: "orange", balance: 1500 },
    { id: 3, color: "yellow", balance: 1500 },
    { id: 4, color: "green", balance: 1500 },
    { id: 5, color: "skyblue", balance: 1500 },
    { id: 6, color: "blue", balance: 1500 },
    { id: 7, color: "pink", balance: 1500 },
    { id: 8, color: "brown", balance: 1500 },
  ],
  playerId: 1,
  currentTurnPlayerId: 0,
  diceValue: null,
  passTurn() {
    this.currentTurnPlayerId
      ? this.currentTurnPlayerId === this.players[this.players.length]?.id
        ? this.currentTurnPlayerId--
        : this.currentTurnPlayerId++
      : (this.currentTurnPlayerId = 1);
  },
};

export default store;
