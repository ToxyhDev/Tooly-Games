export default function BoardControlSelect({
  id,
  label,
  valueMax,
  onChange,
  title,
  options,
}) {
  return (
    <>
      <label htmlFor={label} className="BoardControl__label" key={id}></label>
      <section>
        <p>{title}</p>
        <select
          name={label}
          id={label}
          className="BoardControl__select"
          value={valueMax}
          onChange={onChange}
        >
          {options}
        </select>
      </section>
    </>
  )
}
