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

  cross = () => {
    var tl = new TimelineMax({
      paused: false,
      repeat: -1,
      yoyo: false,
      delay: 0,
    })
    tl
      .add('cross')
      .from('#cross-1', 0, { delay: 5 }, 0)
      .from('#cross-1', 0.1, { rotation: 0, ease: Linear.easeIn }, 'samsies')
      .to('#cross-1', 1.6, { rotation: 720, ease: Linear.easeIn }, 0.6)
      .to('#cross-1', 1, { delay: 2, opacity: 0 }, 0.3)
      .from('#cross-2', 0.1, { rotation: 0, ease: Linear.easeIn }, 'samsies')
      .to('#cross-2', 1.6, { rotation: 720, ease: Linear.easeIn }, 0.7)
      .to('#cross-2', 1, { delay: 2, opacity: 0 }, 0.3)
      .from('#cross-3', 0.1, { rotation: 0, ease: Linear.easeIn }, 'samsies')
      .to('#cross-3', 1.6, { rotation: 720, ease: Linear.easeIn }, 0.9)
      .to('#cross-3', 1, { delay: 2, opacity: 0 }, 0.3)
      .from('#cross-4', 0.1, { rotation: 0, ease: Linear.easeIn }, 'samsies')
      .to('#cross-4', 1.6, { rotation: 720, ease: Linear.easeIn }, 1)
      .to('#cross-4', 1, { delay: 2, opacity: 0 }, 0.3)
  }

  loading = () => {
    var tl = new TimelineMax({
      paused: false,
      repeat: 0,
      yoyo: false,
      delay: 0,
    })
    tl
      .add('loading')
      .from('#loading', 1, { paused: true, opacity: 1, ease: Linear.easeIn }, 3)
      .to('#loading', 1.6, { opacity: 0, ease: Linear.easeIn }, 0.6)
  }

  var master = new TimelineMax()
  master /*.add(fly)*/
    .add(life)
    .add(eyebrow)
    .add(bears)
    .add(cross)
    .add(loading)

  setTimeout(() => {
    document.getElementById('loading').style.display = 'none'
  }, 3200)
})
