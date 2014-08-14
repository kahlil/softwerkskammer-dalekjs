module.exports = {
  'Geldautomatensuche': function (test) {
    test.open('https://www.ing-diba.de/girokonto/geldautomatensuche')
      .type('input[name="ZIP"]', '41541')
      .assert.val('input[name="ZIP"]', '41541', 'Zip code has been set')
      .type('input[name="CITY"]', 'Dormagen')
      .assert.val('input[name="CITY"]', 'Dormagen', 'City has been set')
      .submit('form.geldautomatensuche')
      .toWindow('popup')
        .waitForElement('#resultList')
        .assert.exists('#resultList', 'The result list element exists')
        .assert.text('#resultList td:nth-child(3)', 'ING-DiBa Geldautomat (Aral-Tankstelle)\nKrefelder Str. 101, 41539 Dormagen', 'First result is correct')
        .assert.text('#resultList td:nth-child(4)', '0,6 km', 'Correct distance displayed')
        .click('#checkBoxDIBA')
        .waitForElement('#wggSingleTreffer')
        .assert.text('#wggSingleTreffer', '2 Treffer', 'Shows correct number of hits.')
        .click('.pw12-close')
      .toParentWindow()
      .done();
  }
};
