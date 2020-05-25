using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplicationPlateforme.Migrations.Finance
{
    public partial class MigrationFinance52 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "iddotation",
                table: "locationUnites",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "nomdotation",
                table: "locationUnites",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_locationUnites_iddotation",
                table: "locationUnites",
                column: "iddotation");

            migrationBuilder.AddForeignKey(
                name: "FK_locationUnites_dotations_iddotation",
                table: "locationUnites",
                column: "iddotation",
                principalTable: "dotations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_locationUnites_dotations_iddotation",
                table: "locationUnites");

            migrationBuilder.DropIndex(
                name: "IX_locationUnites_iddotation",
                table: "locationUnites");

            migrationBuilder.DropColumn(
                name: "iddotation",
                table: "locationUnites");

            migrationBuilder.DropColumn(
                name: "nomdotation",
                table: "locationUnites");
        }
    }
}
