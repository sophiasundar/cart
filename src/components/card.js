import Rating from "./rating";



        const Card  =({name,price,disabled})=>{
            return(
            <>
               <div className="col-6 col-md-4 col-lg-3 p-3">
          <div className="cborder mb-5 text-center pb-4">
          <div className="img" style={{ height: 150 }}>450 X300</div>
            <h2>{name}</h2>
            <h3><Rating></Rating></h3>
            <h4>{price}</h4>
            
            <button className="btn-danger" 
               
             >
            <span>
                {disabled}
              </span>
            </button>
          </div>
                </div>
            </>
        )
        }

export default Card;        