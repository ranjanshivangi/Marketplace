using System.Text.Json.Serialization;

namespace Marketplace.Models
{
    public class EmployeeCertification
    {
        public string EmployeeId { get; set; }
        public int CertificationID { get; set; }

        [JsonIgnore]
        public virtual Employee Employee { get; set; }
        
        [JsonIgnore]
        public Certification Certification { get; set; }
    }
}
