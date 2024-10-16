const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94702722766";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_34_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDc3LFxuICAgICAgICAyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU5LFxuICAgICAgICA4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU3LFxuICAgICAgICA3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICA0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNixcbiAgICAgICAgMTU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDksXG4gICAgICAgIDcsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRFWkVNUm1YY2pQWU1oQ1BJUGQ4bjMwamNWdUoxWWlDLzBxV0FGMFdmQzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpBckw1SlA5UWMtb2NpMWZCRWp5d1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjU2M2JlMGQtYWZkYi00ZGZkLThiMGQtMGFkMGM1NDNlZjE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDEwMCxcbiAgICAgIDIwOSxcbiAgICAgIDEsXG4gICAgICAyMDQsXG4gICAgICAxNDIsXG4gICAgICAxNTEsXG4gICAgICAxNTcsXG4gICAgICAxMCxcbiAgICAgIDIzMSxcbiAgICAgIDY5LFxuICAgICAgMTQzLFxuICAgICAgMTgsXG4gICAgICA1OCxcbiAgICAgIDEyOSxcbiAgICAgIDksXG4gICAgICA5NixcbiAgICAgIDE5NSxcbiAgICAgIDE1OSxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAzMyxcbiAgICAgIDEwOCxcbiAgICAgIDkyLFxuICAgICAgNDcsXG4gICAgICAxNjksXG4gICAgICA1MyxcbiAgICAgIDE0MSxcbiAgICAgIDIyMyxcbiAgICAgIDEzMyxcbiAgICAgIDY0LFxuICAgICAgMTQ0LFxuICAgICAgMTcwLFxuICAgICAgMTIsXG4gICAgICA4MyxcbiAgICAgIDEyNSxcbiAgICAgIDE3NyxcbiAgICAgIDM5LFxuICAgICAgMTE4LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzc2UEROM05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzAyNzIyNzY2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2ODIxNjkxNjA0MTk0Mzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01mRXU0TURFUDJkdjdnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY0NPR1M0bkhTcjlrbWVmMFBwNWFGYk43aUlBYUxkWTZnNjl0d2p1Tm9Hbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYQmx0UXB4L1hDR1dkcG4wNDVYRnliNUFidzB4QU1ZZzZ4cTBvYnJvWlVOWUV2YldPYWZKOWR0YS80UkpPZVZDSkpNMzJBM05hTmMwNElUaE1peGdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXUFY3Vk10NUhkOHhJWVllZGlUVVdZbWxlcHllZG1ReFNsR3Z0Mk9sdC85WVFvZEtWVEtrS0x1UzZCOE5FcGFtc0dVMElKMFByWklFMHJlcUFxUWFCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwMjcyMjc2Njo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkwODkyODNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
