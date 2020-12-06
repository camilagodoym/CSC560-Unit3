/*var jsonQuery = require('json-query')

var data = 'http://localhost:8080/api/team';

jsonQuery('team[goals=1].first_name', {
    data: data
  })*/

  $(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/api/team"
    }).then(function(data, status, jqxhr) {
       $('.team-_id').append(data.id);
       $('.team-_first_name').append(data.content);
       console.log(jqxhr);
    });
});