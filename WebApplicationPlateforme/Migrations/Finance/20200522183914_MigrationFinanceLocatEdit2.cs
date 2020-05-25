using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplicationPlateforme.Migrations.Finance
{
    public partial class MigrationFinanceLocatEdit2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_locataires_dotations_dotationId",
                table: "locataires");

            migrationBuilder.DropForeignKey(
                name: "FK_locataires_unites_uniteId",
                table: "locataires");

            migrationBuilder.DropIndex(
                name: "IX_locataires_dotationId",
                table: "locataires");

            migrationBuilder.DropIndex(
                name: "IX_locataires_uniteId",
                table: "locataires");

            migrationBuilder.DropColumn(
                name: "dotationId",
                table: "locataires");

            migrationBuilder.DropColumn(
                name: "dotationName",
                table: "locataires");

            migrationBuilder.DropColumn(
                name: "uniteId",
                table: "locataires");

            migrationBuilder.DropColumn(
                name: "uniteName",
                table: "locataires");

            migrationBuilder.AddColumn<string>(
                name: "dateenreg",
                table: "locataires",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dateenreg",
                table: "locataires");

            migrationBuilder.AddColumn<int>(
                name: "dotationId",
                table: "locataires",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "dotationName",
                table: "locataires",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "uniteId",
                table: "locataires",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "uniteName",
                table: "locataires",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_locataires_dotationId",
                table: "locataires",
                column: "dotationId");

            migrationBuilder.CreateIndex(
                name: "IX_locataires_uniteId",
                table: "locataires",
                column: "uniteId");

            migrationBuilder.AddForeignKey(
                name: "FK_locataires_dotations_dotationId",
                table: "locataires",
                column: "dotationId",
                principalTable: "dotations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_locataires_unites_uniteId",
                table: "locataires",
                column: "uniteId",
                principalTable: "unites",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
