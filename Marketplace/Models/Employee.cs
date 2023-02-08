using System.ComponentModel.DataAnnotations;

namespace Marketplace.Models
{
    public class Employee
    {
        [Key]
        public string EmployeeId { get; set; }
        public string Designation { get; set; }
        public string CurrentProject { get; set; }
        public string CurrentManager { get; set; }
        public string Status { get; set; }
        public string EmailId  { get; set; }
        public string PhoneNumber { get; set; }
        public string Location { get; set; }
        public string About { get; set; }
        public string ProfilePicture { get; set; }
        public ICollection<EmployeeSkills> EmployeeSkills { get; set; }

    }
}
