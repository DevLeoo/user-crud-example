import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRefactoring1633177717622 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "contact" TO "telephone"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "telephone" TO "contact"`,
    );
  }
}
