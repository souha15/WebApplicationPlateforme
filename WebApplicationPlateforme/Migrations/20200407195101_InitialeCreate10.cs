using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace WebApplicationPlateforme.Migrations
{
    public partial class InitialeCreate10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Administration_IdAdministration",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Departement_IdDepartement",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Departement_Administration_IdAdministration",
                table: "Departement");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Departement",
                table: "Departement");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Administration",
                table: "Administration");

            migrationBuilder.RenameTable(
                name: "Departement",
                newName: "departements");

            migrationBuilder.RenameTable(
                name: "Administration",
                newName: "administrations");

            migrationBuilder.RenameIndex(
                name: "IX_Departement_IdAdministration",
                table: "departements",
                newName: "IX_departements_IdAdministration");

            migrationBuilder.AddPrimaryKey(
                name: "PK_departements",
                table: "departements",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_administrations",
                table: "administrations",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "evaluations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Description = table.Column<string>(nullable: true),
                    dateTime = table.Column<DateTime>(nullable: false),
                    Rating = table.Column<string>(nullable: true),
                    NomUserEvaluated = table.Column<string>(nullable: true),
                    IdTache = table.Column<int>(nullable: false),
                    IdUserEvaluating = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_evaluations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_evaluations_tache_IdTache",
                        column: x => x.IdTache,
                        principalTable: "tache",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_evaluations_AspNetUsers_IdUserEvaluating",
                        column: x => x.IdUserEvaluating,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "piecesJointes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Path = table.Column<string>(nullable: true),
                    dateTime = table.Column<DateTime>(nullable: false),
                    NomUser = table.Column<string>(nullable: true),
                    IdTache = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_piecesJointes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_piecesJointes_tache_IdTache",
                        column: x => x.IdTache,
                        principalTable: "tache",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_evaluations_IdTache",
                table: "evaluations",
                column: "IdTache");

            migrationBuilder.CreateIndex(
                name: "IX_evaluations_IdUserEvaluating",
                table: "evaluations",
                column: "IdUserEvaluating");

            migrationBuilder.CreateIndex(
                name: "IX_piecesJointes_IdTache",
                table: "piecesJointes",
                column: "IdTache");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_administrations_IdAdministration",
                table: "AspNetUsers",
                column: "IdAdministration",
                principalTable: "administrations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_departements_IdDepartement",
                table: "AspNetUsers",
                column: "IdDepartement",
                principalTable: "departements",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_departements_administrations_IdAdministration",
                table: "departements",
                column: "IdAdministration",
                principalTable: "administrations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_administrations_IdAdministration",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_departements_IdDepartement",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_departements_administrations_IdAdministration",
                table: "departements");

            migrationBuilder.DropTable(
                name: "evaluations");

            migrationBuilder.DropTable(
                name: "piecesJointes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_departements",
                table: "departements");

            migrationBuilder.DropPrimaryKey(
                name: "PK_administrations",
                table: "administrations");

            migrationBuilder.RenameTable(
                name: "departements",
                newName: "Departement");

            migrationBuilder.RenameTable(
                name: "administrations",
                newName: "Administration");

            migrationBuilder.RenameIndex(
                name: "IX_departements_IdAdministration",
                table: "Departement",
                newName: "IX_Departement_IdAdministration");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Departement",
                table: "Departement",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Administration",
                table: "Administration",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Administration_IdAdministration",
                table: "AspNetUsers",
                column: "IdAdministration",
                principalTable: "Administration",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Departement_IdDepartement",
                table: "AspNetUsers",
                column: "IdDepartement",
                principalTable: "Departement",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Departement_Administration_IdAdministration",
                table: "Departement",
                column: "IdAdministration",
                principalTable: "Administration",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
