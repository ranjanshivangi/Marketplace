using System;
using System.Collections.Generic;

namespace MarketplaceAPI.Models;

public partial class ShortlistedSkill
{
    public int ShortlistsId { get; set; }

    public string ShortlistedEmployeeId { get; set; } = null!;

    public int ShortlistedSkillId { get; set; }

    public virtual EmployeesSkill ShortlistedSkillNavigation { get; set; } = null!;

    public virtual Shortlist Shortlists { get; set; } = null!;
}
