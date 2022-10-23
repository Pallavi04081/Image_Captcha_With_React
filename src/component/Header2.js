import React,{useEffect, useState} from "react"
import axios from "axios"

export function Header2(){

const[getApi,SetGetApi] = useState([])
let Api = "http://localhost:3004/user" 

 useEffect(()=> {output()},[] )

 const output = async()=>{
      try{
        let responce = await axios.get(Api)
        SetGetApi(responce.data)
      }
      catch(error){
        console.log(error.messsage)
      }
 }
 function change(e){
  const update = getApi.filter((element)=>{
      if(element.location === e.target.value) return 
       
      
  })
  
    SetGetApi(update) 
 }
    return (
         <div className="header">
          <button value={""} onClick={change} style={{width:50,height:50}}>chnage</button>

         {
          getApi.map((element)=>
          {
           
            return(
              <div style={{width:100,height:100,backgroundColor:"blue"}}>
               <img src={element.PostImage} style={{width:100,height:100}}/>
              </div>
            )

          }
          
          )

         }
          </div>
    )
}