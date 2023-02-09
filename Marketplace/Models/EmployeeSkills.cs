using System.Text.Json.Serialization;
namespace Marketplace.Models
{
    public class EmployeeSkills
    {
        public string EmployeeId { get; set; }

        [JsonIgnore]
        public virtual Employee Employee { get; set; }
        public string skillId { get; set; }
        [JsonIgnore]
        public  Skills Skills { get; set; }
    }
}
