USE [MarketplaceTest]
GO

/****** Object:  Table [Assignments].[ShortlistedSkills]    Script Date: 20-03-2023 18:20:11 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Assignments].[ShortlistedSkills](
	[ShortlistsId] [int] NOT NULL,
	[ShortlistedEmployeeId] [nvarchar](15) NOT NULL,
	[ShortlistedSkillId] [int] NOT NULL
) ON [PRIMARY]
GO


