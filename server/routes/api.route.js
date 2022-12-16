const router = require("express").Router();
const { google } = require("googleapis");

//Authenticating with googlesheet
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

// Spreadsheets id
const spreadsheetId = "1YRDD6ZlIDiSqJZdpxJrFA0-qfB1_G5XBs3ByOdsI5so";

router.get("/", async (req, res, next) => {
  // res.send({ message: "Ok api is working 🚀" });

  // Client instance for auth
  const client = await auth.getClient();

  // Instance of Google sheets
  const googleSheets = google.sheets({ version: "v4", auth: client });

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:H",
  });
  res.status(200).json(getRows);
});

module.exports = router;
