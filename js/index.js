$(document).ready(function() {
  
  // Variables
  
  var searchWord = "";
  var apiUrlBase = "https://en.wikipedia.org/w/api.php?";
  var results = [];

  // URL items
  // "?action=query&list=search&srsearch="+$(".searchText").val()+"&format=json&callback=?"
  
  // Click on search button

  $(".searchSubmit").on("click", function() {
    callWiki();
  });
  
  
  // API call function
  function callWiki() {
    var apiUrl = "http://crossorigin.me/" + apiUrlBase;
    var searchText = $(".searchText").val();
    
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: apiUrl,
      data: {
        "action": "opensearch",
        "format": "json",
        "search": searchText
      },
      
      success: function(data) {
        
        console.log(data); // testing
        
        for (var i = 0; i < 10; i++) {
          $("#btn"+i+" span").html(data[1][i]);
          $("#btn"+i+" p").html(data[2][i]);
          $("#btn"+i).removeClass('hidden');
        };
        // removeClass('hidden');
        
      }
    });
  }
  
  // Random Wiki call function
  
  
  // Testing
  // callWiki();
  
  
});