import KeyboardKey from "./KeyboardKey";

const Keyboard = ({ sounds, play, power }) => (
  <div className="keyboard">
    {power
      ? sounds.map((sound, d) => (
          <KeyboardKey key={d} sound={sound} play={play} />
        ))
      : sounds.map((sound, d) => (
          <KeyboardKey key={d} sound={{ ...sound, url: "#" }} play={play} />
        ))}
  </div>
);

export default Keyboard;
