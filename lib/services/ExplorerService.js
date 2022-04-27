class ExplorerService {
    static getExplorers(explorers) {
        const explorersInNode = explorers;
        return explorersInNode;
    }

    static getExplorersEmail(explorers) {
        const explorersInNode = explorers.filter(
            (explorer) => explorer.haveCertification === true
        );
        return explorersInNode;
    }

    static getExplorersCredits(explorers) {
        const explorersInNode = explorers.filter(
            (explorer) => explorer.credits > 500
        );
        return explorersInNode;
    }
}

module.exports = ExplorerService;
