const prompt = require("prompt-sync")()

console.log("Bonjour et bienvenue à un petit jeu où vous allez souffrir");

let choice = prompt("En quelle langue tu veux souffrir ? Français (1) ou Anglais (2) ")

while (choice != "1" && choice != "2") {
    choice = prompt("En quelle langue tu veux souffrir ? Français (1) ou Anglais (2) ")
}
if (choice === "1") {
    choice = prompt("Tu preferes les chiens ou les chats ? chat (1) clebar (2)")
    while (choice != "1" && choice != "2") {
        choice = prompt("Stp réponds à ma question... T'es plus chat (1) ou chien (2) ");
    }
    if (choice === "1") {
        console.log("Tu préfères les chats ? Ok je vais être plus gentille avec toi.");
        choice = prompt("Gauche (G) ou droite (D) ? ")
        while (choice != "G" && choice != "D") {
            choice = prompt("Gauche (G) ou droite (D) ? ")
        }
        if (choice === "G") {
            choice = prompt("T'es arrivé dans un couloir très étroit où tu vas y voir 2 sorties. A droite (D) tu auras un couloir vide avec un escalier. A gauche (G) tu as une porte fermée. Où iras-tu ? ")
            while (choice != "D" && choice != "G") {
                choice = prompt("Tu le fais exprès... Droite (D) ou gauche (G). C'est pas une question difficile. ")
            }
            if (choice === "G") {
                console.log("Tu es tombé dans un trou pleins de pics et tu t'es empalé.");
                console.log("Fin de l'aventure.")
            }
        }else if (choice === "D") {
            choice = prompt("T'es tombé dans un trou. Petit chanceux que tu es, il y a de  l'eau en dessous. Tu sais nager ? Oui (O) ou Non (N) ")
            while (choice != "O" && choice != "N") {
                choice = prompt("Tu sais nager ? Oui (O) ou Non (N)")
            }
            if (choice === "O") {
                choice = prompt("J'espère bien que oui quand même c'est la base... Le soucis : La seule sortie c'est sous l'eau en mode Tomb Raider. Tu veux tenter de plonger (P) ou tu veux tenter de grimper (G) les murs du trou ? ")
                while (choice != "P" && choice != "G") {
                    choice = prompt("Tu veux tenter de plonger (P) ou tu veux tenter de grimper (G) les murs du trou ? ")
                }
                if (choice === "P") {
                    console.log("Sadge, tu as les poumons de mon père qui fume depuis 40 ans. Mais t'es chanceux, la surface est à 10 mètres plus loin. Tu as survécu ET tu t'es barré de cet endroit de malheur pour rentrer chez toi et jouer à Valorant.");
                } else if (choice === "G") {
                    console.log("Tu as grimpé littéralement 4cm parce que tes bras c'est des ficellos. Tu es mort par noyade.");
                }
            }
            else if (choice === "N") {
                console.log("T'abuses c'est la base de savoir nager... Bah rip. Mort par noyade.");
            }
        }
    }
    else if (choice === "2") {
        choice = prompt("J'adore les chiens aussi tqt pas. Bon par contre je vais pas te ménager. Droite (D) ou gauche (G) ? ");
        while (choice != "D" && choice != "G") {
            choice = prompt("Droite (D) ou gauche (G) ? ")
        }
        if (choice === "G") {
            choice = prompt("T'es arrivé dans un couloir très étroit où tu vas y voir 2 sorties. A droite (D) tu auras un couloir vide avec un escalier. A gauche (G) tu as une porte fermée. Où iras-tu ? ")
            while (choice != "D" && choice != "G") {
                choice = prompt("Tu le fais exprès... Droite (D) ou gauche (G). C'est pas une question difficile. ")
            }
            if (choice === "G") {
                console.log("Tu es tombé dans un trou pleins de pics et tu t'es empalé. Fin de l'aventure.");
            }
        } else if (choice === "N") {
            console.log("T'abuses c'est la base de savoir nager... Bah rip. Mort par noyade.");
        }

        if (choice === "D") {
            console.log("Tu as reçu une fléchette tranquillisante et t'es fait capturer par un peuple Incas qui sacrifie et mange de la chair humaine.");
        } else if (choice === "G") {
            choice = prompt("Un piège se déclenche. C'est une épée au niveau du cou pour décapiter les possible vampires et les dissuader de venir. Tu penses arriver à l'esquiver ? Oui (O) ou Non (N) ")
            while (choice != "O" && choice != "N") {
                choice = prompt("Tu penses arriver à l'esquiver ? Oui (O) ou Non (N) ")
            }
            if (choice === "O") {
                console.log("Bien tenté mais non.");
            } else if (choice === "N") {
                console.log("WASTED");
            }
        }
    }
} else if (choice === "2") {
    choice = prompt("Would you rather have a cat or a dog ? cat (1) doggo (2)")
    while (choice != "1" && choice != "2") {
        choice = prompt("Pls man my qyestion isn't hard... cat (1) or dog (2) ? ");
    }
    if (choice === "1") {
        console.log("Cats ? Ok I'm gonna be nice with you.");
        choice = prompt("Left (G) or Right ? (D) ? ")
        while (choice != "G" && choice != "D") {
            choice = prompt("Left (G) ou right (D) ? ")
        }
        if (choice === "G") {
            choice = prompt("You've arrived in a very narrow corridor with 2 exits. To your right (D) you'll have an empty corridor and stairs. To your left (G) is a closed door. Where will you go ? ")
            while (choice != "D" && choice != "G") {
                choice = prompt("Nah you're doing this on purpose... Right (D) ou left (G). ")
            }
            if (choice === "G") {
                console.log("You fell into a hole full of pics. You impaled yourself.");
                console.log("End.")
            } 
        }else if (choice === "D") {
            choice = prompt("You fell into a hole. Lucky you, there is water at the bottom. Can you swim ? Yes (O) or No (N) ")
            while (choice != "O" && choice != "N") {
                choice = prompt("Can you swim ? Yes (O) or No (N) ")
            }
            if (choice === "O") {
                choice = prompt("Well i kinda hoped you could swim it's litteraly easy... Issue : The only way out is Tomb Raider style, under water. Do you wanna dive (P) or climb (G) ? ")
                while (choice != "P" && choice != "G") {
                    choice = prompt("Do you wanna dive (P) or climb (G) ? ")
                }
                if (choice === "P") {
                    console.log("Sadge, you got my dad's lungs and he's smoking since the 19th century. But you're lucky, surface is litteraly 10m away. You survived and went back home to play Tomb Raider, far far far away from all of this shit.");
                } else if (choice === "G") {
                    console.log("You climbed like a 4 years old trying to climb a mountain. You drowned.");
                }
            }
            else if (choice === "N") {
                console.log("Man wym you can't swim ?... You fucking drowned. Dumbass.");
            }
        }
    }
    else if (choice === "2") {
        choice = prompt("I love dogs too all good. But yeah no I won't be nice with you. Right (D) ou left (G) ? ");
        while (choice != "D" && choice != "G") {
            choice = prompt("Right (D) ou left (G) ? ")
        }
        if (choice === "G") {
            choice = prompt("You've arrived in a very narrow corridor with 2 exits. To your right (D) you'll have an empty corridor and stairs. To your left (G) is a closed door. Where will you go ? ")
            while (choice != "D" && choice != "G") {
                choice = prompt("Nah you're doing this on purpose... Right (D) ou left (G). ")
            }
            if (choice === "G") {
                console.log("You fell into a hole full of snaked and died. You're dumb.");
            }
            if (choice === "D") {
                console.log("You got tranquillized and got captured by a tribe who sacrifices and eats human flesh.");
            } else if (choice === "G") {
                choice = prompt("A trap triggers. It's a sword at the neck level to decapitate vampires. Can you dodge it ? Yes (O) or No (N) ")
                while (choice != "O" && choice != "N") {
                    choice = prompt("Can you dodge it ? Yes (O) or No (N) ")
                }
                if (choice === "O") {
                    console.log("Lmao you really think you can dodge that ? You ain't Lara.");
                } else if (choice === "N") {
                    console.log("WASTED");
                }
            }
        }

    }
}