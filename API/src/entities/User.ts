import { on } from "process";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Adress } from "./Adress";
import { Order } from "./Order";
@Entity("users")
class User {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    cpf!: string;

    @Column()
    admin!: boolean;

    @Column()
    password!: string;

    @ManyToOne(() => Adress)
    @JoinColumn({ name: 'adress_id' })
    adress!: Adress;

    @OneToOne(() => Order, order => order.userId)
    orderId!: Order;

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

export { User };
