using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

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

    [JsonIgnore]
    public virtual EmidsCourse EmidsCourse { get; set; } = null!;

    [JsonIgnore]
    public virtual Employee Employee { get; set; } = null!;
}
