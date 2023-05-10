import { listTools } from '../../../data/listTools'
import TitleTools from '../../TitleTools'

export default function Dice() {
  return (
    <section>
      <TitleTools title={listTools[0].dice.name} />
    </section>
  )
}
