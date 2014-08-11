/**
 * Created by Sebastian on 28.07.14.
 *
 * TODO: add a star object to display a collision
 */

Quintus.RacingStar = function(Q) {
    Q.Sprite.extend('Star', {
        init: function(p) {
            this._super(p, {
                asset: 'star.png',
                type: Q.SPRITE_STAR,
                opacity: 0
            });
        }
    });
};
