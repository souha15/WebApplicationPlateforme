﻿

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationPlateforme.Model.Global;
using WebApplicationPlateforme.Model.Taches;
using WebApplicationPlateforme.Model.User;

namespace WebApplicationPlateforme.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
     public ApplicationDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Tache> tache { get; set; }
        public DbSet<Commentaire> commentaires { get; set; }
        public DbSet<ApplicationUser> applicationUsers { get; set; }
        public DbSet<Evaluation> evaluations { get; set; }
        public DbSet<PiecesJointes> piecesJointes { get; set; }
        public DbSet<Departement> departements { get; set; }
        public DbSet<Administration> administrations { get; set; }
        public DbSet<Privileges> privileges { get; set; }
        public string WebRootPath { get; internal set; }
    }
}
