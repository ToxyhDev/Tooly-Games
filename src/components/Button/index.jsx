export default function Button({ id, className, text, icon }) {
  return (
    <button key={id} className={`${className} button`}>
      {icon === undefined ? null : icon}
      {text}
    </button>
  )
}
