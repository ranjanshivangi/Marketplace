using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace MarketplaceAPI.Models;

public partial class Project
{
    public string EmployeeId { get; set; } = null!;

    public byte ProjectType { get; set; }

    public byte IsXemployeerProject { get; set; }

    public string ProjectName { get; set; } = null!;

    public string Role { get; set; } = null!;

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public string Notes { get; set; } = null!;

    public int XemployeerId { get; set; }
    [JsonIgnore]
    public virtual PastEmployment PastEmployment { get; set; } = null!;
}
