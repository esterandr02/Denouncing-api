import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateComplaintEntity1598881658112
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'complaints',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'whistleblower_id',
                        type: 'varchar',
                    },
                    {
                        name: 'latitude',
                        type: 'varchar',
                    },
                    {
                        name: 'longitude',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('complaints');
    }
}
