import "./address.scss";
import message from "../../assets/message.svg";
import locationPin from "../../assets/location-pin.svg";

export default function Address() {
  return (
    <div className="address">
      <div className="email flex items-center">
        <img src={message} />
        <span className="base">
          <a href="mailto:abrerarein@gmail.com">abrerarein@gmail.com</a>
        </span>
      </div>
      <div className="location flex items-center">
        <img src={locationPin} />
        <span className="base">
          Philippines
        </span>
      </div>
    </div>
  );
}
