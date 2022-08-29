import './form.scss'

function Form() {
  return (
    <div className="container-form">
      <div className='box-form'>
        <div>
          <p>
            Cadastre-se e seja um dos primeiros a
            saber de todas as novidades e ofertas.
          </p>
        </div>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="E-mail" />
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </div>
  )
}

export default Form