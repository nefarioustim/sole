(function($, window) {
	
	// Set-up namespace and any globals
	var sole = window.sole || {};
	
	/**
	* Page objects contain a manifest of modules, and provide a core
	* controller for the page in general.
	* @constructor
	* @param {Object} customConfig Custom configuration object.
	*/
	sole.Page = function() {
		this.manifest = new sole.Manifest();

		return this;
	};
	
	/**
	* Manifest objects provide a parent for sets of modules. A manifest of
	* modules associates sets of modules together.
	* @constructor
	* @param {Object} customConfig Custom configuration object.
	*/
	sole.Manifest = function() {
		this.modules = {};

		return this;
	};
	
	sole.Manifest.prototype = {
		
		addModule: function(id, modSelector) {
			this.modules[id] = new $.sole.Module()
                .bind(modSelector);
			
			return this;
		},
		
		delModule: function(id) {
			this.modules[id] = undefined;
			
			return this;
		}
		
	};
	
	/**
	* Module objects provide configuration and management for distinct
	* areas within a page.
	* @constructor
	* @param {Object} customConfig Custom configuration object.
	*/
	sole.Module = function() {
		return this;
	};
	
	sole.Module.prototype = {
		
		bind: function(el) {
			this.el = $(el).first();
			
			return this;
		}
		
	};
	
	$.sole = window.sole = sole;
	
})(jQuery, window);