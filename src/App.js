const ChessWebApi = require("chess-web-api")
const chessApi = new ChessWebApi();

async function getAllPlayerData(username) {
  let methods = [
    "getPlayer", 
    "getPlayerStats", 
    "getPlayerMonthlyArchives"
  ];
  let promises = methods.map(method => chessApi[method](username));
  let responses = await Promise.all(promises);
  return responses.map(response => response.body);  
}

function App() {
  return (
    <h1>Gathering data...</h1>
  );
}

export default App;
