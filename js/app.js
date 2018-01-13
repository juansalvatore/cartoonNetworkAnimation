document.addEventListener('DOMContentLoaded', event => {
  // // arm animation
  // document.getElementById('Arm').addEventListener('load', () => {
  //   let doc = this.getSVGDocument()
  // })
  // // tail animation
  // document.getElementById('tail').addEventListener('load', () => {
  //   console.log(this)
  //   this.css({ transform: 'scale(2)' })
  // })
  // // eyes animation
  // document.getElementById('eyes').addEventListener('load', () => {
  //   let doc = this.getSVGDocument()
  // })
  // // eyebrows animation
  // document.getElementById('eyebrows').addEventListener('load', () => {
  //   let doc = this.getSVGDocument()
  // })
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
      .from('#eyebrows', 0.2, { y: 2, ease: Linear.easeIn }, 'samsies')
      .to('#eyebrows', 0.5, { y: -5, ease: Linear.easeIn }, 'samsies')
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

  var master = new TimelineMax()
  master /*.add(fly)*/
    .add(life)
})
