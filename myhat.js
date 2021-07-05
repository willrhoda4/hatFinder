







const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {

    constructor (field) {
        this.field = field;
        this.characterX = 0;
        this.characterY = 0;
        
    }

    print() {
        for (let i = 0; i < this.field.length; i++) {
            console.log(this.field[i].join(''));
        }
    }

    play() {


        while (this.field[this.characterY][this.characterX] !== hat) {

            this.print();

            const move = prompt('What is your move?');

                if (move === "right") {
                    this.characterX ++;
                } else if (move === "left") {
                    this.characterX --;
                } else if (move === "down") {
                    this.characterY ++;
                } else if (move === "up") {
                    this.characterY --;
                } else {
                    console.log('Let\'s keep it simple and stick to left, right, up or down. Thanks!');
                }

                if (this.characterX < 0 || this.characterY < 0 || this.characterX === this.field[0].length || this.characterY === this.field.length) {
                    return console.log('You ran off the field!');
                } 
               
                if (this.field[this.characterY][this.characterX] === hole) {
                    return console.log('You fell down a hole!');
                } else if (this.field[this.characterY][this.characterX] === hat) {
                    return console.log('You found your hat!');
                } else {
                    this.field[this.characterY][this.characterX] = pathCharacter;
                }
            
               
           
    
        }
    }

    static generateField(length, width, holes) {
        
        var newField = [];
        
        for (let i = 0; i < length; i++) {
            var newRow = []
            for (let i = 0; i <  width; i++) {
                if(Math.random() < holes) {
            newRow.push(hole);
                } else {
                    newRow.push(fieldCharacter);
                }
            }
            newField.push(newRow);
        }

        newField[0][0] = pathCharacter;

        newField[Math.floor(Math.random() * length)][Math.floor(Math.random() * width)] = hat;
            while (newField[0][0] === hat) {
                newField[0][0] = pathCharacter;
                newField[Math.floor(Math.random() * length)][Math.floor(Math.random() * width)] = hat;
            }

        return newField;
    }   
}



  const newField = new Field(Field.generateField(10, 10, .1));

  newField.play();

 