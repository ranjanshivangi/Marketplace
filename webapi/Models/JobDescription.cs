using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace MarketplaceAPI.Models;

public partial class JobDescription
{
    public int Jdid { get; set; }

    public string JobTitle { get; set; } = null!;

    public string About { get; set; } = null!;

    public string JobSummary { get; set; } = null!;

    public string RolesandResponsibilities { get; set; } = null!;

    public string MustHaveSkills { get; set; } = null!;

    public string? NiceToHaveSkills { get; set; }

    public int ExperienceInMonths { get; set; }

    public string? PrimarySkill { get; set; }

    public string? SecondarySkill { get; set; }
   
    public virtual ICollection<Rr> Rrs { get; } = new List<Rr>();
}
