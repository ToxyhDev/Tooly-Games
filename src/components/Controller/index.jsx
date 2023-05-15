export default function Controller({ id, onclick, value }) {
  return (
    <section className="randomLetter__boardControl">
      <button key={id} onClick={onclick}>
        {value}
      </button>
    </section>
  )
}
