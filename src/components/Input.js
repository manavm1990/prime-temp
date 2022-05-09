export default function Input({id, label, changeHandler, value}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} placeholder={label} value={value} onChange={changeHandler}/>
    </div>
  )
}