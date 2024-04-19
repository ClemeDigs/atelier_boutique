/*
Créer une classe nommée Boutique.
Elle devra posséder les propriétés suivantes:
name: string
address: string
type: string
articles: string[]
totalCash: number
*/

class Boutique{
    /**
     * @param {string} name
     * @param {string} adress
     * @param {string} type
     * @param {string[]} articles
     * @param {number} totalCash
     */
    constructor(name, adress, type, articles, totalCash){
        this.name = name;
        this.adress = adress;
        this.type = type;
        this.articles = articles;
        this.totalCash = totalCash;
    }

    //buy prenant un nom d’article et un prix en paramètre. Si l’article est disponible à l’intérieur de la propriété articles, incrémenter la propriété totalCash du prix reçu en paramètre.
    buy(article, price){
        if(this.articles.includes(article)){
            this.totalCash += price;
        }
    }

    //refund prenant name et montant en paramètre. Si le paramètre name est égal à la propriété name et que le paramètre montant <= à la propriete totalCash retourne le paramètre montant. Sinon retourne 0.
    refund(nom, montant){
        if(nom === this.name && montant <= this.totalCash){
            return this.totalCash -= montant;
        }
        return 0;
    }

    //toHtml cette fonction devra retourner un htmlElement contenant les informations de notre boutique. Ne pas utiliser innerHtml Voici la structure html attendue.
    toHtml(){
        const div = document.createElement('div');
        div.classList.add('boutique__container');

        const nameHtml = document.createElement('p');
        const adressHtml = document.createElement('p');
        const typeHtml = document.createElement('p');
        const articlesHtml = document.createElement('p');
        const totalCashHtml = document.createElement('p');

        nameHtml.textContent = 'Nom: ' + this.name;
        adressHtml.textContent = 'Adresse: ' + this.adress;
        typeHtml.textContent = 'Type de boutique: ' + this.type;
        totalCashHtml.textContent = 'Argent dans la caisse: ' + this.totalCash + ' $';
        articlesHtml.textContent = 'Articles disponibles: ' + this.articles.join(', ');

        div.appendChild(nameHtml);
        div.appendChild(adressHtml);
        div.appendChild(typeHtml);
        div.appendChild(articlesHtml);
        div.appendChild(totalCashHtml);

        document.body.appendChild(div);
    }
}

//Créez un tableau de 3 boutiques.
const boutiques = [
    new Boutique(
        'Pâtisserie Feuilletée', 
        '27 rue des Croissants', 
        'Pâtisserie', 
        ['Chocolatine', 'Mille-feuilles', 'Saint-Honoré', 'Feuille d\'automne'], 
        3457),

    new Boutique(
        'Fleur des champs', 
        '3 rue des Chysanthèmes', 
        'Fleuriste', 
        ['Lys', 'Rose', 'Violette', 'Tulipe'], 
        738),

    new Boutique(
        'Barbatruc', 
        '89 rue des Écoles', 
        'Magasin de jouets', 
        ['Jeu de cartes', 'Toupie', 'Trotinette', 'Xylophone'], 
        15690)
]

console.log(boutiques);

for(let boutique of boutiques){
    boutique.buy('Violette', 17);
    console.log(boutique)
}
//Après vérification dans la console, le calcul est bien effectué mais dès le premier console.log, comme dans ton exemple en cours. Alors que pour la méthode refund, on voit qu'elle s'applique seulement au 3e console.log...

for(let boutique of boutiques){
    boutique.refund('Barbatruc', 42)
    console.log(boutique);
}

//Pour chacune des boutiques, utilisez la méthode toHtml afin d’ajouter le htmlElement au body.
for(let boutique of boutiques){
    boutique.toHtml();
}


//Utilisez la méthode find du type array afin de sélectionner seulement la boutique ayant un propriété type contenant une valeur spécifique.
const boutiquePatisserie = boutiques.find(boutique => boutique.type === 'Pâtisserie');
boutiquePatisserie.toHtml();