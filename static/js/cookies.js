/* eslint-disable space-before-function-paren */
window.addEventListener('load', function () {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#3c404d',
        text: '#d6d6d6',
      },
      button: {
        background: '#8bed4f',
      },
    },
    content: {
      message:
        'Tento web používá k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookie. Používáním tohoto webu s tím souhlasíte.',
      dismiss: 'Souhlasím',
      link: 'Více informací',
      href: 'https://www.google.com/intl/cs/policies/technologies/cookies/',
    },
  })
})
