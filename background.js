chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ) {
      chrome.tabs.update( tabs[0].id, { url: "index.html" } ); 
    });



  })

