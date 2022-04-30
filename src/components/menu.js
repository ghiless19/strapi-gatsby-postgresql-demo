import * as React from 'react'
import Query from "./Query"
import { containerCard, containerCardName, containerCardDesc, containerCardPrice, card, container, photo } from "./style.css"


const Menu = () => {
  return (
    <div>
      <Query>
        {({ data: { items } }) => {
          return (
            <div className={container}>
              {items.data.map((item) => (
                <div key={item.id} >
                  <div className={card}>
                    <div >
                      <img src={item.attributes.image.data.attributes.url} alt={item.attributes.name} className={photo} />
                    </div>

                    <div className={containerCard}>
                      <div>
                        <div className={containerCardName}>
                          {item.attributes.name}
                        </div>
                        <div className={containerCardPrice}>
                          {item.attributes.price} $
                        </div>
                      </div>
                      <div className={containerCardDesc}>
                        <p>
                          {item.attributes.description}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              ))
              }
            </div>
          )
        }}
      </Query>
    </div>
  )
}

export default Menu