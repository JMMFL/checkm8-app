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

export default chessApi;
