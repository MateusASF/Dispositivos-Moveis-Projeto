interface IProductDelete {
    id: number
}

class DeleteProductService {
    async execute ({id}: IProductDelete) {
        console.log(id);
        var messageDelete = {
            message: "Registro excluido"
        }

        return messageDelete
    }
}

export { DeleteProductService };
