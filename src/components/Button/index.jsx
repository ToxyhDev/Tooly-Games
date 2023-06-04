export default function Button({ id, className, text, icon, click }) {
  return (
    <button key={id} className={`${className} button`} onClick={click}>
      {icon === undefined ? null : icon}
      {text}
    </button>
  )
}
