import React, { useState, useEffect } from 'react'

export default function RandomLetter() {
  const [alphabet, setAlphabet] = useState(
    JSON.parse(localStorage.getItem('alphabet')) ?? [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ]
  )

  const [lettersAppeared, setLettersAppeared] = useState(
    JSON.parse(localStorage.getItem('lettersAppeared')) || []
  )
  const [currentLetter, setCurrentLetter] = useState(
    localStorage.getItem('currentLetter') || 'null'
  )
  //Generate letter
  function generateRandomLetter() {
    const randomLetter = Math.floor(Math.random() * alphabet.length)
    const letterGenerate = alphabet[randomLetter]
    console.log('Lettre aléatoire: ' + letterGenerate)

    setCurrentLetter(letterGenerate)
    setLettersAppeared([...lettersAppeared, letterGenerate])
    setAlphabet(alphabet.filter((letter) => letter !== letterGenerate))
  }

  //Reset localstorage
  function resetGenerator() {
    localStorage.removeItem('alphabet')
    localStorage.removeItem('lettersAppeared')
    localStorage.removeItem('currentLetter')
    setAlphabet([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ])
    setLettersAppeared([])
    setCurrentLetter('null')
  }
  useEffect(() => {
    localStorage.setItem('alphabet', JSON.stringify(alphabet))
  }, [alphabet])

  useEffect(() => {
    localStorage.setItem('lettersAppeared', JSON.stringify(lettersAppeared))
  }, [lettersAppeared])

  useEffect(() => {
    localStorage.setItem('currentLetter', currentLetter)
  }, [currentLetter])

  return (
    <section className="randomLetter">
      <section className="randomLetter__item">
        <p className="randomLetter__item--fontSize">
          {currentLetter === 'null' ? '.' : currentLetter}
        </p>
      </section>

      <section className="randomLetter__boardControl">
        <button onClick={alphabet.length > 0 ? generateRandomLetter : null}>
          {alphabet.length > 0 ? 'Générer' : 'Toutes les lettres sont générés'}
        </button>
        <button onClick={resetGenerator}>Reset</button>
      </section>

      <p>Lettres apparues : {lettersAppeared.join(', ')}</p>
    </section>
  )
}
