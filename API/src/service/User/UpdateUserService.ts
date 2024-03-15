interface IUserRequest {
    id:string;    name: string;     email: string;
    admin?: boolean;     password: string;
  }
  class UpdateUserService {
    async execute({ id,name, email, admin = false, password }: IUserRequest) {
      if (!email) {
        throw new Error("Email incorreto");
      }
      var vuser = {
        id:id,
        name: name,
        email: email,
        admin: false,
        password: password,
      };
      return vuser;
    }
  }
  export { UpdateUserService };
  