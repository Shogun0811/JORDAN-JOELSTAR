const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Joelstar1@gmail.com" // no need
global.location="Lagos,Nigeria." // no need


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/jamesxtreme/JORDAN-JOELSTAR";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P" ; 
global.THUMB_IMAGE = process.env.IMAGE || "https://telegra.ph/file/5a06979ab4afb8ab7dccb.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2349054039891" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349054039891,2347061138624";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349054039891";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/f81015230c96d1f53ab60.mp4" // set images here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349054039891";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349054039891";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://miles-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_14_08_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg1LFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjUxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDc1LFxuICAgICAgICA4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTc4LFxuICAgICAgICA3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDg2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQXk0d3NYSGxOOWdJY28zaWJhZG9nMjNUK2wxRHJWL1YyZnJHUDJiK0Zydz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjE3NjAyNjM2MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQxNjdGQTBEODNEMUZFNjM1MTNDRDdGRTBENjE0RUVEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNDEwNTY3OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwWjMzRXRMRlJuNmdTbjVkdDJtNlVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBhY2EwZTdkLTQzZWMtNDVjZC05ODMzLTM0YjkxZjViMzUyMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICA3MyxcbiAgICAgIDMyLFxuICAgICAgMjI4LFxuICAgICAgMjksXG4gICAgICAyNyxcbiAgICAgIDI0MCxcbiAgICAgIDk0LFxuICAgICAgMjI2LFxuICAgICAgMTc4LFxuICAgICAgMTkxLFxuICAgICAgMjUwLFxuICAgICAgMzMsXG4gICAgICAxNjcsXG4gICAgICA4MyxcbiAgICAgIDE2NSxcbiAgICAgIDEyMyxcbiAgICAgIDEyMCxcbiAgICAgIDE2NSxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDIzNSxcbiAgICAgIDE3NCxcbiAgICAgIDQxLFxuICAgICAgMTUyLFxuICAgICAgMzMsXG4gICAgICAxMTYsXG4gICAgICAyMTQsXG4gICAgICAxNDAsXG4gICAgICAxMDAsXG4gICAgICAxMTEsXG4gICAgICAyMTMsXG4gICAgICAxMDUsXG4gICAgICAyNDcsXG4gICAgICAxMDIsXG4gICAgICAxNjUsXG4gICAgICAyMjUsXG4gICAgICAyNCxcbiAgICAgIDE3OSxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlc1NU5XMlgzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3NjAyNjM2MzE6ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLjg5Pjg7zjgrPjg57jg6suQmljb21hcnUgU2hvZ3VuYcSrXCIsXG4gICAgXCJsaWRcIjogXCI4Mzk2Njc3ODQwOTE1OTo4NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLM1MyS3dHRU1PSGo3WUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJFM0x3MEczRHI1LzdQU1lxMEhaQWs4bndoLyttUmVvQ3VZTnRHRFlKd0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibS9ycCs0WlA5elZJQnJFTmE4eHo2Mm90MjdoRHR0aDFFaUVDNjBYSGRveHJZbHRNeGZidUxxQWNOTVNWSHpqZkRKRkorNHAxOStHTzVUUjRPTXRDRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOUNnVlJIcUc3dHJoblY2dUJFZXJtMEs0Mkw1TExTWnRhZmNRa3JOMEV1T1BxWHROdWpCZFRpUnIxZFJrRFdra2N1bzEwd3MvYUNkTE9PUndiODlialE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzYwMjYzNjMxOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDEwNTY3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUh4cVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHhxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNFd6aC9Lc0dUZy9OQzVMRVpDdDMrRzhaY3JOYjY1eC9zRVdkNVZqSFFmQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzA0MzM5NzU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjQxMDU2NzY1NDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "🅹🄾🆁🅳🄰🄽-🅹🄾🅴🄻🅂🅃🄰🆁" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🅼︎🅸🄻🅴🅂",
  ownername:process.env.OWNER_NAME|| "JORDAN-JOELSTAR",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com,https://whatsapp.com/channel,https://t.me,https://slnkz.com,https://azcoiner.com,https://mobile.over.network,https://shibaai.club/signup,https://link.kelp.finance,https://emerson,https://tr.ee/Child-Support-Fund-Portal",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "MILES"  ).toUpperCase(),



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
