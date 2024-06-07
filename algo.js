const prompt = require("prompt-sync")()

//exo test
// let age = prompt("entre ton age")

// if(age >= 18) {
//     console.log("est majeur");
// }else {
//     console.log("est mineur");
// }

// exo 1
// let number = prompt ("entre un nombre")

// if(number < 0) {
//     console.log("Négatif");
// }else if (number == 0) {
//     console.log("0");
// }
// else {
//     console.log("Positif");
// }

// exo 2
// let password = prompt("Entrez votre mot-de-passe")

// if(password == "12345") {
//     console.log("Accès autorisé");
// }else {
//     console.log("Accès refusé");
// }

// exo 3
// let a = prompt ("Entrez un nombre")
// let b = prompt ("Entrez un nombre")
// let c = prompt ("Entrez un nombre")

// if (a > b && a > c) {
//     console.log(a);
// }else if (b > a && b > c) {
//     console.log(b);
// }else if (c > a && c > b) {
//     console.log(c);
// }

// exo 4
// let day = prompt ("Entrez un chiffre en 1 et 7")

// if (day == "1") {
//     console.log("Lundi");
// }else if (day == "2") {
//     console.log("Mardi");
// }else if (day == "3") {
//     console.log("Mercredi");
// }else if (day == "4") {
//     console.log("Jeudi");
// }else if (day == "5") {
//     console.log("Vendredi");
// }else if (day == "6") {
//     console.log("Samedi");
// }else if (day == "7") {
//     console.log("Dimanche");
// }else {
//     console.log("Nombre Invalide");
// }

// exo 4 also
// const nmbr = prompt("Entrez un nombre")

// switch (nmbr) {
//     case "1":
//         console.log("Lundi");
//         break;
//     case "2";
//         console.log("margi");
//         break;
//     case "3";
//         console.log("mercredi");
//         break;
//     case "4";
//         console.log("jeudi");
//         break;
//     case "5";
//         console.log("vendredi");
//         break;
//     case "6";
//         console.log("samedi");
//         break;
//     case "7";
//         console.log("dimanche");
//         break;
//     default;
//         console.log('Nombre Invalide');
//         break;
// }


// Algo lvl 2
// exo 1
// let a = prompt ("Entrez une valeur")
// let b = prompt ("Entrez une valeur")

// if (a < b) {
//     console.log(a);
// }else {
//     console.log(b);
// }

// exo 2
// let a = prompt ("Entrez un nombre")
// let b = prompt ("Entrez un nombre")

// if ((a*b) < 0) {
// console.log("Négatif");
// }else{
// console.log("Positif");
// }

// exo 3
// let eau = prompt ("Entrez une valeur")

// if (eau < 0) {
//     console.log("Glace");
// }else if (eau > 200) {
//     console.log("Vapeur");
// }else {
//     console.log("Liquide");
// }

// exo 4
// let cadre = prompt ("Entrez le nombre de cadre voulu")

// if (cadre <= 10) {
//     console.log(cadre*20);
// }else if (cadre > 10 && cadre <= 30) {
//     console.log((cadre-10)*15 +200);
// }else {
//     console.log((cadre-30)*5 + 500);
// }

// // exo 5
// let sexe = prompt ("Entrez votre sexe")
// let age = prompt ("Entrez votre âge")
//
// if (sexe == "femme" && age >= 18 && age <= 35) {
// console.log("femme Imposable");
// }else if (sexe == "homme" && age > 20) {
// console.log("homme Imposable");
// }else {
// console.log("Non Imposable");
// }

// exo pile ou face
// let jeu = prompt ("Choisi un chiffre entre 0 et 1")

// function getRandom() {
//     return Math.round(Math.random());
// }

// let piece = getRandom()
// console.log(piece);

// if (jeu == piece) {
//     console.log("Gagné");
// }else {
//     console.log("Perdu lol t'es nul(le)");
// }

// parseInt permet de changer un string en number

