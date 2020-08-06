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
using WebApplicationPlateforme.Model.AdministrativeCommunication.Interne;
using WebApplicationPlateforme.Model.AdministrativeCommunication.Emise;
using WebApplicationPlateforme.Model.AdministrativeCommunication.Decision;
using WebApplicationPlateforme.Model.Evenements;
using WebApplicationPlateforme.Model.Ressource_Humaines;

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
        public DbSet<LiaisonI> liaisonsI { get; set; }
        //public DbSet<LiaisonD> liaisonsD { get; set; }
        public DbSet<LiaisonE> liaisonsE { get; set; }

        public DbSet<Transaction> transactions { get; set; }
        //public DbSet<Decision> decisions { get; set; }
        public DbSet<TransactionI> transactionsI { get; set; }
        public DbSet<TransactionEmise> transactionsEmise { get; set; }
       
        public DbSet<PiecesJointesAffected> piecesJointesAffecteds { get; set; }
        
        public DbSet<PiecesJointesTr> piecesJointesTrs { get; set; }
        //public DbSet<PiecesJointesD> piecesJointesDs { get; set; }
        public DbSet<PiecesJointesI> piecesJointesIs { get; set; }
        public DbSet<PiecesJointeE> piecesJointeEs { get; set; }
        
        public DbSet<TrAffectation> trAffectations { get; set; }
        public DbSet<TeAffectation> TeAffectations { get; set; }
        public DbSet<TiAffectation> tiAffectations { get; set; }
       // public DbSet<TdAffectation> tdAffectations { get; set; }
        
        public DbSet<Receptioncs> receptioncs { get; set; }
       // public DbSet<ReceptionD> receptionDs { get; set; }
        public DbSet<ReceptionE> receptionEs { get; set; }
        public DbSet<ReceptionI> receptionIs { get; set; }


        //Event
        public DbSet<Evenement> evenements { get; set; }
        public DbSet<Participation> participations { get; set; }
        public DbSet<DepensesEv> depensesEvs { get; set; }
        public DbSet<Beneficiaire> beneficiaires { get; set; }
        public DbSet<TacheEv> tacheEvs { get; set; }
        public DbSet<OutilsEv> outilsEvs { get; set; }
        public DbSet<MediasEv> mediasEvs { get; set; }
        public DbSet<ClasseEv> classeEvs { get; set; }
        public DbSet<PiecesJointesEvents> piecesJointesEvents { get; set; }
        public DbSet<ActivityEv> activityEvs { get; set; }


        //Ressource Humaine 

        public DbSet<Conge> conges { get; set; }
        public DbSet<Recrutement> recrutements { get; set; }
        public DbSet<PiecesJointesRc> piecesJointesRcs { get; set; }
        public DbSet<Permission> permissions { get; set; }
        public DbSet<editingUser> editingUsers { get; set; }
        public DbSet<Equipement> equipements { get; set; }
        public DbSet<typeEquipement> typeEquipements { get; set; }
        public DbSet<nomEquipement> nomEquipements { get; set; }

    }
}
