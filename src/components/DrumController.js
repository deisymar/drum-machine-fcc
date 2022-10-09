import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const DrumController = (props) => (
  <div className="controller">
    <div className="control">
      <p className="labelpower">Power {props.power ? "ON" : "OFF"}</p>
      <div className="select">
        <div
          className="inner"
          style={props.powerSlider}
          onClick={props.stop}
        ></div>
      </div>
    </div>
    <div className="volume">
      <span className="etiqueta">
        <FontAwesomeIcon icon={faVolumeHigh} />
        {Math.round(props.volume * 100)}%
      </span>
      <input
        type="range"
        step="0.01"
        min="0"
        max="1"
        aria-label="Volume"
        data-toggle="tooltip"
        title={Math.round(props.volume * 100)}
        value={props.volume}
        onChange={props.adjustVolume}
      />
    </div>
    <h2 id="display">{props.power ? props.name : ""}</h2>
    <button onClick={props.changeSound}>Change Sound</button>
  </div>
);

export default DrumController;
