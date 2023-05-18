export default function BoardControlButton({ id, click, buttonContent }) {
  return (
    <button key={id} onClick={click} className="BoardControl__button">
      {buttonContent}
    </button>
  )
}
