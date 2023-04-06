using System;
using System.Collections.Generic;

namespace MarketplaceAPI.Models;

public partial class PastEmployment
{
    public string EmployeeId { get; set; } = null!;

    public int XemployeerId { get; set; }

    public string XstartDesignation { get; set; } = null!;

    public DateTime StartDate { get; set; }

    public string XlastDesignation { get; set; } = null!;

    public DateTime EndDate { get; set; }

    public string Notes { get; set; } = null!;

    public string? XemployeerCompanyName { get; set; }

    public virtual ICollection<Project> Projects { get; } = new List<Project>();
}
