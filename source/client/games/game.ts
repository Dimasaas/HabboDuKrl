import Room from '../rooms/room'

const config = {
    resolution: window.devicePixelRatio,
    type: Phaser.WEBGL,
    scene: new Room(0), // To change this on the navigator
    parent: 'game',
    render: {
       pixelArt: false
    },
    disableContextMenu: false,
    scale: {
        mode: Phaser.Scale.ScaleModes.RESIZE,
        width: window.innerWidth,
        height: window.innerHeight
    }
}

/*
    The main game class (Habbo)
*/
const game = new Phaser.Game(config)