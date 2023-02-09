USE [Marketplace]
GO

/****** Object:  Table [dbo].[Skills]    Script Date: 09-02-2023 10:26:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Skills](
	[skillId] [nvarchar](450) NOT NULL,
	[SkillName] [nvarchar](max) NOT NULL,
	[Proficiency] [nvarchar](max) NOT NULL,
	[LastUsed] [nvarchar](max) NOT NULL,
	[Experience] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Skills] PRIMARY KEY CLUSTERED 
(
	[skillId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


