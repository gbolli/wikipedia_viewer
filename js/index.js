$(document).ready(function() {
  
  // Variables
  
  var searchWord = "";
  var apiUrlBase = "https://en.wikipedia.org/w/api.php?";
  var results = [];

  // URL items
  // "?action=query&list=search&srsearch="+$(".searchText").val()+"&format=json&callback=?"
  
  // Capture search box
  
  
  // API call function
  function callWiki() {
    var apiUrl = apiUrlBase + ;
    
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: apiUrl,
      
      success: function(data) {
        
        console.log(data); // testing
        
        
        // removeClass('hidden');
        
      }
    });
  }
  
  // Random Wiki call function
  
  
  // 
  
  
  
  
  
});