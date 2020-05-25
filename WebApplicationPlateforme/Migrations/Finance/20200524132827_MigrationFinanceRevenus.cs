using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace WebApplicationPlateforme.Migrations.Finance
{
    public partial class MigrationFinanceRevenus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_revenus_locataires_idlocataire",
                table: "revenus");

            migrationBuilder.DropIndex(
                name: "IX_revenus_idlocataire",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "dateRevenus",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "description",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "detailDepot",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "locataireName",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "prixService",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "prixpaye",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "serviceRevenus",
                table: "revenus");

            migrationBuilder.RenameColumn(
                name: "prixlocation",
                table: "revenus",
                newName: "prixLocation");

            migrationBuilder.RenameColumn(
                name: "idlocataire",
                table: "revenus",
                newName: "idLocataire");

            migrationBuilder.AddColumn<string>(
                name: "CreatorName",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "dateTemps",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "dateenreg",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "idUserCreator",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "iddotation",
                table: "revenus",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "idlocation",
                table: "revenus",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "idunite",
                table: "revenus",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "infoDepot",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "mois",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "nomDotation",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "nomLocataire",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "numRevenusUnite",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "prixServices",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "prixTot",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "prixTotale",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "prixTotaleLocation",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "restePrixService",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "restePrixTotale",
                table: "revenus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "restePrixTotaleLocation",
                table: "revenus",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "lesServices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nomServices = table.Column<string>(nullable: true),
                    prixService = table.Column<string>(nullable: true),
                    paye = table.Column<string>(nullable: true),
                    reste = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    idRevenus = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_lesServices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_lesServices_revenus_idRevenus",
                        column: x => x.idRevenus,
                        principalTable: "revenus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_revenus_idUserCreator",
                table: "revenus",
                column: "idUserCreator");

            migrationBuilder.CreateIndex(
                name: "IX_revenus_idlocation",
                table: "revenus",
                column: "idlocation");

            migrationBuilder.CreateIndex(
                name: "IX_lesServices_idRevenus",
                table: "lesServices",
                column: "idRevenus");

            migrationBuilder.AddForeignKey(
                name: "FK_revenus_AspNetUsers_idUserCreator",
                table: "revenus",
                column: "idUserCreator",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_revenus_locationUnites_idlocation",
                table: "revenus",
                column: "idlocation",
                principalTable: "locationUnites",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_revenus_AspNetUsers_idUserCreator",
                table: "revenus");

            migrationBuilder.DropForeignKey(
                name: "FK_revenus_locationUnites_idlocation",
                table: "revenus");

            migrationBuilder.DropTable(
                name: "lesServices");

            migrationBuilder.DropIndex(
                name: "IX_revenus_idUserCreator",
                table: "revenus");

            migrationBuilder.DropIndex(
                name: "IX_revenus_idlocation",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "CreatorName",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "dateTemps",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "dateenreg",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "idUserCreator",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "iddotation",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "idlocation",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "idunite",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "infoDepot",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "mois",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "nomDotation",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "nomLocataire",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "numRevenusUnite",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "prixServices",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "prixTot",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "prixTotale",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "prixTotaleLocation",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "restePrixService",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "restePrixTotale",
                table: "revenus");

            migrationBuilder.DropColumn(
                name: "restePrixTotaleLocation",
                table: "revenus");

            migrationBuilder.RenameColumn(
                name: "prixLocation",
                table: "revenus",
                newName: "prixlocation");

            migrationBuilder.RenameColumn(
                name: "idLocataire",
                table: "revenus",
                newName: "idlocataire");

            migrationBuilder.AddColumn<string>(
                name: "dateRevenus",
                table: "revenus",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "revenus",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "detailDepot",
                table: "revenus",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "locataireName",
                table: "revenus",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "prixService",
                table: "revenus",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "prixpaye",
                table: "revenus",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "serviceRevenus",
                table: "revenus",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_revenus_idlocataire",
                table: "revenus",
                column: "idlocataire");

            migrationBuilder.AddForeignKey(
                name: "FK_revenus_locataires_idlocataire",
                table: "revenus",
                column: "idlocataire",
                principalTable: "locataires",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
