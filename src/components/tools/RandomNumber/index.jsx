import { useEffect, useState } from 'react'

export default function Dice() {
  /*variable useState the max value and the displayed value(generate)
also listed in localStorage */
  const [numberMax, setNumberMax] = useState(
    localStorage.getItem('numberMax') || 6
  )
  const [number, setNumber] = useState(localStorage.getItem('number') || 6)
  /* change state */
  function chooseDice(n) {
    setNumberMax(n)
    setNumber(n)
  }
  /* generate random number */
  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * numberMax) + 1
    setNumber(randomNumber)
  }
  /* set value in localStorage */
  useEffect(() => {
    localStorage.setItem('numberMax', numberMax)
  }, [numberMax])

  useEffect(() => {
    localStorage.setItem('number', number)
  }, [number])

  return (
    <section>
      <p>{number}</p>

      <button onClick={generateRandomNumber}>Générer</button>

      <br />
      <br />

      <button
        onClick={() => {
          let n = numberMax
          chooseDice(numberMax === 9999 ? 9999 : ++n)
        }}
      >
        +
      </button>

      <label htmlFor="numberOnDice"></label>
      <input
        type="number"
        name="numberOnDice"
        id="numberOnDice"
        value={numberMax}
        onClick={(e) => e.target.select()}
        onChange={(e) => {
          let value = parseInt(e.target.value)
          if (!isNaN(value)) {
            value = Math.max(1, Math.min(9999, value))
            setNumberMax(value)
          }
        }}
      />
      <button
        onClick={() => {
          let n = numberMax
          chooseDice(numberMax === 1 ? 1 : --n)
        }}
      >
        -
      </button>

      <button onClick={() => setNumberMax(6)}>Reset</button>
    </section>
  )
}
