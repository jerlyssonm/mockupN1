import { Icons } from '../../../assets/icons'
import './article.scss'

function Article() {
  return (
    <article>
      <div className='location'>
        <p>home</p>
        <span>{'>'}</span>
        <p>Tênis</p>
        <span>{'>'}</span>
        <p>nome do produto</p>
      </div>
      <div className='prod-imgs'>
        <div className='small-img'>
          <div>sub</div>
          <div>sub</div>
          <div>sub</div>
          <div>sub</div>
        </div>
        <div className='large-img'>image Grande</div>
      </div>
      <div className='detail-product'>
        <div className="desc">
          <h4>Tênis Nike Air Max 97 SE</h4>
          <p>Codigo: 65987</p>
        </div>
        <div className="price">
          <div className="value">
            <span>R$ 373.00</span>
            <h5>R$ 261,90</h5>
          </div>
          <p>ou 10x de R$ 26,19</p>
        </div>
        <div className="color">
          <p>Cores</p>
          <div className="name-color">
            <div style={{ background: 'blue' }}> </div>
            <div style={{ background: 'red' }}> </div>
            <div style={{ background: 'black' }}></div>
          </div>
        </div>
        <div className="size">
          <p>tamanho</p>
          <div className="name-size">
            <div><p>39</p></div>
            <div><p>40</p></div>
            <div><p>41</p></div>
            <div><p>42</p></div>
          </div>
        </div>
        <div className='order-detail'>
          <div className="quantity">
            <p className='btn-qnt'>{Icons.Minus}</p>
            <span>01</span>
            <p className='btn-qnt'>{Icons.Plus}</p>
          </div>
          <button className='btn-buy'>{Icons.Cart} Comprar Agora</button>
        </div>
        <div className="details">
          <details className="description">
            <summary>Detalhes do produto</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit enim veniam, corporis ipsam nam impedit assumenda perspiciatis dignissimos ducimus in iusto suscipit nemo autem omnis tenetur, debitis, ex laudantium! Libero.</p>
          </details>
          <hr />
          <details className="detail-frete">
            <summary>Calcular frete e entrega</summary>
            <div>
              <input type="text" placeholder='Digite seu CEP' />
              <input type="submit" value='Calcular'/>
            </div>
          </details>
        </div>
        <div className="share">
          <p>Compartilhar</p>
          <span>{Icons.Face}</span>
          <span>{Icons.Insta}</span>
          <span>{Icons.Email}</span>
        </div>
      </div>
    </article>
  )
}

export default Article