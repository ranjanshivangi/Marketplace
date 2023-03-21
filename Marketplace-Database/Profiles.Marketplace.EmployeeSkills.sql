USE [MarketplaceTest]
GO

/****** Object:  Table [Profiles].[EmployeesSkills]    Script Date: 20-03-2023 18:52:13 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Profiles].[EmployeesSkills](
	[EmployeeId] [nvarchar](12) NOT NULL,
	[SkillId] [int] NOT NULL,
	[LastUsed] [date] NOT NULL,
	[ExperienceInMonths] [int] NOT NULL,
	[Proficience] [nvarchar](50) NOT NULL,
	[SkillSource] [tinyint] NOT NULL,
	[SkillSourceId] [int] NOT NULL
) ON [PRIMARY]
GO


