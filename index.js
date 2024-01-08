const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = 'mrpulgonius';
var password = '971216009';
var shared_secret = 'TazSZPf6BTS9Fc++\/njl3AMdNRE=';

var games = [570, 1172470, 730, 322330, 4000, 1905180, 2357570, 444090, 1840, 440, 550, 245170, 40800, 105600, 620, 1671210];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
