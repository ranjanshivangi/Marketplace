using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Marketplace.Models;

public partial class Job
{
    [Key]
    public int Jdid { get; set; }

    public string JobTitle { get; set; } = null!;

    public string About { get; set; } = null!;

    public string JobSummary { get; set; } = null!;

    public string RolesandResponsibilities { get; set; } = null!;

    public string MustHaveSkills { get; set; } = null!;

    public string? NicetohaveSkills { get; set; }

    public int Experience { get; set; }
    
    public virtual ICollection<Rr> Rrs { get; } = new List<Rr>();
    //public System.Text.Json.Serialization.ReferenceHandler? ReferenceHandler { get; set; }
}
