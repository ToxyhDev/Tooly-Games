import { IconA, IconDice } from '../assets/svgButtonTools'
import RandomLetter from '../components/tools/RandomLetter'
import Dice from '../components/tools/Dice'

export const listTools = [
  {
    id: 0,
    name: 'Générateur de lettres',
    icon: <IconA />,
    path: 'generateur-lettre',
    tool: <RandomLetter />,
  },
  {
    id: 1,
    name: 'Dés',
    icon: <IconDice />,
    path: 'des',
    tool: <Dice />,
  },
]
