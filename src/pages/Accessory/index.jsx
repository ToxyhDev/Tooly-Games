import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import { listTools } from '../../data/listTools'

export default function Accessory() {
  const { path } = useParams()

  const findToolByPath = (path) => {
    return listTools.find((tool) => tool.path === path)
  }
  const selectedTool = findToolByPath(path)

  return (
    <section>
      <Header />
      {selectedTool.tool}
    </section>
  )
}
