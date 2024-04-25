import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Double,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";
@Entity("products")
class Product {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
    price!: number;

    @Column()
    description!: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: 'category_id' })
    category!: Category;

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

export { Product };
