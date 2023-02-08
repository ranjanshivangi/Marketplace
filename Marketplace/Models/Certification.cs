using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Marketplace.Models
{
    public class Certification
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CertificationID { get; set; }
        public string CertificationsName { get; set; }
        public DateTime CertificationsCompletionDate { get; set; }
        public string CertificationsFrom { get; set; }
        public string CertificationsType { get; set; }
    }
}
