using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace WebApplicationPlateforme.Migrations.Finance
{
    public partial class MigrationFinance1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
          /*  migrationBuilder.CreateTable(
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
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });
                */
            migrationBuilder.CreateTable(
                name: "depotRevenus",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nom = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_depotRevenus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "etatDotations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nom = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_etatDotations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "etatUnites",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nom = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_etatUnites", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "servicesRevenus",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nom = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    prix = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_servicesRevenus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "typeDotations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nom = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_typeDotations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "typeUnites",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nom = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_typeUnites", x => x.Id);
                });

            /*migrationBuilder.CreateTable(
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
                });*/

          /*  migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    RegistreCivil = table.Column<string>(nullable: true),
                    FullNameEnglish = table.Column<string>(nullable: true),
                    FullName = table.Column<string>(nullable: true),
                    adresse = table.Column<string>(nullable: true),
                    Tel = table.Column<string>(nullable: true),
                    Statut = table.Column<string>(nullable: true),
                    Nationalite = table.Column<string>(nullable: true),
                    Religion = table.Column<string>(nullable: true),
                    Sexe = table.Column<string>(nullable: true),
                    DateNaissance = table.Column<string>(nullable: true),
                    LieuNaissance = table.Column<string>(nullable: true),
                    Passeport = table.Column<string>(nullable: true),
                    TypeSang = table.Column<string>(nullable: true),
                    Num = table.Column<string>(nullable: true),
                    Emploi = table.Column<string>(nullable: true),
                    Rang = table.Column<string>(nullable: true),
                    TypeEmploi = table.Column<string>(nullable: true),
                    NomAdministration = table.Column<string>(nullable: true),
                    NomDepartement = table.Column<string>(nullable: true),
                    Unite = table.Column<string>(nullable: true),
                    Qualification = table.Column<string>(nullable: true),
                    TypeQualification = table.Column<string>(nullable: true),
                    FaculteEcole = table.Column<string>(nullable: true),
                    DateQualification = table.Column<string>(nullable: true),
                    Specialite = table.Column<string>(nullable: true),
                    Paysetude = table.Column<string>(nullable: true),
                    Mention = table.Column<string>(nullable: true),
                    Classement = table.Column<string>(nullable: true),
                    Degre = table.Column<string>(nullable: true),
                    Salaire = table.Column<string>(nullable: true),
                    Indemnite = table.Column<string>(nullable: true),
                    AutreIndemnite = table.Column<string>(nullable: true),
                    HeureArrive = table.Column<string>(nullable: true),
                    HeureDepart = table.Column<string>(nullable: true),
                    Photo = table.Column<string>(nullable: true),
                    IdAdministration = table.Column<int>(nullable: true),
                    IdDepartement = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_Administration_IdAdministration",
                        column: x => x.IdAdministration,
                        principalTable: "Administration",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_Departement_IdDepartement",
                        column: x => x.IdDepartement,
                        principalTable: "Departement",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });
                */
            migrationBuilder.CreateTable(
                name: "agenceImmobs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nom = table.Column<string>(nullable: true),
                    nomResponsable = table.Column<string>(nullable: true),
                    tel = table.Column<string>(nullable: true),
                    fax = table.Column<string>(nullable: true),
                    phoneNumber = table.Column<string>(nullable: true),
                    adresse = table.Column<string>(nullable: true),
                    ville = table.Column<string>(nullable: true),
                    dateenreg = table.Column<string>(nullable: true),
                    CreatorName = table.Column<string>(nullable: true),
                    idUserCreator = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_agenceImmobs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_agenceImmobs_AspNetUsers_idUserCreator",
                        column: x => x.idUserCreator,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

           /* migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
*/
          /*  migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
                */
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
                    userid = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_privileges", x => x.Id);
                    table.ForeignKey(
                        name: "FK_privileges_AspNetUsers_userid",
                        column: x => x.userid,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "dotations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nom = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    etat = table.Column<string>(nullable: true),
                    adresse = table.Column<string>(nullable: true),
                    nbunite = table.Column<string>(nullable: true),
                    compteurElec = table.Column<string>(nullable: true),
                    numCompteur = table.Column<string>(nullable: true),
                    officeImmobiler = table.Column<string>(nullable: true),
                    comptable = table.Column<string>(nullable: true),
                    attribut1 = table.Column<int>(nullable: false),
                    attribut2 = table.Column<string>(nullable: true),
                    attribut3 = table.Column<string>(nullable: true),
                    attribue4 = table.Column<string>(nullable: true),
                    dateenreg = table.Column<string>(nullable: true),
                    CreatorName = table.Column<string>(nullable: true),
                    idUserCreator = table.Column<string>(nullable: true),
                    idAgence = table.Column<int>(nullable: false),
                    AgenceImmobId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dotations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_dotations_agenceImmobs_AgenceImmobId",
                        column: x => x.AgenceImmobId,
                        principalTable: "agenceImmobs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_dotations_AspNetUsers_idUserCreator",
                        column: x => x.idUserCreator,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "unites",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    numRevenus = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    etat = table.Column<string>(nullable: true),
                    chambre = table.Column<string>(nullable: true),
                    wc = table.Column<string>(nullable: true),
                    cuisine = table.Column<string>(nullable: true),
                    bureau = table.Column<string>(nullable: true),
                    prix = table.Column<string>(nullable: true),
                    salon = table.Column<string>(nullable: true),
                    compteurElc = table.Column<string>(nullable: true),
                    compteureau = table.Column<string>(nullable: true),
                    attribut1 = table.Column<int>(nullable: false),
                    attribut2 = table.Column<string>(nullable: true),
                    attribut3 = table.Column<string>(nullable: true),
                    attribue4 = table.Column<string>(nullable: true),
                    dotationName = table.Column<string>(nullable: true),
                    idDotation = table.Column<int>(nullable: false),
                    dateenreg = table.Column<string>(nullable: true),
                    CreatorName = table.Column<string>(nullable: true),
                    idUserCreator = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_unites", x => x.Id);
                    table.ForeignKey(
                        name: "FK_unites_dotations_idDotation",
                        column: x => x.idDotation,
                        principalTable: "dotations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_unites_AspNetUsers_idUserCreator",
                        column: x => x.idUserCreator,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "locataires",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nom = table.Column<string>(nullable: true),
                    cin = table.Column<string>(nullable: true),
                    profession = table.Column<string>(nullable: true),
                    adresse = table.Column<string>(nullable: true),
                    nationnalite = table.Column<string>(nullable: true),
                    tel = table.Column<string>(nullable: true),
                    attribut1 = table.Column<int>(nullable: false),
                    attribut2 = table.Column<string>(nullable: true),
                    attribut3 = table.Column<string>(nullable: true),
                    attribue4 = table.Column<string>(nullable: true),
                    dotationName = table.Column<string>(nullable: true),
                    uniteName = table.Column<string>(nullable: true),
                    idDotation = table.Column<int>(nullable: false),
                    idunite = table.Column<int>(nullable: false),
                    CreatorName = table.Column<string>(nullable: true),
                    idUserCreator = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_locataires", x => x.Id);
                    table.ForeignKey(
                        name: "FK_locataires_dotations_idDotation",
                        column: x => x.idDotation,
                        principalTable: "dotations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_locataires_AspNetUsers_idUserCreator",
                        column: x => x.idUserCreator,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_locataires_unites_idunite",
                        column: x => x.idunite,
                        principalTable: "unites",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "locationUnites",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    numcontrat = table.Column<string>(nullable: true),
                    prixlocationmois = table.Column<string>(nullable: true),
                    datedebutcontrat = table.Column<string>(nullable: true),
                    delaicontrat = table.Column<string>(nullable: true),
                    moisdelocation = table.Column<string>(nullable: true),
                    locataireName = table.Column<string>(nullable: true),
                    idlocataire = table.Column<int>(nullable: false),
                    idunite = table.Column<int>(nullable: false),
                    nomunite = table.Column<string>(nullable: true),
                    CreatorName = table.Column<string>(nullable: true),
                    idUserCreator = table.Column<string>(nullable: true),
                    dateenreg = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_locationUnites", x => x.Id);
                    table.ForeignKey(
                        name: "FK_locationUnites_AspNetUsers_idUserCreator",
                        column: x => x.idUserCreator,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_locationUnites_locataires_idlocataire",
                        column: x => x.idlocataire,
                        principalTable: "locataires",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_locationUnites_unites_idunite",
                        column: x => x.idunite,
                        principalTable: "unites",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "piecesjointesLocataires",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    path = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    nomLocataire = table.Column<string>(nullable: true),
                    idlocataire = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_piecesjointesLocataires", x => x.Id);
                    table.ForeignKey(
                        name: "FK_piecesjointesLocataires_locataires_idlocataire",
                        column: x => x.idlocataire,
                        principalTable: "locataires",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "revenus",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    prixlocation = table.Column<string>(nullable: true),
                    prixpaye = table.Column<string>(nullable: true),
                    serviceRevenus = table.Column<string>(nullable: true),
                    prixService = table.Column<string>(nullable: true),
                    detailDepot = table.Column<string>(nullable: true),
                    dateRevenus = table.Column<string>(nullable: true),
                    deposant = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    attribut1 = table.Column<int>(nullable: false),
                    attribut2 = table.Column<string>(nullable: true),
                    attribut3 = table.Column<string>(nullable: true),
                    attribue4 = table.Column<string>(nullable: true),
                    locataireName = table.Column<string>(nullable: true),
                    idlocataire = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_revenus", x => x.Id);
                    table.ForeignKey(
                        name: "FK_revenus_locataires_idlocataire",
                        column: x => x.idlocataire,
                        principalTable: "locataires",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PiecesjointesRevenus",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    path = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    idrevenus = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PiecesjointesRevenus", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PiecesjointesRevenus_revenus_idrevenus",
                        column: x => x.idrevenus,
                        principalTable: "revenus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_agenceImmobs_idUserCreator",
                table: "agenceImmobs",
                column: "idUserCreator");

          /*  migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

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
*/
            migrationBuilder.CreateIndex(
                name: "IX_dotations_AgenceImmobId",
                table: "dotations",
                column: "AgenceImmobId");

            migrationBuilder.CreateIndex(
                name: "IX_dotations_idUserCreator",
                table: "dotations",
                column: "idUserCreator");

            migrationBuilder.CreateIndex(
                name: "IX_locataires_idDotation",
                table: "locataires",
                column: "idDotation");

            migrationBuilder.CreateIndex(
                name: "IX_locataires_idUserCreator",
                table: "locataires",
                column: "idUserCreator");

            migrationBuilder.CreateIndex(
                name: "IX_locataires_idunite",
                table: "locataires",
                column: "idunite");

            migrationBuilder.CreateIndex(
                name: "IX_locationUnites_idUserCreator",
                table: "locationUnites",
                column: "idUserCreator");

            migrationBuilder.CreateIndex(
                name: "IX_locationUnites_idlocataire",
                table: "locationUnites",
                column: "idlocataire");

            migrationBuilder.CreateIndex(
                name: "IX_locationUnites_idunite",
                table: "locationUnites",
                column: "idunite");

            migrationBuilder.CreateIndex(
                name: "IX_piecesjointesLocataires_idlocataire",
                table: "piecesjointesLocataires",
                column: "idlocataire");

            migrationBuilder.CreateIndex(
                name: "IX_PiecesjointesRevenus_idrevenus",
                table: "PiecesjointesRevenus",
                column: "idrevenus");

            migrationBuilder.CreateIndex(
                name: "IX_privileges_userid",
                table: "privileges",
                column: "userid");

            migrationBuilder.CreateIndex(
                name: "IX_revenus_idlocataire",
                table: "revenus",
                column: "idlocataire");

            migrationBuilder.CreateIndex(
                name: "IX_unites_idDotation",
                table: "unites",
                column: "idDotation");

            migrationBuilder.CreateIndex(
                name: "IX_unites_idUserCreator",
                table: "unites",
                column: "idUserCreator");
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
                name: "depotRevenus");

            migrationBuilder.DropTable(
                name: "etatDotations");

            migrationBuilder.DropTable(
                name: "etatUnites");

            migrationBuilder.DropTable(
                name: "locationUnites");

            migrationBuilder.DropTable(
                name: "piecesjointesLocataires");

            migrationBuilder.DropTable(
                name: "PiecesjointesRevenus");

            migrationBuilder.DropTable(
                name: "privileges");

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
                name: "locataires");

            migrationBuilder.DropTable(
                name: "unites");

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
