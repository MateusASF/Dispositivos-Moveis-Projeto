import {MigrationInterface, QueryRunner} from "typeorm";

export class allmigrations1714085818793 implements MigrationInterface {
    name = 'allmigrations1714085818793'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `categories` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `products` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `price` int NOT NULL, `description` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `category_id` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `orders` (`id` varchar(255) NOT NULL, `quantity` int NOT NULL, `total` int NOT NULL, `discount` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `user_id` varchar(255) NULL, `product_id` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `cpf` varchar(255) NOT NULL, `admin` tinyint NOT NULL, `password` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `adress_id` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `adress` (`id` varchar(255) NOT NULL, `bairro` varchar(255) NOT NULL, `cidade` varchar(255) NOT NULL, `estado` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_9a5f6868c96e0069e699f33e124` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `FK_a922b820eeef29ac1c6800e826a` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `FK_ac832121b6c331b084ecc4121fd` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_27813d4220c6b7ecb73284dcbf4` FOREIGN KEY (`adress_id`) REFERENCES `adress`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_27813d4220c6b7ecb73284dcbf4`");
        await queryRunner.query("ALTER TABLE `orders` DROP FOREIGN KEY `FK_ac832121b6c331b084ecc4121fd`");
        await queryRunner.query("ALTER TABLE `orders` DROP FOREIGN KEY `FK_a922b820eeef29ac1c6800e826a`");
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_9a5f6868c96e0069e699f33e124`");
        await queryRunner.query("DROP TABLE `adress`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `orders`");
        await queryRunner.query("DROP TABLE `products`");
        await queryRunner.query("DROP TABLE `categories`");
    }

}
