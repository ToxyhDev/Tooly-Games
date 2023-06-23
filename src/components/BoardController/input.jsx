export default function BoardControlInput({
  id,
  label,
  typeInput,
  valueMax,
  click,
  onChange,
}) {
  return (
    <>
      <label htmlFor={label} className="BoardControl__label" key={id}></label>
      <input
        className="BoardControl__input"
        type={typeInput}
        name={label}
        id={label}
        value={valueMax}
        onClick={click}
        onChange={onChange}
      />
    </>
  )
}
