/**
 * Created by Sebastian on 28.07.14.
 *
 * GUI to display points, counter and graphs
 */
Quintus.RacingGUI = function(Q) {

    // Create UI Container
    Q.UI.Container.extend('SidePanel', {
        init: function() {
            var that = this;

            this._super({
                fill: '#999999', // Fill color
                x: 0,
                y: 0,
                w: 200,
                h: 300
            });

            this.on("inserted"); // Insert objects to stage

            // When points are changing we wanna refresh the point state
            Q.state.on("change.points", function() {
                that.refreshState();
            });
        },
        inserted: function() {
            this.totalPoints = new Q.UI.Text({ // Create Text UI for displaying score
                x: 60,
                y: 100,
                label: " " // Has to be a string
            });
            this.counter = new Q.UI.Text({ // Create Text UI for displaying counter
                x: 20,
                y: 20,
                label: "25" // TODO: Dynamic value or reference
            });


            // Insert elements
            this.stage.insert(this.totalPoints);
            this.stage.insert(this.counter);

            // Refresh state of points
            this.refreshState();

            // Start countdown
            this.countdownTimer();
        },

        // Update the point label
        refreshState: function() {
            this.totalPoints.p.label = Q.state.get("points") + ""; // Points have to be strings to display them as label
        },

        // Add a timer
        countdownTimer: function() {
            var that = this,
                count = 25, // TODO: @see this.counter
                counter = setInterval(timer, 1000); //1000 will  run it every 1 second

            function timer() {
                count = count - 1; // Take the last value of count and substract it with 1
                that.counter.p.label = count + ""; // Update counter label

                if (count <= 0) {
                    that.counter.p.label = "0";
                    clearInterval(counter);
                    Q.clearStage(0);
                    Q.stageScene("endGame", 1, {
                        label: "Game Over!"
                    });
                }
            }
        }

    });
};
