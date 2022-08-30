import './aside.scss'

function Aside() {
  return (
    <>
      <aside>
          <h2>Você vai curtir também</h2>
          <hr />
          <div className="like-galery">
            <div className='product-like'>
              <div className="img">
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-6-next-nature-masculino/02/2IC-4365-002/2IC-4365-002_zoom1.jpg?ts=1631634376&ims=544x" alt="" />
                <span>20% OFF</span>
              </div>
              <h5>nome do produto</h5>
              <p><span>R$ 190.00</span> R$ 150.00</p>
              <p>ou 3x de 50.00</p>
            </div>
            <div className='product-like'>
              <div className="img">
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-6-next-nature-masculino/02/2IC-4365-002/2IC-4365-002_zoom1.jpg?ts=1631634376&ims=544x" alt="" />
                <span>20% OFF</span>
              </div>
              <h5>nome do produto</h5>
              <p><span>R$ 190.00</span> R$ 150.00</p>
              <p>ou 3x de 50.00</p>
            </div>
            <div className='product-like'>
              <div className="img">
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-6-next-nature-masculino/02/2IC-4365-002/2IC-4365-002_zoom1.jpg?ts=1631634376&ims=544x" alt="" />
                <span>20% OFF</span>
              </div>
              <h5>nome do produto</h5>
              <p><span>R$ 190.00</span> R$ 150.00</p>
              <p>ou 3x de 50.00</p>
            </div>
            <div className='product-like'>
              <div className="img">
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-6-next-nature-masculino/02/2IC-4365-002/2IC-4365-002_zoom1.jpg?ts=1631634376&ims=544x" alt="" />
                <span>20% OFF</span>
              </div>
              <h5>nome do produto</h5>
              <p><span>R$ 190.00</span> R$ 150.00</p>
              <p>ou 3x de 50.00</p>
            </div>
          </div>
      </aside>
    </>
  );
}

export default Aside;
