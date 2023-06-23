import { useEffect, useState } from 'react'
import BoardController from '../../BoardController'

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

  const controllerParams = [
    {
      id: 0,
      click: generateRandomNumber,
      value: 'generate',
      type: 'button',
    },
    {
      id: 1,
      click: () => {
        localStorage.removeItem('diceResults')
        setDiceResults([])
      },
      value: 'restart',
      type: 'button',
    },
    {
      id: 2,
      click: () => {
        localStorage.removeItem('faceDiceMax')
        localStorage.removeItem('numberDices')
        localStorage.removeItem('diceResults')
        setFaceDiceMax(6)
        setNumberDices(1)
        setDiceResults([])
      },
      value: 'delete',
      type: 'button',
    },
  ]

  const controllerSettings = [
    {
      id: 0,
      label: 'faceDiceSelect',
      valueMax: faceDiceMax,
      onChange: (e) => chooseFaceDiceMax(parseInt(e.target.value)),
      options: Array.from({ length: 15 }, (_, index) => index + 6).map(
        (number) => (
          <option key={number} value={number}>
            {number}
          </option>
        )
      ),
      title: 'Faces:',
      type: 'select',
    },
    {
      id: 1,
      label: 'numberDicesSelect',
      valueMax: numberDices,
      onChange: (e) => chooseNumberDices(parseInt(e.target.value)),
      options: Array.from({ length: 12 }, (_, index) => index + 1).map(
        (number) => (
          <option key={number} value={number}>
            {number}
          </option>
        )
      ),
      title: 'Dés:',
      type: 'select',
    },
  ]

  return (
    <section className="toolsContainer">
      <BoardController
        controllerParams={controllerSettings}
        controlType="settings"
      />

      {(() => {
        let classDisplayLayout = ''
        switch (numberDices) {
          case 1:
            classDisplayLayout = 'diceLayout__grid-1'
            break
          case 2:
          case 3:
            classDisplayLayout = 'diceLayout__grid-3'
            break
          case 4:
          case 5:
          case 6:
            classDisplayLayout = 'diceLayout__grid-3'
            break
          case 7:
          case 9:
          case 10:
          case 11:
          case 12:
            classDisplayLayout = 'diceLayout__grid-3'
            break

          default:
            break
        }
        return (
          <section className={`diceLayout ${classDisplayLayout}`}>
            {diceResults.length === 0 ? (
              <section className="toolsContainer__item--square toolsContainer__item">
                <p className="toolsContainer__item--fontSize">.</p>
              </section>
            ) : (
              diceResults.map((result, index) => {
                return (
                  <section key={index} className={`diceLayout__grid--item`}>
                    <p key={index} className="toolsContainer__item--fontSize">
                      {result}
                    </p>
                  </section>
                )
              })
            )}
          </section>
        )
      })()}

      {/* {diceResults.length === 0 ? (
        <section className="toolsContainer__item--square toolsContainer__item">
          <p className="toolsContainer__item--fontSize">.</p>
        </section>
      ) : (
        diceResults.map((result, index) => {
          let classDisplayLayout = 'Pas de class layout'
          if (numberDices === 3) {
            classDisplayLayout = 'diceLayout__grid-3'
          } else {
            console.log(classDisplayLayout)
          }

          return (
            <section className="diceLayout">
              <section
                key={index}
                className={`toolsContainer__item--square 
              toolsContainer__item 
              ${classDisplayLayout}
              `}
              >
                <p key={index} className="toolsContainer__item--fontSize">
                  {result}
                </p>
              </section>
            </section>
          )
        })
      )} */}

      <BoardController
        controllerParams={controllerParams}
        controlType="params"
      />
    </section>
  )
}
