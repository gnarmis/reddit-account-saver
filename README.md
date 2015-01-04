# Reddit Account Saver

Tools to help save data from your own reddit account.

## Automated Process

Use this bookmarklet while you're on Reddit.com (after logging in).

<a href="javascript:(function()%7B%2F%2F%20%23%20Auto%20Download%20Reddit%20Account%20Data%2F%2F%2F%2F%20This%20will%20download%20and%20try%20to%20save%20a%20JSON%20file%20upon%20injection!%2F%2F%2F%2F%20Author%3A%20Gursimran%20Singh%20(%40gnarmis)%2F%2F%20Date%3A%20%20%202015-01-04%2F%2F%2F%2F%20%23%23%20Requirements%2F%2F%2F%2F%20This%20should%20be%20injected%20into%20the%20page%20after%20you%20have%20logged%20in%20to%2F%2F%20%60reddit.com%60%20and%20are%20on%20%60reddit.com%60's%20root%20page%20(doesn't%20really%20matter%2F%2F%20because%20authentication%20is%20the%20only%20requirement%2C%20but%20reduce%20variables).%2F%2F%2F%2F%20Also%2C%20run%20this%20in%20Chrome%20to%20be%20able%20to%20download%20the%20data.%2F%2F%2F%2F%20Finally%2C%20Reddit%20seems%20to%20load%20jQuery%2C%20so%20I%20assume%20jQuery%20exists%20and%20%60%24%60%20is%2F%2F%20set%20to%20%60jQuery%60.%2F%2F%20%23%23%20Plugins%2F%2F%20console-save%20plugin%20for%20Chrome%20Dev%20Tools%2F%2F%20Exposes%20%60console.save(Object%2C%20filename)%60%20function%2F%2F%20From%3A%20https%3A%2F%2Fbgrins.github.io%2Fdevtools-snippets%2F(function(console)%7Bconsole.save%20%3D%20function(data%2C%20filename)%7Bif(!data)%20%7Bconsole.error('Console.save%3A%20No%20data')return%3B%7Dif(!filename)%20filename%20%3D%20'console.json'if(typeof%20data%20%3D%3D%3D%20%22object%22)%7Bdata%20%3D%20JSON.stringify(data%2C%20undefined%2C%204)%7Dvar%20blob%20%3D%20new%20Blob(%5Bdata%5D%2C%20%7Btype%3A%20'text%2Fjson'%7D)%2Ce%20%20%20%20%3D%20document.createEvent('MouseEvents')%2Ca%20%20%20%20%3D%20document.createElement('a')a.download%20%3D%20filenamea.href%20%3D%20window.URL.createObjectURL(blob)a.dataset.downloadurl%20%3D%20%20%5B'text%2Fjson'%2C%20a.download%2C%20a.href%5D.join('%3A')e.initMouseEvent('click'%2C%20true%2C%20false%2C%20window%2C%200%2C%200%2C%200%2C%200%2C%200%2C%20false%2C%20false%2C%20false%2C%20false%2C%200%2C%20null)a.dispatchEvent(e)%7D%7D)(console)%3B%2F%2F%20%23%23%20Endpointsfunction%20Endpoint(accountName%2C%20resourceName)%20%7Bthis.accountName%20%3D%20accountName%3Bthis.resourceName%20%3D%20resourceName%3Bthis.url%20%3D%20'%2Fuser%2F'%20%2B%20accountName%20%2B%20'%2F'%20%2B%20resourceName%20%2B%20'.json'%3B%7D%3Bfunction%20Api(accountName)%20%7Bthis.accountName%20%3D%20accountName%3Bthis.about%20%3D%20new%20Endpoint(this.accountName%2C%20'about')%3Bthis.overview%20%3D%20new%20Endpoint(this.accountName%2C%20'overview')%3Bthis.submitted%20%3D%20new%20Endpoint(this.accountName%2C%20'submitted')%3Bthis.comments%20%3D%20new%20Endpoint(this.accountName%2C%20'comments')%3Bthis.saved%20%3D%20new%20Endpoint(this.accountName%2C%20'saved')%3Bthis.liked%20%3D%20new%20Endpoint(this.accountName%2C%20'liked')%3Bthis.disliked%20%3D%20new%20Endpoint(this.accountName%2C%20'disliked')%3B%7D%3B%2F%2F%20%23%23%20The%20Meat%20of%20the%20Thingfunction%20downloadAndSaveAccountData(accountName)%20%7Bvar%20api%20%3D%20new%20Api(accountName)%3Bwindow.profile%20%3D%20%7B%7D%3B%24.when(%24.getJSON(api.about.url%2C%20function(d)%7Bwindow.profile.about%20%3D%20d%3B%7D)%2C%24.getJSON(api.overview.url%2C%20function(d)%7Bwindow.profile.overview%20%3D%20d%3B%7D)%2C%24.getJSON(api.submitted.url%2C%20function(d)%7Bwindow.profile.submitted%20%3D%20d%3B%7D)%2C%24.getJSON(api.comments.url%2C%20function(d)%7Bwindow.profile.comments%20%3D%20d%3B%7D)%2C%24.getJSON(api.saved.url%2C%20function(d)%7Bwindow.profile.saved%20%3D%20d%3B%7D)%2C%24.getJSON(api.liked.url%2C%20function(d)%7Bwindow.profile.liked%20%3D%20d%3B%7D)%2C%24.getJSON(api.disliked.url%2C%20function(d)%7Bwindow.profile.disliked%20%3D%20d%3B%7D)).done(function()%20%7Bconsole.save(window.profile%2C%20'reddit-account-data.json')%7D)%3B%7D%3B%2F%2F%20Call%20it!window.accountName%20%3D%20%24('span.user%20%3E%20a').text()%3BdownloadAndSaveAccountData(window.accountName)%7D)()">Download Reddit Account Data</a>

OR...

1. Log into Reddit on Chrome
2. Open up the developer console
3. Copy paste all of `auto_download_account_data.js`

## Manual Process

1. Log into Reddit on Chrome
2. Open up the developer console
3. Copy paste all of `injectable_script.js`
4. Run `downloadAccountData('your-account-name')`
5. Wait until there's a message in the console saying it's finished. You can then download a single JSON file with all your meta info, overview, saved posts, submitted posts, comments, liked posts and disliked posts via `console.save(window.profile, 'profile-backup.json')`.
