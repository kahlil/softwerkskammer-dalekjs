module.exports = {
  'Kundenservice': function (test) {
    test.open('https://www.ing-diba.de/girokonto/kundenservice/')
      .waitForElement('.gs-span-17 details:nth-child(1)')
      .click('.gs-span-17 details:nth-child(1) summary:nth-child(1)')
      .assert.visible('.gs-span-17 details:nth-child(1) div', 'Details are visible.')
      .assert.text('.gs-span-17 details:nth-child(1) div p:nth-child(1)', 'Sie können das Girokonto schnell und direkt online, telefonisch oder schriftlich per Brief als Einzel- oder Gemeinschaftskonto beantragen.', 'Text is there.')
      .click('.gs-span-17 details:nth-child(1) summary:nth-child(1)')
      .wait(10000)
      .assert.notVisible('.gs-span-17 details:nth-child(1) div', 'Details are not visible anymore.')
      .done();
  }
};
