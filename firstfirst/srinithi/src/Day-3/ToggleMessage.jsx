import { useState } from "react";
const ToggleMessage = () => {
  const [isvisible, setvisible] = useState(false);
  const handleClick = () => {
    setvisible(!isvisible);
  };
  return (
    <div>
      <button onClick={handleClick}>Show Message</button>
      {isvisible === true ? <p>Hi Everyone</p> : null}
    </div>
  );
};
export default ToggleMessage;
