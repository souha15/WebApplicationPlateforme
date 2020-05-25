using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplicationPlateforme.Migrations.Finance
{
    public partial class MigrationFinanceLocatEdit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_locataires_dotations_idDotation",
                table: "locataires");

            migrationBuilder.DropForeignKey(
                name: "FK_locataires_unites_idunite",
                table: "locataires");

            migrationBuilder.DropIndex(
                name: "IX_locataires_idDotation",
                table: "locataires");

            migrationBuilder.DropIndex(
                name: "IX_locataires_idunite",
                table: "locataires");

            migrationBuilder.DropColumn(
                name: "idDotation",
                table: "locataires");

            migrationBuilder.DropColumn(
                name: "idunite",
                table: "locataires");

            migrationBuilder.AddColumn<int>(
                name: "dotationId",
                table: "locataires",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "uniteId",
                table: "locataires",
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

        protected override void Down(MigrationBuilder migrationBuilder)
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
                name: "uniteId",
                table: "locataires");

            migrationBuilder.AddColumn<int>(
                name: "idDotation",
                table: "locataires",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "idunite",
                table: "locataires",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_locataires_idDotation",
                table: "locataires",
                column: "idDotation");

            migrationBuilder.CreateIndex(
                name: "IX_locataires_idunite",
                table: "locataires",
                column: "idunite");

            migrationBuilder.AddForeignKey(
                name: "FK_locataires_dotations_idDotation",
                table: "locataires",
                column: "idDotation",
                principalTable: "dotations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_locataires_unites_idunite",
                table: "locataires",
                column: "idunite",
                principalTable: "unites",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
