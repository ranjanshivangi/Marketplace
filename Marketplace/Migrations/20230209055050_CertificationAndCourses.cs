using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Marketplace.Migrations
{
    /// <inheritdoc />
    public partial class CertificationAndCourses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Certifications",
                columns: table => new
                {
                    CertificationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CertificationsName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CertificationsCompletionDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CertificationsFrom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CertificationsType = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Certifications", x => x.CertificationID);
                });

            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    CourseID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseCompletionDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CourseFrom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseType = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.CourseID);
                });

            

            migrationBuilder.CreateTable(
                name: "EmployeeCertifications",
                columns: table => new
                {
                    EmployeeId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CertificationID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeCertifications", x => new { x.CertificationID, x.EmployeeId });
                    table.ForeignKey(
                        name: "FK_EmployeeCertifications_Certifications_CertificationID",
                        column: x => x.CertificationID,
                        principalTable: "Certifications",
                        principalColumn: "CertificationID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EmployeeCertifications_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "EmployeeId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeCourses",
                columns: table => new
                {
                    CourseID = table.Column<int>(type: "int", nullable: false),
                    EmployeeId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeCourses", x => new { x.CourseID, x.EmployeeId });
                    table.ForeignKey(
                        name: "FK_EmployeeCourses_Courses_CourseID",
                        column: x => x.CourseID,
                        principalTable: "Courses",
                        principalColumn: "CourseID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EmployeeCourses_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "EmployeeId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EmployementHistories",
                columns: table => new
                {
                    Company = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Project = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    IsCurrent = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmployeeId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployementHistories", x => new { x.Company, x.Role, x.Project });
                    table.ForeignKey(
                        name: "FK_EmployementHistories_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "EmployeeId",
                        onDelete: ReferentialAction.Cascade);
                });

 

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeCertifications_EmployeeId",
                table: "EmployeeCertifications",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeCourses_EmployeeId",
                table: "EmployeeCourses",
                column: "EmployeeId");


            migrationBuilder.CreateIndex(
                name: "IX_EmployementHistories_EmployeeId",
                table: "EmployementHistories",
                column: "EmployeeId");

          
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmployeeCertifications");

            migrationBuilder.DropTable(
                name: "EmployeeCourses");

            migrationBuilder.DropTable(
                name: "EmployeeSkills");

            migrationBuilder.DropTable(
                name: "EmployementHistories");

            migrationBuilder.DropTable(
                name: "Rr");

            migrationBuilder.DropTable(
                name: "Certifications");

            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "Skills");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Job");
        }
    }
}
