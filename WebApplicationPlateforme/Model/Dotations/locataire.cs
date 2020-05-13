using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationPlateforme.Model.Dotations
{
    public class locataire
    {
        public int Id { get; set; }
        public string numcontrat{ get; set; }
        public string prixlocationmois { get; set; }
        public string datedebutcontrat{ get; set; }
        public string delaicontrat{ get; set; }
        public string moisdelocation{ get; set; }
        public string nom{ get; set; }
        public string cin{ get; set; }
        public string profession{ get; set; }
        public string adresse { get; set; }
        public string nationnalite{ get; set; }
        public string tel{ get; set; }

        public int attribut1 { get; set; }
        public string attribut2 { get; set; }
        public string attribut3 { get; set; }
        public string attribue4 { get; set; }

        public string dotationName { get; set; }
        public string uniteName { get; set; }


        [ForeignKey("dotation")]
        public int idDotation { get; set; }

        [ForeignKey("unite")]
        public int idunite { get; set; }

        public virtual dotation dotation { get; set; }
        public virtual unite unite { get; set; }
    }
}
