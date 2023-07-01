describe('Test Suite', () => {


    it('Test Case - 01', () => {

       cy.visit('/')

       cy.fixture('example').then(function(example) {

            var text: string = example.body
            //"Automation is Fun"
            var textArr: Array<string> = text.split(" ") 

            //var wordArr: Array<string>
          for(let i=0; i > textArr.length; i++) { //outer

            textArr[i].split('').forEach(function(char){ //inner
                cy.get('#keyboard').trigger('keydown', {key: char})
            })

          }
            



       })


    })

})