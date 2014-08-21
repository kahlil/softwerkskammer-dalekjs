module.exports = {
  'Kundenservice': function (test) {
    test.open('https://www.ing-diba.de/girokonto/kundenservice/')
      .waitForElement('.gs-span-17 details:nth-child(1)')
      // .click('.gs-span-17 details:nth-child(1) summary:nth-child(1)')
      // .assert.visible('.gs-span-17 details:nth-child(1) div', 'Details are visible.')
      .assert.text('.gs-span-17 details:nth-child(1) div p:nth-child(1)', 'Sie können das Girokonto schnell und direkt online, telefonisch oder schriftlich per Brief als Einzel- oder Gemeinschaftskonto beantragen.', 'Text is there.')
      // .click('.gs-span-17 details:nth-child(1) summary:nth-child(1)')
      .click('details#01571 summary')
      .assert.attr('details#01571', 'open', null, 'Detail is open')
      .done();
  },

  'Baufinanzierung': function (test) {
      test.open('https://www.ing-diba.de/diba-forms/baufinanzierung/anfordern/?1&version=1')
        .click('#id7')
        .waitForElement('#id3e')
  }

};
