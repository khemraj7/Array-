let str1 = "SILENT"
let str2 = "LISTEN"

function anagram(str1, str2){
    if(str1.length === str2.length){
        let obj ={}
        
        for(let value of str1){
            if(obj[value]){
               obj[value] = obj[value] +1 
            }else{
                obj[value] = 1
            }
        }
       for(let value of str2){
         if(!obj[value]) {
            return false
         }
         obj[value]
       }
       
       return true
        
    }else{
        return false 
    }
    
   
}

console.log(anagram(str1, str2))