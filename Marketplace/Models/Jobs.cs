using System.ComponentModel.DataAnnotations;

namespace Marketplace.Models
{
    public class Jobs
    {
        [Key]
        public int JDID { get; set; }
        public string JobTitle { get; set; }
        public string About { get; set; }
        public string JobSummary { get; set; }
        public string RolesandResponsibilities { get; set; }
        public string MustHaveSkills { get; set; }
        public string NicetohaveSkills { get; set; }
        public int Experience { get; set; }
    }
}
