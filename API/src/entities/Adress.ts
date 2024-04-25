import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("adresses")
class Adress {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    bairro!: string;

    @Column()
    cidade!: string;

    @Column()
    estado!: string;

    @OneToOne(() => User, user => user.adress)
    @JoinColumn({ name: 'user_id' })
    user!: User; 

    @CreateDateColumn()
    created_at!: Date;
    @UpdateDateColumn()
    updated_at!: Date;
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Adress };
