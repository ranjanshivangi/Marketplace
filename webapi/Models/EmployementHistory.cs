using System.Text.Json.Serialization;

namespace Marketplace.Models
{
    public class EmployementHistory
    {
        public string CompanyName { get; set; }
        public Boolean IsCurrent { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Role { get; set; }
        public string ProjectName { get; set; }
        public string Description { get; set; }
       
        public string EmployeeId { get; set; }

        [JsonIgnore]
        public Employee Employee { get; set; }
    }
}
