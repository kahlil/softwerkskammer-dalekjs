module.exports = {
  'Start und Kontakt': function (test) {
    test.open('https://www.ing-diba.de')
      .assert.text('.header-actions__item').is('Start', 'Start link is present')      
      .click('a[title="Kontakt"]')
      .waitForElement('div.modal')
      .assert.text('#tab-adresse').is('Anschrift', 'Address tab has right label')
      .click('#tab-adresse')
      .done();
  }
};
