using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Marketplace.Models
{
    public class Courses
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CourseID { get; set; }
        public string CourseName { get; set; }
        
        [JsonIgnore]
        public ICollection<EmployeeCourses> EmployeeCourses { get; set; }
    }
}
