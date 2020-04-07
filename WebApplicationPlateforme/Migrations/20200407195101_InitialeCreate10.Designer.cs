﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using WebApplicationPlateforme.Data;

namespace WebApplicationPlateforme.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20200407195101_InitialeCreate10")]
    partial class InitialeCreate10
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("character varying(256)")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasColumnType("character varying(256)")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("integer");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasColumnType("character varying(256)")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("boolean");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("boolean");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("character varying(256)")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("character varying(256)")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("boolean");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("text");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("boolean");

                    b.Property<string>("UserName")
                        .HasColumnType("character varying(256)")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");

                    b.HasDiscriminator<string>("Discriminator").HasValue("IdentityUser");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("text");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .HasColumnType("text");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Global.Administration", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Nom")
                        .HasColumnType("text");

                    b.Property<string>("NomDirecteur")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("administrations");
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Global.Departement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int>("IdAdministration")
                        .HasColumnType("integer");

                    b.Property<string>("Nom")
                        .HasColumnType("text");

                    b.Property<string>("NomAdministration")
                        .HasColumnType("text");

                    b.Property<string>("NomDirecteur")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("IdAdministration");

                    b.ToTable("departements");
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Taches.Commentaire", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("IdTache")
                        .HasColumnType("integer");

                    b.Property<string>("IdUser")
                        .HasColumnType("text");

                    b.Property<string>("NomUser")
                        .HasColumnType("text");

                    b.Property<string>("TextCommentaire")
                        .HasColumnType("text");

                    b.Property<DateTime>("dateTime")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id");

                    b.HasIndex("IdTache");

                    b.HasIndex("IdUser");

                    b.ToTable("commentaires");
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Taches.Evaluation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int>("IdTache")
                        .HasColumnType("integer");

                    b.Property<string>("IdUserEvaluating")
                        .HasColumnType("text");

                    b.Property<string>("NomUserEvaluated")
                        .HasColumnType("text");

                    b.Property<string>("Rating")
                        .HasColumnType("text");

                    b.Property<DateTime>("dateTime")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id");

                    b.HasIndex("IdTache");

                    b.HasIndex("IdUserEvaluating");

                    b.ToTable("evaluations");
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Taches.PiecesJointes", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("IdTache")
                        .HasColumnType("integer");

                    b.Property<string>("NomUser")
                        .HasColumnType("text");

                    b.Property<string>("Path")
                        .HasColumnType("text");

                    b.Property<DateTime>("dateTime")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id");

                    b.HasIndex("IdTache");

                    b.ToTable("piecesJointes");
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Taches.Tache", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("AffectedName")
                        .HasColumnType("text");

                    b.Property<string>("Atous")
                        .HasColumnType("text");

                    b.Property<string>("Attribut1")
                        .HasColumnType("text");

                    b.Property<string>("Attribut2")
                        .HasColumnType("text");

                    b.Property<string>("Attribut3")
                        .HasColumnType("text");

                    b.Property<int>("Attribut4")
                        .HasColumnType("integer");

                    b.Property<string>("Createur")
                        .HasColumnType("text");

                    b.Property<string>("CreatorName")
                        .HasColumnType("text");

                    b.Property<string>("Delai")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Etat")
                        .HasColumnType("text");

                    b.Property<string>("IdUserCreator")
                        .HasColumnType("text");

                    b.Property<string>("Priorite")
                        .HasColumnType("text");

                    b.Property<string>("SousProjet")
                        .HasColumnType("text");

                    b.Property<string>("TacheNom")
                        .HasColumnType("text");

                    b.Property<string>("date")
                        .HasColumnType("text");

                    b.Property<string>("type")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("IdUserCreator");

                    b.ToTable("tache");
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.User.ApplicationUser", b =>
                {
                    b.HasBaseType("Microsoft.AspNetCore.Identity.IdentityUser");

                    b.Property<string>("AutreIndemnite")
                        .HasColumnType("text");

                    b.Property<string>("Classement")
                        .HasColumnType("text");

                    b.Property<string>("DateNaissance")
                        .HasColumnType("text");

                    b.Property<string>("DateQualification")
                        .HasColumnType("text");

                    b.Property<string>("Degre")
                        .HasColumnType("text");

                    b.Property<string>("Emploi")
                        .HasColumnType("text");

                    b.Property<string>("FaculteEcole")
                        .HasColumnType("text");

                    b.Property<string>("FullName")
                        .HasColumnType("text");

                    b.Property<string>("FullNameEnglish")
                        .HasColumnType("text");

                    b.Property<string>("HeureArrive")
                        .HasColumnType("text");

                    b.Property<string>("HeureDepart")
                        .HasColumnType("text");

                    b.Property<int?>("IdAdministration")
                        .HasColumnType("integer");

                    b.Property<int?>("IdDepartement")
                        .HasColumnType("integer");

                    b.Property<string>("Indemnite")
                        .HasColumnType("text");

                    b.Property<string>("LieuNaissance")
                        .HasColumnType("text");

                    b.Property<string>("Mention")
                        .HasColumnType("text");

                    b.Property<string>("Nationalite")
                        .HasColumnType("text");

                    b.Property<string>("NomAdministration")
                        .HasColumnType("text");

                    b.Property<string>("NomDepartement")
                        .HasColumnType("text");

                    b.Property<string>("Num")
                        .HasColumnType("text");

                    b.Property<string>("Passeport")
                        .HasColumnType("text");

                    b.Property<string>("Paysetude")
                        .HasColumnType("text");

                    b.Property<string>("Photo")
                        .HasColumnType("text");

                    b.Property<string>("Qualification")
                        .HasColumnType("text");

                    b.Property<string>("Rang")
                        .HasColumnType("text");

                    b.Property<string>("RegistreCivil")
                        .HasColumnType("text");

                    b.Property<string>("Religion")
                        .HasColumnType("text");

                    b.Property<string>("Salaire")
                        .HasColumnType("text");

                    b.Property<string>("Sexe")
                        .HasColumnType("text");

                    b.Property<string>("Specialite")
                        .HasColumnType("text");

                    b.Property<string>("Statut")
                        .HasColumnType("text");

                    b.Property<string>("Tel")
                        .HasColumnType("text");

                    b.Property<string>("TypeEmploi")
                        .HasColumnType("text");

                    b.Property<string>("TypeQualification")
                        .HasColumnType("text");

                    b.Property<string>("TypeSang")
                        .HasColumnType("text");

                    b.Property<string>("Unite")
                        .HasColumnType("text");

                    b.Property<string>("adresse")
                        .HasColumnType("text");

                    b.HasIndex("IdAdministration");

                    b.HasIndex("IdDepartement");

                    b.HasDiscriminator().HasValue("ApplicationUser");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Global.Departement", b =>
                {
                    b.HasOne("WebApplicationPlateforme.Model.Global.Administration", "Administration")
                        .WithMany()
                        .HasForeignKey("IdAdministration")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Taches.Commentaire", b =>
                {
                    b.HasOne("WebApplicationPlateforme.Model.Taches.Tache", "Tache")
                        .WithMany()
                        .HasForeignKey("IdTache")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApplicationPlateforme.Model.User.ApplicationUser", "ApplicationUser")
                        .WithMany()
                        .HasForeignKey("IdUser");
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Taches.Evaluation", b =>
                {
                    b.HasOne("WebApplicationPlateforme.Model.Taches.Tache", "Tache")
                        .WithMany()
                        .HasForeignKey("IdTache")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApplicationPlateforme.Model.User.ApplicationUser", "ApplicationUser")
                        .WithMany()
                        .HasForeignKey("IdUserEvaluating");
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Taches.PiecesJointes", b =>
                {
                    b.HasOne("WebApplicationPlateforme.Model.Taches.Tache", "Tache")
                        .WithMany()
                        .HasForeignKey("IdTache")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.Taches.Tache", b =>
                {
                    b.HasOne("WebApplicationPlateforme.Model.User.ApplicationUser", "ApplicationUser")
                        .WithMany()
                        .HasForeignKey("IdUserCreator");
                });

            modelBuilder.Entity("WebApplicationPlateforme.Model.User.ApplicationUser", b =>
                {
                    b.HasOne("WebApplicationPlateforme.Model.Global.Administration", "Administration")
                        .WithMany()
                        .HasForeignKey("IdAdministration");

                    b.HasOne("WebApplicationPlateforme.Model.Global.Departement", "Departement")
                        .WithMany()
                        .HasForeignKey("IdDepartement");
                });
#pragma warning restore 612, 618
        }
    }
}
