const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"OLQ64hEZ7yM9sR/FMF2R8KiPj5YoGfNSbf0U5Gi5wV4="},"public":{"type":"Buffer","data":"ejTKs6gTD3qd7bJButNolKNiKCXQ01+1+SFOM4X93hU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YNKHS91WMydj2C8e8+eIRYz3VAbTEJnDQio6OzwJm1E="},"public":{"type":"Buffer","data":"wnp6P+/IVv4FEDMMhqC868cnr89zA5cK3POrlpvsVhQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aGM5LdA8h4SMW79Mf7DVeVtkbOh2UUau2A+LMALzY3g="},"public":{"type":"Buffer","data":"3B2QTlwdYTaPGS21N6xKKr0YlrYWQVVnA0++dABUVmE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"MOR8XZ+5geGmLYQBrYwbVQdA4IB8y4FQqYTbem5pbXQ="},"public":{"type":"Buffer","data":"o18qGNkFvog/0GfrZRXKOfvlyANfx00GAOYcx0DHnB0="}},"signature":{"type":"Buffer","data":"nfnrbN+a4mYG5KmYQKsl9PTu0oyplRgG9mYo93QkmucO++KDdh0XGbwL0cxolpih48YTn8IRO41SyvPmwZk+CA=="},"keyId":1},"registrationId":224,"advSecretKey":"UUcX9LuQp8LRCRZRYgsPXZgjLnBfUoKiZ0OHAlVKz9M=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"wQd9L0aET9ucFmiTtf_VjQ","phoneId":"4e30f747-e799-44f5-8aa9-4e53c59e308d","identityId":{"type":"Buffer","data":"bv4Isk2JwD0yR5EZcbD5oCwgsqM="},"registered":true,"backupToken":{"type":"Buffer","data":"3ljAuh3UB7aJF3t0PeWVFp/mNqM="},"registration":{},"pairingCode":"WK87ABQ6","me":{"id":"254715722567:21@s.whatsapp.net","name":"𝖇𝖗𝖎𝖆𝖓 𝖓𝖌𝖊𝖙𝖎𝖈𝖍"},"account":{"details":"CN/688QDEM29qMAGGBsgACgA","accountSignatureKey":"KlNCqt+814oxFQiFY+vmFSH5EU+iubwSIAikZOeLhUE=","accountSignature":"NxDh4yGTPxuhAn/y1W3LKS2aUn+oEZMF3HT3/QGih6SuhzRhLvJz1PbtRNDqOgM5J6mXIhenPZQkh5h90EoeBQ==","deviceSignature":"OKJqn7yEdziXCdlGqANEGkO4TvlpUJI1us4w48W+ki47Wjxy3FtPgHCPBl8VDnhTaj/yR/XzflJkLMHdJ2lxCQ=="},"signalIdentities":[{"identifier":{"name":"254715722567:21@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BSpTQqrfvNeKMRUIhWPr5hUh+RFPorm8EiAIpGTni4VB"}}],"platform":"smba","lastAccountSyncTimestamp":1745493724,"myAppStateKeyId":"AAAAAAWh"},
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
