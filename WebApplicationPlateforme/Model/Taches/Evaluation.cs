using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationPlateforme.Model.Taches
{
    public class Evaluation
    {

        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime dateTime { get; set; }
        public string Rating { get; set; }
    }
}
