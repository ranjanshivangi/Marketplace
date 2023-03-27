using System;
using System.Collections.Generic;

namespace MarketplaceAPI.Models;

public partial class Skill
{
    public int SkillId { get; set; }

    public string SkillName { get; set; } = null!;

    public byte? SkillType { get; set; }

    public virtual EmployeesSkill? EmployeesSkill { get; set; }
}
