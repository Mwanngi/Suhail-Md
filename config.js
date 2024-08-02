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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_37_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICA5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDcwLFxuICAgICAgICA1OCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgwLFxuICAgICAgICA1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrTWwweWFIdHFHcGNnVWlxd3FWaDEvNUs5ejAzN1Ryc1plR3RCRUZjZit3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc4MTI2Mzc1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzk4Njg5MjY3RUU2MERGNkQ3NDNGOEM5NEMxMkU2MUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTk4NjMzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzgxMjYzNzUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MDE5NkYzN0E3QjJFREFDNEQ4RTI1MzlCMzY1Q0ExRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1OTg2MzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3ODEyNjM3NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkExMjMyRkQ4MUM4RUYxNDc1QzU3OTE3Q0M1MzFEMjUxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU5ODYzNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc4MTI2Mzc1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzI3RTg2RTIwNkY0RUI5RTY0ODg4NUQ1MjdDRTg4NDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTk4NjM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFQTWNGQmRxU3lxQjZxYS10QmtYQ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTA0ZDUwZGYtYjU3NS00YjIyLWI5MjYtZDViOTBjZDg4MzM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgMjE0LFxuICAgICAgMTc1LFxuICAgICAgMTUsXG4gICAgICAyNSxcbiAgICAgIDM1LFxuICAgICAgMTM0LFxuICAgICAgOTUsXG4gICAgICA1MixcbiAgICAgIDExMixcbiAgICAgIDIzMixcbiAgICAgIDExNCxcbiAgICAgIDEwNyxcbiAgICAgIDIxNSxcbiAgICAgIDI0OCxcbiAgICAgIDgzLFxuICAgICAgODgsXG4gICAgICAyNDcsXG4gICAgICA3MyxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAzNSxcbiAgICAgIDE4MixcbiAgICAgIDI1MyxcbiAgICAgIDE4OCxcbiAgICAgIDI0MSxcbiAgICAgIDExMixcbiAgICAgIDcsXG4gICAgICAxODcsXG4gICAgICAyMDMsXG4gICAgICAxODMsXG4gICAgICA1NyxcbiAgICAgIDcyLFxuICAgICAgMjE5LFxuICAgICAgMTUxLFxuICAgICAgMTcxLFxuICAgICAgMjExLFxuICAgICAgMTUwLFxuICAgICAgMjgsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkFNUUtKUVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc4MTI2Mzc1Mzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NjE0MzA2NjgyODg0NTo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1pc3RhaCBYLiBCb3RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOK2NndmtFRU9PSnM3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpaME9rYXpWVFZyRkJIdXh0aVZQY3hOYWlIODlNbTVaQVVKanlPQVZ0bmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZk1abFpzWlVLcjl4SDIrOElINmlGMU14M25Oc2Z5SFN3NFZCS001aWUwekQ4R0VZNEh6Z1d2RjV1c1FNd0xMa0psalF3REl2Z05maUNJa1pYRGtyQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUG5mbTJtb3hPalhpdFVDOVA3c0dmZkMycTVaSFZkRmpkTHJWb2RCcmtBdWw0VWZaTzgvdVhneGF4bWI3Um1lVTdDMk4yeFRiYUlkVkV1NnJuamQ0aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzgxMjYzNzUzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTk4NjMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2tFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHa0UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWSWdUZG40Vk4ybEJwTnA3MXFzSjJpTVE4dXdzbCswTWJxcWJiNjEyYXBRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMjc1MzM2NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjU5ODYzMzE5N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
