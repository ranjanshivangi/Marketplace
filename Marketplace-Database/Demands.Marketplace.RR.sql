USE [MarketplaceTest]
GO

/****** Object:  Table [Demands].[RR]    Script Date: 20-03-2023 18:41:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Demands].[RR](
	[RRNumber] [nvarchar](15) NOT NULL,
	[Status] [tinyint] NOT NULL,
	[Proficiency] [nvarchar](25) NOT NULL,
	[AccountName] [nvarchar](25) NOT NULL,
	[ProjectName] [nvarchar](50) NOT NULL,
	[BU] [varchar](20) NOT NULL,
	[Designation] [nvarchar](50) NOT NULL,
	[StartDate] [date] NOT NULL,
	[WorkLocation] [nvarchar](20) NOT NULL,
	[ClientInterview] [bit] NOT NULL,
	[MinimumExp] [int] NOT NULL,
	[TaggedEmployee] [nvarchar](15) NOT NULL,
	[ClosingRemarks] [nvarchar](50) NOT NULL,
	[JDID] [int] NOT NULL
) ON [PRIMARY]
GO


