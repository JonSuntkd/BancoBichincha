using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Crud_APIREST.Models
{
    [MetadataType(typeof(USUARIO.MetaData))]
    public partial class USUARIO
    {
        sealed class MetaData
        {
            [Required]
            public string Nombres;
        }
    }
}