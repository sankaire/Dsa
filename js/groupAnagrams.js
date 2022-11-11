/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// hashmap approach
 const groupAnagrams = (strs) => {
    let hash = {}
    
    strs.forEach(str =>{
        let letters = str.split('').sort()

        if(hash[letters]){
            hash[letters].push(str)
        }else{
            hash[letters] = [str]
        }
    })
    const keys = Object.keys(hash)
    const values = keys.map((v)=>{return hash[v]})
    return values
};