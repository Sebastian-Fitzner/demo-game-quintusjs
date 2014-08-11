window.addEventListener('load', function() { // wait til doc is ready
    var Q = window.Q = Quintus({ // Define global var=Q for Quintus
            development: true, // Caching of sprites disabled via true
            imagePath: "img/game/" // Define img path to sprites
        })
        .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI") // Add quintus modules
        .include("RacingCar, RacingStar, RacingItems, RacingGUI, RacingGamePlay, RacingBlock") // Add custom modules
        .setup({
            width: 1024, // Define stage width
            height: 572, // Define stage height
            scaleToFit: true // Scale stage to fit in browser
        })
        .controls() // Enable standard controls (keyboard: left, right, up, down, space)
        .touch(); // Enable touch support

    // Set gravity to 0 because 2d elements are getting gravity
    Q.gravityX = 0;
    Q.gravityY = 0;

    // Define Sprites for collision dectection and type definition
    Q.SPRITE_CAR = 2;
    Q.SPRITE_MUD = 4;
    Q.SPRITE_CUP = 8;
    Q.SPRITE_GARLAND = 16;
    Q.SPRITE_GROUND = 32;
    Q.SPRITE_STAR = 64;
    Q.SPRITE_BLOCK = 128;

    // Enable touch only for Car Sprite
    Q.touch(Q.SPRITE_CAR);

    // Add new Scene to Stage
    Q.scene("level", function(stage) {

        // Create new level
        // @see RacingGamePlay();
        var bg = new Q.Level();

        // Create new car object
        // @see RacingCar();
        var car = new Q.Car({
            x: 1024 / 2, // Define position
            y: 500
        });

        // Create new Panel
        // @see RacingGUI()
        var sidePanel = new Q.SidePanel();

        // Insert elements to Stage
        stage.insert(bg);
        stage.insert(sidePanel);
        stage.insert(car);

        // Insert custom walls to stage to block the car on left and right
        stage.insert(new Q.Block({
            x: 1024,
            y: 500,
            h: 100,
            w: 10
        }));
        stage.insert(new Q.Block({
            x: 0,
            y: 500,
            h: 100,
            w: 10
        }));

    });

    // To display a game over / game won popup box,
    // create a endGame scene that takes in a `label` option
    // to control the displayed message.
    Q.scene('endGame', function(stage) {
        console.log('endgame: ');
        var container = stage.insert(new Q.UI.Container({
            x: Q.width / 2,
            y: Q.height / 2,
            fill: "rgba(0,0,0,0.75)"
        }));

        var button = container.insert(new Q.UI.Button({
            x: 0,
            y: 0,
            fill: "#FFFFFF",
            label: "Play Again"
        }));

        var label = container.insert(new Q.UI.Text({
            x: 10,
            y: -10 - button.p.h,
            color: '#FFFFFF',
            label: stage.options.label
        }));

        // When the button is clicked, clear all the stages
        // and restart the game.
        button.on("touch click", function() {
            Q.clearStage(0);
            Q.state.reset({
                points: 0
            });
            Q.stageScene("level");
        });

        // Expand the container to visibily fit it's contents
        // (with a padding of 20 pixels)
        container.fit(20);
    });

    // Load assets
    Q.load("background.jpg, car.png, mud.png, cup.png, garland.png", function() {
        // Reset points
        Q.state.reset({
            points: 0
        });
        // Init stage
        // You can have multiple scenes and stages which will be indexed
        Q.stageScene("level");
    });

});
