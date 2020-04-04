using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationPlateforme.Model.Taches
{
    public class Commentaire
    {

        public int Id { get; set; }
        public string TextCommentaire { get; set; }
        public DateTime dateTime { get; set; }
        public string NomUser { get; set; }
    }
}
