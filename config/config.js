/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
						  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
						  // - another specific IPv4/6 to listen on a specific interface
						  // - "", "0.0.0.0", "::" to listen on any interface
						  // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
														   // or add a specific IPv4 of 192.168.1.5 :
														   // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
														   // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
														   // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "fr",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "compliments",
			position: "middle_center",
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Lyon",
				locationID: "2996944",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "6511de2cf731ca33fb823b369b56f72f"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Prévisions météo",
			config: {
				location: "Lyon",
				locationID: "2996944",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "6511de2cf731ca33fb823b369b56f72f"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Le Monde",
						url: "https://www.lemonde.fr/rss/une.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
