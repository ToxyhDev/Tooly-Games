export default function BoardControlButton({
  id,
  click,
  buttonContent,
  text,
  onMouseUp,
  onMouseDown,
}) {
  return (
    <div className="BoardControl--params-layout">
      <button key={id} onClick={click} className="BoardControl__button">
        {buttonContent}
      </button>
      {text !== undefined ? <p>{text}</p> : undefined}
      {/* <p>{text}</p> */}
    </div>
  )
}
