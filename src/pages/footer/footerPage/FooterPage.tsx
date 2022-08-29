import './footerPage.scss'

function FooterPage() {
  return (
    <>
      <div className='footer-box'>
        <div className='about-agency'>
          <h3>agenciaN1</h3>
          <div>
            <span>face</span>
            <span>twiter</span>
            <span>insta</span>
            <span>YT</span>
            <span>TikTok</span>
          </div>
          <hr />
          <div>
            <span>icone</span>
            11 99999-9999
          </div>
          <div>
            <span>icone</span>
            contato@agencian1.com.br
          </div>
          <p>Seg. à Sex. das 09:00h às 18:00h
            Sábado das 10:00h às 14:00h
          </p>
        </div>
        <div className='all-infors'>
          <div className='infors-n1'>
            <div className='infors'>
              <h2>Institucional</h2>
              <p>Quem somos</p>
              <p>Nossas Lojas</p>
              <p>Fale Conosco</p>
            </div>
            <div className='infors'>
              <h2>Minha Conta</h2>
              <p>Meus Dados</p>
              <p>Meus Pedidos</p>
              <p>Login</p>
            </div>
            <div className='infors'>
              <h2>Suporte</h2>
              <p>Política de privacidade</p>
              <p>Perguntas Frequentes</p>
              <p>Troca ou devolução</p>
            </div>
          </div>
          <div className='pay-security'>
            <div className='box-pay'>
              <h2>Pagamentos</h2>
              <div>
                <div className='img-cards'>
                  <img src="https://img1.gratispng.com/20180403/koe/kisspng-mastercard-credit-card-visa-payment-service-mastercard-5ac3fae6bb3355.0233907415227931907668.jpg" alt="" />
                </div>
                <div className='img-cards'>
                  <img src="https://w7.pngwing.com/pngs/992/823/png-transparent-visa-credit-card-gift-card-payment-cheque-mastercard-s-blue-text-service.png" alt="" />
                </div>
                <div className='img-cards'>
                  <img src="https://www.abcdacomunicacao.com.br/wp-content/uploads/elo_logo-baixa.png" alt="" />
                </div>
                <div className='img-cards'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/1200px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png" alt="" />
                </div>
                <div className='img-cards'>
                  <img src="https://blitzlingerie.com.br/wp-content/uploads/2018/03/boleto.png" alt="" />
                </div>
              </div>
            </div>
            <div className='box-security'>
              <h2>Segurança</h2>
              <div>
                <img src="data:image/png;base64,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" alt="" />
              </div>
            </div>
            <div className='copyright'>
                <p>created by </p>
                <h4 className='logo'>agência<span>N1</span></h4>
                <p>Powered by </p>
                <h4>VTEX</h4>
            </div>
          </div>
        </div>

      </div>
      <p>Agência N1 - Todos os Direitos Reservados</p>
    </>
  )
}

export default FooterPage