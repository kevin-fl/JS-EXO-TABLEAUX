// differentes methodes avec les tableaux //
// https://www.kaherecode.com/tutorial/javascript-arraymethods-par-la-pratique


//METHODE Array.concat()   tableau1 + tableau2

let tableau1 = ['bouma', 'tupac', 'helena', 'carlos', 'pierre', 'jeanValjean']
let tableau2 = ['jean', 'colin', 'ines', 'layane', 'sana', 'freddy', 'jeanValjean']

let tableaux = tableau1.concat(tableau2)
console.log(tableaux);


// * pour eviter les doublons on utilise Set

let tableauSousFormeTableau = [...new Set(tableau1.concat(tableau2))]    //--> sous forme de tableaux
console.log("tableauxx sous forme tableau");
console.log(tableauSousFormeTableau);

let tableauObjet = new Set(tableau1.concat(tableau2))                 //--> sous forme d objet
console.log(tableauObjet);

// * pour retransformer en tableau
tableauObjet = [...tableauObjet]
console.log(tableauObjet);

//METHODE Array.Every()  verifie chaque element du tableau , par exemple verifier si l age est + de 20 ans 

let tableauy = [
  {
    name: 'Moussa',
    age: 18,
  },
  {
    name: 'Adama',
    age: 27,
  },
  {
    name: 'Djiby',
    age: 30,
  },
]


let tousMajeur = tableauy.every(taby => taby.age >= 20)
console.log(tousMajeur);


//* Boucle FOR fais la meme chose , le code est plus long que la methode .every

/*let tousMajeur = true

for (let i = 0; i < tableauy.length; i++) {
  if (tableauy[i].age < 20) {
    tousMajeur= false
  }
}
 
console.log(tousMajeur) // false
*/


//METHODE array.some()  verifie si un seul element verifie une condition

const mineur = tableauy.some(tabw => tabw.age < 18)
console.log(mineur);



//METHODE array.filter()   pour filtrer un tableau , ex : ceux qui ont plus de 20 ans .


//const mineurX = tableauy.filter(leTab => leTab.age > 20)
//console.log(mineurX);

const mineury = tableauy.filter(tab => tab.age> 20)
console.log(mineury);
//got it 
//METHODE array.map()  parcours le tableau et crée un nv tableau avec les noms par ex . sinon on aurait fait boucle for() , crée un nv tableau et utiliser la methode push() ! 

const leBeauTableau = tableauy.map(letab => letab.name)
console.log(leBeauTableau);


//Methode array.reduce() prend toutes les valeurs du tableau et les reduit en un seul element 

const numbers = [4, 27, 18, 99, 56]
console.log(numbers.reduce((x, y) => x + y));

// * on peut initialiser a 10 par exemple au lieu de 0 . total 214 au lieu de 204 
console.log(numbers.reduce((x, y) => x + y, 10));


//* Autre cas pratiques , faire une moyenne d 'un tableau 

const scores = [
  {
    value: 15,
    coefficient: 4,
  },
  {
    value: 19,
    coefficient: 3,
  },
  {
    value: 10,
    coefficient: 1,
  },
  {
    value: 9,
    coefficient: 2,
  },
  {
    value: 12,
    coefficient: 2,
  },
]



const score = scores.reduce(
  ({ value, coef }, elt) => {
    return {
      value: value + elt.value * elt.coefficient,
      coef: coef + elt.coefficient,
    }
  },
  { value: 0, coef: 0 }
)

average = parseFloat((score.value / score.coef).toFixed(3))

console.log(average) // 14.08




//METHODE array.reverse() 

const tableauNum = [0, 1, 2, 3, 4, 5]
console.log(tableauNum.reverse());



//METHODE array.slice()     copie une portion du tableau , sans modifier l original . prend 2 params , l index quand on commence l extraction , le second ou il faut limiter l extraction

console.log(tableauNum.slice(2, 4));

//*garde l index 2 et exclue a patir du 4 inclus .


//METHODE Array.splice    inserer ou retirer elements . modifie le tableau original sur lequel il est appeler 
// La fonction splice() prend trois paramètres, l'indice à partir duquel on change le tableau, le nombre d'éléments à supprimer et le(s) element(s) à ajouter.

tableauNum.splice(3, 0, 3)
//console.log(tableauNum) [0, 1, 2, 3, 3 , 4, 5]


tableauNum.splice(2, 1) // supprimer un element a l indice 2
console.log(tableauNum);


//* METHODE Comment sélectionner une valeur d'un OBJET qui est dans un TABLEAU-Débutant

// https://www.youtube.com/watch?v=VW2lLWoDwH4

const todoList = [

  "ballon",
  "chaussures de foot ",
  {
    text: "emplacement de la todoList",
    done: false , 
  },
  "thermometre",
];

console.log(todoList[2].text);     // va aller dans le 3 eme element , c a d rentrer dans l objet et prendre le text car on specifie on veut juste le texte , sinon recupere tout l objet 