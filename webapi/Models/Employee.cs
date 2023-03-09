using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace Marketplace.Models
{
    public class Employee
    {
        [Key]
        public string EmployeeId { get; set; }
        public string Name { get; set; }
        public string Designation { get; set; }
        public string CurrentProject { get; set; }
        public string CurrentManager { get; set; }
        public string Status { get; set; }
        public string EmailId  { get; set; }
        public long PhoneNumber { get; set; }
        public string Location { get; set; }
        public string About { get; set; }
        public string ProfilePicture { get; set; }
        [JsonIgnore]
        public ICollection<EmployeeSkills> EmployeeSkills { get; set; }
        [JsonIgnore]
        public ICollection<EmployeeCertification> EmployeeCertification { get; set; }
        [JsonIgnore]
        public ICollection<EmployeeCourses> EmployeeCourses { get; set; }
        [JsonIgnore]
        public ICollection<EmployementHistory> EmployeeHistory { get; set; }
    }
}
