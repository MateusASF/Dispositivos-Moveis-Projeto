class ListCategoryService {
    async execute() {
        const categories = [
            {
                name: "Fabio",
                id: 1,
            },
            {
                name: "Marcio",
                id: 2,
            }
        ];
        return categories;
    }
}
export { ListCategoryService };
