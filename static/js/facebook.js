/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
;((w2b) => {
  w2b(document).ready(() => {
    const $dur = 'medium' // Duration of Animation
    w2b('#fbplikebox').css({
      right: -320,
      top: 60,
    })
    w2b('#fbplikebox').hover(
      function () {
        w2b(this).stop().animate(
          {
            right: 0,
          },
          $dur
        )
      },
      function () {
        w2b(this).stop().animate(
          {
            right: -320,
          },
          $dur
        )
      }
    )
    w2b('#fbplikebox').show()
  })
})(jQuery)
