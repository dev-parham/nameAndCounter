import { useState } from "react"

export function AgeAndName() {
  const [value, setValue] = useState("")
  const [counter, setCounter] = useState(0)

  return (
    <div style={{ fontFamily: "Calibri" }}>
      <br />
      <span>Enter your name: </span>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <br />
      <br />
      <span>Enter your age : </span>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span> {counter} </span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <br />
      <br />
      <span>The result: </span>
      <br />
      <span>
        Hey there! My name is [ {value} ] and I'm [ {counter} ] years old.
      </span>
    </div>
  )
}
