(function() {

    /**
     * Simple play arrows control
     **/
    function Arrows(width, height, sep) {
        this.Shape_constructor();

        // public properties:
        this.width = width||20;
        this.height = height||20;
        this.sep = sep||0;

        this.rad = this.width/Math.sqrt(3);

        this.color = "#646483";

        this.cursor = "pointer";
        this.on("mousedown", this._handleInput, this);
    }
    var p = createjs.extend(Arrows, createjs.Shape);

    // public methods:
    p.isVisible = function() { return true; };

    p.draw = function(ctx, ignoreCache) {
        this.graphics.clear()
            .beginFill(this.color)
            .drawPolyStar(this.rad,this.height/2,this.rad,3,0,180)
            .beginFill(this.color)
            .drawPolyStar(this.sep+2*this.width-this.rad,this.height/2,this.rad,3,0,0)
        this.Shape_draw(ctx, true);
    };

    // private methods:
    p._handleInput = function(evt) {
        // Set value to back/forward
        this.value = evt.stageX < this.width ? "back" : "forward";
    };

    window.Arrows = createjs.promote(Arrows, "Shape");
}());
