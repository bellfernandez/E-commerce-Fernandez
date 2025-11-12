function Button({ text, callback, icon }) {
  return (
    <button onClick={callback}>
      {icon} {text}
    </button>
  )
}

export default Button