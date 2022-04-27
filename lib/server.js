const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/partners", (request, response) => {
    const explorersInMission = ExplorerController.getExplorers ();
    response.json (explorersInMission);
});

app.get("/v1/partners/certification", (request, response) => {
    const explorersAmountInMission = ExplorerController.getExplorersEmail();
    response.json(explorersAmountInMission);
});

app.get("/v1/partners/credits", (request, response) => {
    const explorersCredits = ExplorerController.getExplorersCredits();
    response.json(explorersCredits);
});

