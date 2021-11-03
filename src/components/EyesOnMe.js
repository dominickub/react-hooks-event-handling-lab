// Code EyesOnMe Component Here

function EyesOnMe(){
    function eyesOn(event){
        console.log("Good!")
    }
    function lookAtMe(event){
        console.log("Hey! Eyes on me!")
    }
   return (<button onFocus={eyesOn} onBlur={lookAtMe}>Eyes On Me</button>)
}

export default EyesOnMe