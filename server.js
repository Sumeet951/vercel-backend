import app from "./app.js";
import databaseconnect from "./config/dbConnection.js";
const PORT = 3000;
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, async () => {
  await databaseconnect();
  console.log(`App is running at http://localhost:${PORT}`);
})