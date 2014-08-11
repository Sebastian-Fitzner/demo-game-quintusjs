/**
 * Created by Sebastian on 28.07.14.
 *
 * Create custom Walls/ Blocks to limit the range of controls
 */

Quintus.RacingBlock = function(Q) {
    Q.Sprite.extend('Block', {
        init: function(p) {
            this._super(p); // _super = this.prototype
        },

        // Draw custom points
        draw: function(ctx) {
            var i; // just for our for-loop

            if (!this.p.points) {
                Q._generatePoints(this);
            }

            // Canvas function: Reset path in this context
            ctx.beginPath();
            // ctx.strokeStyle = "rgba(0,0,0,0)";
            // ctx.fillStyle = "rgba(0,0,0,0.5)";

            // Canvas function: To create a new sub path you have to define a point to start
            ctx.moveTo(this.p.points[0][0], this.p.points[0][1]);

            // Simple for loop to combine all points with a straight line
            for (i = 0; i < this.p.points.length; i++) {
                // Canvas function: Combine the last point with the current point
                ctx.lineTo(this.p.points[i][0], this.p.points[i][1]);
            }

            // Canvas function: Close the shape with our first point
            ctx.lineTo(this.p.points[0][0], this.p.points[0][1]);
            // ctx.stroke();
        }
    });
};
