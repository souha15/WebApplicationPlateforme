using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApplicationPlateforme.Model.Dotations;
using WebApplicationPlateforme.Model.Global;
using WebApplicationPlateforme.Model.Taches;
using WebApplicationPlateforme.Model.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationPlateforme.Model.AdministrativeCommunication;

namespace WebApplicationPlateforme.Data
{
    public class FinanceContext : IdentityDbContext
    {
        public FinanceContext(DbContextOptions<FinanceContext> options) : base(options) { }
        public DbSet<dotation> dotations { get; set; }
        public DbSet<unite> unites { get; set; }
        public DbSet<locataire> locataires { get; set; }
        public DbSet<revenus> revenus { get; set; }
        public DbSet<piecesjointesLocataire> piecesjointesLocataires { get; set; }
        public DbSet<piecesjointesRevenus> PiecesjointesRevenus { get; set; }
        public DbSet<depotRevenus> depotRevenus { get; set; }
        public DbSet<servicesRevenus> servicesRevenus { get; set; }
        public DbSet<typeDotation> typeDotations { get; set; }
        public DbSet<typeUnite> typeUnites { get; set; }
        public DbSet<etatDotation> etatDotations { get; set; }
        public DbSet<etatUnite> etatUnites { get; set; }
        public DbSet<agenceImmob> agenceImmobs { get; set; }
        public DbSet<locationUnite> locationUnites { get; set; }

        public DbSet<Privileges> privileges { get; set; }
        public DbSet<contratLocation> contratLocations { get; set; }
        public DbSet<LesServices> lesServices { get; set; }
        public DbSet<Proprietaire> proprietaires { get; set; }
        public DbSet<Organisme> organismes { get; set; }
        public DbSet<Liaison> liaisons { get; set; }

        public DbSet<Transaction> transactions { get; set; }
        public DbSet<PiecesJointesAffected> piecesJointesAffecteds { get; set; }
        public DbSet<PiecesJointesTr> piecesJointesTrs { get; set; }
        public DbSet<TrAffectation> trAffectations { get; set; }
        public DbSet<Receptioncs> receptioncs { get; set; }

    }
}
