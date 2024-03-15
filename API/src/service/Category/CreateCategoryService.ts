interface CreateCategoryDTO {
    name: string;
    id: number;
}

class CreateCategoryService {
    public async execute({name, id}: CreateCategoryDTO) {
        if (!id){
            throw new Error ("Id ta faltando");
        }
        var vcategory = {
            name: name,
            id: id
        };
        return vcategory
    }
}

export { CreateCategoryService };