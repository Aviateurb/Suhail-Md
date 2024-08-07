const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_09_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNixcbiAgICAgICAgMixcbiAgICAgICAgMTU0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgxLFxuICAgICAgICA0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICA4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICA3MyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMixcbiAgICAgICAgNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI5LFxuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDk3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidnlCVmdtMlVwRldmdXdweUNBeWtMempGNVhCUW5lQUZnaTAyYjF1Q2gyMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0RXbkI1d3VRSC1uMmZmQUVBcmk1d1wiLFxuICBcInBob25lSWRcIjogXCIwNjAyNDA4ZC0xODQ0LTRmNWQtYmUwNi01ODQzYmU0OTdiMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAyNDksXG4gICAgICA0OSxcbiAgICAgIDIzMyxcbiAgICAgIDUsXG4gICAgICAyMzIsXG4gICAgICAxMTAsXG4gICAgICAxNzIsXG4gICAgICAwLFxuICAgICAgODEsXG4gICAgICAxODIsXG4gICAgICA0NyxcbiAgICAgIDEwLFxuICAgICAgMTM1LFxuICAgICAgMTYwLFxuICAgICAgMjAyLFxuICAgICAgNDcsXG4gICAgICAxNzMsXG4gICAgICAxOTAsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAxNDYsXG4gICAgICAxOTAsXG4gICAgICAyMzgsXG4gICAgICAyMjUsXG4gICAgICAxNzksXG4gICAgICAxMTgsXG4gICAgICAxODksXG4gICAgICAyMSxcbiAgICAgIDQxLFxuICAgICAgMTAsXG4gICAgICAxMCxcbiAgICAgIDE3OCxcbiAgICAgIDI0NCxcbiAgICAgIDE5NyxcbiAgICAgIDY2LFxuICAgICAgMTQ0LFxuICAgICAgMTcyLFxuICAgICAgMTcyLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDZrK0pZSEVJMmN6clVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXd21OSlRnVWF3Nzl5TTJyVDBRV2krWmlTbndKTU40bmNTWU1FV1NwY1ZnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFpbGUrcDJEVUxlU0hPcTRzV2FvNWpTejBEd3M0OUtGY1dhKytWRWZpdm9IckhjN0t3TUFHZVZQengzR0Z5SVN1cXR2TGJLQk9idlFCNlFSbEZpc0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNmTENqTGtiQVRtNUY2MEFnMlZld0NwalBac3VsaVFNOXpEQlNqREhwTmZ0S3JvNlFuaWFSZEF0WDBvMEh0M29xZS9HcjZ3UDkyTjJUMXE4QmFnS0FBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQyMDY1MDY5OTQzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTU5MDI2MTg3Mzg4MDk6MTJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDIwNjUwNjk5NDM6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDQzMzQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHZ6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEdjAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJdW44UEZ1c1YweEFndHJWS3hKMFV5YU55MHp5TnB5d1dLNnpnZXlQQlpzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjcxNTYzNTAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDRdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzA0MzMyODI1NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUR2dy5qc29uIjogIntcImtleURhdGFcIjpcIm5GcDFydEpJU3NyYmFKa1JzSXd1VlN6MHA5QUFQSkxoVUI2V0owYkFEYkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyNzE1NjM1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHZ4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZENYMlN0VXA5U3NRblI2bTh2R21QVDMveGNBRGlYK1oxenJWVWpMYkFKRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTI3MTU2MzUwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUR2eS5qc29uIjogIntcImtleURhdGFcIjpcIm5RWXVpRkNMQmlWRjVWbERHRDFYMXRmc043Z0o3Y1Yzd2pORFNmd1VQTFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyNzE1NjM1MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHZ6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWHoyU1FhdlpZZTB4TU5OdG5hYS8vZVh2UUw4L1BJc3czOEozYzZwWlovND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTI3MTU2MzUwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Murky Shigaraki",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
