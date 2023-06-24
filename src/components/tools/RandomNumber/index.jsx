import { useEffect, useState } from 'react'
import BoardController from '../../BoardController'

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

  const controllerParams = [
    {
      id: 0,
      click: generateRandomNumber,
      value: 'generate',
      type: 'button',
      text: 'Générer',
    },
    {
      id: 1,
      click: () => setNumberMax(6),
      value: 'delete',
      type: 'button',
      text: 'Reset',
    },
  ]

  const controllerSettings = [
    {
      id: 0,
      click: () => {
        let n = numberMax
        chooseDice(numberMax === 9999 ? 9999 : ++n)
      },
      value: 'add',
      type: 'button',
    },
    {
      id: 1,
      label: 'numberOnDice',
      typeInput: 'number',
      valueMax: numberMax,
      click: (e) => e.target.select(),
      onChange: (e) => {
        let value = parseInt(e.target.value)
        if (!isNaN(value)) {
          value = Math.max(1, Math.min(9999, value))
          setNumberMax(value)
        }
      },
      value: 'delete',
      type: 'input',
    },
    {
      id: 2,
      click: () => {
        let n = numberMax
        chooseDice(numberMax === 1 ? 1 : --n)
      },
      value: 'remove',
      type: 'button',
    },
  ]
  return (
    <section className="toolsContainer">
      <BoardController
        controllerParams={controllerSettings}
        controlType="settings"
      />

      <section className="toolsContainer__item--square toolsContainer__item">
        <p className="toolsContainer__item--fontSize">{number}</p>
      </section>

      <BoardController
        controllerParams={controllerParams}
        controlType="params"
      />
    </section>
  )
}
