//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ReviewsApp.DataAccess.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class Posts
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Posts()
        {
            this.Criticas = new HashSet<Criticas>();
        }
    
        public int RowId { get; set; }
        public string Titulo { get; set; }
        public string Resumen { get; set; }
        public byte[] Imagen { get; set; }
        public string Autor { get; set; }
        public Nullable<System.DateTime> FechaPublicacion { get; set; }
        public string UrlVideo { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Criticas> Criticas { get; set; }
    }
}
