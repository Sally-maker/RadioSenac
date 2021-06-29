import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1624907083117 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:"Users",
          columns:[
            {
              name:"id",
              type:"uuid",
              isPrimary:true
            },
            {
              name:"name",
              type:"varchar",
            },
            {
              name:"email",
              type:"varchar"
            },
            {
              name:"password",
              type:"varchar"
            },
            {
              name:"admin",
              type:"boolean",
              default:false
            },
            {
              name:"created_at",
              type:"timestamp",
              default:"now()"
            },
            {
              name:"updated_at",
              type:"timestamp",
              default:"now()"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("Users")
    }

}
