interface IUserDelete {
    id: number
}

class DeleteUserService {
    async execute ({id}: IUserDelete) {
        console.log(id);
        var messageDelete = {
            message: "Registro excluido"
        }

        return messageDelete
    }
}

export { DeleteUserService };