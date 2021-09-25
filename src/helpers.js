const ChessWebApi = require("chess-web-api")
const chessApi = new ChessWebApi();

export async function getAllPlayerData(username) {
    let methods = [
      "getPlayer", 
      "getPlayerStats", 
      "getPlayerMonthlyArchives"
    ];
    let promises = methods.map(method => chessApi[method](username));
    let responses = await Promise.all(promises);
    return responses.map(response => response.body);  
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

export default chessApi;
