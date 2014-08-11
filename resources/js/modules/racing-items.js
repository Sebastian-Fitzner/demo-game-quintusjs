/**
 * Created by Sebastian on 28.07.14.
 *
 * Create Random Items: Cup, Mud, Garland
 *
 */
Quintus.RacingItems = function(Q) {

    Q.Sprite.extend('Item', {
        init: function(p) { // Initialize object
            // Here we are extending a standard object with @getCustomItem().
            // This will create random items which we predefined.
            this._super(p, Q._extend({
                collisionMask: Q.SPRITE_CAR, // Define a collision object (can be extended via | operator)
                opacity: 0 // Define opacity
            }, this.getCustomItem()));

            this.add("2d"); // Enable 2d for collision detection
            this.increaseOpacity(); // Increase opacity property of object over time
            this.increaseScaling(); // Increase scale property of object over time
        },
        // Step function which will be executed repetitive
        step: function(dt) {
            // Destroy item if position of el is out of view or collision is detected
            if (this.p.y >= 572 || this.stage.search(this)) {
                this.destroy();

                if (this.stage.search(this)) { // If collision is detected
                    Q.state.inc("points", this.p.value); // Increase our points per increment
                }
            }
        },
        // Get randomly a predefined item
        getCustomItem: function() {
            // Create a JSON object
            var racingItems = {
                cup: {
                    type: Q.SPRITE_CUP,
                    asset: 'cup.png',
                    vy: 180,
                    x: this.getRandomPosition(0, 1024), // Get random position @see getRandomPosition();
                    y: this.getRandomPosition(0, 0),
                    value: 50
                },
                mud: {
                    type: Q.SPRITE_MUD,
                    asset: 'mud.png',
                    vy: 140,
                    x: this.getRandomPosition(0, 1024),
                    y: this.getRandomPosition(0, -100),
                    scale: 0.2,
                    value: -40
                },
                garland: {
                    type: Q.SPRITE_GARLAND,
                    asset: 'garland.png',
                    vy: 110,
                    x: this.getRandomPosition(0, 1024),
                    y: this.getRandomPosition(0, -110),
                    value: 25
                }
            };

            // Create an array which we use for random selection
            var items = [
                racingItems.cup,
                racingItems.mud,
                racingItems.garland
            ];

            // Return only one element via Math.random()
            return items[Math.floor(Math.random() * items.length)];
        },

        // TODO: merge increaseOpacity() and increasScaling()
        // Increase opacity over time
        increaseOpacity: function() {
            var that = this,
                i = 1;

            for (i; i < 100; i += 1) { // change the += 1 for different smoothness
                (function(i) {
                    setTimeout(function() {
                        that.p.opacity = (0 + i) * 0.01;
                    }, i * 10);
                })(i);
            }
        },
        // Increase Scaling over time
        increaseScaling: function() {
            var that = this,
                i = 1;

            for (i; i < 200; i += 1) { // change the += 1 for different smoothness
                (function(i) {
                    setTimeout(function() {
                        that.p.scale = 0.2 + (0 + i) * 0.01;
                    }, i * 75);
                })(i);
            }
        },
        // Get a random position and define min and max values
        getRandomPosition: function(min, max) {
            return (min + Math.random() * (max - 0));
        }
    });
};
