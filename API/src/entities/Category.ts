import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./Product";
@Entity("categories")
class Category {
    @PrimaryColumn()
    readonly id!: string;
    @Column()
    name!: string;

    @OneToOne(() => Product, product => product.category)
    product!: Product; 

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

export { Category };
