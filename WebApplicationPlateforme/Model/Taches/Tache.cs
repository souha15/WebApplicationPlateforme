using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationPlateforme.Model.Taches
{
    public class Tache
    {

        public int Id { get; set; }
       
        public string date { get; set; }
        public string Priorite { get; set; }
        public string TacheNom { get; set; }
        public string Description { get; set; }
        public string Delai { get; set; }
        public string Atous { get; set; }
        public string Createur { get; set; }
        public string Etat { get; set; }
        public string type { get; set; }
        public string SousProjet { get; set; }
        public string Attribut1 { get; set; }
        public string Attribut2 { get; set; }
        public string Attribut3 { get; set; }
        public int Attribut4 { get; set; }
    }
}
