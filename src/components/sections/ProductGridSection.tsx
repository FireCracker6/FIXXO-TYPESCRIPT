import React  from 'react'
import MobileGridCard from '../cards/MobileGridCard';
import {Products} from '../models/productsModel'




import ProductCard from '../cards/ProductCard';

interface IProductTilesProps {
  title: string
  items: Products[]
  
}



const ProductGridSection: React.FC<IProductTilesProps> = ({title="", items = [] }) => {

 
/* using useEffect to differ on the cards used for mobile or desktop. 
This was done at an early phase of the project. Could possibly improve code by using one card only. //LS */

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;

  React.useEffect(() =>  {

   
 
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [] );

  return width < breakpoint ? <>
    <div className='section-title'><h1>{title}</h1></div>
    <div className="container-md ">
    <div className="row row-cols-1 row-cols-sm-2  g-4  row-cols-md-2 g-4   row-cols-xl-4  g-4">

            {

                 items.map(product  =>   <MobileGridCard key={product.articleNumber} item={product} />)
            

              }
       

  </div> 
  </div>
  </> :   
  <>
  
            <div className='section-title'><h1>{title}</h1></div>
            <div className="container">
    
              <div className="product-gallery-grid"> 
              {
                  items.map(product =>    <ProductCard key={product.articleNumber} item={product} />)

              }
           
                 
              </div>
  </div>;
  </>
}

export default ProductGridSection