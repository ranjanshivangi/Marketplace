using System.ComponentModel.DataAnnotations;

namespace Marketplace.Models
{
    public class Skills
    {
        [Key]
        public string skillId { get; set; }
        public string SkillName { get; set; }
        public string Proficiency { get; set; }

        public string LastUsed { get; set; }
        public string Experience { get; set; }
        public ICollection<EmployeeSkills> EmployeeSkills { get; set; }
    }
}
