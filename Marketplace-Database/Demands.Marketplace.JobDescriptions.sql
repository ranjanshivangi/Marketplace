USE [MarketplaceTest]
GO

/****** Object:  Table [Demands].[JobDescriptions]    Script Date: 20-03-2023 18:40:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Demands].[JobDescriptions](
	[JDID] [int] IDENTITY(1,1) NOT NULL,
	[JobTitle] [nvarchar](50) NOT NULL,
	[About] [nvarchar](100) NOT NULL,
	[JobSummary] [nvarchar](1000) NOT NULL,
	[RolesandResponsibilities] [nvarchar](500) NOT NULL,
	[MustHaveSkills] [nvarchar](500) NOT NULL,
	[NiceToHaveSkills] [nvarchar](500) NULL,
	[ExperienceInMonths] [int] NOT NULL,
	[PrimarySkill] [nvarchar](500) NULL,
	[SecondarySkill] [nvarchar](500) NULL
) ON [PRIMARY]
GO


