const ChessWebApi = require("chess-web-api")
const chessApi = new ChessWebApi();

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

export async function getRecentStats(username, games) {
    const stats = {
        games: games.length,
        abandons: 0,
        wins: 0,
        losses: 0,
        checkmates: 0,
        resigns: 0,
        timeouts: 0,
        draws: 0
    }
    
    for (let game of games) {
        const data = await fetch(game)
            .then(r => r.json())
            .then(json => json.games[0]);

        const { white, black } = data;
        const enemy = white.username !== username ? white : black;
        const { result } = enemy;
        if (result === "win") stats.losses++;
        
        switch(result) {
            case "checkmated":
                stats.checkmates++;
                break;
            case "resigned":
                stats.resigns++;
                break;
            case "timeout":
                stats.timeouts++;
                break;
            case 'agreed':
                stats.draws++;
                break;
            case 'abandoned':
                stats.abandons++;
                break;
            default:
                break;
        }
    }

    stats.wins = stats.games - stats.losses - stats.draws;

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
