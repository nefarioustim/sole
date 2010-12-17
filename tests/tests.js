$(document).ready(function(e) {
	test("Creation of Page object", function() {
		var page = new $.sole.Page();
		ok(page, "Appears to have instantiated.");
		ok(page instanceof $.sole.Page, "Is an instance of Page.");
	});
	
	test("Creation of Manifest object", function() {
		var manifest = new $.sole.Manifest();
		ok(manifest, "Appears to have instantiated.");
		ok(manifest instanceof $.sole.Manifest, "Is an instance of Manifest.");
	});
	
	test("Creation of Module object", function() {
		var module = new $.sole.Module();
		ok(module, "Appears to have instantiated.");
		ok(module instanceof $.sole.Module, "Is an instance of Module.");
	});
});