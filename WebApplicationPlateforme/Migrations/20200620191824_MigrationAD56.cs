using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace WebApplicationPlateforme.Migrations
{
    public partial class MigrationAD56 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
        
            migrationBuilder.CreateTable(
                name: "trAffectations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    iduserAffected = table.Column<string>(nullable: true),
                    idUserQuiAffecte = table.Column<string>(nullable: true),
                    nomUserAffected = table.Column<string>(nullable: true),
                    nomUserQuiAffecte = table.Column<string>(nullable: true),
                    dateFin = table.Column<string>(nullable: true),
                    nbPj = table.Column<string>(nullable: true),
                    details = table.Column<string>(nullable: true),
                    action = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    idOrganisme = table.Column<int>(nullable: true),
                    nomOrganisme = table.Column<string>(nullable: true),
                    attribut1 = table.Column<int>(nullable: false),
                    attribut2 = table.Column<string>(nullable: true),
                    attribut3 = table.Column<string>(nullable: true),
                    attribut4 = table.Column<string>(nullable: true),
                    attribut5 = table.Column<string>(nullable: true),
                    attribut6 = table.Column<string>(nullable: true),
                    CreatorName = table.Column<string>(nullable: true),
                    idTransaction = table.Column<int>(nullable: false),
                    IdUserCreator = table.Column<string>(nullable: true),
                    datenereg = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_trAffectations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_trAffectations_AspNetUsers_IdUserCreator",
                        column: x => x.IdUserCreator,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_trAffectations_organismes_idOrganisme",
                        column: x => x.idOrganisme,
                        principalTable: "organismes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_trAffectations_transactions_idTransaction",
                        column: x => x.idTransaction,
                        principalTable: "transactions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

          


            migrationBuilder.CreateTable(
                name: "receptioncs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    date = table.Column<string>(nullable: true),
                    etat = table.Column<string>(nullable: true),
                    userName = table.Column<string>(nullable: true),
                    attribut1 = table.Column<int>(nullable: false),
                    attribut2 = table.Column<string>(nullable: true),
                    attribut3 = table.Column<string>(nullable: true),
                    attribut4 = table.Column<string>(nullable: true),
                    attribut5 = table.Column<string>(nullable: true),
                    idUser = table.Column<string>(nullable: true),
                    idTransaction = table.Column<int>(nullable: false),
                    idAffectation = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_receptioncs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_receptioncs_trAffectations_idAffectation",
                        column: x => x.idAffectation,
                        principalTable: "trAffectations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_receptioncs_transactions_idTransaction",
                        column: x => x.idTransaction,
                        principalTable: "transactions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_receptioncs_AspNetUsers_idUser",
                        column: x => x.idUser,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });


        

            migrationBuilder.CreateIndex(
                name: "IX_receptioncs_idAffectation",
                table: "receptioncs",
                column: "idAffectation");

            migrationBuilder.CreateIndex(
                name: "IX_receptioncs_idTransaction",
                table: "receptioncs",
                column: "idTransaction");

            migrationBuilder.CreateIndex(
                name: "IX_receptioncs_idUser",
                table: "receptioncs",
                column: "idUser");

       

            migrationBuilder.CreateIndex(
                name: "IX_trAffectations_IdUserCreator",
                table: "trAffectations",
                column: "IdUserCreator");

            migrationBuilder.CreateIndex(
                name: "IX_trAffectations_idOrganisme",
                table: "trAffectations",
                column: "idOrganisme");

            migrationBuilder.CreateIndex(
                name: "IX_trAffectations_idTransaction",
                table: "trAffectations",
                column: "idTransaction");

     
           
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "contratLocations");

            migrationBuilder.DropTable(
                name: "depotRevenus");

            migrationBuilder.DropTable(
                name: "etatDotations");

            migrationBuilder.DropTable(
                name: "etatUnites");

            migrationBuilder.DropTable(
                name: "lesServices");

            migrationBuilder.DropTable(
                name: "liaisons");

            migrationBuilder.DropTable(
                name: "piecesJointesAffecteds");

            migrationBuilder.DropTable(
                name: "piecesjointesLocataires");

            migrationBuilder.DropTable(
                name: "PiecesjointesRevenus");

            migrationBuilder.DropTable(
                name: "piecesJointesTrs");

            migrationBuilder.DropTable(
                name: "privileges");

            migrationBuilder.DropTable(
                name: "receptioncs");

            migrationBuilder.DropTable(
                name: "servicesRevenus");

            migrationBuilder.DropTable(
                name: "typeDotations");

            migrationBuilder.DropTable(
                name: "typeUnites");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "revenus");

            migrationBuilder.DropTable(
                name: "trAffectations");

            migrationBuilder.DropTable(
                name: "locationUnites");

            migrationBuilder.DropTable(
                name: "transactions");

            migrationBuilder.DropTable(
                name: "locataires");

            migrationBuilder.DropTable(
                name: "unites");

            migrationBuilder.DropTable(
                name: "organismes");

            migrationBuilder.DropTable(
                name: "proprietaires");

            migrationBuilder.DropTable(
                name: "dotations");

            migrationBuilder.DropTable(
                name: "agenceImmobs");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Departement");

            migrationBuilder.DropTable(
                name: "Administration");
        }
    }
}
