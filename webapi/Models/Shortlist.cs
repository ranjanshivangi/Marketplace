using System;
using System.Collections.Generic;

namespace MarketplaceAPI.Models;

public partial class Shortlist
{
    public string ManagerEmployeeId { get; set; } = null!;

    public string ShortlistedEmployeeId { get; set; } = null!;

    public int ShortlistsId { get; set; }

    public string Rrnumber { get; set; } = null!;

    public virtual Employee ManagerEmployee { get; set; } = null!;

    public virtual Employee ShortlistedEmployee { get; set; } = null!;
}
