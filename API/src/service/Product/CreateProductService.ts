interface CreateProductDTO {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}

class CreateProductService {
    public async execute({id, name, price, description, category}: CreateProductDTO) {
        if (!category){
            throw new Error ("Categoria ta faltando");
        }
        var vproduct = {
            name: name,
            price: price,
            description: description,
            category: category,
            id: id
        };
        return vproduct
    }
}

export { CreateProductService };
