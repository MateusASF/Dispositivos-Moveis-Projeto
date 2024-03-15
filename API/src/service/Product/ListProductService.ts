class ListProductService {
    async execute() {
        const products = [
            {
                name: "Produto 1",
                description: "Descrição do produto 1",
                price: 10.00,
                id: 1,
                category: "Categoria 1"
            },
            {
                name: "Produto 2",
                description: "Descrição do produto 2",
                price: 20.00,
                id: 2,
                category: "Categoria 2"
            }
        ];
        return products;
    }
}
export { ListProductService };
