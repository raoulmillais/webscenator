//= require <jquery-1.4.2>
//= require <Raphael>

//= require "../webscenator/ui/icons"

(function($) {
    $.fn.button = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('Button'),
                args,
                action;
            
            if (!obj) return $().eq(-1);
            
            action = obj[options];
            
            if (typeof action === 'function') {
                args = Array.prototype.slice.call(arguments, 1);

                return action.apply(obj, args);
            } else {
                return $().eq(-1);
            }
        }
    
        options = $.extend($.fn.button.defaults, options);
        
        return this.each(function() {
            var $self = $(this),
                model = {
                    init: function(el) {
                        var self = this;
                    
                        this.$context = el;
                        this.paper = Raphael(el.get(0), 48,48);
                        this.actors = this.paper.set();
                        this.circle = this.paper.circle(24, 24, 20);
                        this.icon = this.paper.path(options.icon);
                        this.$svg = $(this.paper.canvas);
                        this.options = options;

                        this.actors.push(
                            this.circle,
                            this.icon);
                            
                        this.circle.attr('fill', '#000');
                        this.icon.attr('stroke-linejoin', 'round');
                        this.icon.attr('stroke-linecap', 'round');
                        this.actors.attr('fill-opacity', 0);
                        this.actors.attr('stroke-width', 3);
                        this.actors.attr('stroke', this.options.color);
                        
                        this.$svg.css('cursor', 'pointer');
                        this.$svg.bind('mouseover.Button', function(event) {
                            self.actors.stop();
                            self.actors.animate({ 'stroke': self.options.hoverColor }, 1000, '>');
                        });
                        this.$svg.bind('mouseout.Button', function(event) {
                            self.actors.stop();
                            self.actors.animate({ 'stroke': self.options.color }, 1000, '>');
                        });
                        this.$svg.bind('click.Button', function() {
                            self.actors.stop();
                            self.actors.animate({ 'stroke': self.options.clickColor }, 500, '>');
                        });                                
                    },
                    
                    destroy: function() {
                        this.$svg.unbind('.Button');
                    }
                };
                
            $self.data('Button', model);
            model.init($self);
        });
    
    };
    
    $.fn.button.defaults = {
        hoverColor: '#19f0fc',
        color: '#252525',
        clickColor: '#fff',
        icon: webscenator.ui.icons.rewind
    };
    
})(jQuery);
