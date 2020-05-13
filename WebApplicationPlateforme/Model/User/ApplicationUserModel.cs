using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationPlateforme.Model.Global;

namespace WebApplicationPlateforme.Model.User
{
    public class ApplicationUserModel
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public string RegistreCivil { get; set; }
        public string FullNameEnglish { get; set; }
        public string FullName { get; set; }
        public string adresse { get; set; }
        public string PhoneNumber { get; set; }
        public string Tel { get; set; }
        public string Statut { get; set; }
        public string Nationalite { get; set; }
        public string Religion { get; set; }
        public string Sexe { get; set; }
        public string DateNaissance { get; set; }
        public string LieuNaissance { get; set; }
        public string Passeport { get; set; }
        public string TypeSang { get; set; }
        public string Num { get; set; }
        public string Emploi { get; set; }
        public string Rang { get; set; }
        public string TypeEmploi { get; set; }
        public string NomAdministration { get; set; }
        public string NomDepartement { get; set; }
        public string Unite { get; set; }
        public string Qualification { get; set; }
        public string TypeQualification { get; set; }
        public string FaculteEcole { get; set; }
        public string DateQualification { get; set; }
        public string Specialite { get; set; }
        public string Paysetude { get; set; }
        public string Mention { get; set; }
        public string Classement { get; set; }
        public string Degre { get; set; }
        public string Salaire { get; set; }
        public string Indemnite { get; set; }
        public string AutreIndemnite { get; set; }
        public string HeureArrive { get; set; }
        public string HeureDepart { get; set; }
        public string Photo { get; set; }

        // public string Role { get; set; }
        public string[] Roles { get; set; }

        [ForeignKey("Administration")]
        [JsonProperty(PropertyName = "IdAdministration")]
        public int? IdAdministration { get; set; }

        [ForeignKey("Departement")]
        public int? IdDepartement { get; set; }

        public virtual Administration Administration { get; set; }

        public virtual Departement Departement { get; set; }

      
    }
}
