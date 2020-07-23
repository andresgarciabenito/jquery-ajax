$(document).ready(function () {
    
    $('#idbutton').click(function (e) { 
        e.preventDefault();

    $.ajax({
        type: 'GET',
        url: 'http://api.icndb.com/jokes/random',
        
        success: function (data) {
            console.log('success', data);
            
                $.each(data, function (index, item) { 

                    $('#result').html( $('#result').html()+`
                    <li><span>${data.value.joke}</span></li><br>  
                    `);

                    $(data).append(`
                    <li><span>${data.value.joke}<span></li><br>  
                    `);
                     
                    });    
        
           
        }
    });

     });
});