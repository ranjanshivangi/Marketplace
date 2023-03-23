USE [MarketplaceTest]
GO

/****** Object:  Table [Master].[Skills]    Script Date: 20-03-2023 18:44:45 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Master].[Skills](
	[SkillId] [int] NOT NULL,
	[SkillName] [nvarchar](50) NOT NULL,
	[SkillType] [tinyint] NULL
) ON [PRIMARY]
GO


