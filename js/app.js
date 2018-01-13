document.addEventListener('DOMContentLoaded', event => {
  life = () => {
    var tl = new TimelineMax({
      paused: false,
      repeat: -1,
      yoyo: true,
      delay: 0,
    })
    tl
      .add('life')
      .to('#Arm', 0.4, { scaleX: 1.1, ease: Linear.easeInOut }, 'samsies')
      .from(
        '#tail',
        1,
        {
          scaleY: 1.1,
          transformOrigin: 'bottom right',
          rotation: -30,
          ease: Linear.easeInOut,
        },
        'samsies'
      )
      .to(
        '#tail',
        1,
        {
          scaleY: 1,
          scaleX: 1.2,
          transformOrigin: 'bottom right',
          rotation: 50,
          ease: Linear.easeInOut,
        },
        'samsies'
      )
    return tl
  }

  eyebrow = () => {
    var tl = new TimelineMax({
      paused: false,
      repeat: -1,
      yoyo: true,
      delay: 0,
    })
    tl
      .add('eyebrow')
      .from('#eyebrows', 0.1, { y: 0, ease: Linear.easeIn }, 'samsies')
      .to('#eyebrows', 0.1, { y: 2, ease: Linear.easeIn }, 1)
      .to('#blink', 0.04, { opacity: 1, ease: Linear.easeIn }, 1.5)
  }

  bears = () => {
    var tl = new TimelineMax({
      paused: false,
      repeat: -1,
      yoyo: true,
      delay: 0,
    })
    tl
      .add('bears')
      .from('#white-bear', 0.2, { x: 460, ease: Linear.easeInOut }, 3)
      .to('#white-bear', 0.5, { x: 0, ease: Linear.easeInOut }, 'samsies')
      .to('#white-bear', 0.5, { x: -10, ease: Linear.easeInOut }, 'samsies')
      .to('#white-bear', 1, { x: -10, ease: Linear.easeInOut }, 'samsies')
      .from('#red-bear', 0.2, { x: 460, ease: Linear.easeInOut }, 2.9)
      .to('#red-bear', 0.5, { x: 0, ease: Linear.easeInOut }, 'samsies')
      .to('#red-bear', 0.5, { x: -20, ease: Linear.easeInOut }, 'samsies')
      .to('#red-bear', 1, { x: -20, ease: Linear.easeInOut }, 'samsies')
      .from('#blue-bear', 0.2, { x: 460, ease: Linear.easeInOut }, 2.95)
      .to('#blue-bear', 0.5, { x: 0, ease: Linear.easeInOut }, 'samsies')
      .to('#blue-bear', 0.5, { x: -20, ease: Linear.easeInOut }, 'samsies')
      .to('#blue-bear', 1, { x: -20, ease: Linear.easeInOut }, 'samsies')
  }

  var master = new TimelineMax()
  master /*.add(fly)*/
    .add(life)
    .add(eyebrow)
    .add(bears)
})
