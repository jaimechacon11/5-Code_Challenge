const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");

class ExplorerController {
    static getExplorers() {
        const explorers = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.getExplorers(explorers);
    }

    static getExplorersEmail() {
        const explorers = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.getExplorersEmail(explorers);
    }

    static getExplorersCredits() {
        const explorers = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.getExplorersCredits(explorers);
    }
}

module.exports = ExplorerController;
