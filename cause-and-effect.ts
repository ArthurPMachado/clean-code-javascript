function Button() {
  const isButtonDisabled = true

  return (
    <button disabled={isButtonDisabled}>
      <span></span>
      {isButtonDisabled ? 'Carregando' : 'Enviar'}
    </button>
  )
}
