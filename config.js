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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_38_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM4LFxuICAgICAgICA4MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDkxLFxuICAgICAgICA5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlxZ3BJbkpQWSszTW5meGZQbEdXOUJTRzRxTGNBZmFhbENKUmNzL2k5RHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3NTMwMDYwOTg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCOEMyRDA4QzA5QjE4RkQ2QjI4MUM0MDY1OEQ5NEJFRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk4NzA3MzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU2JzZmdNNjlTOHFxRmVpUWJzV3Bmd1wiLFxuICBcInBob25lSWRcIjogXCJkY2E2M2MwNC03ZmUxLTRkZTktOTkxYy02OTA0MDI3YmVmOTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMTEsXG4gICAgICAzMSxcbiAgICAgIDIzMyxcbiAgICAgIDg2LFxuICAgICAgMTc2LFxuICAgICAgMjQzLFxuICAgICAgMjA0LFxuICAgICAgNTYsXG4gICAgICAyMzQsXG4gICAgICAxMixcbiAgICAgIDE0MCxcbiAgICAgIDEwNCxcbiAgICAgIDk3LFxuICAgICAgMTU2LFxuICAgICAgNDEsXG4gICAgICA3NyxcbiAgICAgIDEwOCxcbiAgICAgIDc5LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDcsXG4gICAgICA2OSxcbiAgICAgIDg2LFxuICAgICAgMTA3LFxuICAgICAgMTA1LFxuICAgICAgMTU3LFxuICAgICAgNTcsXG4gICAgICAxOTksXG4gICAgICAyNDAsXG4gICAgICAxNzIsXG4gICAgICAzMixcbiAgICAgIDEzOSxcbiAgICAgIDMsXG4gICAgICAyMzMsXG4gICAgICA5OSxcbiAgICAgIDE4OCxcbiAgICAgIDY4LFxuICAgICAgMTMxLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRSRFI5QlZXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc1MzAwNjA5ODg6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MTM3MDU5NTE2ODM0NDozNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbWVlclwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDbGxlMEJFSWYzN3JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNDdSSmFoY2k3QU5KcGVwTWp0WEJHdmNpWkRuQTdUOEZmb1d4elVwWkRnVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzN3R3N1NGWm5iUDl3cTFaVXdzSWRQZHc0WUdKQmNHaXU0OW44djR2Q0d3OVJzR2gwNTJJTGRhdTdQNlJtUmh6cGhBZXEveS9UQnNHZ1h4NmlPSjdCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPK0JKbHNqcDhjbkp5L2oyZzJWWnJpSWJQWjN1a2xaS01lYStGWWZpY3JiakFYTGprak5OeDZXL1dDeGFCVW9WNGNmc3kvU2R0cVlDTDBCL0xHVVhoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc1MzAwNjA5ODg6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk4NzA3MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQNVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA1VS5qc29uIjogIntcImtleURhdGFcIjpcImhoUnBxbDV4QzdYdWJyTXJVNzk4ZC9zWDc0YjlhWjlodEhDM0JkNXVSZFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDk3MzczODcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk4NzA3MzM2ODJcIn0iCn0="  // PUT your SESSION_ID 


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
