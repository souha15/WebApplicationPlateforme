using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationPlateforme.Model.Dotations
{
    public class revenus
    {
        public int Id { get; set; }
        public string prixlocation{ get; set; }
        public string prixpaye{ get; set; }
        public string serviceRevenus{ get; set; }
        public string prixService{ get; set; }
        public string detailDepot{ get; set; }
        public string dateRevenus{ get; set; }
        public string deposant{ get; set; }
        public string description{ get; set; }

        public int attribut1 { get; set; }
        public string attribut2 { get; set; }
        public string attribut3 { get; set; }
        public string attribue4 { get; set; }

        public string locataireName { get; set; }


        [ForeignKey("locataire")]
        public int idlocataire { get; set; }





        public virtual locataire locataire { get; set; }
    }
}
