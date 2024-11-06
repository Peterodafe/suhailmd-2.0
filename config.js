const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084532769";




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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_13_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NixcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDkyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMixcbiAgICAgICAgNjksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkzLFxuICAgICAgICA4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInk3UzY1WGhxdkN1ZHAycDBRNXBLQWJyM0x3cVZ0U2NxNUpRNWZtRWxPcEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA4NDUzMjc2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDE5QkY4REEzMEYyMzczM0YzNzVBMDFFMDM4ODg5RDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwODg4MDMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA4NDUzMjc2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0JDMTI3MzBEMkNFNERFQkI4QkU5MjQ5QkI5RDJFNzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwODg4MDM1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk0wXzREeHZfUmRTeTNJdy1PZGNobXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmVlYzg1ZDQtYTdlZi00MWE0LTk2OWYtZWU4NWZkMzdiNWIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDkzLFxuICAgICAgMjI4LFxuICAgICAgMjAzLFxuICAgICAgNzAsXG4gICAgICA3MCxcbiAgICAgIDE0MCxcbiAgICAgIDE2NixcbiAgICAgIDEwNyxcbiAgICAgIDEsXG4gICAgICAxNDksXG4gICAgICA3OCxcbiAgICAgIDIyNixcbiAgICAgIDEyLFxuICAgICAgMTA4LFxuICAgICAgMjA2LFxuICAgICAgMTM4LFxuICAgICAgNjksXG4gICAgICAxNjgsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMTc1LFxuICAgICAgNjYsXG4gICAgICA0OCxcbiAgICAgIDE2MyxcbiAgICAgIDExNSxcbiAgICAgIDUxLFxuICAgICAgMTA3LFxuICAgICAgNSxcbiAgICAgIDIyMyxcbiAgICAgIDI1MCxcbiAgICAgIDE5MixcbiAgICAgIDE3OSxcbiAgICAgIDk0LFxuICAgICAgMTg2LFxuICAgICAgMzgsXG4gICAgICAxNSxcbiAgICAgIDIxMSxcbiAgICAgIDIyOCxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaTFNDMlpHU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4NDUzMjc2OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmVhdXR5IEsgT2RldHRlXCIsXG4gICAgXCJsaWRcIjogXCI0NDUzNDk4NTY3NDk3MDo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xEQWs1UUVFTnVDcmJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibjd1MWp6TWZtTUM4bCtrOTlsRUdGRDNjUC9uQzFqbkZndGF4bTBBYnVSRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjTy9MVUc4cHg3aUpjWXdZcC85bFRDc1dmZUpGalZodnpoV2loTXRsUklmcXdaNyt6Q0RTZjhYWFFvWXVoS0JDRmp3dGZMSlYzZkdWcHFoT2hORXJCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPTmFycUxNTVA4c04xdUFBZHZiblM4aVAyRXJ6NjBlZE53WmhiOHJ6SEdpWlZrWG9mNW1kVEs3ZW1xSVVaMU5PMzJoZXdoc1QrNWV4V21vYmFnenVnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg0NTMyNzY5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDg4ODAzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZpRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmlELmpzb24iOiAie1wia2V5RGF0YVwiOlwiRklVcnprbi92TFplMFAyaDNIMk1TTUJreFBNK1F4Q0NtR1NkZzNpVTZNST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTE2MDA0NDAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA4ODgwMjkxODFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
