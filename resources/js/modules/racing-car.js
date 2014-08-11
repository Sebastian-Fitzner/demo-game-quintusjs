/**
 * Created by Sebastian on 28.07.14.
 *
 * Create Car Object with touch support and controls
 *
 */

Quintus.RacingCar = function(Q) {
    Q.Sprite.extend('Car', {

        init: function(p) {

            this._super(p, { // _super = this.prototype
                asset: 'car.png', // Sprite
                type: Q.SPRITE_CAR // Define a type
            });

            // Enable draggable objects
            this.on("drag"); // @see method function: drag();

            // Add in pre-made components to get up and running quickly
            // The `2d` component adds in default 2d collision detection
            // and kinetics (velocity, gravity)
            // The `platformerControls` makes the player controllable by the
            // default input actions (left, right to move,  up or action to jump)
            this.add('2d, platformerControls');
        },

        drag: function(touch) {
            // Update position of car only on x
            this.p.x = touch.origX + touch.dx;
        }
    });
};
