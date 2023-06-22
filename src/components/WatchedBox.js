import { useState } from "react"
import ToggleButton from "./ToggleButton"

const WatchedBox = ({ children }) => {
  const [isOpen2, setIsOpen2] = useState(true)

  return (
    <div className="box">
      <ToggleButton onClick={() => setIsOpen2((open) => !open)}>
        {isOpen2 ? "–" : "+"}
      </ToggleButton>
      {isOpen2 && children}
    </div>
  )
}

export default WatchedBox
