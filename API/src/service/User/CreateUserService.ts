interface CreateUserDTO {
    name: string;
    email: string;
    admin: boolean;
    password: string;
}

class CreateUserService {
    public async execute({name, email, admin = false, password}: CreateUserDTO) {
        if (!email){
            throw new Error ("Email ta faltando");
        }
        var vuser = {
            name: name,
            email: email,
            admin: false,
            password: password
        };
        return vuser
    }
}

export { CreateUserService };