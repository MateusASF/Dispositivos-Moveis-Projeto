interface ICategoryRequest {
    id:string;
    name: string;
  }
  class UpdateCategoryService {
    async execute({ id,name}: ICategoryRequest) {
      if (!id) {
        throw new Error("Id incorreto");
      }
      var vcategory = {
        id:id,
        name: name
      };
      return vcategory;
    }
  }
  export { UpdateCategoryService };
  