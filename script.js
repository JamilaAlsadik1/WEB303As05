/*
    Assignment 5
    Jamila Alsadik 
*/

$(document).ready(function(){
    class ContentCard{
        constructor(id,title,descript,catType){
            this.id=id;
            this.title=title;
            this.descript=descript;
            this.catType=catType;
        }
        updateContent(title,descript,catType){
            if((title!=null) || (descript!=null) || (catType!=null)){
                this.title=title;
                this.descript=descript;
                this.catType=catType;
            }
        }
        toString(){
            
                return `<div id="content-${this.id}" style="border: 2px solid black; padding: 12px; margin:6px;">
                <h4>${this.title}</h4>
                <p>${this.descript}</p>
                <div>${this.catType}</div>
            </div>`         
        }
    }
   
    let cards= new Array();
    cards[0] = new ContentCard(0, "spiderman","Peter Parker was bitten by a radioactive spider as a teenager, granting him spider-like powers","action");
    cards[1] = new ContentCard(1, "Wolverine", "A long-lived mutant with the rage of a beast and the soul of a Samurai, James 'Logan' Howlett's once mysterious past is filled with blood, war, and betrayal.", "action");
    cards[2] = new ContentCard(2, "Thor", "Thor Odinson is the All-father of Asgard /God of Thunder, offspring of All-Father Odin & the Phoenix.", "action");
    cards[3] = new ContentCard(3, "Hulk", " Dr. Robert Bruce Banner was transformed into the Incredible Hulk: a green behemoth who is the living personification of rage and pure physical strength.", "action");
    cards[4] = new ContentCard(4, "Mr. Fantastic", "Reed Richards, also known as Mr. Fantastic, is the leader of the Fantastic Four. He can stretch his body to great distances due to his exposure to cosmic rays while in space.", "action");
    $("#content-list").append(cards[0] + "");
    $("#content-list").append(cards[1] + "");
    $("#content-list").append(cards[2] + "");
    $("#content-list").append(cards[3] + "");
    $("#content-list").append(cards[4] + "");
});

