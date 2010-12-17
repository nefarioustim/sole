(function($, window) {
	
	// Set-up namespace and any globals
	var sole = window.sole || {};
	
	/**
	* Page objects contain a manifest of modules, and provide a core
	* controller for the page in general.
	* @constructor
	* @param {Object} customConfig Custom configuration object.
	*/
	sole.Page = function(customConfig) {
		this.manifest = new sole.Manifest();
		this.config = {};
        
        if (customConfig) {
            $.extend(this.config, customConfig);
        }
	};
	
	/**
	* Manifest objects provide a parent for sets of modules. A manifest of
	* modules associates sets of modules together.
	* @constructor
	* @param {Object} customConfig Custom configuration object.
	*/
	sole.Manifest = function(customConfig) {
		this.modules = {};
		this.config = {};
        
        if (customConfig) {
			$.extend(this.config, customConfig);
        }
	};
	
	sole.Manifest.prototype = {
		
		addModule: function(id, module) {
			this.modules[id] = module;
		},
		
		delModule: function(id) {
			this.modules[id] = undefined;
		}
		
	};
	
	/**
	* Module objects provide configuration and management for distinct
	* areas within a page.
	* @constructor
	* @param {Object} customConfig Custom configuration object.
	*/
	sole.Module = function(customConfig) {
		this.config = {};
        
        if (customConfig) {
            $.extend(this.config, customConfig);
        }
	};
	
	$.sole = window.sole = sole;
	
})(jQuery, window);