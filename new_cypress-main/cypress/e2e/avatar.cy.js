describe('Покупка аватара', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Зашли на сайт

         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввели логин
         cy.get('#password').type('USER_PASSWORD'); // Ввели пароль
         cy.get('.auth__button').click(); // Нажала кнопку "Войти"
         cy.wait(2000);

         cy.get('.header__container > .header__id').click(); // Нажала на аватарку тренера
         cy.get('[href="/shop"]').click(); // Нажала кнопку смена аватара
         cy.get(':nth-child(12) > .shop__button').click({ force: true }); // Нажала кнопку "Купить" у первого аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('46208691136329961'); // Ввела номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // Ввела срок карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввела CVV карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('JULIA'); // Ввела имя владельца карты
         cy.get('.pay-btn').click(); // Нажала кнопку "Оплатить"
         cy.get('#cardnumber').type('56456'); // Ввела код из СМС
         cy.get('.payment__submit-button').click(); // Нажала кнопку "Отправить"
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // проверяю наличие сообщения
         cy.get('.payment__font-for-success').should('be.visible'); // Проверяю, что сообщение видно пользователю
       
      })
})
