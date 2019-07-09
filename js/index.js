$.ajax("https://api.github.com/users/matilfor").done(function(data){
    $("#img").append('<img src="' + data.avatar_url + '" />');    
    $("#name").append('<p>Name: ' + data.name + '</p>');
    $("#blog").append("<p>LinkedIn: <a href='https://www.linkedin.com/in/matilde-fortunato/' class='users'>" + data.blog + "</a></p>");
    $("#num-repos").append("<p>Repositories: " + data.public_repos + "</p");
});

$.ajax("https://api.github.com/users/matilfor/repos").done(function(data){
    var repoTable = $("#repos");
    for(let i=0; i < data.length; i++){
        var row = $('<tr></tr>');
        var dataName = "<td>"+ data[i].name +"</td>"
        var dataDesc = "<td>"+ data[i].description +"</td>"
        var dataUrl = '<td><a href=" ' + data[i].svn_url + ' ">' + "<p>View</p>" + '</td>'
        row.append(dataName);
        row.append(dataDesc);
        row.append(dataUrl)
        repoTable.append(row);
    }
});