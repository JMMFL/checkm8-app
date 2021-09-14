
const ChessWebApi = require("chess-web-api")
const chessApi = new ChessWebApi();

chessApi.getPlayerMonthlyArchives("kourage")
  .then(response => response.body)
  .then(console.log)
  .catch("Oops")




// playerMonthlyArchives
// time class 
// white black


// getPlayer
// avatar,
// name,
// username,
// followers,
// country,
// location,
// status,
// is_streamer,
// twitch_url,
// title

// getPlayerStats
// rapid rating
// bullet rating
// blitz rating
// fide


function App() {
  return (
    <h1>Gathering data...</h1>
  );
}

export default App;
