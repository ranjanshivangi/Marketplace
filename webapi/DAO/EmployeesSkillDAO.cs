namespace MarketplaceAPI.DAO
{
    public class EmployeesSkillDAO
    {
    
        public int SkillId { get; set; }

        public DateTime? LastUsed { get; set; }

        public int ExperienceInMonths { get; set; }

        public string Proficience { get; set; } 

        public byte SkillSource { get; set; }

        public int SkillSourceId { get; set; }
        
    }
}
