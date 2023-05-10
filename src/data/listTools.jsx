import { IconA, IconDice } from '../assets/svgButtonTools'
import RandomLetter from '../components/tools/RandomLetter'
import Dice from '../components/tools/Dice'

export const listTools = [
  {
    randomLetter: {
      id: 1,
      name: 'Générateur de lettres',
      icon: <IconA />,
      path: 'generateur-lettre',
      tool: <RandomLetter />,
    },
    dice: {
      id: 2,
      name: 'Dés',
      icon: <IconDice />,
      path: 'des',
      tool: <Dice />,
    },
  },
]
