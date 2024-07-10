import app from "@/src/app";
import configs from "@/src/utils/config";
import { ConnectDB } from "./database/connection";

function run() {
  // ========================
  // Connect Database
  // ========================
  ConnectDB();
  app.listen(configs.port, () => {
    console.log(`User Service running on Port: ${configs.port}`);
  });
}

run();
