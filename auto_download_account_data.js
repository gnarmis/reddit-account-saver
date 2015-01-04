// # Auto Download Reddit Account Data
//
// This will download and try to save a JSON file upon injection!
//
// Author: Gursimran Singh (@gnarmis)
// Date:   2015-01-04
//
// ## Requirements
//
// This should be injected into the page after you have logged in to
// `reddit.com` and are on `reddit.com`'s root page (doesn't really matter
// because authentication is the only requirement, but reduce variables).
//
// Also, run this in Chrome to be able to download the data.
//
// Finally, Reddit seems to load jQuery, so I assume jQuery exists and `$` is
// set to `jQuery`.


// ## Plugins

// console-save plugin for Chrome Dev Tools
// Exposes `console.save(Object, filename)` function
// From: https://bgrins.github.io/devtools-snippets/
(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console);


// ## Endpoints

function Endpoint(accountName, resourceName) {
  this.accountName = accountName;
  this.resourceName = resourceName;
  this.url = '/user/' + accountName + '/' + resourceName + '.json';
};

function Api(accountName) {
  this.accountName = accountName;

  this.about = new Endpoint(this.accountName, 'about');
  this.overview = new Endpoint(this.accountName, 'overview');
  this.submitted = new Endpoint(this.accountName, 'submitted');
  this.comments = new Endpoint(this.accountName, 'comments');
  this.saved = new Endpoint(this.accountName, 'saved');
  this.liked = new Endpoint(this.accountName, 'liked');
  this.disliked = new Endpoint(this.accountName, 'disliked');
};

// ## The Meat of the Thing

function downloadAndSaveAccountData(accountName) {
  var api = new Api(accountName);
  window.profile = {};

  $.when(
    $.getJSON(api.about.url, function(d){window.profile.about = d;}),
    $.getJSON(api.overview.url, function(d){window.profile.overview = d;}),
    $.getJSON(api.submitted.url, function(d){window.profile.submitted = d;}),
    $.getJSON(api.comments.url, function(d){window.profile.comments = d;}),
    $.getJSON(api.saved.url, function(d){window.profile.saved = d;}),
    $.getJSON(api.liked.url, function(d){window.profile.liked = d;}),
    $.getJSON(api.disliked.url, function(d){window.profile.disliked = d;})
  ).done(function() {console.save(window.profile, 'reddit-account-data.json')});
};

// Call it!

window.accountName = $('span.user > a').text();

downloadAndSaveAccountData(window.accountName);
