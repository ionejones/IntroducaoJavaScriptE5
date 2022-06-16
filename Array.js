function verificaPares (array) {
  if (!array ) { console.log('Favor preencher o array com números') }

  for (let i=0; i< array.length; i++) {
    if (array[i] != 0 &&  array[i]%2 === 0) {
      console.log(`Substituindo o ${array[i]} por zero`);
      array[i] = 0;
    }
  }
  console.log (array);
}

let arr = [4,5,8,10,3,400,9,0];
verificaPares(arr);