// let joueur = prompt ("Pile ou Face ?")
// let piece = Math.round(Math.random())

// if (piece == 0 && joueur == "Pile") {
//     console.log("Gagné");
// }else if (piece == 1 && joueur == "Face") {
//     console.log("Gagné");
// } else {
//     console.log("Perdu lol t'es nul(le)");
// }

// exo devinette de merde
// console.log("Bienvenu à Gaymanji : Le principe de ce jeu est de deviner un animal en répondant à mes questions");
// let response = "Dodo"
// let mainQuesion = prompt ("Je figure dans le film L'Âge de Glace 1, qui suis-je ?")
// let secondQuestion = ("Bien essayé, mais en plus d'être dans ce film merveilleux, je suis également présent dans le jeu Ark, qui suis-je ?")
// let thirdQuestion = ("T'es pas très fut-fut... Okay essaye ça : J'ai des ailes mais je ne peux pas voler, qui suis-je ?")
// let fourthQuestion = ("Ok tu galères en fait... Tant mieux, tu trouveras jamais. Mais j'ai encore un indice pour toi : J'ai un film à mon nom. Qui suis-je ?")
// let lastQuestion = ("Dernière question garçon : Je suis originaire de l'Île Maurine et je pouvais mesurer 1 mètre pour une masse d'environ 10Kg. Là si tu trouves pas t'es un clown...")

// if (mainQuesion == response) {
//     console.log("Ah... T'es smart en fait, gg !");
// }else {
//     secondQuestion = prompt ("Bien essayé, mais en plus d'être dans ce film merveilleux, je suis également présent dans le jeu Ark, qui suis-je ?")
//     if (secondQuestion == response){
//         console.log("Joli ma biche, c'était ça !");
//     }else {
//         thirdQuestion = prompt ("T'es pas très fut-fut... Okay essaye ça : J'ai des ailes mais je ne peux pas voler, qui suis-je ?")
//         if (thirdQuestion == response) {
//             console.log("Amen. Arrête de frimer il t'a fallut 3 indices...");
//         }else {
//             fourthQuestion = prompt ("Ok tu galères en fait... Tant mieux, tu trouveras jamais. Mais j'ai encore un indice pour toi : J'ai un film à mon nom. Qui suis-je ?")
//             if (fourthQuestion == response) {
//                 console.log("Enfin t'as juste !");
//             }else {
//                 lastQuestion = prompt ("Dernière question garçon : Je suis originaire de l'Île Maurine et je pouvais mesurer 1 mètre pour une masse d'environ 10Kg. Là si tu trouves pas t'es un clown...")
//                 console.log("T'es Naze c'était le Dodo");
//             }
//         }
//     }
// }


// boucles
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }


// let index = 0;
// while (index <= 10) {
//     console.log(index);
//     index = index + 1
// }

// exo boucle 1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// exo boucle 2
// let resultSum = 0
// for (let i = 1; i <= 100 ; i++) {
//     resultSum = resultSum + i
// }
// console.log(resultSum);

// exo boucle 3
// let number = prompt ("Entrez un nombre")

// for (let i = 1; i <= 10; i++) {
//     console.log(number*i);
// }

// exo boucle 4
// let one = ""
// for (let i = 1; i <= 5; i++){
//     one = one + "1"
//     console.log(one);
// }

// TD 2 structures itératives

// exo 1 nmr de chaque concurrent + leur temps jusqu'à -1 dossart
// let dossard, time;

// while (dossard != -1) {
//     dossard = parseInt(prompt("Entre le numéro de dossard: "))
//     if (dossard == -1) {
//         break;
//     }
//     time = parseInt(prompt("Entre le temps en secondes: "))
//     console.log(dossard, time);
//     console.log("Le numero ", dossard, "est arrivé en : ", time, " secondes.")
// }

// exo 2
// let minute = parseInt(prompt("Entrez un temps en minutes : "))
// let secondes = parseInt(prompt("Entrez un temps secondes : "))

