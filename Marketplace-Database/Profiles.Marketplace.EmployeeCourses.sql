USE [Marketplace]
GO

/****** Object:  Table [Profiles].[EmployeeCourses]    Script Date: 23-03-2023 17:23:35 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Profiles].[EmployeeCourses](
	[EmployeeId] [nvarchar](12) NOT NULL,
	[IsEmidsCourse] [tinyint] NOT NULL,
	[EmidsCourseId] [int] NOT NULL,
	[CourseCompletionDate] [date] NOT NULL,
	[NonEmidsCourseName] [nvarchar](100) NULL,
	[NonEmidsCoursePlatform] [nvarchar](50) NOT NULL,
	[NonEmidsCourseType] [tinyint] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [Profiles].[EmployeeCourses]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeCourses_EmidsCourses] FOREIGN KEY([EmployeeId])
REFERENCES [Master].[Employees] ([EmployeeId])
GO

ALTER TABLE [Profiles].[EmployeeCourses] CHECK CONSTRAINT [FK_EmployeeCourses_EmidsCourses]
GO

ALTER TABLE [Profiles].[EmployeeCourses]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeCourses_EmidsCourses1] FOREIGN KEY([EmidsCourseId])
REFERENCES [Master].[EmidsCourses] ([CourseId])
GO

ALTER TABLE [Profiles].[EmployeeCourses] CHECK CONSTRAINT [FK_EmployeeCourses_EmidsCourses1]
GO


