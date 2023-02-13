USE [Marketplace]
GO

/****** Object:  Table [dbo].[EmployeeCourses]    Script Date: 10-02-2023 20:49:24 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[EmployeeCourses](
	[CourseID] [int] NOT NULL,
	[EmployeeId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_EmployeeCourses] PRIMARY KEY CLUSTERED 
(
	[CourseID] ASC,
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[EmployeeCourses]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeCourses_Courses_CourseID] FOREIGN KEY([CourseID])
REFERENCES [dbo].[Courses] ([CourseID])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[EmployeeCourses] CHECK CONSTRAINT [FK_EmployeeCourses_Courses_CourseID]
GO

ALTER TABLE [dbo].[EmployeeCourses]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeCourses_Employees_EmployeeId] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employees] ([EmployeeId])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[EmployeeCourses] CHECK CONSTRAINT [FK_EmployeeCourses_Employees_EmployeeId]
GO


