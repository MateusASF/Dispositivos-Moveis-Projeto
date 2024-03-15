interface ICategoryDelete {
    id: number
}

class DeleteCategoryService {
    async execute ({id}: ICategoryDelete) {
        console.log(id);
        var messageDelete = {
            message: "Registro excluido"
        }

        return messageDelete
    }
}

export { DeleteCategoryService };