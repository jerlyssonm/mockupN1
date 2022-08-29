import './aside.scss'

function Aside() {
  return (
    <>
      <aside>
          <h2>Você vai curtir também</h2>
          <hr />
          <div className="like-galery">
            <div className='product-like'>
              <div className="img">img</div>
              <h5>nome do produto</h5>
              <p><span>R$ 190.00</span> R$ 150.00</p>
              <p>ou 3x de 50.00</p>
            </div>
            <div className='product-like'>
              <div className="img">img</div>
              <h5>nome do produto</h5>
              <p><span>R$ 190.00</span> R$ 150.00</p>
              <p>ou 3x de 50.00</p>
            </div>
            <div className='product-like'>
              <div className="img">img</div>
              <h5>nome do produto</h5>
              <p><span>R$ 190.00</span> R$ 150.00</p>
              <p>ou 3x de 50.00</p>
            </div>
            <div className='product-like'>
              <div className="img">img</div>
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
