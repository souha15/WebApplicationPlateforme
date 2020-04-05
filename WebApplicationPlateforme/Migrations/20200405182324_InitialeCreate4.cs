using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplicationPlateforme.Migrations
{
    public partial class InitialeCreate4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "fullName",
                table: "AspNetUsers",
                newName: "FullName");

            migrationBuilder.AddColumn<string>(
                name: "Administration",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AutreIndemnite",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Classement",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DateNaissance",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DateQualification",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Degre",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Departement",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Emploi",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FaculteEcole",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FullNameEnglish",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HeureArrive",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HeureDepart",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Indemnite",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LieuNaissance",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Mention",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Nationalite",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Num",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Passeport",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Paysetude",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Photo",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Qualification",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Rang",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RegistreCivil",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Religion",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Salaire",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Sexe",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Specialite",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Statut",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Tel",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TypeEmploi",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TypeQualification",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TypeSang",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Unite",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "adresse",
                table: "AspNetUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Administration",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AutreIndemnite",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Classement",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DateNaissance",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DateQualification",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Degre",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Departement",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Emploi",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FaculteEcole",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FullNameEnglish",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "HeureArrive",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "HeureDepart",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Indemnite",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LieuNaissance",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Mention",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Nationalite",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Num",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Passeport",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Paysetude",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Photo",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Qualification",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Rang",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RegistreCivil",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Religion",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Salaire",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Sexe",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Specialite",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Statut",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Tel",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TypeEmploi",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TypeQualification",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TypeSang",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Unite",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "adresse",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "AspNetUsers",
                newName: "fullName");
        }
    }
}
