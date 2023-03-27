using System;
using System.Collections.Generic;

namespace MarketplaceAPI.Models;

public partial class EmployeeCourse
{
    public string EmployeeId { get; set; } = null!;

    public byte IsEmidsCourse { get; set; }

    public int EmidsCourseId { get; set; }

    public DateTime CourseCompletionDate { get; set; }

    public string? NonEmidsCourseName { get; set; }

    public string NonEmidsCoursePlatform { get; set; } = null!;

    public byte NonEmidsCourseType { get; set; }

    public virtual EmidsCourse EmidsCourse { get; set; } = null!;

    public virtual Employee Employee { get; set; } = null!;
}
