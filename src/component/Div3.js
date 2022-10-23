
const Div3 = ({input})=>{
    console.log(input)
    const change = (e)=>{
      console.log(e.target.style.backgroundColor)
       if(input==='1'){
        e.target.style.backgroundColor="skyblue"
       }
       else if(input==='2'){
        e.target.style.backgroundColor ="orange"
       }
       else{
         e.target.style.backgroundColor ="green"
       }
    }
  
      return(
       <>
        <div class="card" style={{backgroundColor:""}} onClick={change}>
          
        </div>
       </>
      )
}

export default Div3;