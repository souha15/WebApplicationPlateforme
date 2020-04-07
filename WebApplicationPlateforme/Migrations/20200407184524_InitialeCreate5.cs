using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace WebApplicationPlateforme.Migrations
{
    public partial class InitialeCreate5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Administration",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Departement",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "AffectedName",
                table: "tache",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatorName",
                table: "tache",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IdUserAffected",
                table: "tache",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IdUserCreator",
                table: "tache",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdTache",
                table: "commentaires",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "IdUser",
                table: "commentaires",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdAdministration",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdDepartement",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomAdministration",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomDepartement",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Administration",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nom = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    NomDirecteur = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Administration", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Departement",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nom = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    NomDirecteur = table.Column<string>(nullable: true),
                    NomAdministration = table.Column<string>(nullable: true),
                    IdAdministration = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departement", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Departement_Administration_IdAdministration",
                        column: x => x.IdAdministration,
                        principalTable: "Administration",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tache_IdUserAffected",
                table: "tache",
                column: "IdUserAffected");

            migrationBuilder.CreateIndex(
                name: "IX_commentaires_IdTache",
                table: "commentaires",
                column: "IdTache");

            migrationBuilder.CreateIndex(
                name: "IX_commentaires_IdUser",
                table: "commentaires",
                column: "IdUser");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_IdAdministration",
                table: "AspNetUsers",
                column: "IdAdministration");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_IdDepartement",
                table: "AspNetUsers",
                column: "IdDepartement");

            migrationBuilder.CreateIndex(
                name: "IX_Departement_IdAdministration",
                table: "Departement",
                column: "IdAdministration");

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
                name: "FK_commentaires_tache_IdTache",
                table: "commentaires",
                column: "IdTache",
                principalTable: "tache",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_commentaires_AspNetUsers_IdUser",
                table: "commentaires",
                column: "IdUser",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tache_AspNetUsers_IdUserAffected",
                table: "tache",
                column: "IdUserAffected",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Administration_IdAdministration",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Departement_IdDepartement",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_commentaires_tache_IdTache",
                table: "commentaires");

            migrationBuilder.DropForeignKey(
                name: "FK_commentaires_AspNetUsers_IdUser",
                table: "commentaires");

            migrationBuilder.DropForeignKey(
                name: "FK_tache_AspNetUsers_IdUserAffected",
                table: "tache");

            migrationBuilder.DropTable(
                name: "Departement");

            migrationBuilder.DropTable(
                name: "Administration");

            migrationBuilder.DropIndex(
                name: "IX_tache_IdUserAffected",
                table: "tache");

            migrationBuilder.DropIndex(
                name: "IX_commentaires_IdTache",
                table: "commentaires");

            migrationBuilder.DropIndex(
                name: "IX_commentaires_IdUser",
                table: "commentaires");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_IdAdministration",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_IdDepartement",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AffectedName",
                table: "tache");

            migrationBuilder.DropColumn(
                name: "CreatorName",
                table: "tache");

            migrationBuilder.DropColumn(
                name: "IdUserAffected",
                table: "tache");

            migrationBuilder.DropColumn(
                name: "IdUserCreator",
                table: "tache");

            migrationBuilder.DropColumn(
                name: "IdTache",
                table: "commentaires");

            migrationBuilder.DropColumn(
                name: "IdUser",
                table: "commentaires");

            migrationBuilder.DropColumn(
                name: "IdAdministration",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "IdDepartement",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "NomAdministration",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "NomDepartement",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "Administration",
                table: "AspNetUsers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Departement",
                table: "AspNetUsers",
                type: "text",
                nullable: true);
        }
    }
}
