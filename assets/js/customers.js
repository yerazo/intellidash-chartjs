$(document).ready(function(){
	$.get('https://www.batchacademy.com/api/wdfne/dummy/intellidash', function(data){
		for(var i = 0; i < data.length; i++){
			console.log(data[i]);
			var newTableRow = $('<tr/>');
			var newTableData = $('<td/>');

			$(newTableData, newTableRow).text(data[i].id);
			// $(newTableData, newTableRow).text(data[i].person); 
			data[i].person.email

			$(newTableRow).append(newTableData);
			$('tbody').append(newTableRow);
		}
		fixSidebar();
	})
});
