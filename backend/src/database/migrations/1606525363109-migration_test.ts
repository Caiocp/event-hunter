import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationTest1606525363109 implements MigrationInterface {
    name = 'migrationTest1606525363109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password_hash" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "users_events_events" ("usersId" integer NOT NULL, "eventsId" integer NOT NULL, PRIMARY KEY ("usersId", "eventsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_69c36e37cc204a47b3dc10bc64" ON "users_events_events" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_314492c77201b36acb7feb4949" ON "users_events_events" ("eventsId") `);
        await queryRunner.query(`CREATE TABLE "temporary_events" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "address" varchar NOT NULL, "date" varchar NOT NULL, "time" varchar NOT NULL, "value" varchar NOT NULL, "likes_amount" integer NOT NULL DEFAULT (0), "banner" varchar NOT NULL, "latitude" varchar NOT NULL, "longitude" varchar NOT NULL, "active" boolean NOT NULL DEFAULT (1))`);
        await queryRunner.query(`INSERT INTO "temporary_events"("id", "name", "description", "address", "date", "time", "value", "likes_amount", "banner", "latitude", "longitude", "active") SELECT "id", "name", "description", "address", "date", "time", "value", "likes_amount", "banner", "latitude", "longitude", "active" FROM "events"`);
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(`ALTER TABLE "temporary_events" RENAME TO "events"`);
        await queryRunner.query(`DROP INDEX "IDX_69c36e37cc204a47b3dc10bc64"`);
        await queryRunner.query(`DROP INDEX "IDX_314492c77201b36acb7feb4949"`);
        await queryRunner.query(`CREATE TABLE "temporary_users_events_events" ("usersId" integer NOT NULL, "eventsId" integer NOT NULL, CONSTRAINT "FK_69c36e37cc204a47b3dc10bc64c" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_314492c77201b36acb7feb4949a" FOREIGN KEY ("eventsId") REFERENCES "events" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("usersId", "eventsId"))`);
        await queryRunner.query(`INSERT INTO "temporary_users_events_events"("usersId", "eventsId") SELECT "usersId", "eventsId" FROM "users_events_events"`);
        await queryRunner.query(`DROP TABLE "users_events_events"`);
        await queryRunner.query(`ALTER TABLE "temporary_users_events_events" RENAME TO "users_events_events"`);
        await queryRunner.query(`CREATE INDEX "IDX_69c36e37cc204a47b3dc10bc64" ON "users_events_events" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_314492c77201b36acb7feb4949" ON "users_events_events" ("eventsId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_314492c77201b36acb7feb4949"`);
        await queryRunner.query(`DROP INDEX "IDX_69c36e37cc204a47b3dc10bc64"`);
        await queryRunner.query(`ALTER TABLE "users_events_events" RENAME TO "temporary_users_events_events"`);
        await queryRunner.query(`CREATE TABLE "users_events_events" ("usersId" integer NOT NULL, "eventsId" integer NOT NULL, PRIMARY KEY ("usersId", "eventsId"))`);
        await queryRunner.query(`INSERT INTO "users_events_events"("usersId", "eventsId") SELECT "usersId", "eventsId" FROM "temporary_users_events_events"`);
        await queryRunner.query(`DROP TABLE "temporary_users_events_events"`);
        await queryRunner.query(`CREATE INDEX "IDX_314492c77201b36acb7feb4949" ON "users_events_events" ("eventsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_69c36e37cc204a47b3dc10bc64" ON "users_events_events" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "events" RENAME TO "temporary_events"`);
        await queryRunner.query(`CREATE TABLE "events" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" text NOT NULL, "address" varchar NOT NULL, "date" varchar NOT NULL, "time" varchar NOT NULL, "value" varchar NOT NULL, "likes_amount" integer NOT NULL DEFAULT (0), "banner" varchar NOT NULL, "latitude" decimal(2,10) NOT NULL, "longitude" decimal(2,10) NOT NULL, "active" boolean NOT NULL DEFAULT (true))`);
        await queryRunner.query(`INSERT INTO "events"("id", "name", "description", "address", "date", "time", "value", "likes_amount", "banner", "latitude", "longitude", "active") SELECT "id", "name", "description", "address", "date", "time", "value", "likes_amount", "banner", "latitude", "longitude", "active" FROM "temporary_events"`);
        await queryRunner.query(`DROP TABLE "temporary_events"`);
        await queryRunner.query(`DROP INDEX "IDX_314492c77201b36acb7feb4949"`);
        await queryRunner.query(`DROP INDEX "IDX_69c36e37cc204a47b3dc10bc64"`);
        await queryRunner.query(`DROP TABLE "users_events_events"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
