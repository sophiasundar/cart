import Card from "./card.js"; 
        
        
        
        
        const cardList=()=>{
            const [cardList,setCardList]=useState([])

            const getCard=()=>{
                fetch("https://65b4f8bd41db5efd28672348.mockapi.io/cart")
                .then((data)=>data.json())     
                .then((res)=>setCardList(res))
            }
             
            useEffect(()=>{
                getCard()
                    },[])  

            return(
            <>
            {
                cardList.map((element,index)=>{
                    return <Card {...element} key={index} />
                })
            
            }
                  
            </>
            )
        }

export default cardList;        