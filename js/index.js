$(document).ready(function() {
  
  // Variables
  
  var searchWord = "";
  var apiUrlBase = "https://en.wikipedia.org/w/api.php?";
  var corsUrl = "https://cors-anywhere.herokuapp.com/"  // "https://crossorigin.me/"
  var results = [];

  // Click on search button

  $(".searchSubmit").on("click", function() {
    callWiki();
  });
  
  // Click on random button

  $(".randomBtn").on("click", function() {
    $(".resultBtn").addClass("hidden");
    $(".resultBtn p").html("");
    $(".resultBtn").attr("href", "#");
    callWikiRandom();
  });
  
  // API call function

  function callWiki() {
    var apiUrl = corsUrl + apiUrlBase;
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
        
        // console.log(data); // testing
        
        for (var i = 0; i < 10; i++) {
          $("#btn"+i+" span").html(data[1][i]);
          $("#btn"+i+" p").html(data[2][i]);
          $("#btn"+i).attr("href", data[3][i]);
          $("#btn"+i).removeClass('hidden');
        };
      }
    });
  }
  
  // Random Wiki call function (for a list)

  // or use https://en.wikipedia.org/wiki/Special:Random

  function callWikiRandom() {
    var apiUrl = corsUrl + apiUrlBase;
    var wikiUrlBase = "https://en.wikipedia.org/wiki/";
    
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: apiUrl,
      data: {
        "action": "query",
        "format": "json",
        "list": "random",
        "rnnamespace": 0,
        "rnlimit": 5
      },
      
      success: function(data) {
        
        console.log(data); // testing

        for (var i = 0; i < 5; i++) {
          var wikiRandomName = data.query.random[i].title;
          $("#btn"+i+" span").html(wikiRandomName);
          $("#btn"+i).removeClass('hidden');          
          // $("#btn"+i+" p").html(data2[2][i]);   // No paragraph for random
          $("#btn"+i).attr("href", wikiUrlBase + wikiRandomName);
          
        };
      }
    });
  }
  
  // Testing
  // callWiki();
  
  
});