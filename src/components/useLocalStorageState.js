import { useState, useEffect } from "react"

export const useLocalStorageState = (initialState) => {
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched")
    return storedValue ? JSON.parse(storedValue) : initialState
  })

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched))
  }, [watched])

  return [watched, setWatched]
}
