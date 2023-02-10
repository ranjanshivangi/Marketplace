using System.Text.Json.Serialization;

namespace Marketplace.Models
{
    public class EmployeeCourses
    {
        public int CourseID { get; set; }
        public string EmployeeId { get; set; }
        public DateTime CourseCompletionDate { get; set; }
        public string CourseFrom { get; set; }
        public string CourseType { get; set; }
        [JsonIgnore]
        public virtual Employee Employee { get; set; }

        [JsonIgnore]
        public Courses Courses{ get; set; }
    }
}
