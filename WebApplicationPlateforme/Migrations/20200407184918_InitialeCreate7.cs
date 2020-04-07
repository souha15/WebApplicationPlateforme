using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplicationPlateforme.Migrations
{
    public partial class InitialeCreate7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tache_AspNetUsers_IdUserAffected",
                table: "tache");

            migrationBuilder.DropIndex(
                name: "IX_tache_IdUserAffected",
                table: "tache");

            migrationBuilder.DropColumn(
                name: "IdUserAffected",
                table: "tache");

            migrationBuilder.CreateIndex(
                name: "IX_tache_IdUserCreator",
                table: "tache",
                column: "IdUserCreator");

            migrationBuilder.AddForeignKey(
                name: "FK_tache_AspNetUsers_IdUserCreator",
                table: "tache",
                column: "IdUserCreator",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tache_AspNetUsers_IdUserCreator",
                table: "tache");

            migrationBuilder.DropIndex(
                name: "IX_tache_IdUserCreator",
                table: "tache");

            migrationBuilder.AddColumn<string>(
                name: "IdUserAffected",
                table: "tache",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tache_IdUserAffected",
                table: "tache",
                column: "IdUserAffected");

            migrationBuilder.AddForeignKey(
                name: "FK_tache_AspNetUsers_IdUserAffected",
                table: "tache",
                column: "IdUserAffected",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
