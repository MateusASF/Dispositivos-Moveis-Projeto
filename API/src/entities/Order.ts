import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Product } from "./Product";

@Entity("orders")
class Order {
    @PrimaryColumn()
    readonly id!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    userId!: User;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id'})
    productId!: Product
    
    @Column()
    quantity!: number;

    @Column()
    total!: number;

    @Column()
    discount!: number;

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
