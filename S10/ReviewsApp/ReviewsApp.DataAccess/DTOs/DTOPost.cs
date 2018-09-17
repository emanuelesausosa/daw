using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReviewsApp.DataAccess.DTOs
{
    public class DTOPost
    {        
        public string Titulo { get; set; }
        public string Resumen { get; set; }
        public byte[] Imagen { get; set; }
        public string Autor { get; set; }
        public string UrlVideo { get; set; }
        public DateTime FechaPublicacion { get; set; }
    }
}
