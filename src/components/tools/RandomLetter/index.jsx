import React, { useState, useEffect } from 'react'
import BoardController from '../../BoardController'

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
    setLettersAppeared([letterGenerate, ...lettersAppeared])
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

  const controllerParams = [
    {
      id: 0,
      click: alphabet.length > 0 ? generateRandomLetter : null,
      value: alphabet.length > 0 ? 'generate' : 'null',
      type: 'button',
      text: 'Générer',
    },
    {
      id: 1,
      click: resetGenerator,
      value: 'delete',
      type: 'button',
      text: 'Reset',
    },
  ]

  return (
    <section className="toolsContainer">
      <section className="toolsContainer__item--rectangle toolsContainer__item">
        <p className="toolsContainer__item--fontSize">
          {currentLetter === 'null' ? '.' : currentLetter}
        </p>
      </section>

      <BoardController
        controllerParams={controllerParams}
        controlType="params"
      />

      <section className="randomLetter__lettersAppeared">
        {lettersAppeared.map((value, index) => (
          <p key={index} className="randomLetter__lettersAppeared--letter">
            {value}
          </p>
        ))}
      </section>
    </section>
  )
}
