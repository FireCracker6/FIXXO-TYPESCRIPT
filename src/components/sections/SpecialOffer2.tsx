import React from 'react'
import WhiteButton from '../buttons/WhiteButton'
import ProductCard from '../cards/ProductCard'
import MobileGridCard from '../cards/MobileGridCard'

interface Props {
  items: any[]
}

const SpecialOffer2: React.FC<Props> = ({items = []}) => {

  


      const [width, setWidth] = React.useState(window.innerWidth);
      const breakpoint = 1200;
    
      React.useEffect(() =>  {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
      }, [] );

      return width < breakpoint ? 
      <div className="container-fluid">
    
           
          <section className="special-offer-2"> 
          <div className="container--md">
                  <div className="item-2">
                  <h2>2 FOR USD $29</h2>
                  <WhiteButton link="/products" text="SHOP NOW!"  />  
                  </div>
                  </div>
            
                  <div className="item-1 ">
                        
                        <div className="products-grid-wrapper ">



                        <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2  g-4  row-cols-md-2 g-4   row-cols-xl-4  g-4">
     
                     {
                items.map(product =>    <MobileGridCard key={product.articleNumber} item={product} />)

              }
          
       
  </div>
  </div> 
                       
    </div>

                  </div>

          
                  
                 
                        

            </section>
      </div> :  
      
      
            <div className="container-fluid">
                    <section className="special-offer-2">
                      
                    <div className="item-1">
                              
                              <div className="products-grid-wrapper">
        
                              {
                items.map(product =>    <ProductCard key={product.articleNumber} item={product} />)

              }
           
                              </div>
        
                          </div>
                                
                      <div className="item-2">
                        <h2>2 FOR USD $29</h2>
                        <WhiteButton link="/products" text="SHOP NOW!"  />  
                      </div>
                      
                
                              
                    
                    </section>
            </div>; 
    }

  


export default SpecialOffer2