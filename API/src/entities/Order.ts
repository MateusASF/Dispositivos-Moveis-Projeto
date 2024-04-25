import {
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("orders")
class Order {
    @PrimaryColumn()
    readonly id!: string;

    @JoinColumn({ userId: 'user_id'})
    @ManyToMany(() => User, user => user.orderId)
    userId!: User;


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

export { Order };
