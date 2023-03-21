USE [MarketplaceTest]
GO

/****** Object:  Table [Master].[EmidsCourses]    Script Date: 20-03-2023 18:42:38 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Master].[EmidsCourses](
	[CourseId] [int] NOT NULL,
	[CourseName] [nvarchar](50) NULL,
	[CoursePlatform] [nvarchar](50) NULL,
	[CourseType] [tinyint] NOT NULL
) ON [PRIMARY]
GO


