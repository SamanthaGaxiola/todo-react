function getTodos() {
  let arr = []
  for(let i=0; i<15; i++){
    arr.push(`item ${i+1}`)
  }
  return arr;
}
export default getTodos