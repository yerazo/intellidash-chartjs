$(document).ready(function(){
	$.get('https://www.batchacademy.com/api/wdfne/dummy/intellidash', function(data){
		for(var i = 0; i < data.length; i++){
			console.log(data[i]);
			var newTableRow = $('<tr/>');
			var newTableData = $('<td/>');
			$(newTableRow).append(newTableData);

			$(newTableData, newTableRow).text(data[i].id);
			// $('<td/>', newTableRow).text(data[i].person);
			$(newTableData, newTableRow).text(data[i].person.email);
			$(newTableData, newTableRow).text(data[i].person.location.city);
			$(newTableData, newTableRow).text(data[i].person.location.state);
			$(newTableData, newTableRow).text(data[i].person.race);
			$(newTableData, newTableRow).text(data[i].person.gender);

			$('tbody').append(newTableRow);

		}
		// fixSidebar();
	})
});
