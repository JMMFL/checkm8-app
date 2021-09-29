const ChessWebApi = require("chess-web-api")
const chessApi = new ChessWebApi();

export const colors = {
    lossText: '#FF5A5F',
    winText: '#1CA1F1',
    lossBg: 'rgba(255, 90, 95, 0.25)',
    winBg: 'rgba(28, 161, 241, 0.25)'
}

export function sortLadders(ladders) {
  const sortedLadders = [...ladders].sort((ladderA, ladderB) => {
      const rankA = ladderA?.last.rating;
      const rankB = ladderB?.last.rating;

      if (rankA < rankB) {
          return 1
      } else if (rankA > rankB) {
          return -1;
      } else {
          return 0;
      }
  })

  return sortedLadders
}

export function makeReview(games, username) {
    const stats = {
        games: games.length,
        abandoned: 0,
        wins: 0,
        losses: 0,
        checkmated: 0,
        resigned: 0,
        timeout: 0,
        agreed: 0
    }

    for (let game of games) {
        const { white, black } = game;
        const { username: whiteName } = white;
        const opponent = whiteName !== username ? white: black;
        const { result } = opponent;
        
        if (result === "win") {
            stats.losses++
        } else {
            stats[result]++;
        };
    }

    stats.wins = stats.games - stats.losses - stats.agreed;

    return stats;
}

export async function getCountryCode(countryApi) {
    const response = await fetch(countryApi);
    const json = await response.json();
    return json.code;
}

export async function getRecentGames(archives, number) {
    const recentArchives = archives.reverse();
    const recentGames = []

    let counter = number;
    for (let archive of recentArchives) {
        let response = await fetch(archive);
        let json = await response.json();
        let games = [...json.games].reverse();

        for (let game of games) {
            if (counter < 1) break;
            recentGames.push(game);
            counter--;
        }

        if (counter < 1) break;
    }
    
    return recentGames;
}

export default chessApi;
