USE [MarketplaceTest]
GO

/****** Object:  Table [Assignments].[Shortlists]    Script Date: 20-03-2023 18:21:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Assignments].[Shortlists](
	[ManagerEmployeeId] [nvarchar](15) NOT NULL,
	[ShortlistedEmployeeId] [nvarchar](15) NOT NULL,
	[ShortlistsId] [int] IDENTITY(1,1) NOT NULL,
	[RRnumber] [nvarchar](20) NOT NULL
) ON [PRIMARY]
GO


