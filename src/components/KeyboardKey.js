import * as React from "react";
/*Cuando se presione la tecla en teclado*/
const KeyboardKey = (props) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === props.sound.keyCode) {
      props.play(props.sound.key, props.sound.id);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <button
      className="drum-pad"
      id={props.sound.keyCode}
      onClick={() => props.play(props.sound.key, props.sound.id)}
    >
      <audio className="clip" id={props.sound.key} src={props.sound.url} />
      {props.sound.key}
    </button>
  );
};

export default KeyboardKey;
