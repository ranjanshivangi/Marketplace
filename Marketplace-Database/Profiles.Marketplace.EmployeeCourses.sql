USE [MarketplaceTest]
GO

/****** Object:  Table [Profiles].[EmployeeCourses]    Script Date: 20-03-2023 18:51:39 ******/
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


