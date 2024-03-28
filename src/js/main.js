import countryCoords from '../data/Territory/country.json' with { type: 'json' };

const VIEW_WIDTH = visualViewport.width;
const VIEW_HEIGHT = visualViewport.height;
const WORLDSIZE = {
    height: 2000,
    width: 2000
};

var config = {
    type: Phaser.AUTO,
    width: VIEW_WIDTH,
    height: VIEW_HEIGHT,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade'
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ocean', 'assets/backgrounds/ocean.png');
    this.load.image('ship', 'assets/sprites/ship.png');
    
}

function create ()
{
    //  Set the camera and physics bounds to be the size of 4x4 bg images
    // this.cameras.main.setBounds(0, 0, 3000, 3000);
    // this.physics.world.setBounds(0, 0, 3000, 3000);

    this.bg = this.add.image(0, 0, 'ocean').setOrigin(0,0);
    this.bg.setDisplaySize(VIEW_WIDTH,VIEW_HEIGHT);

        // unit.setInteractive();
        //this.input.setDraggable(unit);
       
  
    
    const unit = this.add.image(520, 300, 'ship').setDisplaySize(70,60)

        const polygon = new Phaser.Geom.Polygon(countryCoords);
        const landmass = this.add.graphics({ x: 0, y: 0 }).setInteractive();
        landmass.lineStyle(1, 0x546635);
        landmass.fillStyle(0x00aa00);
        landmass.fillPoints(polygon.points, true);
        landmass.beginPath();
        landmass.moveTo(polygon.points[0].x, polygon.points[0].y);

        for (let i = 1; i < polygon.points.length; i++)
        {
            landmass.lineTo(polygon.points[i].x, polygon.points[i].y);
        }
        landmass.closePath();
        landmass.strokePath();
}

function update ()
{

}
