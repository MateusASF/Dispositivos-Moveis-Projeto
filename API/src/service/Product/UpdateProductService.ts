interface IProductRequest {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  }

  class UpdateProductService {
    async execute({ id,name, price, description, category }: IProductRequest) {
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
  export { UpdateProductService };
  