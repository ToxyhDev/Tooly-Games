import { IconA, IconDice, IconNumber } from '../assets/svgButtonTools'
import RandomLetter from '../components/tools/RandomLetter'
import RandomNumber from '../components/tools/RandomNumber'
import Dice from '../components/tools/Dice'

export const listTools = [
  {
    id: 0,
    name: 'Générateur de lettres',
    icon: <IconA />,
    path: 'generateur-lettre',
    tool: <RandomLetter />,
    // controller: controllerParam,
  },
  {
    id: 1,
    name: 'Générateur de nombres',
    icon: <IconNumber />,
    path: 'generateur-nombre',
    tool: <RandomNumber />,
  },
  {
    id: 2,
    name: 'Dés',
    icon: <IconDice />,
    path: 'des',
    tool: <Dice />,
  },
]
