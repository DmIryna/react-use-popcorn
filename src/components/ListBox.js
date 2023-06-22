import { Children, useState } from "react"

import ToggleButton from "./ToggleButton"

const ListBox = ({ children }) => {
  const [isOpen1, setIsOpen1] = useState(true)

  return (
    <div className="box">
      <ToggleButton onClick={() => setIsOpen1((open) => !open)}>
        {isOpen1 ? "–" : "+"}
      </ToggleButton>
      {isOpen1 && children}
    </div>
  )
}

export default ListBox
