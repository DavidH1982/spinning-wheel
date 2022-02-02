import "./App.css";
import { useState } from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import Toggle from "./Toggle";

function App() {
  const [song, setSong] = useState({});
  const [mood, setMood] = useState("");

  const limit = 10;
  const random = Math.floor(Math.random() * limit + 1);
  const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${mood}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;

  // const handleMood = (e) => setMood(e.target.value);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await fetch(baseURL);
      const songList = await response.json();
      setSong(songList.results[random]);
    } catch (err) {
      console.log(err);
    }
  };
  const redClick = () => {
    setMood("Angry");
    handleSubmit();
  };
  const orangeClick = () => {
    setMood("Energetic");
    handleSubmit();
  };
  const yellowClick = () => {
    setMood("Happy");
    handleSubmit();
  };
  const greenClick = () => {
    setMood("Serene");
    handleSubmit();
  };
  const darkblueClick = () => {
    setMood("Melancholic");
    handleSubmit();
  };
  const pinkClick = () => {
    setMood("Love");
    handleSubmit();
  };
  const purpleClick = () => {
    setMood("Spiritual");
    handleSubmit();
  };
  const blueClick = () => {
    setMood("Calm");
    handleSubmit();
  };
  const whiteClick = () => {
    setMood("Peaceful");
    handleSubmit();
  };
  const beigeClick = () => {
    setMood("Soft");
    handleSubmit();
  };
  const grayClick = () => {
    setMood("Sad");
    handleSubmit();
  };
  const blackClick = () => {
    setMood("Powerful");
    handleSubmit();
  };
  return (
    <>
    <div>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Toggle />
      </ColorModeProvider>
    </ThemeProvider>
      <ul className="circleLogo">
        <li className="segment red" onClick={()=>redClick()}><p>Angry</p></li>
        <li className="segment orange" onClick={()=>orangeClick()}><p>Energetic</p></li>
        <li className="segment yellow" onClick={()=>yellowClick()}><p>Happy</p></li>
        <li className="segment green" onClick={()=>greenClick()}><p>Serene</p></li>
        <li className="segment darkBlue" onClick={()=>darkblueClick()}><p>Melancholic</p></li>
        <li className="segment pink" onClick={()=>pinkClick()}><p>Love</p></li>
        <li className="segment purple" onClick={()=>purpleClick()}><p>Spiritual</p></li>
        <li className="segment blue" onClick={()=>blueClick()}><p>Calm</p></li>
        <li className="segment white" onClick={()=>whiteClick()}><p>Peaceful</p></li>
        <li className="segment beige" onClick={()=>beigeClick()}><p>Cosy</p></li>
        <li className="segment gray" onClick={()=>grayClick()}><p>Sad</p></li>
        <li className="segment black" onClick={()=>blackClick()}><p>Powerful</p></li>
      </ul>
    </div>
    <div className="mediaPlayer">
      <h1>🎵 Moodplayer 🎶</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mood">What mood are you?</label>
        <input type="text" name="mood" value={mood} />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <audio src={song.audio} autoPlay controls></audio>
    </div>
    </>
  );
}

export default App;
