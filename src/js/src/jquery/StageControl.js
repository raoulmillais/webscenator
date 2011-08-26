//= require <jquery-1.4.2>
//= require "../theater/Stage"

//= require "Button"
//= require "timer"

//= require "../webscenator/ui/icons"

(function($) {

    $.fn.stageControl = function(options) {
        
        options = $.extend($.fn.stageControl.defaults, options);
        if (!options.stage) return $().eq(-1);
        
        return this.each(function() {
            var $self = $(this),
                $timer = $self.find(options.timerSelector),
                $play = $(options.startSelector),
                $rewind = $(options.rewindSelector),
                $pause = $(options.stopSelector);
                
            
            $play.button({ icon: webscenator.ui.icons.play });
            $rewind.button({ icon: webscenator.ui.icons.rewind });
            $pause.button({ icon: webscenator.ui.icons.pause });
            $timer.timer();
            
            options.stage.onDraw = function() {
                $timer.timer('update', this.time);
            };
            
            $play.click(function() { 
                stage.start(); 
                $timer.timer('start');
            });
            $pause.click(function() { 
                stage.stop(); 
                $timer.timer('stop');
            });
            $rewind.click(function() { 
                stage.rewind(); 
                $timer.timer('rewind');
            });
            $self.find(options.refreshSelector).click(function() {
                stage.draw();
            });
        });
        
    };
    
    $.fn.stageControl.defaults = {
        timerSelector: '#stage-timer',
        startSelector: '.play',
        stopSelector: '.pause',
        rewindSelector: '.rewind',
        refreshSelector: '.refresh'
    };

})(jQuery);