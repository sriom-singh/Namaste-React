const RestuarantCard = ({title,images,price,brand,id})=>{
    return (
    <div className="card" key={id}>
       <img className="food-image" src={images[0]} ></img>
       <div className="flex">       
         <h4>{title}</h4>
          <p>${price}</p>
          </div>
       <p>{brand}</p>
     
     </div>)
   }     
   export default RestuarantCard;