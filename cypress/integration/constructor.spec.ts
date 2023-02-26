import {
   ingredientClass,
   closeButtonClass,
   tabClass,
   burgerConstructorClass,
   burgerConstructorIngredientClass
} from "../../src/utils/test-constants";
export { }


describe('service is available', function () {
   beforeEach(function () {
      cy.viewport(1920, 1280)
   });

   it('should be available on localhost:3000', function () {
      cy.visit('/')
   });   

   it('should open ingredient details', function () {
      cy.visit('/')
      cy.contains('Соберите бургер')
      cy.get(ingredientClass).first().click()
   });

    it('should tab', function () {
      cy.visit('/')
       cy.get(tabClass).last().click();
       cy.get(tabClass).first().click({ force: true });
    });

    it('should scroll', function () {
      cy.visit('/')
       cy.get('[class^=burger-ingredients_scroll').scrollTo(0, 500)
    });

    it('should dragndrop ingredients and set buns', function () {
      cy.visit('/')
       cy.get(ingredientClass).eq(0).drag(burgerConstructorClass)
       cy.get(ingredientClass).eq(4).drag(burgerConstructorClass)
       cy.get(ingredientClass).eq(1).drag(burgerConstructorClass)
       cy.get(ingredientClass).eq(9).drag(burgerConstructorClass)
       cy.get(ingredientClass).eq(4).drag(burgerConstructorClass)
       cy.get(ingredientClass).eq(0).drag(burgerConstructorClass)
       cy.get(burgerConstructorIngredientClass).eq(0)
          .drag(burgerConstructorIngredientClass)
       cy.get(burgerConstructorIngredientClass).eq(1)
          .drag(burgerConstructorIngredientClass)
          cy.get('[class^=constructor-element__action]').eq(2).click()
          cy.get('[class^=burger-constructor_scroll]').eq(4).and('not.exist')
      });
      
    it('should open order details', function () {
      cy.visit('/')
      cy.get(ingredientClass).eq(1).drag(burgerConstructorClass)
      cy.get(ingredientClass).eq(9).drag(burgerConstructorClass)
      cy.get(ingredientClass).eq(4).drag(burgerConstructorClass)
      cy.get(ingredientClass).eq(0).drag(burgerConstructorClass)
      cy.get('button').contains('Оформить заказ').click()
      const email = 'Aleksandr.semendysev@yandex.ru';
      const password = '123123';
       cy.get('input').first().type(email)
       cy.get('input').last().type(password)
       cy.get('button').click();
       cy.visit('/')
    });

})