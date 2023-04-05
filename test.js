/*****Test 1 *****/

  test("Check the length of string", () => {
    //Arrange
    const stringLength = (string) => {  
      let numberOfStrings = 0; 
      for(let char of string) {
        numberOfStrings += 1;
      }
      return numberOfStrings;
    }

    //Act
    const output = stringLength('Kofi');

    //Assert
    expect(output).toBe(4);
    });



/***** Test 2 *****/

    test("Check whether string is reversed", () => {
      //Arrange
      const stringReverse = (string) => {  
        let reversedSrting = string.split("").reverse().join("");
        return reversedSrting;
      }
  
      //Act
      const output = stringReverse('Kofi');
  
      //Assert
      expect(output).toBe('ifoK');
      });



/***** Test 3 *****/

  describe('Mathematical Operators', () => {
    test('Addition test', () => {
      //Arrange
      const operator = new Operators();
      
      //Act
      const output = operator.addition(2, 3);

      //Assert
      expect(output).toBe(5);
    });

    test('Subtraction test', () => {
        //Arrange
        const operator = new Operators();
        
        //Act
        const output = operator.subtraction(2, 3);
  
        //Assert
        expect(output).toBe(-1);
      });

      test('Division test', () => {
        //Arrange
        const operator = new Operators();
        
        //Act
        const output = operator.division(3, 1);
  
        //Assert
        expect(output).toBe(3);
      });
  });

  class Operators{
    addition (a, b){
      return a + b;
    }
    subtraction (a, b){
      return a - b;
    }
    multiplication (a, b){
      return a * b;
    }
    division (a, b){
      return a / b;
    }
  }


/***** Test 4 *****/

test("Check whether string's first letter is capitalized", () => {
    //Arrange
     const firstCharCapitalize = (string) => {
       return string.charAt(0).toUpperCase() + string.slice(1);
     }

     //Act
     const output = firstCharCapitalize('eric');

    //Assert
    expect(output).toBe('Eric');
    });