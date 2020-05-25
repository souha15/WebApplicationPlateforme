using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace WebApplicationPlateforme.Migrations.Finance
{
    public partial class MigrationFinance57 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "contratLocations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    path = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    idlocation = table.Column<int>(nullable: false),
                    locationUniteId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_contratLocations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_contratLocations_locationUnites_locationUniteId",
                        column: x => x.locationUniteId,
                        principalTable: "locationUnites",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_contratLocations_locationUniteId",
                table: "contratLocations",
                column: "locationUniteId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "contratLocations");
        }
    }
}
