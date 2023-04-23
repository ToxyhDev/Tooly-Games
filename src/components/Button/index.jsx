export default function button({ id, className, text }) {
  return (
    <button key={id} className={`${className} button`}>
      {text}
    </button>
  )
}
