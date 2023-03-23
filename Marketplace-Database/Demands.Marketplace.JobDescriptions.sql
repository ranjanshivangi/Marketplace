USE [Marketplace]
GO

/****** Object:  Table [Demands].[JobDescriptions]    Script Date: 23-03-2023 17:20:22 ******/
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
	[SecondarySkill] [nvarchar](500) NULL,
 CONSTRAINT [PK_JobDescriptions] PRIMARY KEY CLUSTERED 
(
	[JDID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


