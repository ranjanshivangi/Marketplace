using System;
using System.Collections.Generic;

namespace MarketplaceAPI.Models;

public partial class Employee
{
    public string EmployeeId { get; set; } = null!;

    public string EmployeeName { get; set; } = null!;

    public string Designation { get; set; } = null!;

    public string CurrentProject { get; set; } = null!;

    public string CurrentManager { get; set; } = null!;

    public byte Status { get; set; }

    public string EmailId { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public string Location { get; set; } = null!;

    public string About { get; set; } = null!;

    public virtual ICollection<EmployeesSkill> EmployeesSkills { get; } = new List<EmployeesSkill>();

    public virtual ICollection<PastEmployment> PastEmployments { get; } = new List<PastEmployment>();

    public virtual ICollection<Shortlist> ShortlistManagerEmployees { get; } = new List<Shortlist>();

    public virtual ICollection<Shortlist> ShortlistShortlistedEmployees { get; } = new List<Shortlist>();
}
