using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplicationPlateforme.Migrations.Finance
{
    public partial class MigrationFinance2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_agenceImmobs_AspNetUsers_idUserCreator",
                table: "agenceImmobs");

            migrationBuilder.DropIndex(
                name: "IX_agenceImmobs_idUserCreator",
                table: "agenceImmobs");

            migrationBuilder.DropColumn(
                name: "CreatorName",
                table: "agenceImmobs");

            migrationBuilder.DropColumn(
                name: "idUserCreator",
                table: "agenceImmobs");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatorName",
                table: "agenceImmobs",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "idUserCreator",
                table: "agenceImmobs",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_agenceImmobs_idUserCreator",
                table: "agenceImmobs",
                column: "idUserCreator");

            migrationBuilder.AddForeignKey(
                name: "FK_agenceImmobs_AspNetUsers_idUserCreator",
                table: "agenceImmobs",
                column: "idUserCreator",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
