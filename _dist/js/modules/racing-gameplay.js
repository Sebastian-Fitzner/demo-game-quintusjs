/**
 * Created by Sebastian on 28.07.14.
 */

Quintus.RacingGamePlay = function(Q) {
    Q.Sprite.extend('Level', {
        init: function(p) {
            var that = this;

            this._super(p, { // _super = this.prototype
                x: 1024 / 2, // Position of level
                y: 572 / 2,
                asset: "background.jpg",
                type: Q.SPRITE_GROUND,
                itemFrequency: {
                    min: 3,
                    max: 6
                }, // Custom property which will be used to create a random frequency of falling elements
                pointRange: 300 // Define the winning value
            });

            // We want to get new items after a specific time period
            // @see timeToGetnextItem();
            this.p.timeToNextItem = this.timeToGetNextItem();

            // If points are >= pointRange we stop the Game
            // @see gameCompleted()
            Q.state.on("change.points", function() {
                if (Q.state.get("points") >= that.p.pointRange) {
                    that.gameCompleted();
                }
            });

        },
        step: function(dt) { // dt = delta time
            this.p.timeToNextItem -= dt;

            if (this.p.timeToNextItem <= 4) {
                this.p.timeToNextItem = this.timeToGetNextItem();
                Q.stage().insert(new Q.Item()); // Create and insert new Item
            }
        },
        // Define a time (in seconds) in a specific range
        timeToGetNextItem: function() {
            // Use itemFrequency to make a random number between min and max
            return this.p.itemFrequency.min + Math.random() * (this.p.itemFrequency.max - this.p.itemFrequency.min);
        },
        // Pause Game
        gameCompleted: function() {
            Q.clearStage(0);
            Q.stageScene("endGame", 1, {
                label: "You Won!"
            });
        }
    });

};
