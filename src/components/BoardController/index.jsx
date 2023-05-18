import {
  IconRandom,
  IconRestart,
  IconDelete,
  IconAdd,
  IconRemove,
} from '../../assets/svgBoardController'
import BoardControlButton from './button'
import BoardControlInput from './input'

export default function BoardController({ controllerParams, controlType }) {
  return (
    <section className={`BoardControl BoardControl--${controlType}`}>
      {controllerParams.map(
        ({ id, click, value, type, onChange, label, typeInput, valueMax }) => {
          let buttonContent
          switch (value) {
            case 'generate':
              buttonContent = <IconRandom />
              break
            case 'restart':
              buttonContent = <IconRestart />
              break
            case 'delete':
              buttonContent = <IconDelete />
              break
            case 'add':
              buttonContent = <IconAdd />
              break
            case 'remove':
              buttonContent = <IconRemove />
              break
            case 'null':
              buttonContent = null
              break
            default:
              buttonContent = value
              break
          }
          return type === 'button' ? (
            buttonContent !== null ? (
              <BoardControlButton
                key={id}
                click={click}
                buttonContent={buttonContent}
              />
            ) : null
          ) : type === 'input' ? (
            <BoardControlInput
              key={id}
              label={label}
              typeInput={typeInput}
              valueMax={valueMax}
              click={click}
              onChange={onChange}
            />
          ) : null
        }
      )}
    </section>
  )
}
