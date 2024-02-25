/**
 * The problem with this code is that the variable isButtonDisabled was created
 * thinking about the effect/consequence that it will have on the code, not for the
 * motive or cause behind it
 */
function Button() {
  const isButtonDisabled = true

  return (
    <button disabled={isButtonDisabled}>
      <span></span>
      {isButtonDisabled ? 'Carregando' : 'Enviar'}
    </button>
  )
}

/**
 * Now this code is correct because the variable is now isFormSubmitting, so
 * the cause of the button to be disabled is because the form is not ready yet,
 * and not the effect of this form
 */
function Button() {
  const isFormSubmitting = true

  return (
    <button disabled={isFormSubmitting}>
      <span></span>
      {isFormSubmitting ? 'Carregando' : 'Enviar'}
    </button>
  )
}
