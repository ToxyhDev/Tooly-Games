import {
  IconRestart,
  IconDelete,
  IconAdd,
  IconRemove,
  IconPlay,
} from '../../assets/svgBoardController'
import BoardControlButton from './button'
import BoardControlInput from './input'
import BoardControlSelect from './select'

export default function BoardController({ controllerParams, controlType }) {
  return (
    <section className={`BoardControl BoardControl--${controlType}`}>
      {controllerParams.map(
        ({
          id,
          click,
          value,
          type,
          onChange,
          label,
          typeInput,
          valueMax,
          options,
          title,
        }) => {
          //configure the icon according to its configuration
          let buttonContent
          switch (value) {
            case 'generate':
              buttonContent = <IconPlay />
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
          //choose the board controller according to the HTML tag
          switch (type) {
            case 'button':
              if (buttonContent !== null) {
                return (
                  <BoardControlButton
                    key={id}
                    click={click}
                    buttonContent={buttonContent}
                  />
                )
              } else {
                return null
              }
            case 'input':
              return (
                <BoardControlInput
                  key={id}
                  label={label}
                  typeInput={typeInput}
                  valueMax={valueMax}
                  click={click}
                  onChange={onChange}
                />
              )
            case 'select':
              return (
                <BoardControlSelect
                  key={id}
                  label={label}
                  valueMax={valueMax}
                  onChange={onChange}
                  title={title}
                  options={options}
                />
              )
            default:
              return null
          }
        }
      )}
    </section>
  )
}
