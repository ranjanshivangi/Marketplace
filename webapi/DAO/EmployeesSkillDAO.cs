namespace MarketplaceAPI.DAO
{
    public class EmployeesSkillDAO
    {
        public string EmployeeId { get; set; } = null!;

        public int SkillId { get; set; }

        public DateTime LastUsed { get; set; }

        public int ExperienceInMonths { get; set; }

        public string Proficience { get; set; } = null!;

        public byte SkillSource { get; set; }

        public int SkillSourceId { get; set; }
    }
}
