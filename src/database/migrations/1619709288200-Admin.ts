import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Admin1619709288200 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable(
       new Table({
         name: 'UserAdmin',
         columns:[
           {
            name:'id',
            type:'uuid',
            isPrimary:true
            
           },
           {
            name:'email',
            type:'varchar',
            isUnique:true
           },
           {
             name:'password',
             type:'varchar',
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
    await queryRunner.dropTable("UserAdmin")
  }
}
