# Reddit Account Saver

Tools to help save data from your own reddit account.

See `injectable_script.js`.

Process:

1. Log into Reddit on Chrome
2. Open up the developer console
3. Copy paste all of `injectable_script.js`
4. Run `downloadAccountData('your-account-name')`
5. Wait until there's a message in the console saying it's finished. You can then download a single JSON file with all your meta info, overview, saved posts, submitted posts, comments, liked posts and disliked posts via `console.save(window.profile, 'profile-backup.json')`.
