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

export default chessApi;
