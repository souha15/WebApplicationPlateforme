using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplicationPlateforme.Migrations
{
    public partial class MigrationPrivileges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "privileges",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    settings = table.Column<int>(nullable: false),
                    addTask = table.Column<int>(nullable: false),
                    Rapport = table.Column<int>(nullable: false),
                    commAd = table.Column<int>(nullable: false),
                    appel = table.Column<int>(nullable: false),
                    serviceEmployee = table.Column<int>(nullable: false),
                    salaire = table.Column<int>(nullable: false),
                    performance = table.Column<int>(nullable: false),
                    userId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_privileges", x => x.Id);
                    table.ForeignKey(
                        name: "FK_privileges_AspNetUsers_userId",
                        column: x => x.userId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_privileges_userId",
                table: "privileges",
                column: "userId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "privileges");
        }
    }
}
