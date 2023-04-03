using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MarketplaceAPI.Models;

public partial class ShortlistedSkill
{
    public int Id { get; set; }

    public int ShortlistsId { get; set; }
    
    public int EmployeeSkillId { get; set; }

    public virtual EmployeesSkill EmployeesSkill { get; set; } = null!;

    public virtual Shortlist Shortlists { get; set; } = null!;
}