// for (let i = minute; i >= 0 ; i--) {

//     for (let j = secondes; j >= 0; j--) {
//         console.log(i + " minutes " + j + " secondes ");
//     }
//     secondes = 59
// }

// exo 3
// const age = parseInt (prompt ("Quel âge a Paul ?"))
// const sous = 0

// for (let i = 1; i <= age; i++) {
// sous = sous + ((150 + (i*3)))

// }

// console.log(sous);

// exo 4
// let position = 0
// for (let i = 0; i < 5 ; i++) {
//     let number = parseInt (prompt ("Entrez un nombre : "))
//     if(number > position) {
//         position = number; 
//         h = i+1;
//     } 
// }
// console.log("Le plus grand nombre est ", position);
// console.log(h);

// exo 5
// const tailleMax = 210
// let number = 0

// for (let i = 0; i < 6 ; i++) {
//     let taille = parseInt (prompt("Entrez votre taille en cm : "))
//     if (taille < tailleMax) {
//         number++
//     }
// }
// console.log(number);

// exo 6 // Oui*nombreDeVotant:100
// let oui = 0
// let non = 0
// let blanc = 0
// let nombreDeVotant = parseInt(prompt("Entrez le nombre de votant : "))

// for (let i = 1; i <= nombreDeVotant ; i++) {
//     let vote = prompt ("Votez oui, non ou blanc : ")
//     if (vote === "oui") {
//         oui++
//     }else if (vote === "non") {
//         non++
//     }else if (vote === "blanc")
//         blanc++
// }
// console.log((oui*100)/nombreDeVotant+" % ");
// console.log((non*100)/nombreDeVotant+" % ");
// console.log((blanc*100)/nombreDeVotant+" % ");

// exo 7
// const nmbr = parseInt (prompt("Enrez un chiffre positif : "))
// let isPrime = true
// for (let i = 2; i <= nmbr; i++) {
//     isPrime = true
//         for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false
//             break;
//         } 
//         if (isPrime === true)
//             console.log(i);
//     }
// }

// exo 8
// let valeur = parseInt (prompt ("Entrez un nombre de départ : "))

// for (let i = 0; i <= 6; i++) {
//     console.log(valeur + i);
// }
// while (valeur <= 6) {
//     valeur++
// }
// console.log(valeur);

// exo 9
// let parisCar = 50;
// let nantesCar = 200;
// let year = 0;
// let parisAugm = 100
// let nantesAugm = 0.12

// while (parisCar <= nantesCar) {
//     parisCar += parisAugm;
//     nantesCar += nantesAugm*nantesCar;
//     year++
// }

// console.log(year);

// += (calcule la somme ou la concaténation de ses deux opérandes puis affecte le résultat à la variable représentée par l'opérande gauche)

// // exo 10 n=4 --> 2²*4²*6²*8²=147456
// let number = parseInt(prompt("Tapez un nombre positif : "))
// let produit = 1;
// let i = 2;
// let compteur = 0;
// let str = ""

// while (compteur < number) {
//     let carre = i * i;
//     produit = produit * carre;
// i += 2;
// str = str + i + " X " + i
// if (compteur == number - 1) {
//     str = str + " = "
// } else {
//     str = str + " X "
// }
// compteur++
// }
// console.log(str + produit);

// ou

// for (let i = 2; i <= number * 2; i = i + 2) {
//     produit = produit * (i * i) 
//     str = str + i + " X " + i
//     if (i == number * 2)  {
//      str = str + " = "
//     }else {
//      str = str + " X "
//     }

//  }
//  console.log(str + produit);


// FONCTION

// function sayHello (name, lastName, age) {
//     return "Bonjour " + name + lastName + age;
// }

// let sentence = sayHello("Eva ", "Margot ", 24)
// console.log(sentence);

// function sum(numberOne, numberTwo){
//     return numberOne * numberTwo;
// }
// let test = sum(4, 5)
// console.log(test);

