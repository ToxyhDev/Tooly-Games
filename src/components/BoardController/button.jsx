export default function BoardControlButton({ id, click, buttonContent, text }) {
  return (
    <div onClick={click} className="BoardControl--params-layout">
      <button key={id} className="BoardControl__button">
        {buttonContent}
      </button>
      {text !== undefined ? <p>{text}</p> : undefined}
    </div>
  )
}
