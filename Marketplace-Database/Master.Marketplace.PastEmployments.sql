USE [MarketplaceTest]
GO

/****** Object:  Table [Master].[PastEmployments]    Script Date: 20-03-2023 18:44:09 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Master].[PastEmployments](
	[EmployeeId] [nvarchar](12) NOT NULL,
	[XEmployeerID] [int] NOT NULL,
	[XEmployeerCompanyName] [nvarchar](50) NOT NULL,
	[XStartDesignation] [nvarchar](50) NOT NULL,
	[StartDate] [date] NOT NULL,
	[XLastDesignation] [nvarchar](50) NOT NULL,
	[EndDate] [date] NOT NULL,
	[Notes] [nvarchar](1500) NOT NULL
) ON [PRIMARY]
GO


