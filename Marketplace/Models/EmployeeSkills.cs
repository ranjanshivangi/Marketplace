using System.Text.Json.Serialization;
namespace Marketplace.Models
{
    public class EmployeeSkills
    {
        public string EmployeeId { get; set; }
        public string LastUsed { get; set; }
        public string Experience { get; set; }
        public string Proficiency { get; set; }
        [JsonIgnore]
        public virtual Employee Employee { get; set; }
        public string skillId { get; set; }
        [JsonIgnore]
        public  Skills Skills { get; set; }
    }
}
