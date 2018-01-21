/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"


You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/dancingstars.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"https://raw.githubusercontent.com/kdhg0000/Loading/0464cc64/sleekload-master/backgrounds/images/1.jpg",
	"https://cdn.rawgit.com/kdhg0000/Loading/0464cc64/sleekload-master/backgrounds/images/2.jpg",
	"https://cdn.rawgit.com/kdhg0000/Loading/0464cc64/sleekload-master/backgrounds/images/3.jpg",
     
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
    {youtube: "kyg1ccTfW5s", name: "[Blend・S]- 8bit."},
		{youtube: "5eWE06pvzfs", name: "[Daydream Sky Train - IA, Hatsune Miku ft. Orangestar]"	},
			{youtube: "60ItHLz5WEA", name: "[Alan walker]-Fade (No copy right sounds release)"},
				{youtube: "1-xGerv5FOk", name:"[Alan walker]-Alon (No copy right sounds release)"},
					{youtube: "xshEZzpS4CQ",name:"[Alan walker]-Force (no copy right sounds release)"},
	                    {youtube: "VKzWLUQizz8&index=116&list=PL59ILWYueEqanRXeYVLuhtGA59sVVSFFJ",name:"Justice - Genesis - †"},
                        	{youtube:"=veC1Z2ZDtFA",name:"This Game - No Game No Life OP"},
	                            {youtube:"OSPI1qhBB_8",name:"THERE IS A REASON-No Game No Life ZERO Them"},
	                                {youtube:"jvipPYFebWc",name:"Roundtable Rival - Lindsey Stirling"},
	                                    {youtube:"5O9-WAkSwQk",name:"Nightcore - The Calling"},
	                                        {youtube:"6FNHe3kf8_s",name:"Different Heaven - Nekozilla"},
                                                {youtube:"XogSflwXgpw",name:"【IA】アスノヨゾラ哨戒班【オリジナル】-(내일의 밤하늘 초계반)"},
	                                                {youtube:"emrt46SRyYs",name:"DAYBREAK FRONTLINE / Orangestar feat.IA"},
														{youtube:"lYBfWxQRM_A",name:"Keith Kenniff - Goldengrove"},
															{youtube:"2OdgUuH9bm0",name:"Maggie Lindemann - Pretty Girl"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 50;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"서버의 규칙을 확인해주세요!",
"서버를 불러오는중 입니다...",
"서버의 규칙은 !motd로 보실수 있습니다.",
"@로 관리자에게 신고를 해주시거나 스팀채팅으로 신고를 해주세요!",
"서버에 오신것을 환영합니다.",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;