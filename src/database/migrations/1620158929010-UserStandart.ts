import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserStandart1620158929010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:'UserStandart',
          columns:[
            {
              name:'id',
              type:'uuid'
            },
            {
              name:'email',
              type:'varchar',
              isUnique:true
            },
            {
              name:'password',
              type:'varchar'
            },
            {
              name:'create_at',
              type:'timestamp',
              default:'now()'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("UserStandart")
    }

}
