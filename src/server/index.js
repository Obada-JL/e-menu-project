// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const path = require("path");
// const multer = require("multer");
// const projectController = require("./controllers/project-controller");

// const app = express();
// const url = process.env.MONGO_URL;

// // Multer configuration
// const diskStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log(file);
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     const ext = file.mimetype.split("/")[1];
//     const fileName = `project-${Date.now()}.${ext}`;
//     console.log("MIME type detected:", file.mimetype);
//     cb(null, fileName);
//   },
// });
// const fileFilter = (req, file, cb) => {
//   const imageType = file.mimetype.split("/")[0];
//   if (imageType === "image") {
//     return cb(null, true);
//   } else {
//     return cb(new Error("File must be an image"), false);
//   }
// };

// const upload = multer({ storage: diskStorage, fileFilter });
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Connect to MongoDB
// mongoose
//   .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("MongoDB connected successfully");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// app.use(cors());
// app.use(express.json());

// // Define routes
// app.get("/api/projects", projectController.getProjects);
// app.post(
//   "/api/addProject",
//   upload.single("picture"),
//   projectController.addProject
// );
// app.delete("/api/deleteProject/:id", projectController.deleteProject);
// app.put(
//   "/api/updateProject/:id",
//   upload.single("picture"),
//   projectController.updateProject
// ); // New PUT route
// // 404 handler
// app.all("*", (req, res) => {
//   res.status(404).json({ message: "Resource not found" });
// });

// // Start server
// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log("Listening on port " + port);
// });