// function randomize(min, max) {
//     return Math.round (Math.random() * (max - min) + min)
// }
// let dice = randomize (1, 6)
// if (dice > 3) {
//     console.log("Winner");
// }else {
//     console.log("Looser");
// }

// function sum(){
//     for (let i = 0; i <= 5; i++) {
//         console.log(i);
//         return i
//     }
// }
// sum()

// exo 1
// function salut (name, lastName) {
//     return "Salut " + name + lastName;
// }

// let sentence = salut("Eva ", "Margot ")
// console.log(sentence);

// exo 2
// function estAdulte (age) {
//     return age;
// }

// let person = estAdulte (24)
// if (person >= 18) {
//     console.log("True");
// }else {
//     console.log("False");
// }

// exo 3
// function reverseString(str) {
//     let strReversed = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         strReversed += str[i]

//     }
//     return strReversed
// }

// console.log(reverseString("Coucou"));


// let test = "Salut"
// console.log(test[0]);


// exo 4
// function genererNombreAleatoire(min, max) {
//     return Math.round (Math.random() * (max - min) + min)
// }
// let number = genererNombreAleatoire (1, 100)
// console.log(number);

// exo 1 TD3- les fonctions
// 1
// function sum (numberOne, numberTwo) {
//     return numberOne * numberTwo;
// }

// let test = sum(4, 5)
// console.log(test);

// 2
// function fact(nbr){
//     let result = 1
//   for (let i = 1; i <= nbr; i++) {

//     result = result *i
//   }
//   return result
// }

// console.log(fact(4));

// 3
// function divide(numberOne, numberTwo){
//     return numberOne % numberTwo === 0;
// }

// let test = divide(10, 4)
// console.log(test);

// 4
// function number(nbrOne, nbrTwo) {
//     let quotient = nbrOne / nbrTwo;
//     let modulo = nbrOne % nbrTwo;
//     return ("Le quotient est : " + quotient +" et le modulo est : "+ modulo)
// }
// let nmbr = number(7, 3)
// console.log(nmbr);

// 5
// function vowels (letters) {
//     return letters == "a" || letters == "e" || letters == "i" || letters == "o" || letters == "u" || letters == "y"
// }
// let test = vowels ("e")
// console.log(test);

// 6
// function absol (number) {
//         if (number < 0) {
//             return number - number*2;
//         }else {
//             return number
//         }
// }
// let absolue = absol (-6)
// console.log(absolue);

// exo 2
// function isPerfect (nbr) {
//     let result = 0
//     for (let i = 1; i < nbr; i++) {
//         if (nbr % i == 0) {
//             result = result + i
//         }
//     }
//     return nbr == result
// }

// ten();

// function ten() {
//     for (let i = 2; i <= 10000; i++) {
//         if (isPerfect(i) == true) {
//             console.log(i);
//         }
        
//     }
// }

// exo 3
// function lowcase (letters) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz"
//     const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     for (let i = 0; i < alphabetUpper.length ; i++) {
//         if (letters == alphabetUpper[i]) {
//             return alphabet[i]
//         } 
//     }
// }

// console.log(lowcase("C"));

// exo 4
// function reverseString(str) {
//     let strReversed = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         strReversed += str[i]
//     }
//     if (str == strReversed) {
//        return true
//     }else {
//        return false
//     }
// }

// let palindrome = reverseString("kayak")

// console.log(palindrome);


// exo pour les maso

// exo 1
// let userChoice = ""
// let nbr = randomize(1,10)
// function randomize(min, max) {
//     return Math.round(Math.random() * (max - min) + min)
// }

// while (userChoice != nbr) {
//     userChoice = parseInt(prompt('devine le chiffre : '))
//     if (nbr > userChoice) {
//         console.log("C'est +");
//     }else if(nbr < userChoice){
//         console.log("C'est -");
//     }
// }

// console.log("Tu as gagné !");

// exo 2
