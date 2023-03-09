using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Marketplace.Models;

public partial class Rr
{
    [Key]
    public string Rrnumber { get; set; } = null!;

    public byte Status { get; set; }

    public string Proficiency { get; set; } = null!;

    public string AccountName { get; set; } = null!;

    public string ProjectName { get; set; } = null!;

    public string Bu { get; set; } = null!;

    public string Designation { get; set; } = null!;

    public DateTime StartDate { get; set; }

    public string WorkLocation { get; set; } = null!;

    public bool ClientInterview { get; set; }

    public int MinimumExp { get; set; }

    public string TaggedEmployee { get; set; } = null!;

    public string ClosingRemarks { get; set; } = null!;

    public int Jdid { get; set; }
    [JsonIgnore]
    public virtual Job Jd { get; set; } = null!;
  
}
