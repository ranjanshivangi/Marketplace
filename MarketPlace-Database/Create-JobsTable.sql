USE [Marketplace]
GO

/****** Object:  Table [dbo].[Jobs]    Script Date: 19-01-2023 17:00:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Jobs](
	[JDID] [int] NOT NULL,
	[JobTitle] [varchar](50) NOT NULL,
	[About] [text] NOT NULL,
	[JobSummary] [text] NOT NULL,
	[RolesandResponsibilities] [text] NOT NULL,
	[MustHaveSkills] [text] NOT NULL,
	[NicetohaveSkills] [text] NULL,
	[Experience] [int] NOT NULL,
 CONSTRAINT [PK_Jobs] PRIMARY KEY CLUSTERED 
(
	[JDID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


