import "./styles.css";
import * as React from "react";
//import * as ReactDOM from "react-dom";
import DrumController from "./components/DrumController";
import Keyboard from "./components/Keyboard";

const soundsFirst = [
  {
    keyCode: 81,
    key: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    key: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    key: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    key: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    key: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    key: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    key: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];
const soundsSecond = [
  {
    keyCode: 81,
    key: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    key: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    key: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    key: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    key: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    key: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    key: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    key: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

/*const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit"
};*/

const soundsGroup = {
  heaterKit: soundsFirst,
  smoothPianoKit: soundsSecond
};

const App = () => {
  const [soundsType, setSoundsType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundsType]);
  const [soundsName, setSoundsName] = React.useState("");
  const [volume, setVolume] = React.useState(0.5);
  const [power, setPower] = React.useState(true);

  const play = (key, sound) => {
    setSoundsName(sound);
    const audio = document.getElementById(key);
    activeKey(audio);
    audio.currentTime = 0;
    audio.play();
    desactiveKey(audio);
  };

  const stop = () => {
    setPower(!power);
  };

  const activeKey = (audio) => {
    audio.parentElement.style.backgroundColor = "#000000";
    audio.parentElement.style.color = "#ffffff";
  };

  const desactiveKey = (audio) => {
    setTimeout(() => {
      audio.parentElement.style.backgroundColor = "#F39C12";
      audio.parentElement.style.color = "#000000";
    }, 500);
  };

  const changeSound = () => {
    setSoundsName("");
    if (power) {
      if (soundsType === "heaterKit") {
        setSoundsType("smoothPianoKit");
        setSounds(soundsGroup.smoothPianoKit);
      } else {
        setSoundsType("heaterKit");
        setSounds(soundsGroup.heaterKit);
      }
    }
  };

  const adjustVolume = (e) => {
    if (power) {
      setVolume(e.target.value);
    }
  };

  const setKeyVolume = () => {
    if (power) {
      const audioVol = sounds.map((sound) =>
        document.getElementById(sound.key)
      );
      audioVol.forEach((audio) => {
        if (audio) {
          audio.volume = volume;
        }
      });
    }
  };
  const powerSlider = power ? { float: "right" } : { float: "left" };

  return (
    <div id="drum-machine">
      {setKeyVolume()}
      <div className="pad-bank">
        <Keyboard sounds={sounds} play={play} power={power} />
        <DrumController
          power={power}
          powerSlider={powerSlider}
          stop={stop}
          volume={volume}
          adjustVolume={adjustVolume}
          name={soundsName || soundsName[soundsType]}
          changeSound={changeSound}
        />
      </div>
    </div>
  );
};

export default App;
