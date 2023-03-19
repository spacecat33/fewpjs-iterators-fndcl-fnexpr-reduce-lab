const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce
(function(total, batches){

  console.log(total)
  console.log(batches)
 
  return batches + total
  })


// OR:

// const totalBatteries = batteryBatches.reduce(function(accumulator, element) { return accumulator + element });