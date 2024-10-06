const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917530060988";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_53_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDQzLFxuICAgICAgICA3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDkxLFxuICAgICAgICA3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NSxcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM3LFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDk4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInA5NkJ1dU4xTGtld2VnTitkYWo4ajZBcmw1eWZFWDNYbWVDQjRWVjBkL0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3NTMwMDYwOTg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQUIxMDkyREU5OERDN0UxOTgzMTEyNUE5OTU5RjMwNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgyMTU2MjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc1MzAwNjA5ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE5RTFFNTY4N0M5RkI4Q0VGQkZDQzMxRTUxRkU0NzAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODIxNTYyMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1MXI5SEppNVFHZWxkT21va0o2QUVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBmMTJhNDM2LWY4MzItNDczNS05N2QxLTZiYWUxMTdlM2UzNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDIwNyxcbiAgICAgIDUzLFxuICAgICAgMjEyLFxuICAgICAgMTc2LFxuICAgICAgMTk0LFxuICAgICAgOTgsXG4gICAgICA5NCxcbiAgICAgIDEzLFxuICAgICAgMjIzLFxuICAgICAgMTYyLFxuICAgICAgOTIsXG4gICAgICAyMTcsXG4gICAgICA5MCxcbiAgICAgIDIyMixcbiAgICAgIDE1NyxcbiAgICAgIDExNyxcbiAgICAgIDIyLFxuICAgICAgMjA1LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyMzgsXG4gICAgICAyMzEsXG4gICAgICAyOSxcbiAgICAgIDYyLFxuICAgICAgOTMsXG4gICAgICAzNSxcbiAgICAgIDc3LFxuICAgICAgMSxcbiAgICAgIDc4LFxuICAgICAgODcsXG4gICAgICAxMzQsXG4gICAgICAxNjIsXG4gICAgICAyNyxcbiAgICAgIDg5LFxuICAgICAgMjA5LFxuICAgICAgMTQxLFxuICAgICAgOTIsXG4gICAgICAxNTMsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWU1GWTZUTkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzUzMDA2MDk4ODozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYxMzcwNTk1MTY4MzQ0OjM0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFtZWVyXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSytsbGUwQkVMMzBpYmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0N1JKYWhjaTdBTkpwZXBNanRYQkd2Y2laRG5BN1Q4RmZvV3h6VXBaRGdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjl2OExOaVVWWDl2Sk5VNmdidkV0cUdtd3pNcU1BQ2lFdGJtMkxJa3J0amgxRkJGT2ZyM0xUQ0FSSmd2ekpOdUF6Q0dPT1dmOTFMNXltT3ZvTEFBVERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtxQjFVbk1ObGNXbE92S1cwcHVqREJETlFZWGJvQTUxbENEWUl1YW9oSlhKZ2xrbElISEQrYmUwRm9XSnBLQVNPNVJPeW02bzhNV01MNmZ5WmxIV0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzUzMDA2MDk4ODozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODIxNTYxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA1U1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDVTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTlBMY1FRL0Vua2h3SzRYbjlXb0hwb1k5NFh0cVN1SnphNUg5bjNNa2Y4QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0OTczNzM4NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODIxNTYyMDI1M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Ameer",
  packname: process.env.PACK_NAME || "Ameer",
  botname : process.env.BOT_NAME  || "Ameer",
  ownername:process.env.OWNER_NAME|| "Ameer",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
