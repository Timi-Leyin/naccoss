import getChoicePercentage from "./getChoicePercentage";

const getWinner =(_votes:any)=>{
   const options =  JSON.parse(_votes.options || '[]') 
   const votes =  JSON.parse(_votes.votes || '[]') 
   let highest = 0
   let hIndex = -1;
   let isTie = false

   for (let index = 0; index < options.length; index++) {
   const zz = getChoicePercentage(votes, index)
   isTie = false
    if(zz.total > highest){
        highest = zz.total
        hIndex = index
    }
    else if(zz.total == highest) {
        isTie = true 
        return  "No Concluded"
    }
   }

   return options[hIndex]
}

export default getWinner