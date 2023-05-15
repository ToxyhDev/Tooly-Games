import { useEffect, useState } from 'react'

export default function Dice() {
  /*variable useState the max value and the displayed value(generate)
also listed in localStorage */
  const [faceDiceMax, setFaceDiceMax] = useState(
    parseInt(localStorage.getItem('faceDiceMax')) || 6
  )
  const [numberDices, setNumberDices] = useState(
    parseInt(localStorage.getItem('numberDices')) || 1
  )
  const [diceResults, setDiceResults] = useState(
    JSON.parse(localStorage.getItem('diceResults')) || []
  )

  /* change state */
  function chooseFaceDiceMax(number) {
    setFaceDiceMax(number)
  }

  function chooseNumberDices(number) {
    setNumberDices(number)
  }

  /* generate random number */
  function generateRandomNumber() {
    const results = []
    for (let i = 0; i < numberDices; i++) {
      const randomNumber = Math.floor(Math.random() * faceDiceMax) + 1
      results.push(randomNumber)
    }
    setDiceResults(results)
  }

  /* set value in localStorage */
  useEffect(() => {
    localStorage.setItem('faceDiceMax', faceDiceMax.toString())
  }, [faceDiceMax])

  useEffect(() => {
    localStorage.setItem('numberDices', numberDices.toString())
  }, [numberDices])

  useEffect(() => {
    localStorage.setItem('diceResults', JSON.stringify(diceResults))
  }, [diceResults])

  return (
    <section>
      <section>
        {diceResults.length === 0 ? (
          <p>.</p>
        ) : (
          diceResults.map((result, index) => <p key={index}>{result}</p>)
        )}
      </section>

      <button onClick={generateRandomNumber}>Générer</button>

      <br />
      <br />
      <label htmlFor="faceDiceSelect">Nombre de faces :</label>
      <select
        id="faceDiceSelect"
        value={faceDiceMax}
        onChange={(e) => chooseFaceDiceMax(parseInt(e.target.value))}
      >
        {Array.from({ length: 15 }, (_, index) => index + 6).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>

      <label htmlFor="numberDicesSelect">Nombre de dés :</label>
      <select
        id="numberDicesSelect"
        value={numberDices}
        onChange={(e) => chooseNumberDices(parseInt(e.target.value))}
      >
        {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          localStorage.removeItem('faceDiceMax')
          localStorage.removeItem('numberDices')
          localStorage.removeItem('diceResults')
          setFaceDiceMax(6)
          setNumberDices(1)
          setDiceResults([])
        }}
      >
        Reset
      </button>
    </section>
  )
}
