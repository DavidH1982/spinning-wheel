import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [song, setSong] = useState({});
  const [mood, setMood] = useState("");

  const limit = 10;
  const random = Math.floor(Math.random() * limit + 1);
  const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${mood}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;

  const handleMood = (e) => setMood(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseURL);
      const songList = await response.json();
      setSong(songList.results[random]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div>
      <ul className="circleLogo">
        <li className="segment red" />
        <li className="segment redViolet" />
        <li className="segment violet" />
        <li className="segment blueViolet" />
        <li className="segment blue" />
        <li className="segment blueGreen" />
        <li className="segment green" />
        <li className="segment yellowGreen" />
        <li className="segment yellow" />
        <li className="segment yellowOrange" />
        <li className="segment orange" />
        <li className="segment redOrange" />
      </ul>
    </div>
    <div className="App">
      <h1>🎵 Moodplayer 🎶</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mood">What mood are you?</label>
        <input type="text" name="mood" value={mood} onChange={handleMood} />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <audio src={song.audio} autoPlay controls></audio>
    </div>
    </>
  );
}

export default App;
