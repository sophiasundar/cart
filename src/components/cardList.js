import Cardsss from "./card";
import { useEffect } from "react";
import { useState } from "react";       
        
        // "https://65b4f8bd41db5efd28672348.mockapi.io/cart
        
        const CardList=()=>{
            const [cardList,setCardList]=useState([])
                console.log(cardList)
            const getCard=()=>{
                fetch("https://655b7db6ab37729791a9329c.mockapi.io/usercrud")
                .then((data)=>data.json())     
                .then((res)=>setCardList(res))
            }
             
            useEffect(()=>{
                getCard()
                    },[])  

            return(
            <>
            <div className="App">
            {
                cardList.map((element,index)=>{
                    console.log(element.id)
                    return <Cardsss  element={element} key={index}/>
                })
            
            }
            </div>      
            </>
            )
        }

export default CardList;        