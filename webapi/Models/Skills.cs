using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Marketplace.Models
{
    public class Skills
    {
        [Key]
        public string skillId { get; set; }
        public string SkillName { get; set; }
                
        [JsonIgnore]
        public ICollection<EmployeeSkills> EmployeeSkills { get; set; }
    }
}
