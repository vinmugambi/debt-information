$(function () {
	$("#searchnow").keyup(function () {
		var value = (typeof (this.value) !== Number) ? this.value.toLowerCase().trim() : this.value.trim();
		//support for phone number saved without prepending zero
		var removedzero = (value.indexOf(0) == 0) ? value.slice(1) : value;
		$("table#list").find("tr").each(function (i) {
			if (!i) return;
			else {
				$(this).find("td").each(function () {
					var term = $(this).text().toLowerCase().trim();
					var found = (term.indexOf(removedzero) !== -1);
					if (!found) {
						$(this).closest("tr").hide();
					}
					else {
						$(this).closest("tr").show();
					}
					return !found;
				})
			}
		});
	});

	$("#download").on('click', function () {
		var uri = $("table#list").excelexportjs({
			containerid: "list"
			, datatype: 'table'
			, returnUri: true
		});

		$(this).attr('download', 'tbl_due_listings.xls').attr('href', uri).attr('target', '_blank');
	});

	
	if (window.location.pathname=="/search"){
        $("li#search a").addClass("active");
	}
	if (window.location.pathname=="/list"){
       $("li#listl a").addClass("active")
	}
});
