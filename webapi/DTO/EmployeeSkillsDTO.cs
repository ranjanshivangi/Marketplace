namespace Marketplace.DTO
{
    public class EmployeeSkillsDTO
    {
        public int SkillId { get; set; }
        public string SkillName { get; set; }
      
        public DateTime LastUsed { get; set; }
        public int ExperienceInMonths { get; set; }
        public string Proficiency { get; set; }
    }
}
