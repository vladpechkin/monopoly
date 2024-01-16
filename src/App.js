import store from "./store";

const App = () => {
  const { cards, players } = store;
  return (
    <div className="app">
      <div className="cards">
        {cards?.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{
              gridArea: `id${index + 1}`,
              flexDirection:
                index > 10 && index < 20
                  ? "row-reverse"
                  : index > 30 && index < 40
                  ? "row"
                  : index > 20 && index < 30
                  ? "column-reverse"
                  : "column",
            }}
          >
            {index !== 0 && index !== 10 && index !== 20 && index !== 30 && (
              <header
                className="card__header"
                style={{ background: card?.color || "transparent" }}
              ></header>
            )}
            <p
              className="card__text"
              style={
                (index > 0 && index < 10) || (index > 20 && index < 30)
                  ? {
                      writingMode: "tb",
                      transform: "rotate(180deg)",
                    }
                  : undefined
              }
            >
              <div>{card?.name}</div>
              {card.price && <div>${card?.price}</div>}
            </p>
          </div>
        ))}
      </div>
      <div className="players">
        {players.map((player, index) => (
          <div
            className="player"
            key={index}
            style={{
              gridArea: `id${index + 1}`,
              background: player.id === store.currentTurnPlayerId ? 'gainsboro' : 'white'
            }}
          >
            <div
              className="player__avatar"
              style={{ background: player?.color }}
            ></div>
            <div className="player__body">
              <div>{player?.color}</div>
              <div>${player?.balance}</div>
            </div>
          </div>
        ))}
      </div>
      {store.currentTurnPlayerId}
      <button onClick={() => store.passTurn()}>{store.currentTurnPlayerId ? "End turn" : "Start"}</button>
    </div>
  );
};

export default App;
