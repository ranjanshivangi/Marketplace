using System;
using System.Collections.Generic;

namespace MarketplaceAPI.Models;

public partial class EmployeesSkill
{
    public string EmployeeId { get; set; } = null!;

    public int SkillId { get; set; }

    public DateTime LastUsed { get; set; }

    public int ExperienceInMonths { get; set; }

    public string Proficience { get; set; } = null!;

    public byte SkillSource { get; set; }

    public int SkillSourceId { get; set; }

    public virtual Employee Employee { get; set; } = null!;

    public virtual Skill Skill { get; set; } = null!;
}
