$(function () {
	$("#search").keyup(function () {
		var value = (typeof (this.value) !== Number) ? this.value.toLowerCase().trim() : this.value.trim();
		//support for phone number saved without prepending zero
		var removedzero=(value.indexOf(0)==0)? value.slice(1): value;
		$("table#list").find("tr").each(function (i) {
			if (!i) return;
			else {
				$(this).find("td").each(function () {
					var term = $(this).text().toLowerCase().trim();
					var notFound=(term.indexOf(removedzero) == -1);
					$(this).closest("tr").toggle(!notFound);
					return notFound;
				})
			}
		});
	});

	// $("button#download").click(function () {
    //         $("table#list").excelexportjs({
    //             containerid: "list"
    //            , datatype: 'table'
    //         });
    //     });
	 $("#download").on('click', function () {
            var uri = $("#table#list").excelexportjs({
                containerid: "list"
                , datatype: 'table'
                , returnUri: true
            });

            $(this).attr('download', 'tbl_due_listings.xls').attr('href', uri).attr('target', '_blank');
        });
});
