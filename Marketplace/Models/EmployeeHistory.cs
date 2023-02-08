namespace Marketplace.Models
{
    public class EmployeeHistory
    {
        public string Company { get; set; }
        public string IsCurrent { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Role { get; set; }
        public string Project { get; set; }
        public string Description { get; set; }
       
        public string EmployeeId { get; set; }
    }
}
