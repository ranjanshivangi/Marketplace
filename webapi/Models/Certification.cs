using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Marketplace.Models
{
    public class Certification
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CertificationID { get; set; }
        public string CertificationsName { get; set; }
       
        [JsonIgnore]
        public ICollection<EmployeeCertification> EmployeeCertification { get; set; }
    }
}
