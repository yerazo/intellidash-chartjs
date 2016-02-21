$(document).ready(function(){
	$.get('https://www.batchacademy.com/api/wdfne/dummy/intellidash', function(data){
		for(var i = 0; i < data.length; i++){
			console.log(data[i]);
			var newTableRow = $('<tr/>');
			var newTableData = $('<td/>');

			$(newTableData, newTableRow).text(data[i].id + data[i].person + data[i].person.email + person.location.city + person.location.state + data[i].person.race + data[i].person.gender);

			$(newTableRow).append(newTableData);
			$('tbody').append(newTableRow);

		}
		fixSidebar();
	})
});
