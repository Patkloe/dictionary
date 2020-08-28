function unique(arr) {
  let newSet = new Set();
  for(let val of arr) {
    newSet.add(val);
  }
  return newSet;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );

function unique(tab){
 var nouv = {};
  for(var i = 0; i < tab.length; i++)
      nouv[tab[i]] = tab[i];
 return nouv;
}
 let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));
