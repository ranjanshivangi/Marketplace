USE [Marketplace]
GO

/****** Object:  Table [Master].[EmidsCourses]    Script Date: 23-03-2023 17:21:10 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Master].[EmidsCourses](
	[CourseId] [int] NOT NULL,
	[CourseName] [nvarchar](50) NULL,
	[CoursePlatform] [nvarchar](50) NULL,
	[CourseType] [tinyint] NOT NULL,
 CONSTRAINT [PK_EmidsCourses] PRIMARY KEY CLUSTERED 
(
	[CourseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


